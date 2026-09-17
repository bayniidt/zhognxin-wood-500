"use client";

import { Languages } from "lucide-react";
import { useState } from "react";

const LANGUAGES = ["English", "Français", "中文", "Español"];

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="language-switcher">
      {open && (
        <div className="language-menu" role="menu" aria-label="Choose language">
          {LANGUAGES.map((option) => (
            <button
              type="button"
              role="menuitem"
              className={option === language ? "active" : ""}
              key={option}
              onClick={() => {
                setLanguage(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        className="language-toggle"
        aria-label={`Language: ${language}`}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Languages size={21} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
}
