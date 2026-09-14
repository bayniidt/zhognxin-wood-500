# Output Plan — accesstimber.com

- **Origin:** https://accesstimber.com
- **site-key:** `accesstimber.com-16361fa1`
- **Stack detected:** WordPress 7.1, Twenty Twenty-Four block theme (Full Site Editing). All page layouts are authored in post content via inline `<style>` blocks + semantic HTML. Theme header (logo + nav) and footer (logo/title/tagline/copyright) are template parts.
- **Fonts (self-hosted):** Inter (variable 300–900), Cardo (400 normal/italic, 700 normal).
- **App root:** repository root (`.`)

## Routes

| Source URL | page-key | Destination route | Route file |
|---|---|---|---|
| https://accesstimber.com/ | `root-8a5edab2` | `/` | `src/app/page.tsx` (replaces untouched scaffold — first fresh clone) |
| https://accesstimber.com/about-us/ | `about-us-4a42131b` | `/about-us` | `src/app/about-us/page.tsx` |
| https://accesstimber.com/contact/ | `contact-cfd191cd` | `/contact` | `src/app/contact/page.tsx` |

## Artifact roots

- Research: `docs/research/accesstimber.com-16361fa1/<page-key>/`
- Screenshots: `docs/design-references/accesstimber.com-16361fa1/<page-key>/`
- Components: `src/components/sites/accesstimber.com-16361fa1/<page-key>/`
- Shared components: `src/components/sites/accesstimber.com-16361fa1/shared/`
- Assets: `public/sites/accesstimber.com-16361fa1/<page-key>/images/`
- Shared assets: `public/sites/accesstimber.com-16361fa1/shared/`

## Shared foundation changes

- `src/app/globals.css` — merged site design tokens (colors, fonts, heading/body font stacks) while keeping shadcn token structure intact for future routes.
- `src/app/layout.tsx` — self-hosted fonts via `next/font/local`, site-wide metadata.
- `src/app/page.tsx` — replaced (untouched scaffold) for homepage.

## Page notes

- **Homepage** hides the theme footer (`footer.wp-block-template-part{display:none!important}`) and renders a custom rich dark footer. About & Contact render the simple theme footer.
- **Nav** ("Products" dropdown) is hover/click-driven; submenu is a white panel with `1px solid rgba(0,0,0,.15)` border, min-width 200px, item padding `.5em 1em`.
- **Language switcher** (TranslatePress floating widget, bottom-right) is out of scope for interaction but replicated as a static visual.
