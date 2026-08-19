# mango.pdf.zone

Hugo static site deployed to GitHub Pages. There is no theme; templates and styling are custom.

## Commands

```bash
# Install frontend dependencies
(cd static && npm ci)

# Development server, including drafts
hugo server -D

# Production-style local build
hugo --cleanDestinationDir --gc --minify --panicOnWarning
```

Hugo compiles SCSS with its embedded Dart Sass. CI also sets `HUGO_ENVIRONMENT=production`, `TZ=America/Los_Angeles`, and the Pages base URL.

## Project map

- `content/post/` — posts. Use `draft: true` for work in progress; production builds exclude drafts.
- `data/externalposts.yaml` — external posts displayed on the homepage.
- `layouts/_default/` — `baseof.html`, `home.html`, `single.html`, and the page shell.
- `layouts/partials/` — responsive images, social-image metadata, and shared template helpers.
- `layouts/_markup/render-image.html` — sends local raster Markdown images through the responsive-image pipeline; GIFs, SVGs, and external URLs pass through.
- `layouts/shortcodes/` — custom Markdown shortcodes.
- `assets/scss/` — SCSS entry point and partials; `freelancer.scss` produces the fingerprinted site stylesheet.
- `assets/img/` — source images processed by Hugo and published as generated WebP files.
- `static/` — raw-served media, JavaScript, fonts, vendor files, and the favicon. Keep only files referenced directly by HTML, CSS, or metadata here.
- `public/` and `resources/` — generated output and cache; both are ignored.
- `jekyll/` — obsolete local implementation; do not modify.

Bootstrap SCSS is selected from `static/node_modules` through the Sass options in `layouts/_default/baseof.html`. Committed vendor JavaScript lives in `static/vendor/`; update it through the frontend dependency workflow when required.

## Content conventions

Frontmatter commonly includes:

- `colour` — Bootstrap outline color (`pink`, `purple`, `blue`, `lightblue`, or `white`).
- `image` — post thumbnail and social-image source.
- `standfirst` — subtitle and page description source.
- `url` — optional custom path.
- `text_colour` — optional body text color class.

The homepage buckets posts in `layouts/_default/home.html` by date: new posts after 2025-01-01, external posts, and old posts before 2022-01-01. Posts dated 2022–2024 are intentionally outside those buckets unless the thresholds change. Post files use `.md`.

Local images in frontmatter or Markdown use paths under `/img/`, backed by `assets/img/`. `responsive-image.html` generates WebP and `srcset` variants. `social-image.html` generates an absolute, published image URL for Open Graph, Twitter, and JSON-LD metadata. Keep raw files such as GIFs, SVGs, video, and `mango-social.jpg` in `static/img/` when they must be served unchanged.

## CI and deployment

`.github/workflows/hugo.yaml` deploys on pushes to `master` and manual dispatch:

- Hugo **0.163.3 extended**.
- `npm ci` runs in `static/`.
- The build uses `--cleanDestinationDir --gc --minify --panicOnWarning` and the Pages-provided base URL.
- Warnings fail the build. The Bootstrap deprecation categories silenced in `baseof.html` must stay current.
- The workflow sets `HUGO_ENVIRONMENT=production` and `TZ=America/Los_Angeles`.
- It creates `public/CNAME`, duplicates `index.xml` as `feed.xml`, and deploys `public/` with GitHub Pages.

## Gotchas

- `disablePathToLower: true` preserves URL casing.
- Goldmark `unsafe: true` allows raw HTML in Markdown.
- Do not add a theme dependency; `themes/` is intentionally empty.
- `package.json` and `package-lock.json` live in `static/`.

## Working rules

- Do not commit unless explicitly asked.
- Do not add `Co-Authored-By` lines to commit messages.
- For UI changes, verify both desktop and mobile behavior in the browser; use browser device emulation for mobile checks.
