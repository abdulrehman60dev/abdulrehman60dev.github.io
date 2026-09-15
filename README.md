# Abdul Rehman — Portfolio

A fast, responsive, single-page developer portfolio built with **plain HTML, CSS and
JavaScript** — no build step, no framework, no dependencies. Designed to be hosted for free on
**GitHub Pages**.

Features: light/dark theme toggle (respects system preference, remembers your choice),
sticky navigation with a mobile menu, smooth-scroll sections, subtle scroll-reveal animations,
accessible semantic markup, and SEO/social meta tags.

## Folder structure

```
portfolio/
├── index.html          ← the page (all content lives here)
├── styles.css          ← all styling + theming
├── script.js           ← theme toggle, mobile menu, scroll reveal
├── README.md
├── cv/
│   └── AbdulRehman_CV.pdf   ← ADD THIS: your CV (the "Download CV" button links here)
└── assets/
    └── profile.jpg          ← OPTIONAL: square photo (see "Add a photo" below)
```

## Placeholders to fill in

Search `index.html` for `TODO` — quick list:

1. **Project GitHub links** — each project card has a GitHub icon linking to `href="#"`.
   Replace the six `#` with the real repository URLs.
2. **CV file** — drop your PDF at `cv/AbdulRehman_CV.pdf` (exact name), or change the link in
   the hero section.
3. **Live URL** — update the `og:url` meta tag to your deployed URL.
4. **(Optional) Social preview image** — add `assets/og-image.png` (1200×630) and uncomment the
   `og:image` meta tag.
5. **(Optional) Demo links** — add a live-demo link to any project card if you have one.
6. **Hexawar description** — confirm/adjust the wording if needed.

### Add a photo (optional)
Put a square image at `assets/profile.jpg`, then in `index.html` replace the
`<div class="monogram">AR</div>` block with:

```html
<img src="assets/profile.jpg" alt="Abdul Rehman" loading="lazy" />
```

## Run locally
Just open `index.html` in a browser. (Or serve it: `python3 -m http.server` then visit
`http://localhost:8000`.)

---

## Deploy to GitHub Pages

### Option A — Personal site at `abdulrehman60dev.github.io` (recommended)
This gives you the clean URL **https://abdulrehman60dev.github.io/**.

1. On GitHub, create a **new public repository** named exactly:
   `abdulrehman60dev.github.io`
2. Upload these files so that **`index.html` sits at the repository root** (not inside a
   sub-folder). Either drag-and-drop via the GitHub web UI, or use git:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/abdulrehman60dev/abdulrehman60dev.github.io.git
   git push -u origin main
   ```
3. Go to the repo → **Settings → Pages**. Under **Build and deployment**, set
   **Source = Deploy from a branch**, **Branch = `main`**, **Folder = `/ (root)`**, then **Save**.
4. Wait ~1 minute, then visit **https://abdulrehman60dev.github.io/**. Done.

### Option B — Project repo (e.g. `portfolio`)
Use this if you'd rather keep your `username.github.io` name free. URL will be
**https://abdulrehman60dev.github.io/portfolio/**.

1. Create a public repo named e.g. `portfolio` and push these files (same git steps as above,
   just change the remote URL to `.../portfolio.git`).
2. Repo → **Settings → Pages** → **Source = Deploy from a branch** → **Branch = `main`** →
   **Folder = `/ (root)`** → **Save**.
3. Visit **https://abdulrehman60dev.github.io/portfolio/**.

> **Note:** all links in this site are **relative** (`cv/...`, `styles.css`), so it works from
> either the root domain or a `/portfolio/` sub-path with no changes.

### Updating the site later
Edit the files, commit, and push — Pages redeploys automatically within a minute:
```bash
git add .
git commit -m "Update content"
git push
```

---

Built with vanilla HTML/CSS/JS. No tracking, no dependencies.
