<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function clean(mixed $value, int $maxLength = 500): string
{
    $text = trim(is_string($value) ? $value : '');
    return substr($text, 0, $maxLength);
}

function escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function tableRow(string $label, string $value): string
{
    $display = $value !== '' ? nl2br(escape($value)) : '<span style="color:#999999">—</span>';
    return '<tr>'
        . '<td style="width:34%;padding:13px 16px;border-bottom:1px solid #ece9e3;color:#77736c;font-size:12px;font-weight:700;vertical-align:top">' . escape($label) . '</td>'
        . '<td style="padding:13px 16px;border-bottom:1px solid #ece9e3;color:#161616;font-size:13px;line-height:1.55;vertical-align:top">' . $display . '</td>'
        . '</tr>';
}

$root = dirname(__DIR__);
$configPath = $root . '/config.php';
$autoloadPath = $root . '/vendor/autoload.php';

if (!is_file($configPath) || !is_file($autoloadPath)) {
    error_log('Karma KIA mailer is missing config.php or Composer dependencies.');
    respond(503, ['ok' => false, 'message' => 'Enquiry service is not configured.']);
}

$config = require $configPath;
$allowedOrigins = $config['allowed_origins'] ?? [];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if ($origin !== '') {
    if (!in_array($origin, $allowedOrigins, true)) respond(403, ['ok' => false, 'message' => 'Origin is not allowed.']);
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    header('Access-Control-Max-Age: 86400');
    header('Vary: Origin');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST, OPTIONS');
    respond(405, ['ok' => false, 'message' => 'Method not allowed.']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 20000) respond(413, ['ok' => false, 'message' => 'Request is too large.']);

$data = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($data)) respond(400, ['ok' => false, 'message' => 'Invalid request body.']);

// Silently accept bot submissions caught by the hidden website field.
if (clean($data['website'] ?? '', 200) !== '') respond(200, ['ok' => true]);

$name = clean($data['name'] ?? '', 100);
$mobile = preg_replace('/\D+/', '', clean($data['mobile'] ?? '', 20));
$email = clean($data['email'] ?? '', 160);
$model = clean($data['model'] ?? '', 100);
$location = clean($data['location'] ?? '', 100);
$enquiryType = clean($data['enquiryType'] ?? 'Website Enquiry', 100);
$preferredDate = clean($data['preferredDate'] ?? '', 30);
$message = clean($data['message'] ?? '', 2000);
$pageUrl = clean($data['pageUrl'] ?? '', 500);
$consent = ($data['consent'] ?? false) === true;

$errors = [];
if ($name === '') $errors['name'] = 'Name is required.';
if (!preg_match('/^[6-9]\d{9}$/', $mobile)) $errors['mobile'] = 'A valid 10-digit Indian mobile number is required.';
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Email address is invalid.';
if (!$consent) $errors['consent'] = 'Consent is required.';
if ($pageUrl !== '' && !filter_var($pageUrl, FILTER_VALIDATE_URL)) $pageUrl = '';
if ($errors) respond(422, ['ok' => false, 'message' => 'Please check the form details.', 'errors' => $errors]);

// A lightweight per-IP throttle for shared hosting. Keep the directory outside public web files.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateDirectory = sys_get_temp_dir() . '/karma-kia-enquiry-rate';
if (!is_dir($rateDirectory)) @mkdir($rateDirectory, 0700, true);
$rateFile = $rateDirectory . '/' . hash('sha256', $ip) . '.txt';
$lastSubmission = is_file($rateFile) ? (int) file_get_contents($rateFile) : 0;
if ($lastSubmission > 0 && time() - $lastSubmission < 15) respond(429, ['ok' => false, 'message' => 'Please wait a moment before sending another enquiry.']);
@file_put_contents($rateFile, (string) time(), LOCK_EX);

$tracking = is_array($data['tracking'] ?? null) ? $data['tracking'] : [];
$trackingLabels = [
    'utm_source' => 'UTM Source',
    'utm_medium' => 'UTM Medium',
    'utm_campaign' => 'UTM Campaign',
    'utm_content' => 'UTM Content',
    'utm_term' => 'UTM Term',
    'gclid' => 'Google Click ID',
    'fbclid' => 'Facebook Click ID',
];

try {
    $submittedAt = new DateTimeImmutable(clean($data['submittedAt'] ?? 'now', 60));
} catch (Throwable) {
    $submittedAt = new DateTimeImmutable('now');
}
$submittedAt = $submittedAt->setTimezone(new DateTimeZone('Asia/Kolkata'));
$submittedDisplay = $submittedAt->format('d M Y, h:i A') . ' IST';

