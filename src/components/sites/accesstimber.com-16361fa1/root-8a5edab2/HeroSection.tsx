const IMG = "/sites/zhongxinwood";

export function HeroSection() {
  return (
    <section className="at-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="at-hero-img"
        src={`${IMG}/timber/massive-log-forest.jpg`}
        alt="Premium tropical hardwood log — ZHONG XIN WOOD"
      />
      <div className="at-hero-overlay">
        <p className="at-label">Professional Okoumé Sawn Timber Supplier in Gabon</p>
        <h1 className="at-hero-title">ZHONG XIN WOOD</h1>
        <p className="at-hero-subtitle">
          Okoumé (Aucoumea klaineana Pierre) · Kiln-Dried (KD) · FAS Grade ·
          Gabon Origin · Direct Processing
        </p>
        <a href="#contact" className="at-hero-btn">
          Request a Quote
        </a>
      </div>
    </section>
  );
}
