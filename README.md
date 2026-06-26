# SlingBags

A fully hand-coded e-commerce storefront for a high-end men's accessories brand, built with vanilla HTML, CSS, and JavaScript — no frameworks, no libraries, no build tools.

The site is designed to reflect the aesthetic of premium menswear retail: editorial typography with Playfair Display, a restrained color palette of near-black and cognac, parallax hero sections, and smooth micro-interactions throughout.

## Features

- **Product catalog** — 6 product cards in a responsive grid, each with a click-through detail modal showing expanded imagery, full specifications, and material callouts
- **Live shopping cart** — persistent across pages via `localStorage`, with a real-time item count badge and full cart modal with line items and totals
- **Quantity stepper** — "Add to Cart" transitions to an inline `−` / count / `+` stepper on both the product card and the detail modal, keeping cart state in sync across all UI simultaneously
- **Product detail modal** — focus-trapped, accessible popup with smooth open/close, Escape key support, and ARIA attributes
- **Contact page** — separate routed page with a structured inquiry form and business contact details, sharing the same nav, cart, and footer
- **Responsive layout** — adapts from a 2-column desktop grid to a single-column mobile layout with a hamburger nav drawer
- **Parallax hero** — full-bleed background with a gradient overlay and centered editorial CTA
- **SVG logo & favicon** — entirely hand-authored SVG assets, no raster images for brand marks

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
- Vanilla JavaScript (ES6+, IIFE module pattern)
- Google Fonts (Playfair Display)

---

<img width="1199" height="968" alt="Screenshot From 2026-06-08 23-25-44" src="https://github.com/user-attachments/assets/29fbb91a-1b35-4e3f-96b7-2447f32d5562" />
<img width="1199" height="968" alt="Screenshot From 2026-06-08 23-26-05" src="https://github.com/user-attachments/assets/6317508b-ba31-4fd2-a71b-5301fc2e81b7" />
<img width="1199" height="968" alt="Screenshot From 2026-06-08 23-26-36" src="https://github.com/user-attachments/assets/04fc483a-12c9-4ecc-9a06-70bf384f9a24" />