$rows = '';
$rows .= tableRow('Enquiry Type', $enquiryType);
$rows .= tableRow('Customer Name', $name);
$rows .= tableRow('Mobile Number', $mobile);
$rows .= tableRow('Email Address', $email);
$rows .= tableRow('Interested Model', $model);
$rows .= tableRow('Preferred Location', $location);
$rows .= tableRow('Preferred Date', $preferredDate);
$rows .= tableRow('Message', $message);
$rows .= tableRow('Consent', 'Yes');
$rows .= tableRow('Submitted', $submittedDisplay);
$rows .= tableRow('Landing Page', $pageUrl);

foreach ($trackingLabels as $key => $label) {
    $value = clean($tracking[$key] ?? '', 300);
    if ($value !== '') $rows .= tableRow($label, $value);
}

$html = '<!doctype html><html><body style="margin:0;padding:0;background:#f2f0eb;font-family:Arial,Helvetica,sans-serif">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f2f0eb"><tr><td align="center" style="padding:28px 14px">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border-collapse:collapse;box-shadow:0 12px 40px rgba(0,0,0,.08)">'
    . '<tr><td style="padding:28px 32px;background:#111111;border-bottom:4px solid #bb162b">'
    . '<div style="color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-.5px">KARMA KIA</div>'
    . '<div style="margin-top:7px;color:#b9b9b9;font-size:11px;letter-spacing:1.6px;text-transform:uppercase">New website enquiry</div>'
    . '</td></tr>'
    . '<tr><td style="padding:28px 32px 10px"><h1 style="margin:0;color:#161616;font-size:24px;line-height:1.25">' . escape($enquiryType) . '</h1>'
    . '<p style="margin:8px 0 0;color:#77736c;font-size:13px;line-height:1.6">A new enquiry was submitted through the Karma KIA landing page.</p></td></tr>'
    . '<tr><td style="padding:18px 32px 32px"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e2dc;border-collapse:collapse">' . $rows . '</table></td></tr>'
    . '<tr><td style="padding:18px 32px;background:#faf9f6;color:#8a8883;font-size:10px;line-height:1.6">This automated message was sent by the Karma KIA website enquiry system.</td></tr>'
    . '</table></td></tr></table></body></html>';

$plainLines = [
    'KARMA KIA — NEW WEBSITE ENQUIRY',
    'Enquiry Type: ' . $enquiryType,
    'Customer Name: ' . $name,
    'Mobile Number: ' . $mobile,
    'Email Address: ' . ($email ?: '—'),
    'Interested Model: ' . ($model ?: '—'),
    'Preferred Location: ' . ($location ?: '—'),
    'Preferred Date: ' . ($preferredDate ?: '—'),
    'Message: ' . ($message ?: '—'),
    'Consent: Yes',
    'Submitted: ' . $submittedDisplay,
    'Landing Page: ' . ($pageUrl ?: '—'),
];
foreach ($trackingLabels as $key => $label) {
    $value = clean($tracking[$key] ?? '', 300);
    if ($value !== '') $plainLines[] = $label . ': ' . $value;
}

require $autoloadPath;

try {
    $mailer = new PHPMailer(true);
    $mailer->isSMTP();
    $mailer->Host = (string) $config['smtp']['host'];
    $mailer->Port = (int) $config['smtp']['port'];
    $mailer->SMTPAuth = true;
    $mailer->Username = (string) $config['smtp']['username'];
    $mailer->Password = (string) $config['smtp']['password'];
    $mailer->SMTPSecure = ($config['smtp']['encryption'] ?? 'ssl') === 'tls'
        ? PHPMailer::ENCRYPTION_STARTTLS
        : PHPMailer::ENCRYPTION_SMTPS;
    $mailer->CharSet = PHPMailer::CHARSET_UTF8;
    $mailer->Timeout = 15;

    $mailer->setFrom((string) $config['mail']['from_address'], (string) $config['mail']['from_name']);
    $mailer->addAddress((string) $config['mail']['to_address'], (string) $config['mail']['to_name']);
    if ($email !== '') $mailer->addReplyTo($email, $name);

    $safeSubjectType = preg_replace('/[\r\n]+/', ' ', $enquiryType);
    $safeSubjectName = preg_replace('/[\r\n]+/', ' ', $name);
    $mailer->Subject = 'New Karma KIA Enquiry — ' . $safeSubjectType . ' — ' . $safeSubjectName;
    $mailer->isHTML(true);
    $mailer->Body = $html;
    $mailer->AltBody = implode("\n", $plainLines);
    $mailer->send();

    respond(200, ['ok' => true]);
} catch (Throwable $error) {
    error_log('Karma KIA enquiry email failed: ' . $error->getMessage());
    respond(500, ['ok' => false, 'message' => 'We could not send your enquiry. Please call or WhatsApp Karma KIA.']);
}
