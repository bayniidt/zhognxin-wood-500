"use client";

import { useTranslation } from "../shared/i18n";

export function ContactHero() {
  const { t } = useTranslation();

  return (
    <section className="ct-hero">
      <div className="ct-inner">
        <span className="ct-label">{t("contactHeroLabel")}</span>
        <h1 className="ct-title">{t("contactHeroTitle")}</h1>
        <p className="ct-desc">{t("contactHeroDescription")}</p>
      </div>
    </section>
  );
}
