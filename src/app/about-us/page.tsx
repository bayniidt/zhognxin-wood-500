import { AboutContent, AboutCta } from "@/components/sites/accesstimber.com-16361fa1/about-us-4a42131b/AboutContent";
import { AboutHero } from "@/components/sites/accesstimber.com-16361fa1/about-us-4a42131b/AboutHero";
import { Header } from "@/components/sites/accesstimber.com-16361fa1/shared/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Okoumé Sawn Timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood Manufacturer – ZHONG XIN WOOD",
  description:
    "ZHONG XIN WOOD is a Gabon-based Okoumé (Aucoumea klaineana Pierre) sawn timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood manufacturer in GSEZ Nkok. Kiln-dried, FAS grade, direct processing.",
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
    </>
  );
}
