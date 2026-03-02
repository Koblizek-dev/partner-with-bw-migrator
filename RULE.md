# Partner Microsite — Mandatory Rules

This document defines the **mandatory rules** for the BW Migrator partner microsite. All implementation must strictly follow these rules.

---

## 1. Light (Weight & Performance)

- **No heavy frameworks**: Use only vanilla HTML, CSS, and minimal JavaScript. No React, Vue, or other JS frameworks.
- **Minimal external resources**: Prefer system fonts. If a webfont is used, use a single family with `font-display: swap` and at most 2 weights (e.g. 400, 700).
- **Small footprint**: CSS and JS must be as small as practical. No unused styles or scripts. Avoid large images; use CSS for decoration where possible.
- **No render-blocking**: Critical content must be visible without waiting for external CSS/fonts. Avoid blocking scripts in `<head>`.
- **No third-party trackers or widgets** unless explicitly required (analytics can be added later with a single script).
- **Image assets**: Hero and section images must live under `images/` and be referenced by path. The hero visual uses a single `<img src="images/…">`; the `src` must match the actual filename in `images/` (e.g. a GIF or PNG). Ensure the file exists so the image loads (no broken images). The “50% Faster Migration” badge has no dot and no hover effect on the hero visual or badge.

---

## 2. Mobile-Friendly

- **Mobile-first CSS**: Base styles target the smallest viewport (e.g. 320px and up). Use `min-width` media queries to enhance for larger screens, never `max-width`-only for core layout.
- **Viewport**: Include `<meta name="viewport" content="width=device-width, initial-scale=1">`. No user-scalable=no.
- **No horizontal scroll**: Content must not overflow the viewport horizontally at any breakpoint. Use `max-width: 100%` for containers and media; avoid fixed widths that exceed 100vw.
- **Readable text**: Body text at least 16px on mobile. Line length comfortable for reading (e.g. max-width on text containers).
- **Touch targets**: Interactive elements (links, buttons) must have a minimum touch target of **44×44px** (Apple HIG / WCAG). Use padding, not only font size, to achieve this.
- **Tap spacing**: Adequate spacing between adjacent links/buttons to avoid mis-taps (e.g. ≥ 8px gap).
- **Navigation**: On small screens, use a compact nav (e.g. hamburger) that does not rely on hover. All nav links must be keyboard and touch accessible.

---

## 3. Tablet-Friendly

- **Tablet breakpoint(s)**: Define at least one tablet breakpoint (e.g. `min-width: 600px` and/or `768px`). Layout and typography must be explicitly tuned for tablet, not only “scaled up mobile”.
- **Use of space**: On tablet, use available width (e.g. 2-column layouts for cards where it improves scanability) without crowding. Avoid single narrow column on tablet.
- **Touch remains primary**: Assume touch on tablet. Same 44×44px minimum touch targets and spacing rules as mobile.
- **Orientation**: Layout must work in both portrait and landscape on tablet. Test that no critical content is cut off or awkward in either orientation.

---

## 4. Responsive Breakpoints (Reference)

- **Mobile**: default (no min-width), typically 320px–599px.
- **Tablet**: `min-width: 600px` and/or `min-width: 768px`.
- **Desktop**: `min-width: 1024px`.

Use these consistently. Prefer `em` or `rem` for typography and spacing; use `px` for breakpoints only if the project standard is px.

---

## 5. Structure & Accessibility

- **Semantic HTML**: Use `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` appropriately. One `<h1>` per page.
- **Headings hierarchy**: No skipped levels (e.g. no h2 after h1 then h4). Use h2 for section titles, h3 for subsections.
- **Focus and keyboard**: All interactive elements must be focusable and usable via keyboard. Visible focus style (no `outline: none` without a replacement).
- **ARIA**: Use `aria-label` on icon-only buttons (e.g. menu toggle). If a mobile menu is used, use `aria-expanded` and `aria-controls` where applicable.

---

## 6. CSS Conventions

- **Colors and theming**: Use CSS custom properties (variables) for colors and key spacing so the site can be themed (e.g. for the defined color palette) in one place.
- **Units**: Prefer `rem` for font sizes and spacing; use `em` for component-relative spacing where appropriate. Avoid px for font sizes except at breakpoints if needed.
- **Containers**: Single container class with max-width (e.g. 1200px) and horizontal padding that scales (e.g. 1rem on mobile, 1.5rem on tablet, 2rem on desktop).
- **No overflow**: Do not use `overflow: hidden` on body/main to “fix” layout; fix the root cause of overflow instead.

