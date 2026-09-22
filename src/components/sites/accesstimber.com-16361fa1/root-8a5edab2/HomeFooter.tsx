"use client";

import { assetPath } from "@/lib/site";
import { BusinessLocation } from "../shared/BusinessLocation";
import { useTranslation } from "../shared/i18n";

const SHARED = assetPath("/sites/accesstimber.com-16361fa1/shared");
const BRAND_IMG = assetPath("/sites/zhongxinwood/logo.jpg");

export function HomeFooter() {
  const { t } = useTranslation();

  return (
    <>
      <BusinessLocation />
      <footer
        className="site-footer"
        style={{
          background: "#0f2419",
          color: "#a8c8b8",
          padding: "60px 40px 40px",
          textAlign: "center",
        }}
      >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BRAND_IMG}
        alt="ZHONG XIN WOOD Logo"
        style={{
          height: 70,
          width: 70,
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: 16,
          border: "2px solid #F5A623",
        }}
      />
      <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 4px" }}>
        ZHONG XIN WOOD
      </p>
      <p
        style={{
          margin: "0 0 4px",
          fontSize: "0.85rem",
          color: "#F5A623",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {t("footerSupplier")}
      </p>

      <div
        className="site-footer-columns"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 60,
          flexWrap: "wrap",
          margin: "32px 0",
          textAlign: "left",
        }}
      >
        <FooterColumn title={t("footerLocation")}>
          <FooterText>GSEZ Nkok</FooterText>
          <FooterText>{t("footerGabon")}</FooterText>
          <FooterText>{t("footerDirectProcessing")}</FooterText>
        </FooterColumn>

        <FooterColumn title={t("footerProduct")}>
          <FooterText>{t("productLong")}</FooterText>
          <FooterText>{t("productLong")}</FooterText>
          <FooterText>{t("footerKilnGrade")}</FooterText>
          <FooterText>{t("footerThickness")}</FooterText>
        </FooterColumn>

        <FooterColumn title={t("footerContact")}>
          <FooterText>{t("contactPersonValue")}</FooterText>
          <FooterText>{t("whatsappNumber")}</FooterText>
          <FooterText>{t("contactWeChatLabel")}: 18550484652</FooterText>
          <FooterText>
            <a href="mailto:ellena@zhongxinwoods.com" style={{ color: "#F5A623", textDecoration: "none" }}>
              ellena@zhongxinwoods.com
            </a>
          </FooterText>
          <FooterText>
            <a
              href="https://wa.me/8618550484652"
              style={{ color: "#25D366", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}
              target="_blank"
              rel="noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${SHARED}/whatsapp.png`}
                alt="WhatsApp"
                style={{ width: 22, height: 22, verticalAlign: "middle", marginRight: 6, borderRadius: "50%" }}
              />
              {t("whatsapp")}
            </a>
          </FooterText>
        </FooterColumn>

        <FooterColumn title={t("footerSpecies")}>
          <FooterText>{t("footerAfricanSpecies")}</FooterText>
          <FooterText>Aucoumea klaineana Pierre</FooterText>
          <FooterText>{t("footerOriginSupply")}</FooterText>
        </FooterColumn>
      </div>

      <hr
        style={{ border: "none", borderTop: "1px solid rgba(168,200,184,0.2)", margin: "0 0 20px" }}
      />
      <p style={{ margin: 0, fontSize: "0.8rem", color: "#6a9a7a" }}>
        {t("footerRights")}
      </p>
      </footer>
    </>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="site-footer-column">
      <p
        style={{
          color: "#fff",
          fontWeight: 600,
          fontSize: "0.9rem",
          margin: "0 0 8px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function FooterText({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <p style={{ margin: "0 0 3px", fontSize: "0.85rem", ...style }}>{children}</p>
  );
}
