"use client";

import { useTranslation } from "../shared/i18n";

export function ExportHero() {
  const { t } = useTranslation();

  return (
    <section className="el-hero">
      <div className="el-hero-inner">
        <span className="el-label">{t("exportHeroLabel")}</span>
        <h1 className="el-title">{t("exportHeroTitle")}</h1>
        <p className="el-hero-description">{t("exportHeroDescription")}</p>
        <div className="el-badges" aria-label={t("exportServices")}>
          <span>{t("fobCifPlanning")}</span>
          <span>{t("fullDocumentation")}</span>
          <span>{t("containers")}</span>
        </div>
      </div>
    </section>
  );
}
