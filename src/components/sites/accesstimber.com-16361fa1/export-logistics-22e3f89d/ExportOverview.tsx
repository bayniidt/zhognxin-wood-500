"use client";

import { useTranslation } from "../shared/i18n";

export function ExportOverview() {
  const { t } = useTranslation();

  return (
    <section className="el-section el-section-light">
      <div className="el-section-inner">
        <div className="el-two-column">
          <div>
            <span className="el-label">{t("howWeShip")}</span>
            <h2 className="el-heading">{t("exportOverviewTitle")}</h2>
            <p className="el-copy">{t("exportOverviewTextOne")}</p>
            <p className="el-copy">{t("exportOverviewTextTwo")}</p>
            <p className="el-copy">{t("exportOverviewTextThree")}</p>
          </div>
          <div className="el-route-card">
            <div className="el-route-point">
              <strong>{t("origin")}</strong>
              <span>{t("exportOriginLocation")}</span>
            </div>
            <div className="el-route-line" aria-hidden="true" />
            <div className="el-route-point">
              <strong>{t("portPlanning")}</strong>
              <span>{t("portLocation")}</span>
            </div>
            <div className="el-route-line" aria-hidden="true" />
            <div className="el-route-point">
              <strong>{t("destination")}</strong>
              <span>{t("yourNominatedPort")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
