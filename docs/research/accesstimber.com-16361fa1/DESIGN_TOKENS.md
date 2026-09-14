# Design Tokens — accesstimber.com

Extracted from WordPress global styles (`global-styles-inline-css`) + per-page inline `<style>` blocks.

## Fonts (self-hosted woff2)

| Family | Weights/Styles | Usage |
|---|---|---|
| Inter | 300–900 variable, normal | Body, site title, nav, labels, buttons, stats, card text |
| Cardo | 400 normal/italic, 700 normal | Headings (h1–h6) |

Font stacks (theme):
- Body: `"Inter", sans-serif`
- Heading: `Cardo` (serif)

## Colors

Brand palette (custom):
- `#1a3c2e` — primary dark green (headings, hero, nav links, section bg)
- `#0f2419` — darker green (footer, gradient ends)
- `#2a5a40` — green gradient mid-stop
- `#F5A623` — accent orange/gold (labels, buttons, hover, stat bar)
- `#e09000` — hero button hover
- `#f7f6f2` — warm gray section bg
- `#f4f8f5` — pale green card bg (about/contact)
- `#444` / `#666` — body/description text
- `#a8c8b8` — muted green text on dark
- `#d4e8df` — light green text on dark
- `#6a9a7a` — footer copyright green
- `#8aaa96` — small label gray-green (contact)
- `#3a5a4a` — about/contact body text green-gray
- `#5a7a6a` — contact note text
- `#0077b5` — LinkedIn
- `#25D366` — WhatsApp

Theme presets (base):
- base `#f9f9f9`, base-2 `#ffffff`, contrast `#111111`, contrast-2 `#636363`, contrast-3 `#A4A4A4`
- accent `#cfcabe`, accent-2 `#c2a990`, accent-3 `#d8613c`, accent-4 `#b1c5a4`, accent-5 `#b5bdbc`

## Typography scale (body font-size 1.05rem = 16.8px)

- Body: `1.05rem`, line-height `1.55` (theme) — page sections use `1.6`–`1.85`
- `.at-label` / `.au-label` / `.ct-label`: `0.8rem`–`0.85rem`, weight 700, uppercase, letter-spacing 2px (or 0.15em)
- Hero title: `clamp(2rem,5vw,3.5rem)` (home) / `clamp(2rem,4vw,3rem)` (about/contact), weight 800, uppercase
- Section heading: `clamp(1.6rem,3vw,2.4rem)` (home), weight 800
- Stat number: `2.5rem` weight 900
- Card title: `1.05rem`–`1.2rem` weight 700–800

## Spacing / layout

- Header: padding `14px 40px`, justify space-between
- Nav gap: `28px`, nav font-weight 600, font-size 0.9rem (small preset)
- Hero min-height `520px` (home)
- Section padding: `70px 40px`, max-width `1200px` (home), `900px` (about), `1000px` (contact)
- Card radius: `4px` (buttons), `8px` (species cards), `12px` (about/contact cards)
- Shadows: `0 2px 12px rgba(0,0,0,0.08)` (species), `0 4px 24px rgba(0,0,0,0.08)` (about/contact)

## Breakpoints

- `768px`: about/about grids collapse to 1 column; home stats → 2 cols, why-grid → 1 col
- `900px`: species grid 4 → 2
- `500px`: species grid → 1
- Theme nav collapses to hamburger below 600px (mobile overlay)
