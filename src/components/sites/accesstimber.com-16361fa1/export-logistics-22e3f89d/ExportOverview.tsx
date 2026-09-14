export function ExportOverview() {
  return (
    <section className="el-section el-section-light">
      <div className="el-section-inner">
        <div className="el-two-column">
          <div>
            <span className="el-label">How We Ship</span>
            <h2 className="el-heading">A clear route from Gabon to your port</h2>
            <p className="el-copy">
              Zhongxin Wood processes Okoumé sawn timber at Sawn Timber
              manufacturer zhongxin Wood Gabon, located at GSEZ Nkok. We plan
              each order around the required species, grade, dimensions,
              volume, destination, and Incoterm.
            </p>
            <p className="el-copy">
              FOB planning covers the shipment through the port of loading.
              CIF planning can include ocean freight and cargo insurance to
              your nominated destination. The final quotation is calculated
              from your confirmed volume, packing requirements, and port.
            </p>
          </div>
          <div className="el-route-card">
            <div className="el-route-point">
              <strong>Origin</strong>
              <span>GSEZ Nkok, Gabon</span>
            </div>
            <div className="el-route-line" aria-hidden="true" />
            <div className="el-route-point">
              <strong>Port planning</strong>
              <span>Owendo / Libreville</span>
            </div>
            <div className="el-route-line" aria-hidden="true" />
            <div className="el-route-point">
              <strong>Destination</strong>
              <span>Your nominated port</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
