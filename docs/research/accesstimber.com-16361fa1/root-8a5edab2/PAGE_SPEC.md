# Homepage Spec — accesstimber.com/

- **Route:** `/` → `src/app/page.tsx`
- **Interaction model:** mostly static; nav "Products" dropdown is hover/click-driven; species cards have hover lift; smooth-scroll anchor `#contact`.

## Sections (top → bottom)

1. **Header (shared template part)** — logo + "ACCESS TIMBER LTD" + nav (Products▾ / About Us / Export & Logistics / Contact). White `#f9f9f9` bg, padding `14px 40px`.
2. **Hero** — full-width `min-height:520px`, dark green `#1a3c2e` bg + hero image at `opacity:0.55`, bottom gradient overlay, gold label, serif uppercase title, gold subtitle listing 16 species, "Request a Quote" gold button.
3. **Stats bar** — gold `#F5A623` bg, 3 stats (10+ / 20+ / 16).
4. **About** — white bg, 2-col grid (text + image), "Contact Us" button.
5. **Species** — gray `#f7f6f2` bg, 4-col grid of 16 species cards (image + name + desc + "Enquire Now" link). Card hover: translateY(-4px) + stronger shadow.
6. **Why Choose Us** — green bg, 3-col grid of 6 icon+text items (emoji icons).
7. **CTA / Contact** — gold bg, heading + 3 buttons (Email / LinkedIn / WhatsApp).
8. **Custom footer** — dark `#0f2419` bg, rounded logo with gold border, 4 columns (Registered Office / Operations / Contact / Species), copyright. Theme footer is hidden on this page.

## Assets
- Hero: `.../root-8a5edab2/images/hero.jpg`
- About: `.../root-8a5edab2/images/about.jpg`
- 16 species images under `.../root-8a5edab2/images/`
- Shared: `logo.jpg`, `linkedin.png`, `whatsapp.png`
