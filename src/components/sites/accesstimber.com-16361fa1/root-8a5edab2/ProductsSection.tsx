import Link from "next/link";
import { assetPath } from "@/lib/site";

const IMG = assetPath("/sites/zhongxinwood");

const PRODUCTS = [
  {
    name: "Okoumé Sawn Timber",
    img: "timber/squared-lumber-mill.jpg",
    alt: "Squared tropical hardwood lumber at a West African sawmill",
    desc: "Kiln-dried (KD), FAS grade, Gabon origin. The core of our range for furniture, joinery and doors.",
  },
  {
    name: "Kiln-Dried (KD) Okoumé",
    img: "timber/mahogany-stacks.jpg",
    alt: "Stacked hardwood boards awaiting inspection",
    desc: "Moisture-controlled, stable and export-ready sawn timber with dependable quality.",
  },
  {
    name: "FAS Grade Okoumé",
    img: "timber/wood-endgrain.jpg",
    alt: "Clean tropical hardwood end grain",
    desc: "Premium clear grade for high-end furniture, interior joinery and door manufacturing.",
  },
  {
    name: "Custom Thickness",
    img: "timber/container-loading.jpg",
    alt: "Sawn timber in custom thicknesses ready for export",
    desc: "Standard 25 / 38 / 50 / 70 mm plus customized specifications to your exact requirements.",
  },
  {
    name: "Okoumé Wood",
    img: "timber/forest-log-landing.jpg",
    alt: "Premium tropical hardwood log at a forest landing",
    desc: "Light, even-textured hardwood — the global standard for plywood, mouldings and panelling.",
  },
  {
    name: "Gabon Sawmill Processing",
    img: "timber/log-truck-forest.jpg",
    alt: "Log truck moving harvested hardwood to the mill",
    desc: "Sawn, dried, sorted and container-loaded directly at our GSEZ Nkok facility in Gabon.",
  },
];

export function ProductsSection() {
  return (
    <section className="at-section-gray" id="products">
      <div className="at-section">
        <p className="at-label" style={{ textAlign: "center" }}>
          Our Products
        </p>
        <h2 className="at-heading" style={{ textAlign: "center" }}>
          Premium Okoumé Sawn Timber
        </h2>
        <p
          className="at-body"
          style={{ textAlign: "center", maxWidth: 650, margin: "0 auto 40px" }}
        >
          Kiln-dried, FAS-grade Gabon Okoumé — available in standard and custom
          thicknesses, processed at our GSEZ Nkok sawmill and shipped worldwide
          on FOB terms.
        </p>
        <div className="at-species-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {PRODUCTS.map((product) => (
            <div className="at-species-card" key={product.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="at-species-card-img"
                src={`${IMG}/${product.img}`}
                alt={product.alt}
              />
              <div className="at-species-card-body">
                <p className="at-species-name">{product.name}</p>
                <p className="at-species-desc">{product.desc}</p>
                <Link href="/contact/" className="at-species-btn">
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
