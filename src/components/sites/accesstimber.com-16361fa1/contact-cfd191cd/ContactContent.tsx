"use client";

import { useTranslation } from "../shared/i18n";
import { ContactForm } from "./ContactForm";

const DETAILS = [
  { icon: "👤", labelKey: "contactPersonLabel", valueKey: "contactPersonValue" },
  { icon: "💬", labelKey: "contactWhatsAppLabel", value: "+86 185 5048 4652", href: "https://wa.me/8618550484652" },
  { icon: "💚", labelKey: "contactWeChatLabel", value: "18550484652" },
  { icon: "✉️", labelKey: "contactEmailLabel", value: "ellena@zhongxinwoods.com", href: "mailto:ellena@zhongxinwoods.com" },
  { icon: "💼", labelKey: "contactLinkedInLabel", value: "ZHONG XIN WOOD", href: "https://www.linkedin.com/company/zhongxinwood/", external: true },
  { icon: "🌐", labelKey: "contactWebsiteLabel", value: "www.zhongxinwood.com", href: "https://www.zhongxinwood.com" },
] as const;

const QUOTE_POINTS = [
  "quoteSpecies",
  "quoteGrade",
  "quoteKdAd",
  "quoteDimension",
  "quoteVolume",
  "quoteIncoterm",
  "quoteDestination",
  "quotePayment",
] as const;

const HOURS = [
  { dayKey: "mondayFriday", hours: "08:00 – 18:00" },
  { dayKey: "saturday", hoursKey: "saturdayHours" },
  { dayKey: "sunday", hoursKey: "closed" },
] as const;

const SERVE = [
  "serveImporters",
  "serveSawmills",
  "servePlywood",
  "serveFurniture",
  "serveConstruction",
  "serveDoors",
  "serveMarine",
] as const;

const REG = [
  { labelKey: "companyNameLabel", value: "ZHONG XIN WOOD" },
  { labelKey: "locationLabel", valueKey: "locationAddress" },
  { labelKey: "productLabel", valueKey: "productLong" },
  { labelKey: "originLabel", valueKey: "originValue" },
] as const;

export function ContactContent() {
  const { t } = useTranslation();

  return (
    <div className="ct-section">
      <ContactForm />
      <div className="ct-grid">
        <div className="ct-details">
          <h2>{t("contactDetailsTitle")}</h2>
          {DETAILS.map((item) => {
            const value = "valueKey" in item ? t(item.valueKey) : item.value;
            const href = "href" in item ? item.href : undefined;
            const external = "external" in item ? item.external : false;
            return (
              <div className="ct-item" key={item.labelKey}>
                <span className="ct-item-icon">{item.icon}</span>
                <div>
                  <div className="ct-item-label">{t(item.labelKey)}</div>
                  <div className="ct-item-value">
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                      >
                        {value}
                      </a>
                    ) : value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="ct-quote">
          <h2>{t("quoteTitle")}</h2>
          <p>{t("quoteDescription")}</p>
          <ul>
            {QUOTE_POINTS.map((pointKey) => <li key={pointKey}>{t(pointKey)}</li>)}
          </ul>
          <a href="mailto:ellena@zhongxinwoods.com" className="ct-quote-btn">{t("emailUsNow")}</a>
        </div>
      </div>

      <div className="ct-hours">
        <h2>{t("officeHoursTitle")}</h2>
        <table className="ct-hours-table">
          <thead>
            <tr>
              <th>{t("day")}</th>
              <th>{t("hoursGmt")}</th>
            </tr>
          </thead>
          <tbody>
            {HOURS.map((row) => (
              <tr key={row.dayKey}>
                <td className="day">{t(row.dayKey)}</td>
                <td>{"hoursKey" in row ? t(row.hoursKey) : row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ color: "#5a7a6a", fontSize: "0.9rem", margin: "16px 0 0" }}>
          {t("officeHoursNote")}
        </p>
      </div>

      <div className="ct-serve">
        <h2>{t("whoContactTitle")}</h2>
        <ul className="ct-serve-list">
          {SERVE.map((itemKey) => <li key={itemKey}>{t(itemKey)}</li>)}
        </ul>
      </div>

      <div className="ct-reg">
        <h2>{t("companyInfoTitle")}</h2>
        <div className="ct-reg-info">
          {REG.map((item) => (
            <div className="ct-reg-item" key={item.labelKey}>
              <div className="ct-reg-label">{t(item.labelKey)}</div>
              <div className="ct-reg-value">{"valueKey" in item ? t(item.valueKey) : item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
