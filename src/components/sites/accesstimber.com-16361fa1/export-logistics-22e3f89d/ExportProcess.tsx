const PROCESS_STEPS = [
  ["01", "Order Confirmation", "Confirm Okoumé grade, dimensions, volume, destination, and Incoterm."],
  ["02", "Production Planning", "We schedule processing at our GSEZ Nkok facility to your agreed specification."],
  ["03", "Quality Control", "Dimensions, moisture content, and surface quality are checked before packing."],
  ["04", "Export Documents", "We prepare the commercial invoice, packing list, origin and phytosanitary documents."],
  ["05", "Container Loading", "20ft or 40ft loading is planned to use space efficiently and protect the cargo."],
  ["06", "Shipping Handover", "Once the vessel departs, we share the bill of lading and available tracking details."],
] as const;

export function ExportProcess() {
  return (
    <section className="el-section el-section-green">
      <div className="el-section-inner">
        <div className="el-section-heading el-section-heading-centered">
          <span className="el-label">From Mill to Port</span>
          <h2 className="el-heading el-heading-white">Our export process</h2>
        </div>
        <div className="el-process-grid">
          {PROCESS_STEPS.map(([number, title, copy]) => (
            <article className="el-process-card" key={number}>
              <span className="el-step-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
