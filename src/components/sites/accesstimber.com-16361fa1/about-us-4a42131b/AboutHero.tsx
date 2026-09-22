import { assetPath } from "@/lib/site";

const IMG = assetPath("/sites/zhongxinwood");
const ABOUT_IMAGES = [
  { src: "timber/about-panel-1.jpg", alt: "Okoumé plywood sheets" },
  { src: "timber/about-panel-2.jpg", alt: "Okoumé plywood surface" },
  { src: "timber/about-panel-3.jpg", alt: "Plywood edge and timber layers" },
];

export function AboutHero() {
  return (
    <section className="au-hero">
      <div className="au-hero-gallery" aria-hidden="true">
        {ABOUT_IMAGES.map((image) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img key={image.src} src={`${IMG}/${image.src}`} alt={image.alt} />
        ))}
      </div>
      <div className="au-inner">
        <span className="au-label">Who We Are</span>
        <h1 className="au-title">About ZHONG XIN WOOD</h1>
        <p className="au-desc">
          A Gabon-based manufacturer and processor of Okoumé (Aucoumea
          klaineana Pierre) sawn timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood, supplying kiln-dried, FAS-grade
          lumber from our sawmill in GSEZ Nkok to buyers worldwide.
        </p>
      </div>
    </section>
  );
}