---

## 7. JavaScript

- **Minimal**: Only what is necessary (e.g. mobile menu toggle, smooth scroll for anchor links). No heavy libraries.
- **Progressive enhancement**: Page must be readable and navigable with JS disabled. Menu can fall back to a simple list of links that scroll.
- **No inline scripts** in HTML for logic; use a single external script, loaded at end of body.

---

## 8. Summary Checklist

Before considering the site “done”, verify:

- [ ] No horizontal scroll at 320px, 375px, 768px, 1024px.
- [ ] All buttons/links ≥ 44×44px touch target.
- [ ] Mobile-first CSS with tablet and desktop breakpoints.
- [ ] System font or one webfont, minimal requests.
- [ ] Semantic HTML, one h1, logical heading order.
- [ ] Keyboard and focus visible; menu works without mouse.
- [ ] Colors/spacing via CSS variables for theming.

---

## 9. Page sections (compliance check)

Current sections must follow §1–§7 above. As of the last check:

| Section | ID / role | Semantic | Heading | Notes |
|--------|-----------|----------|---------|--------|
| Header | `site-header` | `<header>`, `<nav>` | — | Logo, nav links, CTA; **Home** links to `https://migrate-bw.com/` (external, `target="_blank"` `rel="noopener noreferrer"`); hamburger on mobile; `aria-label`, `aria-expanded`, `aria-controls` on menu |
| Hero | (first in main) | `<section class="hero">` | **h1** (one per page) | Partner with BW Migrator |
| Reality | `#reality` | `<section class="section section--alt">` | **h2** | The Reality of SAP BW Migrations; `.infographic-bg` dark block |
| What it does | `#what-it-does` | `<section class="section">` | **h2** | What BW Migrator Actually Does; feature cards |
| Benefits | `#benefits` | `<section class="section section--benefits">` | **h2** + **h3** per card | Benefits; card titles h3 |
| Ways to work | `#ways-to-work` | `<section class="section">` | **h2** + **h3** per card | Two Ways to Work; card titles h3 |
| Capacity | `#capacity` | `<section class="section section--capacity">` | **h2** | Need Extra Capacity; purple accent |
| Incentive | `#incentive` | `<section class="section">` | **h2** + **h3** per box | Strategic Incentive Model |
| Enterprise | `#enterprise` | `<section class="section section--warm">` | **h2** | Enterprise-Ready |
| Contact | `#contact` | `<section class="section section--contact">` | **h2** | CTA; mailto `ondrej.kral@datasentics.com` with subject **Partner inquiry - BW Migrator** |
| Footer | `site-footer` | `<footer>` | **h3** (Contact) | DataSentics logo, tagline; **Contact:** Ondrej Kral, photo `images/ondrej-kral.png`, email `ondrej.kral@datasentics.com`, phone +420 778 428 578; same mailto + subject for footer email link; copyright |

- **Heading hierarchy:** One h1 (hero); all section titles h2; subsections/cards h3. No skipped levels.
- **Breakpoints:** 600px, 768px, 1024px used consistently in `css/styles.css`; hamburger nav until 1024px.
- **Touch:** Buttons/links use `min-height: var(--touch-min)` (2.75rem = 44px) or equivalent padding.
- **Focus:** `:focus-visible` outline defined globally; no `outline: none` without replacement.
- **JS:** Single external `script.js` at end of body; menu toggle, scroll state, active link, reveal; page usable without JS.
- **Hero visual:** Single `<img src="images/[filename]">` where `[filename]` matches the actual hero image file in `images/` (e.g. a GIF). No dot on “50% Faster Migration” badge; no hover effect on hero visual placeholder or badge.

---

## 10. SEO

- **Canonical URL:** Set in `<link rel="canonical">`; update to the real production URL (e.g. `https://migrate-bw.com/partners/` or your domain).
- **Meta description:** Unique, under ~160 characters; include primary keywords (BW Migrator, partner, SAP BW migration).
- **Open Graph & Twitter Card:** Present for social sharing; `og:image` and `twitter:image` should point to an image **1200×630 px** (e.g. `images/og-image.png`). Update all `og:url`, `twitter:image`, and canonical to match deployment URL.
- **Structured data:** JSON-LD in `<head>` (WebPage, Organization, WebSite) for search engines; update `url` and `@id` values if the site is hosted elsewhere.
- **One H1 per page**, clear heading hierarchy (h1 → h2 → h3).
