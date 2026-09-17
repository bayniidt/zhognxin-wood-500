const DOCUMENTS = [
  "Commercial Invoice",
  "Packing List",
  "Bill of Lading",
  "Certificate of Origin",
  "Phytosanitary Certificate",
  "FSC",
  "EUDR",
  "EUTR",
];

export function ExportDocuments() {
  return (
    <section className="el-section el-section-gray">
      <div className="el-section-inner">
        <div className="el-two-column el-documents-layout">
          <div>
            <span className="el-label">Export Documentation</span>
            <h2 className="el-heading">The paperwork your shipment needs</h2>
            <p className="el-copy">
              We align the documentary package with the destination and the
              agreed shipment terms. For EU-destined orders, ask us about the
              traceability information needed for your due-diligence process.
            </p>
          </div>
          <ul className="el-document-list">
            {DOCUMENTS.map((document) => (
              <li key={document}>{document}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
