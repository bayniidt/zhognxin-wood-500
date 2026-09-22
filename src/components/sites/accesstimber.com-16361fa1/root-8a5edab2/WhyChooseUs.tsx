"use client";

import { useTranslation } from "../shared/i18n";

const ITEMS = [
  ["🌲", "whyGabonTitle", "whyGabonText"],
  ["🏭", "whyDirectTitle", "whyDirectText"],
  ["🔥", "whyKilnTitle", "whyKilnText"],
  ["📏", "whyDimensionsTitle", "whyDimensionsText"],
  ["✅", "whyQualityTitle", "whyQualityText"],
  ["🚢", "whySupplyTitle", "whySupplyText"],
] as const;

export function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="at-section-green">
      <div className="at-section">
        <p className="at-label" style={{ textAlign: "center" }}>
          {t("whyLabel")}
        </p>
        <h2
          className="at-heading at-heading-white"
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          {t("whyTitle")}
        </h2>
        <div className="at-why-grid">
          {ITEMS.map(([icon, titleKey, textKey]) => (
            <div className="at-why-item" key={titleKey}>
              <div className="at-why-icon">{icon}</div>
              <div>
                <p className="at-why-title">{t(titleKey)}</p>
                <p className="at-why-text">{t(textKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
