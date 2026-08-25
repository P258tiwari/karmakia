# Karma KIA PHP enquiry mailer

This package receives landing-page enquiries over HTTPS and sends a branded HTML email through the Karma KIA SMTP mailbox. The SMTP password is never exposed to the browser or committed to Git.

## Hosting requirements

- PHP 8.1 or newer
- Composer
- PHP extensions: OpenSSL and JSON
- An HTTPS subdomain such as `api.karmakia.in`
- Outbound SMTP access to port 465

## Install on the PHP server

1. Create `api.karmakia.in` in the hosting control panel and point its document root to this package's `public` directory.
2. Upload the `php-server` directory outside the public document root structure shown here.
3. Run `composer install --no-dev --optimize-autoloader` inside `php-server`.
4. Copy `config.example.php` to `config.php`.
5. In `config.php`, enter the newly rotated SMTP password and replace `https://your-landing-page.example` with the real landing-page origin. Do not commit or place `config.php` inside the public directory.
6. Confirm that `https://api.karmakia.in/enquiry.php` is reachable over HTTPS.

The expected server layout is:

```text
php-server/
  config.php            private
  vendor/               private
  composer.json
  public/
    enquiry.php          public HTTPS endpoint
```

## Connect the frontend

Create `.env.local` in the landing-page project:

```text
VITE_LEAD_API_URL=https://api.karmakia.in/enquiry.php
```

Rebuild and redeploy the landing page after setting the URL. `.env.local`, the PHP configuration, and Composer dependencies are ignored by Git.

## Email contents

Every successful submission includes the enquiry type, customer name, mobile number, optional email, model, location, preferred date, message, consent, campaign parameters, landing-page URL, and submission time. The customer email is used only as `Reply-To`; the verified Karma KIA mailbox remains the sender.

## Security included

- Server-side field validation
- Strict allowed-origin CORS policy
- Hidden bot-trap field
- Request-size limit
- Per-IP submission throttle
- Generic public errors with detailed failures written only to the PHP error log
- SMTP credentials stored outside the web root
