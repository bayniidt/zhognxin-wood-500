"use client";

import { assetPath } from "@/lib/site";
import { useTranslation } from "../shared/i18n";

const IMG = assetPath("/sites/zhongxinwood");
const HERO_IMAGES = ["timber/hero-board-3.jpg", "timber/hero-board-2.jpg", "timber/hero-board-1.jpg"];

export function HeroSection() {
  const { t } = useTranslation();
  const imageAlts = [t("productOkoumeAlt"), t("productCustomAlt"), t("productWoodAlt")];

  return (
    <section className="at-hero">
      <div className="at-hero-gallery" aria-hidden="true">
        {HERO_IMAGES.map((src, index) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img key={src} src={`${IMG}/${src}`} alt={imageAlts[index]} />
        ))}
      </div>
      <div className="at-hero-overlay">
        <p className="at-label">{t("heroLabel")}</p>
        <h1 className="at-hero-title">
          <span>ZHONG</span>
          <span>XIN</span>
          <span>WOOD</span>
        </h1>
        <p className="at-hero-subtitle">{t("heroSubtitle")}</p>
        <a href="#contact" className="at-hero-btn">{t("requestQuote")}</a>
      </div>
    </section>
  );
}
