"use client";

import { assetPath } from "@/lib/site";
import { useTranslation } from "../shared/i18n";

const IMG = assetPath("/sites/zhongxinwood");

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="at-section-white">
      <div className="at-section">
        <div className="at-about-grid">
          <div>
            <p className="at-label">{t("whoWeAre")}</p>
            <h2 className="at-heading">{t("homeAboutTitle")}</h2>
            <p className="at-body">{t("homeAboutTextOne")}</p>
            <p className="at-body" style={{ marginTop: 16 }}>{t("homeAboutTextTwo")}</p>
            <a href="#contact" className="at-hero-btn" style={{ marginTop: 24, display: "inline-block" }}>
              {t("contactUs")}
            </a>
          </div>
          <div className="at-about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/timber/about-stacked-pallet.jpg`} alt={t("homeAboutImageAlt")} />
          </div>
        </div>
      </div>
    </section>
  );
}
