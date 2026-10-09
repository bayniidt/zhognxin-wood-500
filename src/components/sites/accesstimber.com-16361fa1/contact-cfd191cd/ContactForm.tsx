"use client";

import { assetPath } from "@/lib/site"
import { useTranslation } from "../shared/i18n"

const GALLERY_IMAGES = [
  "/my-self/Weixin Image_20261006175533_923_1370.jpg",
  "/my-self/Weixin Image_20261006175605_924_1370.jpg",
  "/my-self/Weixin Image_20261006175643_925_1370.jpg",
];

export function ContactForm() {
  const { t } = useTranslation();

  return (
    <section className="ct-form-card" aria-labelledby="contact-form-title">
      <div>
        <span className="ct-form-label">{t("formStart")}</span>
        <h2 id="contact-form-title">{t("formContactTitle")}</h2>
      </div>
      <div className="ct-gallery">
        {GALLERY_IMAGES.map((src, index) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={src}
            src={assetPath(src)}
            alt={`Contact gallery image ${index + 1}`}
            className="ct-gallery-img"
          />
        ))}
      </div>
    </section>
  );
}
