import Link from "next/link";

const CARDS = [
  {
    icon: "🎯",
    title: "Our Mission",
    text: "Supply the highest quality Gabon Okoumé sawn timber okoume plywood at competitive prices, with full traceability and consistent quality in every shipment.",
  },
  {
    icon: "🏭",
    title: "Direct Processing",
    text: "We process Okoumé logs directly at our GSEZ Nkok sawmill in Gabon, reducing intermediaries and delivering better value to our buyers.",
  },
  {
    icon: "📏",
    title: "Kiln-Dried & Graded",
    text: "Controlled kiln drying and FAS grading to international standards — 25 / 38 / 50 / 70 mm and custom specifications.",
  },
  {
    icon: "🗣️",
    title: "Bilingual Service",
    text: "We operate fluently in English and French, bridging the gap between international buyers and Gabon's francophone timber industry.",
  },
];

export function AboutContent() {
  return (
    <div className="au-section">
      <div className="au-lead">
        <h2>About ZHONG XIN WOOD</h2>
        <p>
          ZHONG XIN WOOD is a professional Okoumé (Aucoumea klaineana Pierre)
          sawn timber okoume plywood manufacturer and processor, based in{" "}
          <strong>GSEZ Nkok, Gabon</strong>. We process Gabon-origin Okoumé
          directly at source, offering kiln-dried sawn timber okoume plywood with reliable
          quality, traceability and regular supply for importers, sawmills and
          construction companies worldwide.
        </p>
        <p>
          We operate a demand-first production model. Rather than holding
          speculative stock, we work closely with buyers to understand their
          exact specifications — grade, thickness, volume — and process
          accordingly at our Gabon sawmill. This model keeps our prices
          competitive and our supply flexible.
        </p>
      </div>

      <div className="au-grid">
        {CARDS.map((card) => (
          <div className="au-card" key={card.title}>
            <div className="au-card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="au-highlight">
        <h2>Our Core Product</h2>
        <p>
          <strong>Okoumé Sawn Timber okoume plywood</strong> — Scientific name: Aucoumea
          klaineana Pierre. Origin: Gabon, Central Africa. Kiln-Dried (KD),
          FAS and other grades available. Thickness: 25 / 38 / 50 / 70 mm and
          customized specifications.
        </p>
        <p>okoume plywood: thickness and size customized. stable quality good price export service</p>
        <p>
          Applications include furniture, joinery, doors, interior decoration,
          plywood and other wood products. We trade on FOB and CIF Incoterms,
          with full export documentation included in every shipment.
        </p>
      </div>

      <div className="au-founder">
        <div className="au-founder-avatar">🏭</div>
        <div>
          <h2>Sawmill &amp; okoume plywood Quality Control</h2>
          <p className="role">GSEZ Nkok · Gabon</p>
          <p>
            From log selection and sawing to kiln drying, sorting and container
            loading, we maintain strict quality control throughout the
            production process to ensure stable quality and dependable supply.
            Direct from our Gabon sawmill to your market.
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutCta() {
  return (
    <section className="au-cta">
      <h2>Ready to Work Together?</h2>
      <p>
        Contact our team to discuss your Okoumé sawn timber okoume plywood requirements and
        receive a detailed quotation within 24 hours.
      </p>
      <Link href="/contact/" className="au-cta-btn">
        Get in Touch
      </Link>
      <Link
        href="/#products"
        className="au-cta-btn"
        style={{ background: "transparent", border: "2px solid #F5A623", color: "#F5A623" }}
      >
        View Our Products
      </Link>
    </section>
  );
}
