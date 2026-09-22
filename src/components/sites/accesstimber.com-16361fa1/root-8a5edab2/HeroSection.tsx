import { assetPath } from "@/lib/site";

const IMG = assetPath("/sites/zhongxinwood");
const HERO_IMAGES = [
  { src: "timber/hero-board-3.jpg", alt: "Okoumé sawn timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood stacks" },
  { src: "timber/hero-board-2.jpg", alt: "Stacked Okoumé timber boards" },
  { src: "timber/hero-board-1.jpg", alt: "Okoumé timber boards" },
];

export function HeroSection() {
  return (
    <section className="at-hero">
      <div className="at-hero-gallery" aria-hidden="true">
        {HERO_IMAGES.map((image) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img key={image.src} src={`${IMG}/${image.src}`} alt={image.alt} />
        ))}
      </div>
      <div className="at-hero-overlay">
        <p className="at-label">Professional Okoumé Sawn Timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood Supplier in Gabon</p>
        <h1 className="at-hero-title">
          <span>ZHONG</span>
          <span>XIN</span>
          <span>WOOD</span>
        </h1>
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
