# Artifact Manifest — accesstimber.com

All assets are exact originals downloaded from the live site (no generated fallback material).

## Shared assets — `public/sites/accesstimber.com-16361fa1/shared/`

| Local file | Source |
|---|---|
| `logo.jpg` | wp-content/uploads/2025/11/2025-05-22-19.46.38.jpg |
| `hero-bg.jpg` | wp-content/uploads/2025/11/2025-05-22-22.57.55.jpg (about + contact hero) |
| `linkedin.png` | wp-content/uploads/2026/04/download.png |
| `whatsapp.png` | wp-content/uploads/2026/04/whatsapp.png |
| `flag-en.svg` | translatepress flags en_US.svg |
| `flag-fr.svg` | translatepress flags fr_FR.svg |

## Homepage assets — `.../root-8a5edab2/images/`

| Local file | Source |
|---|---|
| `hero.jpg` | 2025-05-22-23.40.14.jpg |
| `about.jpg` | 2025-05-22-22.57.48.jpg |
| `iroko.jpg` | iroko-wood-grain.jpg |
| `sapele.jpg` | sapele-wood-grain.jpg |
| `azobe.jpg` | Azobe_web.jpg |
| `ayous.jpg` | Ayous_web.jpg |
| `afromosia.jpg` | Afromosia_web.jpg |
| `bilinga.jpg` | bilinga_web.jpg |
| `beli.jpg` | beli_web.jpg |
| `doussie.jpg` | Doussie_web.jpg |
| `tali.jpg` | tali_web.jpg |
| `okan.jpg` | okan_web.jpg |
| `okoume.jpg` | Okoume_web.jpg |
| `moabi.jpg` | moabi_web.jpg |
| `padouk.jpg` | Padouk_web.jpg |
| `sipo.jpg` | sipo_web.jpg |
| `zebrawood.jpg` | Zebrawood_web.jpg |
| `wenge.jpg` | Wenge_web.jpg |

## Fonts — `src/app/fonts/`

| Local file | Source |
|---|---|
| `Inter-VariableFont_slnt,wght.woff2` | theme assets/fonts/inter |
| `cardo_normal_400.woff2` | theme assets/fonts/cardo |
| `cardo_italic_400.woff2` | theme assets/fonts/cardo |
| `cardo_normal_700.woff2` | theme assets/fonts/cardo |

## Known gaps / notes

- Emoji "icons" (🌲🚢✅💼📦🤝 etc.) are rendered as native emoji text, identical to source.
- The TranslatePress floating language switcher is replicated visually (English + French) without live translation.
- Internal links to routes not in scope (`/products/`, `/species/`, `/export-logistics/`, `/products/*`) are preserved as `<a>` hrefs (they 404 locally but match source URLs). In-scope nav links (`/`, `/about-us/`, `/contact/`) point to local routes.
