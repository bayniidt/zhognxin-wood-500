const ITEMS = [
  {
    icon: "🌲",
    title: "Gabon Origin",
    text: "All our Okoumé is sourced and processed in Gabon, with full traceability from forest concession to shipment.",
  },
  {
    icon: "🏭",
    title: "Direct Processing",
    text: "Our GSEZ Nkok sawmill processes logs at origin, reducing intermediaries, cost and lead times.",
  },
  {
    icon: "🔥",
    title: "Kiln-Dried (KD)",
    text: "Controlled kiln drying delivers stable, moisture-controlled and export-ready sawn timber.",
  },
  {
    icon: "📏",
    title: "Custom Dimensions",
    text: "Standard 25 / 38 / 50 / 70 mm plus custom thicknesses cut to your exact specification.",
  },
  {
    icon: "✅",
    title: "Consistent Quality",
    text: "Strict quality control at every stage — from log selection and sawing to grading and sorting.",
  },
  {
    icon: "🚢",
    title: "Reliable Supply",
    text: "Regular, dependable supply shipped FOB from Gabon to buyers across Europe, the Middle East and Asia.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="at-section-green">
      <div className="at-section">
        <p className="at-label" style={{ textAlign: "center" }}>
          Why ZHONG XIN WOOD
        </p>
        <h2
          className="at-heading at-heading-white"
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          Why Choose Us
        </h2>
        <div className="at-why-grid">
          {ITEMS.map((item) => (
            <div className="at-why-item" key={item.title}>
              <div className="at-why-icon">{item.icon}</div>
              <div>
                <p className="at-why-title">{item.title}</p>
                <p className="at-why-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
