# SlingBags

An e-commerce storefront for a high-end men's accessories brand, built with vanilla HTML, CSS, and JavaScripts. The site is designed to reflect the aesthetic of premium menswear retail.

<img width="850" height="604" alt="website-demo" src="https://github.com/user-attachments/assets/d8362d1b-c181-4fe9-9f3c-684d0133ee6a" />

## Features

- **Product catalog** — 6 product cards in a responsive grid, each with a click-through detail modal showing expanded imagery, full specifications, and material callouts
- **Live shopping cart** — persistent across pages via `localStorage`, with a real-time item count badge and full cart modal with line items and totals
- **Quantity stepper** — "Add to Cart" transitions to an inline `−` / count / `+` stepper on both the product card and the detail modal, keeping cart state in sync across all UI simultaneously
- **Product detail modal** — focus-trapped, accessible popup with smooth open/close, Escape key support, and ARIA attributes
- **Contact page** — separate routed page with a structured inquiry form and business contact details, sharing the same nav, cart, and footer
- **Responsive layout** — adapts from a 2-column desktop grid to a single-column mobile layout with a hamburger nav drawer
- **Parallax hero** — full-bleed background with a gradient overlay and centered editorial CTA
- **SVG logo & favicon** — SVG assets, no raster images for brand marks

## Technical Highlights

This project demonstrates strong fundamentals in front-end development without relying on any framework or toolchain:

- Component-like patterns in vanilla JS — cart rendering, button state, and modal logic are all encapsulated and re-render reactively on state change
- CSS architecture with specificity-aware selectors, smooth transitions, and a consistent design token set applied manually throughout
- Accessibility-first modal implementation with focus trapping, `aria-hidden` toggling, and keyboard navigation
- Clean separation between page structure (HTML), presentation (CSS), and behavior (JS) across a multi-page site with shared assets
- `localStorage` used as a lightweight persistence layer with graceful fallback on parse errors

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Playfair Display)

---

<img width="1474" height="1049" alt="Screenshot From 2026-06-25 23-26-51" src="https://github.com/user-attachments/assets/a7b9d916-68ed-4a2f-8ac5-c0c4a50f2029" />
<img width="1474" height="871" alt="Screenshot From 2026-06-25 23-27-33" src="https://github.com/user-attachments/assets/535f2eaf-eb33-49ce-a079-4ee993ef9407" />
<img width="1474" height="871" alt="Screenshot From 2026-06-25 23-27-47" src="https://github.com/user-attachments/assets/23a6cdd8-0ce5-4ced-88ce-d5758794fabb" />
<img width="1474" height="871" alt="Screenshot From 2026-06-25 23-28-03" src="https://github.com/user-attachments/assets/f965c9e6-366b-4d08-8d27-c753bea15deb" />
<img width="1467" height="871" alt="Screenshot From 2026-06-25 23-37-57" src="https://github.com/user-attachments/assets/4e809238-a66c-4016-bff2-7f233dea6402" />
<img width="1467" height="831" alt="Screenshot From 2026-06-25 23-38-17" src="https://github.com/user-attachments/assets/a5703cbd-d75b-410b-9ee7-b23417faab21" />
<img width="1467" height="1127" alt="Screenshot From 2026-06-25 23-38-43" src="https://github.com/user-attachments/assets/5e3a7cb0-336d-45a5-921d-87ab611a4011" />
