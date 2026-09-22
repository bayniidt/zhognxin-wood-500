"use client";

import { assetPath } from "@/lib/site";
import { useTranslation } from "../shared/i18n";

const IMG = assetPath("/sites/zhongxinwood");
const ABOUT_IMAGES = ["timber/about-panel-1.jpg", "timber/about-panel-2.jpg", "timber/about-panel-3.jpg"];

export function AboutHero() {
  const { t } = useTranslation();
  const imageAlts = [t("aboutImageOneAlt"), t("aboutImageTwoAlt"), t("aboutImageThreeAlt")];

  return (
    <section className="au-hero">
      <div className="au-hero-gallery" aria-hidden="true">
        {ABOUT_IMAGES.map((src, index) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img key={src} src={`${IMG}/${src}`} alt={imageAlts[index]} />
        ))}
      </div>
      <div className="au-inner">
        <span className="au-label">{t("aboutHeroLabel")}</span>
        <h1 className="au-title">{t("aboutHeroTitle")}</h1>
        <p className="au-desc">{t("aboutHeroDescription")}</p>
      </div>
    </section>
  );
}
