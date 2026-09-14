import type { Metadata } from "next";
import { Header } from "@/components/sites/accesstimber.com-16361fa1/shared/Header";
import { ThemeFooter } from "@/components/sites/accesstimber.com-16361fa1/shared/ThemeFooter";
import { AboutContent, AboutCta } from "@/components/sites/accesstimber.com-16361fa1/about-us-4a42131b/AboutContent";
import { AboutHero } from "@/components/sites/accesstimber.com-16361fa1/about-us-4a42131b/AboutHero";

export const metadata: Metadata = {
  title: "About Us | Okoumé Sawn Timber Manufacturer – ZHONG XIN WOOD",
  description:
    "ZHONG XIN WOOD is a Gabon-based Okoumé (Aucoumea klaineana Pierre) sawn timber manufacturer in GSEZ Nkok. Kiln-dried, FAS grade, direct processing.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutContent />
        <AboutCta />
      </main>
      <ThemeFooter />
    </>
  );
}
