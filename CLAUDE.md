# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

See also `AGENTS.md` which covers commands, CI, content conventions, and gotchas. This file adds architecture context not covered there.

## Template architecture

Three templates in `layouts/_default/`:

- **`baseof.html`** — Wraps every page. Contains `<head>`, navbar (`#mainNav`), and footer. Navbar has two rendering paths: `mobile-navbar` (Bootstrap collapsed, `<lg`) and `desktop-navbar` (full width, `>=lg`). The block `main` is defined here and filled by the specific page template.
- **`home.html`** — The homepage at `/`. Iterates site posts with three date-based buckets (new, external from data file, old). Each bucket renders differently. The template does its own date-filtering logic, not via Hugo taxonomies.
- **`single.html`** — Individual post pages. Handles title, standfirst, content, and related links.

All template logic is inline — there are no partials, no shortcodes (until recently added), and no theme inheritance.

## SCSS architecture

Entry point: `assets/scss/freelancer.scss` → compiled by Hugo's Dart Sass transpiler into `/css/style.min.<hash>.css` via `resources.Get` + `css.Sass` + `minify` + `fingerprint`.

Partials are prefixed with `_` and `@import`ed. Order in `freelancer.scss` matters — variables first, then mixins, then component partials. Key partials:

| File | Role |
|------|------|
| `_variables.scss` | Colour palette, site-wide SCSS vars |
| `_mixins.scss` | Sass mixins |
| `_navbar.scss` | All navbar styles, mobile + desktop breakpoints |
| `_post.scss` | Blog post body styles |
| `_portfolio.scss` | Homepage thumbnail grid |
| `_bootstrap-overrides.scss` | Overrides for Bootstrap components |
| `_global.scss` | Element-level defaults, typography |
| `_fonts.scss` | `@font-face` declarations |
| `_accessibility.scss` | Skip-link, focus, reduced-motion |

Colour references: `$purple` (#c6a5ff), `$lightblue` (#a3e6f5), `$pink` (#ff9cf1), `$theme-primary` (#e54ed0), `$background-grey` (#444349).

## Navbar brand

The brand text "mango.pdf.zone" is split into three `<span>` segments (`mango` / `.pdf.` / `zone`) styled via CSS custom properties `--brand-a`, `--brand-b`, `--brand-c`. These are randomized on each page load by `static/js/navbar.js`. The segments share a `transition: color 0.3s ease` and all turn white on hover.

## Static assets

SCSS lives in `assets/` (Hugo's asset dir), so the dev server watches it as an asset and re-runs the Sass pipeline on change — live reload works for style edits. `static/` is additionally mounted into `assets` via `module.mounts` in `hugo.yaml`, so `resources.Get` can still process images that live under `static/` (used by the responsive-image partial).

`static/vendor/` contains third-party libs (Bootstrap, Popper, littlefoot). These are populated by the gulp pipeline in `static/` — see AGENTS.md.

## Commit policy

**Do not commit unless explicitly asked.** Make changes, build, verify — but wait for an explicit "commit" instruction before running `git commit`.

**Never include `Co-Authored-By` lines in commit messages.**
