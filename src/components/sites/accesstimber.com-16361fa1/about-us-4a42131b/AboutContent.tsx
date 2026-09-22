"use client";

import Link from "next/link";
import { useTranslation } from "../shared/i18n";

const CARDS = [
  ["🎯", "missionTitle", "missionText"],
  ["🏭", "directProcessingTitle", "directProcessingText"],
  ["📏", "kilnGradedTitle", "kilnGradedText"],
  ["🗣️", "bilingualTitle", "bilingualText"],
] as const;

export function AboutContent() {
  const { t } = useTranslation();

  return (
    <div className="au-section">
      <div className="au-lead">
        <h2>{t("aboutTitle")}</h2>
        <p>{t("aboutTextOne")}</p>
        <p>{t("aboutTextTwo")}</p>
      </div>

      <div className="au-grid">
        {CARDS.map(([icon, titleKey, textKey]) => (
          <div className="au-card" key={titleKey}>
            <div className="au-card-icon">{icon}</div>
            <h3>{t(titleKey)}</h3>
            <p>{t(textKey)}</p>
          </div>
        ))}
      </div>

      <div className="au-highlight">
        <h2>{t("coreProductTitle")}</h2>
        <p><strong>{t("coreProductName")}</strong> — {t("coreProductTextOne")}</p>
        <p>{t("coreProductTextTwo")}</p>
        <p>{t("coreProductTextThree")}</p>
      </div>

      <div className="au-founder">
        <div className="au-founder-avatar">🏭</div>
        <div>
          <h2>{t("qualityTitle")}</h2>
          <p className="role">{t("qualityRole")}</p>
          <p>{t("qualityText")}</p>
        </div>
      </div>
    </div>
  );
}

export function AboutCta() {
  const { t } = useTranslation();

  return (
    <section className="au-cta">
      <h2>{t("aboutCtaTitle")}</h2>
      <p>{t("aboutCtaText")}</p>
      <Link href="/contact/" className="au-cta-btn">{t("getInTouch")}</Link>
      <Link
        href="/#products"
        className="au-cta-btn"
        style={{ background: "transparent", border: "2px solid #F5A623", color: "#F5A623" }}
      >
        {t("viewProducts")}
      </Link>
    </section>
  );
}
