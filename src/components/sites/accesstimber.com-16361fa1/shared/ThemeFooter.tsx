import Link from "next/link";
import { BusinessLocation } from "./BusinessLocation";
import { assetPath } from "@/lib/site";

const BRAND_IMG = assetPath("/sites/zhongxinwood/logo.jpg");

export function ThemeFooter() {
  return (
    <>
      <BusinessLocation />
      <footer className="theme-footer">
        <div className="theme-footer-inner">
          <div className="theme-footer-brand">
            <Link href="/" className="theme-footer-logo" aria-label="ZHONG XIN WOOD — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BRAND_IMG} alt="ZHONG XIN WOOD" width={20} height={21} />
            </Link>
            <p className="theme-footer-title">
              <Link href="/">ZHONG XIN WOOD</Link>
            </p>
            <p className="theme-footer-tagline">
              Professional Okoumé Sawn Timber Supplier
            </p>
          </div>
          <p className="theme-footer-copyright">
            © 2026 ZHONG XIN WOOD. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
