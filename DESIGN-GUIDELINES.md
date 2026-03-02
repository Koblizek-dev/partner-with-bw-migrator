# Design Guidelines — BW Migrator Partner Microsite

Follow this document for **colors**, **typography**, **interactivity**, and **layout** so the site stays consistent. Use it together with `RULE.md` (technical rules).

---

## 1. Colors

All colors are defined in `css/styles.css` under `:root`. Use the variables; avoid hardcoding hex values except in the variables block.

### Brand

| Variable | Value | Use |
|----------|--------|-----|
| `--color-logo` | `#EC6C4B` | Logo, favicon, hero tag dot/border, accent highlights |
| `--color-primary` | `#377CF3` | Primary buttons, links, active nav, key headlines (e.g. "BW Migrator") |
| `--color-primary-hover` | `#3C50D0` | Primary button hover |
| `--color-secondary-stroke` | `#377CF3` | Secondary button border and text |
| `--color-box-stroke` / `--color-box-accent` | `#F97316` | Reality section icons, box borders, accent strokes |

### Hero tag pill ("Partner Program")

| Variable | Value | Use |
|----------|--------|-----|
| `--color-hero-tag-bg` | `rgba(236, 108, 75, 0.12)` | Pill background |
| `--color-hero-tag-border` | `#EC6C4B` | Pill border and dot |
| `--color-hero-tag-text` | `#C2410C` | Pill text |

### Backgrounds

| Variable | Value | Use |
|----------|--------|-----|
| `--color-bg` | `#fff` | Default page and cards |
| `--color-bg-alt` | `#F8FAFC` | Alternate sections (e.g. Reality), header nav hover |
| `--color-bg-warm` | `#FFFCF9` | Warm boxes (Reality row, Enterprise-Ready section, contact button hover) |
| `--color-bg-incentive` | `#EEF4FC` | Strategic Incentive Model section (distinct from Enterprise) |
| `--color-bg-capacity` | `#F1F5F9` | Need Extra Capacity? Use Ours. section (light grey, distinct from all others) |
| `--color-infographic` | `#19294A` | Dark blocks (Reality “They involve”, hero visual fallback) |
| `--color-contact-start` / `--color-contact-end` | `#12203B` → `#3A80F2` | Contact section gradient |
| `--color-footer-bg` | `#1A1E2B` | Footer background |
| `--color-footer-text` | `#B0B0B0` | Footer body text |
| `--color-footer-divider` | `#555555` | Footer divider line |

### Text

| Variable | Value | Use |
|----------|--------|-----|
| `--color-text` | `#1a1a1a` | Body and headings on light bg |
| `--color-hero-heading` | `#1A1E2B` | Hero “Partner with”, subtitle |
| `--color-hero-desc` | `#4F5A67` | Hero description, badge label |
| `--color-text-muted` | `#555` | Section subtitles, secondary text |
| `--color-nav-link` | `#4F5A67` | Nav links (default) |
| `--color-text-on-dark` | `#fff` | Text on dark blocks |
| `--color-focus` | `#377CF3` | Focus ring (outline) |
| `--color-border` | `#e8e8e8` | Header border, light dividers |

---

## 2. Typography

- **Font family:** `--font-sans` → Inter, then system stack. Use for all UI and body text.
- **Units:** Prefer `rem` for font sizes; use the variables below so breakpoints can scale consistently.

### Headlines

| Element | Variable / Size | Weight | Color | Notes |
|---------|------------------|--------|--------|------|
| **Page H1 (hero)** | `--hero-title` (1.75rem) → 2.5rem @768px, 2.75rem @1024px | 700 | `--color-hero-heading` | Only “BW Migrator” in `--color-primary` |
| **Hero subtitle** | `--hero-subtitle-size` (1.5rem) | 700 | `--color-hero-heading` | |
| **Section title (h2)** | `--section-title` (1.375rem) → 1.625rem @600px, 2rem @1024px | 700 | `--color-text` or section override | Centered; blue part via `.text-primary` or `.reality-title-highlight` |
| **Section subtitle** | 1rem | 400 | `--color-text-muted` | Centered below section title |
| **h3 (card titles)** | `--text-lg` (1.125rem) | 600 | `--color-text` | |

### Body & UI text

| Element | Size | Weight | Color |
|---------|------|--------|--------|
| Body / paragraphs | `--text-base` (1rem) | 400 | `--color-text` or `--color-hero-desc` in hero |
| Hero description | 1rem | 400 | `--color-hero-desc` |
| Hero tag pill | 0.875rem | 400 | `--color-hero-tag-text` |
| Nav links | 1rem | 400 | `--color-nav-link`; active → `--color-primary` |
| Small / captions | `--text-sm` (0.9375rem) or 0.875rem | 400 | `--color-text-muted` or `--color-footer-text` |
| Footer description | 0.9375rem | 400 | `--color-footer-text` |
| Footer contact / copyright | 0.875rem / 0.8125rem | 400 | `--color-footer-text` |

