"use client";

import { FormEvent, useState } from "react";
import { useTranslation } from "../shared/i18n";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(t("emailSubject", { name }));
    const body = encodeURIComponent(`${t("emailBodyName", { name })}\n${t("emailBodyEmail", { email })}\n\n${message}`);

    setSubmitted(true);
    window.location.href = `mailto:ellena@zhongxinwoods.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="ct-form-card" aria-labelledby="contact-form-title">
      <div>
        <span className="ct-form-label">{t("formStart")}</span>
        <h2 id="contact-form-title">{t("formContactTitle")}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contact-name">{t("formName")}</label>
        <input id="contact-name" name="name" type="text" placeholder={t("formNamePlaceholder")} required />

        <label htmlFor="contact-email">{t("formEmail")}</label>
        <input id="contact-email" name="email" type="email" placeholder={t("formEmailPlaceholder")} required />

        <label htmlFor="contact-message">{t("formMessage")}</label>
        <textarea id="contact-message" name="message" placeholder={t("formMessagePlaceholder")} rows={7} required />

        <button type="submit" className="ct-form-submit">
          {t("formSubmit")} <span aria-hidden="true">↗</span>
        </button>
        {submitted && <p className="ct-form-note">{t("formOpeningEmail")}</p>}
      </form>
    </section>
  );
}
