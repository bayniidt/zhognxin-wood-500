const MAP_URL = "https://maps.app.goo.gl/mFiwZ9NGM6Q3QBwe9?g_st=awc";
const MAP_EMBED_URL = "https://www.google.com/maps?q=0.390571,9.604091&z=15&output=embed";

export function BusinessLocation() {
  return (
    <section className="business-location" aria-labelledby="business-location-title">
      <div className="business-location-inner">
        <div>
          <p className="business-location-label">Our Location</p>
          <h2 id="business-location-title">Find ZHONG XIN WOOD</h2>
          <p>Libreville GSEZ Nkok, Gabon, Central Africa</p>
        </div>
        <div className="business-location-map">
          <iframe
            title="ZHONG XIN WOOD location in GSEZ Nkok, Gabon"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href={MAP_URL} target="_blank" rel="noreferrer">
            Open in Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}
