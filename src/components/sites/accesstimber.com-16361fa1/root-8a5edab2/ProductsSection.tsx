import { assetPath } from "@/lib/site";
import Link from "next/link";
import { ProductImageGallery } from "./ProductImageGallery";

const IMG = assetPath("/sites/zhongxinwood");

const PRODUCTS = [
  {
    name: "Okoumé Sawn Timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood",
    img: "timber/product-okoume okan. Dabema. Azobe. movingui (& other African hardwoods)-logs.jpg",
    alt: "Okoumé logs stacked at a timber facility",
    desc: "Kiln-dried (KD), FAS grade, Gabon origin. The core of our range for furniture, joinery and doors.",
  },
  {
    name: "Kiln-Dried (KD) Okoumé",
    img: "timber/product-okoume okan. Dabema. Azobe. movingui (& other African hardwoods)-board.jpg",
    alt: "Okoumé sawn board surface",
    desc: "Moisture-controlled, stable and export-ready sawn timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood with dependable quality.",
  },
  {
    name: "FAS Grade Okoumé",
    img: "timber/product-okoume okan. Dabema. Azobe. movingui (& other African hardwoods)-stacks.jpg",
    alt: "Wrapped stacks of Okoumé sawn timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood",
    desc: "Premium clear grade for high-end furniture, interior joinery and door manufacturing.",
  },
  {
    name: "Custom Thickness",
    img: "timber/product-okoume okan. Dabema. Azobe. movingui (& other African hardwoods)-sawn.jpg",
    alt: "Okoumé boards stacked on pallets",
    img2: "timber/product-custom-thickness-2.jpg",
    alt2: "Custom-sized plywood sheets",
    desc: "Standard 25 / 38 / 50 / 70 mm plus customized specifications to your exact requirements.",
  },
  {
    name: "Okoumé Wood",
    img: "timber/product-okoume okan. Dabema. Azobe. movingui (& other African hardwoods)-blocks.jpg",
    alt: "Stacked Okoumé timber blocks",
    desc: "Lightweight, low density & dimensionally stable, resistant to deformation. Attractive colour with straight, even grain. The top choice for furniture & decoration.",
  },
  {
    name: "Gabon Sawmill Processing",
    img: "timber/product-okoume okan. Dabema. Azobe. movingui (& other African hardwoods)-container.jpg",
    alt: "Okoumé timber being loaded into a container",
    desc: "Timber sawn, kiln-dried, graded and container-loaded on-site at our GSEZ Nkok mill, Gabon.",
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
          Premium Okoumé (okoume okan. Dabema. Azobe. movingui (& other African hardwoods)) Sawn Timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood
        </h2>
        <p
          className="at-body"
          style={{ textAlign: "center", maxWidth: 650, margin: "0 auto 40px" }}
        >
          Kiln-dried FAS Grade | GSEZ Nkok, Gabon
          <br />
          Standard &amp; custom sizes | Global shipment
          <br />
          Trade terms: EXW, FOB, CNF, CIF
        </p>
        <div className="at-species-grid">
          {PRODUCTS.map((product) => (
            <div className="at-species-card" key={product.name}>
              <ProductImageGallery
                images={[
                  { src: `${IMG}/${product.img}`, alt: product.alt },
                  ...(product.img2 && product.alt2
                    ? [{ src: `${IMG}/${product.img2}`, alt: product.alt2 }]
                    : []),
                ]}
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
