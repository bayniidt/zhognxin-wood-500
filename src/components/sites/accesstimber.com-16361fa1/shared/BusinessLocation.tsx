"use client";

import { useTranslation } from "./i18n";

const MAP_URL = "https://maps.app.goo.gl/mFiwZ9NGM6Q3QBwe9?g_st=awc";
const MAP_EMBED_URL = "https://www.google.com/maps?q=0.390571,9.604091&z=15&output=embed";

export function BusinessLocation() {
  const { t } = useTranslation();

  return (
    <section className="business-location" aria-labelledby="business-location-title">
      <div className="business-location-inner">
        <div>
          <p className="business-location-label">{t("ourLocation")}</p>
          <h2 id="business-location-title">{t("findZhongXin")}</h2>
          <p>{t("locationAddress")}</p>
        </div>
        <div className="business-location-map">
          <iframe
            title={t("findZhongXin")}
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href={MAP_URL} target="_blank" rel="noreferrer">
            {t("openGoogleMaps")}
          </a>
        </div>
      </div>
    </section>
  );
}
