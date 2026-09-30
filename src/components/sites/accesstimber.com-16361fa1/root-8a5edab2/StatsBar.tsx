"use client";

import { createElement } from "react";
import { appendSpeciesPhrase, useTranslation } from "../shared/i18n";

const SPECIES_DETAIL = "okan. Dabema. Azobe. movingui (& other African hardwoods)";

const STATS = [
  { number: "Okoumé", label: "statsSpecies" as const },
  { number: "KD", label: "statsKilnDried" as const },
  { number: "FAS", label: "statsGrade" as const },
];

export function StatsBar() {
  const { t } = useTranslation();

  return (
    <section className="at-stats">
      <div className="at-stats-grid">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="at-stat-number">
              {stat.number === "Okoumé" ? (
                <>
                  {createElement("span", null, "Okoumé")} {createElement(
                    "span",
                    { className: "at-stat-number-detail" },
                    SPECIES_DETAIL,
                  )}
                </>
              ) : (
                appendSpeciesPhrase(stat.number)
              )}
            </div>
            <div className="at-stat-label">{t(stat.label)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
