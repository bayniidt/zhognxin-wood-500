import Link from "next/link";
import { assetPath } from "@/lib/site";

const IMG = assetPath("/sites/zhongxinwood");

const PRODUCTS = [
  {
    name: "Okoumé Sawn Timber",
    img: "timber/product-okoume-logs.jpg",
    alt: "Okoumé logs stacked at a timber facility",
    desc: "Kiln-dried (KD), FAS grade, Gabon origin. The core of our range for furniture, joinery and doors.",
  },
  {
    name: "Kiln-Dried (KD) Okoumé",
    img: "timber/product-okoume-board.jpg",
    alt: "Okoumé sawn board surface",
    desc: "Moisture-controlled, stable and export-ready sawn timber with dependable quality.",
  },
  {
    name: "FAS Grade Okoumé",
    img: "timber/product-okoume-stacks.jpg",
    alt: "Wrapped stacks of Okoumé sawn timber",
    desc: "Premium clear grade for high-end furniture, interior joinery and door manufacturing.",
  },
  {
    name: "Custom Thickness",
    img: "timber/product-okoume-sawn.jpg",
    alt: "Okoumé boards stacked on pallets",
    desc: "Standard 25 / 38 / 50 / 70 mm plus customized specifications to your exact requirements.",
  },
  {
    name: "Okoumé Wood",
    img: "timber/product-okoume-blocks.jpg",
    alt: "Stacked Okoumé timber blocks",
    desc: "Light, even-textured hardwood — the global standard for plywood, mouldings and panelling.",
  },
  {
    name: "Gabon Sawmill Processing",
    img: "timber/product-okoume-container.jpg",
    alt: "Okoumé timber being loaded into a container",
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
