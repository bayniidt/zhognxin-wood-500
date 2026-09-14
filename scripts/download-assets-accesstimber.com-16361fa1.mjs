#!/usr/bin/env node
/**
 * Download all visual assets for the accesstimber.com clone.
 * Target origin: https://accesstimber.com
 * site-key: accesstimber.com-16361fa1
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://accesstimber.com";
const SHARED = path.join(ROOT, "public/sites/accesstimber.com-16361fa1/shared");
const HOME = path.join(ROOT, "public/sites/accesstimber.com-16361fa1/root-8a5edab2/images");
const FONTS = path.join(ROOT, "src/app/fonts");

const assets = [
  // [url, destinationDirectory, filename]
  [`${BASE}/wp-content/uploads/2025/11/2025-05-22-19.46.38.jpg`, SHARED, "logo.jpg"],
  [`${BASE}/wp-content/uploads/2025/11/2025-05-22-22.57.55.jpg`, SHARED, "hero-bg.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/download.png`, SHARED, "linkedin.png"],
  [`${BASE}/wp-content/uploads/2026/04/whatsapp.png`, SHARED, "whatsapp.png"],
  [`${BASE}/wp-content/plugins/translatepress-multilingual/assets/flags/4x3/en_US.svg`, SHARED, "flag-en.svg"],
  [`${BASE}/wp-content/plugins/translatepress-multilingual/assets/flags/4x3/fr_FR.svg`, SHARED, "flag-fr.svg"],

  // Homepage
  [`${BASE}/wp-content/uploads/2025/11/2025-05-22-23.40.14.jpg`, HOME, "hero.jpg"],
  [`${BASE}/wp-content/uploads/2025/11/2025-05-22-22.57.48.jpg`, HOME, "about.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/iroko-wood-grain.jpg`, HOME, "iroko.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/sapele-wood-grain.jpg`, HOME, "sapele.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/Azobe_web.jpg`, HOME, "azobe.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/Ayous_web.jpg`, HOME, "ayous.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/Afromosia_web.jpg`, HOME, "afromosia.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/bilinga_web.jpg`, HOME, "bilinga.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/beli_web.jpg`, HOME, "beli.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/Doussie_web.jpg`, HOME, "doussie.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/tali_web.jpg`, HOME, "tali.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/okan_web.jpg`, HOME, "okan.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/Okoume_web.jpg`, HOME, "okoume.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/moabi_web.jpg`, HOME, "moabi.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/Padouk_web.jpg`, HOME, "padouk.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/sipo_web.jpg`, HOME, "sipo.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/Zebrawood_web.jpg`, HOME, "zebrawood.jpg"],
  [`${BASE}/wp-content/uploads/2026/04/Wenge_web.jpg`, HOME, "wenge.jpg"],

  // Fonts
  [`${BASE}/wp-content/themes/twentytwentyfour/assets/fonts/inter/Inter-VariableFont_slnt,wght.woff2`, FONTS, "Inter-VariableFont_slnt,wght.woff2"],
  [`${BASE}/wp-content/themes/twentytwentyfour/assets/fonts/cardo/cardo_normal_400.woff2`, FONTS, "cardo_normal_400.woff2"],
  [`${BASE}/wp-content/themes/twentytwentyfour/assets/fonts/cardo/cardo_italic_400.woff2`, FONTS, "cardo_italic_400.woff2"],
  [`${BASE}/wp-content/themes/twentytwentyfour/assets/fonts/cardo/cardo_normal_700.woff2`, FONTS, "cardo_normal_700.woff2"],
];

let ok = 0;
let fail = 0;
for (let i = 0; i < assets.length; i += 4) {
  const batch = assets.slice(i, i + 4);
  await Promise.all(
    batch.map(async ([url, dir, name]) => {
      try {
        const res = await fetch(url, {
          headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124.0 Safari/537.36" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        await mkdir(dir, { recursive: true });
        await writeFile(path.join(dir, name), buf);
        ok++;
        console.log(`OK   ${name} (${buf.length} bytes)`);
      } catch (e) {
        fail++;
        console.error(`FAIL ${name}: ${e.message}`);
      }
    }),
  );
}
console.log(`\nDone: ${ok} ok, ${fail} failed`);
