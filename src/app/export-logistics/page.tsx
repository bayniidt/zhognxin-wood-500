import type { Metadata } from "next";
import { Header } from "@/components/sites/accesstimber.com-16361fa1/shared/Header";
import { ThemeFooter } from "@/components/sites/accesstimber.com-16361fa1/shared/ThemeFooter";
import { ExportContact } from "@/components/sites/accesstimber.com-16361fa1/export-logistics-22e3f89d/ExportContact";
import { ExportDocuments } from "@/components/sites/accesstimber.com-16361fa1/export-logistics-22e3f89d/ExportDocuments";
import { ExportHero } from "@/components/sites/accesstimber.com-16361fa1/export-logistics-22e3f89d/ExportHero";
import { ExportOverview } from "@/components/sites/accesstimber.com-16361fa1/export-logistics-22e3f89d/ExportOverview";
import { ExportProcess } from "@/components/sites/accesstimber.com-16361fa1/export-logistics-22e3f89d/ExportProcess";

export const metadata: Metadata = {
  title: "Export & Logistics | ZHONG XIN WOOD – Gabon",
  description:
    "Plan your Okoumé sawn timber shipment from ZHONG XIN WOOD at GSEZ Nkok, Gabon, with FOB or CIF options and export documentation.",
};

export default function ExportLogisticsPage() {
  return (
    <>
      <Header />
      <main>
        <ExportHero />
        <ExportOverview />
        <ExportProcess />
        <ExportDocuments />
        <ExportContact />
      </main>
      <ThemeFooter />
    </>
  );
}
