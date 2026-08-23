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

`src/utils/tracking.js` contains the `submitLead()` integration boundary. Replace its development console logging with an API, CRM, Google Sheet, webhook or WhatsApp Business request. The payload already preserves UTM values, `gclid` and `fbclid` from the page URL. Add server-side validation, spam controls and consent storage when connecting a live endpoint.

## Notes

- The enquiry form is frontend-only and shows a complete validated success state.
- Phone and WhatsApp actions are live links using the configured dealership number.
- Pricing, offers, model specifications, maps, legal URLs and social URLs should be reviewed before public launch.
