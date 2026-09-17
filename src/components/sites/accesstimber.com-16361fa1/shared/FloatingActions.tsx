"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

const WHATSAPP_ICON = assetPath("/sites/accesstimber.com-16361fa1/shared/whatsapp.png");

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 240);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside className="at-floating-actions" aria-label="Quick actions">
      <LanguageSwitcher />
      <a
        className="at-floating-action at-floating-whatsapp"
        href="https://wa.me/8618550484652"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={WHATSAPP_ICON} alt="" aria-hidden="true" />
      </a>
      {showBackToTop && (
        <button
          className="at-floating-action at-floating-top"
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp aria-hidden="true" />
        </button>
      )}
    </aside>
  );
}
