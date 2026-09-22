import { ContactContent } from "@/components/sites/accesstimber.com-16361fa1/contact-cfd191cd/ContactContent";
import { ContactHero } from "@/components/sites/accesstimber.com-16361fa1/contact-cfd191cd/ContactHero";
import { Header } from "@/components/sites/accesstimber.com-16361fa1/shared/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ZHONG XIN WOOD | Okoumé Sawn Timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood Enquiries",
  description:
    "Contact ZHONG XIN WOOD for Gabon Okoumé sawn timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood enquiries. Email, WhatsApp, or LinkedIn — we respond within 24 hours. Based in GSEZ Nkok, Gabon.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
    </>
  );
}
