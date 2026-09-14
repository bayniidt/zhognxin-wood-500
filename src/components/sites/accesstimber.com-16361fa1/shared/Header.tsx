"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { assetPath } from "@/lib/site";

const NAV_ITEMS = [
  { label: "Products", href: "/#products" },
  { label: "About Us", href: "/about-us/" },
  { label: "Export & Logistics", href: "/export-logistics/" },
  { label: "Contact", href: "/contact/" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner" style={{ position: "relative" }}>
        <div className="site-brand">
          <Link href="/" className="site-logo" aria-label="ZHONG XIN WOOD — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assetPath("/my-self/logo.jpg")} alt="ZHONG XIN WOOD" width={52} height={55} />
          </Link>
          <Link href="/" className="site-wordmark" aria-label="ZHONG XIN WOOD — home">
            ZHONG XIN <span>WOOD</span>
          </Link>
        </div>

        <button
          type="button"
          className="site-nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav className={`site-nav${open ? " mobile-open" : ""}`}>
          <ul>
            {NAV_ITEMS.map((item) => (
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
