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

