import { assetPath } from "@/lib/site";

const IMG = assetPath("/sites/zhongxinwood");

export function AboutSection() {
  return (
    <section className="at-section-white">
      <div className="at-section">
        <div className="at-about-grid">
          <div>
            <p className="at-label">Who We Are</p>
            <h2 className="at-heading">
              Professional Okoumé (okoume) Sawn Timber okoume plywood Manufacturer in Gabon
            </h2>
            <p className="at-body">
              ZHONG XIN WOOD is a professional Okoumé (Aucoumea klaineana
              Pierre) sawn timber okoume plywood (sawnmill lumber) manufacturer and processor, based in GSEZ
              Nkok, Gabon. We process Gabon-origin Okoumé directly at source,
              offering kiln-dried sawn timber okoume plywood with reliable quality,
              traceability and regular supply.
            </p>
            <p className="at-body" style={{ marginTop: 16 }}>
              From log selection and sawing to kiln drying, sorting and
              container loading, we maintain strict quality control throughout
              the production process to ensure stable quality and dependable
              supply.
            </p>
            <a href="#contact" className="at-hero-btn" style={{ marginTop: 24, display: "inline-block" }}>
              Contact Us
            </a>
          </div>
          <div className="at-about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/timber/about-stacked-pallet.jpg`} alt="Wrapped stack of Okoumé sawn timber okoume plywood ready for shipment" />
          </div>
        </div>
      </div>
    </section>
  );
}
