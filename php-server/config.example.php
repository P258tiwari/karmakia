<?php

declare(strict_types=1);

return [
    'allowed_origins' => [
        'https://www.karmakia.in',
        'https://karmakia.in',
        'https://www.karmakia.com',
        'https://karmakia.com',
        'http://127.0.0.1:5173',
    ],
    'smtp' => [
        'host' => 'premium191-m.web-hosting.com',
        'port' => 465,
        'username' => 'info@Karmakia.in',
        'password' => 'REPLACE_WITH_THE_NEW_ROTATED_PASSWORD',
        'encryption' => 'ssl',
    ],
    'mail' => [
        'from_address' => 'info@Karmakia.in',
        'from_name' => 'Karma KIA Website',
        'to_address' => 'info@Karmakia.in',
        'to_name' => 'Karma KIA Enquiries',
    ],
];