### Line height

- `--line-tight` (1.25): headlines
- `--line-normal` (1.5): body
- `--line-relaxed` (1.6): long copy / descriptions

---

## 3. Interactivity

Every interactive element must have clear **hover** and **focus** states. Do not remove focus outline without a visible replacement.

### Focus

- Use `:focus-visible` (not only `:focus`) for keyboard focus.
- Outline: `2px solid var(--color-focus)` with `outline-offset: 2px`.
- Cards/boxes that are focusable (e.g. contain a link): `outline: 2px solid var(--color-primary)` on focus.

### Hover

- **Links:** Slight color change or underline; e.g. nav → `--color-primary`, footer link → white.
- **Buttons:**  
  - Primary: background `--color-primary` → `--color-primary-hover`.  
  - Secondary: border/text `--color-secondary-stroke` → fill with same color, text white.
- **Cards / boxes (benefit, way, reality, incentive):**  
  - `transform: translateY(-2px)`  
  - Stronger `box-shadow` (e.g. `0 8px 24px rgba(0,0,0,0.08)`)  
  - Optional: border or border-color change for emphasis.
- **Contact pills:** Background/color change per `.contact-pill` styles.
- **Footer contact links:** Color to white on hover.

### Transitions

- Use short transitions (0.2s–0.25s) for hover/focus: `transition: color 0.2s ease`, `background 0.2s ease`, `transform 0.2s ease`, `box-shadow 0.2s ease`.
- Reveal-on-scroll: ~0.5s ease for opacity/transform.

---

## 4. Touch & spacing

- **Minimum touch target:** 44×44px for links and buttons (see RULE.md). Use `min-height: var(--touch-min)` (2.75rem) and padding.
- **Spacing scale:** Use `--space-xs` through `--space-2xl`; avoid arbitrary values.
- **Gap between interactive elements:** At least `--space-sm` (0.5rem) so taps don’t overlap.

---

## 5. Section backgrounds

- Default: `--color-bg` (white).
- Alternate (e.g. Reality): `section--alt` → `--color-bg-alt` (#F8FAFC).
- Warm (e.g. some cards): `section--warm` → `--color-bg-warm` (#FFFCF9).
- Dark block: `.infographic-bg` → `--color-infographic` (#19294A).
- Contact: gradient `--color-contact-start` → `--color-contact-end`.
- Footer: `--color-footer-bg` (#1A1E2B).

---

## 6. Buttons

- **Primary:** Background `--color-primary`, text white, hover `--color-primary-hover`. Min height `--touch-min`, padding and gap for icon.
- **Secondary:** White background, border and text `--color-secondary-stroke`, hover fill with same blue, text white.
- **Pill (e.g. hero CTA):** `.btn--pill` → `border-radius: 999px`, same colors as primary.
- All buttons: `font-weight: 600`, `font-size: var(--text-base)`.

---

## 7. Quick checklist for new or changed UI

- [ ] Colors from `:root` variables (no new hex in components).
- [ ] Headlines use correct size/weight (see Typography table).
- [ ] Paragraphs and small text use sizes above.
- [ ] Hover state on links, buttons, cards.
- [ ] Focus-visible outline on all interactive elements.
- [ ] Transitions on hover/focus (0.2s–0.25s).
- [ ] Touch targets ≥ 44×44px; spacing between tappable elements.
- [ ] Section background matches intent (alt / warm / dark / gradient / footer).

Reference: `css/styles.css` (`:root` and component classes) and `RULE.md` for technical and a11y rules.

---

## 8. Assets and images

- **Location:** All page images live in the `images/` folder. Paths in HTML are relative (e.g. `images/logo.png`, `images/hero-visual.png`).
- **Hero visual:** Single `<img src="images/[filename]">` where the filename matches the actual file in `images/` (e.g. a GIF). Ensure the file exists so the image loads.
- **Hero “50% Faster Migration” badge:** Text only (no dot). No hover effect on the hero visual block or the badge.
- **Other section images:** e.g. `images/what-it-does-infographic.png`, `images/enterprise-ready.png`, `images/capacity.png`, `images/section-divider.png`, `images/datasentics-logo-white.png`. Ensure each referenced file exists in `images/`.
- **Footer contact photo:** `images/ondrej-kral.png` (Ondrej Kral). Contact details: name, email `ondrej.kral@datasentics.com`, phone +420 778 428 578.

---

## 9. Navigation and contact

- **Home (nav):** Links to **https://migrate-bw.com/** in a new tab (`target="_blank"` `rel="noopener noreferrer"`).
- **Contact mailto:** All contact email links (contact section CTAs and footer email) use **ondrej.kral@datasentics.com** with subject **Partner inquiry - BW Migrator** (`mailto:ondrej.kral@datasentics.com?subject=Partner%20inquiry%20-%20BW%20Migrator`).
