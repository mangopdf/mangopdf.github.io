# AGENTS.md — mango.pdf.zone

Hugo static site deployed to GitHub Pages. No theme; all templates are custom in `layouts/_default/`.

## Commands

```bash
# dev server (drafts included)
hugo server -D

# production build
hugo --gc --minify
```

SCSS is compiled by Hugo's built-in Dart Sass transpiler.

## Project structure

| Directory | Purpose |
|---|---|
| `content/post/` | Published blog posts |
| `content/draft/` | Drafts — rendered as content (NOT Hugo drafts), excluded from homepage listings |
| `data/externalposts.yaml` | External (Atlassian) posts shown on homepage |
| `layouts/_default/` | Custom templates (baseof, home, single) — no theme |
| `static/` | All assets; also set as `assetDir` in `hugo.yaml`. SCSS, JS, images, vendor libs live here |
| `public/` | Build output (gitignored) |
| `resources/` | Hugo cache (gitignored) |
| `jekyll/` | Legacy Jekyll version — still committed but no longer used |

## Content conventions

### Frontmatter fields
- `colour` — maps to Bootstrap outline button classes: `pink`, `purple`, `blue`, `lightblue`, `white`
- `image` — post thumbnail (shown on homepage grid)
- `standfirst` — subtitle shown on post page, also used for `description`/OG tags via template
- `url` — optional custom path; otherwise Hugo derives from filename
- `text_colour` — optional body text colour override

### Homepage post ordering
Posts are bucketed in the template (`layouts/_default/home.html`):
- **New posts**: `date > 2025-01-01`
- **External posts**: from `data/externalposts.yaml`
- **Old posts**: `date < 2022-01-01`

Posts from 2022–2024 are in a display gap. To show a post from that era, adjust the template thresholds.

### File extensions
Post files use the `.md` extension.

## CI deployment

- Deploys on push to `master` (also manual dispatch)
- Hugo version: **0.160.1** (extended, installed via `.deb`)
- `HUGO_ENVIRONMENT=production`, `TZ=America/Los_Angeles`
- Build artifacts: CNAME file + duplicated RSS (`index.xml` → `feed.xml`)
- Deploys to GitHub Pages via `actions/deploy-pages`

## Gotchas

- `disablePathToLower: true` in `hugo.yaml` — URLs preserve original casing
- Goldmark `unsafe: true` — raw HTML in markdown is rendered
- The repo has many `*~` backup files (emacs-style). Do not commit more.
- `themes/` is empty — do not add a theme dependency. All styling is in `static/scss/` + custom layouts.
- `package.json` (with actual deps) lives in `static/`, not the repo root. The root `package.json` is empty.
- Vendor JS libraries (Bootstrap, littlefoot, Popper) are committed directly to `static/vendor/`. To update them, download the new version and replace the files.
