const MAP_URL = "https://maps.app.goo.gl/mFiwZ9NGM6Q3QBwe9?g_st=awc";
const MAP_EMBED_URL = "https://www.google.com/maps?q=0.390571,9.604091&z=15&output=embed";

export function ExportContact() {
  return (
    <section className="el-section el-section-light">
      <div className="el-section-inner">
        <div className="el-contact-heading">
          <span className="el-label">Plan Your Shipment</span>
          <h2 className="el-heading">Start with your species, volume, and destination</h2>
          <p className="el-copy">
            Send us your required Okoumé specification and destination port.
            We will calculate the shipment details and return a quotation with
            the applicable documentation and Incoterm breakdown.
          </p>
        </div>
        <div className="el-contact-grid">
          <div className="el-map-wrap">
            <iframe
              title="Sawn Timber okoume plywood manufacturer zhongxin Wood Gabon location"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={MAP_URL} target="_blank" rel="noreferrer" className="el-map-link">
              Open in Google Maps ↗
            </a>
          </div>
          <div className="el-contact-card">
            <h3>ZHONG XIN WOOD</h3>
            <p className="el-contact-role">Sawn Timber okoume plywood manufacturer</p>
            <p>GSEZ Nkok, Gabon, Central Africa</p>
            <p>Okoumé sawn timber okoume plywood · KD · FAS Grade</p>
            <a href="mailto:ellena@zhongxinwoods.com" className="el-email">
              ellena@zhongxinwoods.com
            </a>
            <a href="https://wa.me/8618550484652" target="_blank" rel="noreferrer" className="el-contact-button">
              Request a Shipping Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
