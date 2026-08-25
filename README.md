# Karma KIA premium landing page

A production-ready, responsive single-page dealership experience for Karma KIA, serving Etah, Hathras and Kasganj. Built with React, Vite, JavaScript, modern CSS and Lucide icons.

## Install and run

```bash
npm install
npm run dev
```

The local URL is printed in the terminal. For a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

- `src/components/` — page sections, vehicle overlay, accessible UI and shared elements
- `src/data/vehicles.js` — model names, prices, specifications, badges and image paths
- `src/data/locations.js` — branch addresses, map destinations and contact details
- `src/data/offers.js` — editable current-offer cards
- `src/data/faqs.js` — FAQ content
- `src/config/site.js` — dealership, legal company, phone, dealer code, statistics and disclaimer
- `src/utils/` — tracking-parameter capture, WhatsApp links and lead submission boundary
- `src/styles/` — design tokens and responsive global styling
- `public/assets/` — approved logos, vehicles, dealership and gallery photography

## Replacing assets

Add the Karma KIA logo to `public/assets/logos/karma-kia-logo.png` and the approved Kia logo to `public/assets/logos/kia-logo.png`. The header and footer automatically use them after reload; text fallbacks remain if they are absent.

Add transparent vehicle images to `public/assets/cars/` using the exact filenames listed in `public/assets/README.md`. The site prevents broken-image icons and preserves a designed fallback. Use only approved current-generation model imagery, especially for `seltos-2026.png`.

## Updating models, prices and offers

Edit `src/data/vehicles.js` to add or change a model, price, range or feature. All range cards, modal content, EV sections and form options read from this data. Keep the ex-showroom price note on confirmed prices; use `Get Latest Price` where pricing is not confirmed.

Edit `src/data/offers.js` for current campaigns. The included content deliberately avoids hard-coded discounts.

Branch information and map/direction URLs live only in `src/data/locations.js`.

## Connecting the lead form

The React form posts enquiries to the HTTPS endpoint configured by `VITE_LEAD_API_URL`. A production-ready PHP/PHPMailer SMTP relay, branded HTML email template, validation and spam controls are included in `php-server/`. Follow `php-server/README.md` to install it on PHP hosting and keep SMTP credentials outside the public web root.

## Notes

- The enquiry form shows success only after the configured PHP mail endpoint confirms delivery.
- Phone and WhatsApp actions are live links using the configured dealership number.
- Pricing, offers, model specifications, maps, legal URLs and social URLs should be reviewed before public launch.
