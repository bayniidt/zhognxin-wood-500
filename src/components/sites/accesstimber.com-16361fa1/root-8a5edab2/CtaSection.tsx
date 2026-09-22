"use client";

import { assetPath } from "@/lib/site";
import { useTranslation } from "../shared/i18n";

const SHARED = assetPath("/sites/accesstimber.com-16361fa1/shared");

export function CtaSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="at-cta-strip">
      <h2>{t("ctaTitle")}</h2>
      <p>{t("ctaSubtitle")}</p>
      <p>{t("ctaText")}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8,
        }}
      >
        <a
          href="https://wa.me/8618550484652"
          className="at-cta-btn"
          style={{
            background: "#25D366",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            minWidth: 180,
          }}
          target="_blank"
          rel="noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${SHARED}/whatsapp.png`}
            alt={t("whatsapp")}
            style={{ width: 22, height: 22, flexShrink: 0, display: "block" }}
          />
          {t("whatsapp")}
        </a>
      </div>
      <p className="at-cta-whatsapp-number">{t("whatsappNumber")}</p>
    </section>
  );
}
