"use client";

import { useTranslation } from "../shared/i18n";

const PROCESS_STEPS = [
  ["01", "stepOrderTitle", "stepOrderText"],
  ["02", "stepPlanningTitle", "stepPlanningText"],
  ["03", "stepQualityTitle", "stepQualityText"],
  ["04", "stepDocumentsTitle", "stepDocumentsText"],
  ["05", "stepLoadingTitle", "stepLoadingText"],
  ["06", "stepHandoverTitle", "stepHandoverText"],
] as const;

export function ExportProcess() {
  const { t } = useTranslation();

  return (
    <section className="el-section el-section-green">
      <div className="el-section-inner">
        <div className="el-section-heading el-section-heading-centered">
          <span className="el-label">{t("fromMillToPort")}</span>
          <h2 className="el-heading el-heading-white">{t("exportProcessTitle")}</h2>
        </div>
        <div className="el-process-grid">
          {PROCESS_STEPS.map(([number, titleKey, copyKey]) => (
            <article className="el-process-card" key={number}>
              <span className="el-step-number">{number}</span>
              <h3>{t(titleKey)}</h3>
              <p>{t(copyKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
