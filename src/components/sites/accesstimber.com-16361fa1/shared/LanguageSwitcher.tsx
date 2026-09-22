"use client";

import { Languages } from "lucide-react";
import { useState } from "react";
import { LANGUAGE_OPTIONS, useTranslation } from "./i18n";

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const currentLanguage = LANGUAGE_OPTIONS.find((option) => option.code === language);

  return (
    <div className="language-switcher">
      {open && (
        <div className="language-menu" role="menu" aria-label={t("ariaChooseLanguage")}>
          {LANGUAGE_OPTIONS.map((option) => (
            <button
              type="button"
              role="menuitem"
              className={option.code === language ? "active" : ""}
              key={option.code}
              onClick={() => {
                setLanguage(option.code);
                setOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        className="language-toggle"
        aria-label={t("languageLabel", { language: currentLanguage?.label ?? "English" })}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Languages size={21} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
}
