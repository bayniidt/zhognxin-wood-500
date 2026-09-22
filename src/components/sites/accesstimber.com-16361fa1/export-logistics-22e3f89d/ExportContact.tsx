"use client";

import { useTranslation } from "../shared/i18n";

const MAP_URL = "https://maps.app.goo.gl/mFiwZ9NGM6Q3QBwe9?g_st=awc";
const MAP_EMBED_URL = "https://www.google.com/maps?q=0.390571,9.604091&z=15&output=embed";

export function ExportContact() {
  const { t } = useTranslation();

  return (
    <section className="el-section el-section-light">
      <div className="el-section-inner">
        <div className="el-contact-heading">
          <span className="el-label">{t("planShipment")}</span>
          <h2 className="el-heading">{t("shipmentTitle")}</h2>
          <p className="el-copy">{t("shipmentText")}</p>
        </div>
        <div className="el-contact-grid">
          <div className="el-map-wrap">
            <iframe
              title={t("mapManufacturerTitle")}
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={MAP_URL} target="_blank" rel="noreferrer" className="el-map-link">
              {t("openGoogleMaps")}
            </a>
          </div>
          <div className="el-contact-card">
            <h3>ZHONG XIN WOOD</h3>
            <p className="el-contact-role">{t("manufacturerRole")}</p>
            <p>{t("manufacturerLocation")}</p>
            <p>{t("manufacturerProduct")}</p>
            <a href="mailto:ellena@zhongxinwoods.com" className="el-email">
              ellena@zhongxinwoods.com
            </a>
            <a href="https://wa.me/8618550484652" target="_blank" rel="noreferrer" className="el-contact-button">
              {t("shippingQuote")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
