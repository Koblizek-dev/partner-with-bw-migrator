# Partner with BW Migrator

Partner microsite for **BW Migrator** — win more deals, deliver faster. Static, mobile-first single-page site.

## Run locally

From the project root:

```bash
# With Node.js (npx)
npx serve -l 8080

# With Python 3
python -m http.server 8080
```

Then open **http://localhost:8080** in your browser.

## Project structure

```
├── index.html          # Entry point
├── RULE.md             # Site rules (light, mobile-friendly, tablet-friendly)
├── css/
│   └── styles.css      # Styles (variables, layout, components)
├── js/
│   └── script.js       # Menu toggle, no frameworks
├── images/
│   └── favicon.svg     # Favicon
├── .gitignore
└── README.md
```

## Tech

- Vanilla HTML, CSS, JavaScript
- Inter font (Google Fonts)
- No build step — ready for GitHub Pages or any static host

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages** → Source: **Deploy from a branch**.
3. Branch: **main** (or **master**), folder: **/ (root)**.
4. Save; the site will be at `https://<username>.github.io/<repo-name>/`.

---

© BW Migrator / DataSentics
