"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { assetPath } from "@/lib/site";
import { useTranslation } from "./i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const navItems = [
    { label: t("navProducts"), href: "/#products" },
    { label: t("navAboutUs"), href: "/about-us/" },
    { label: t("navExportLogistics"), href: "/export-logistics/" },
    { label: t("navContact"), href: "/contact/" },
  ];

  return (
    <header className="site-header">
      <div className="site-header-inner" style={{ position: "relative" }}>
        <div className="site-brand">
          <Link href="/" className="site-logo" aria-label={t("ariaHome")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assetPath("/my-self/logo.jpg")} alt="ZHONG XIN WOOD" width={52} height={55} />
          </Link>
          <Link href="/" className="site-wordmark" aria-label={t("ariaHome")}>
            ZHONG XIN <span>WOOD</span>
          </Link>
        </div>

        <button
          type="button"
          className="site-nav-toggle"
          aria-label={open ? t("ariaCloseMenu") : t("ariaOpenMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav className={`site-nav${open ? " mobile-open" : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
