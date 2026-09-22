"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "../shared/i18n";

type ProductImage = {
  src: string;
  alt: string;
};

export function ProductImageGallery({ images }: { images: ProductImage[] }) {
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!selectedImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedImage]);

  return (
    <>
      <div className="at-species-card-images">
        {images.map((image) => (
          <button
            type="button"
            className="at-species-image-button"
            key={image.src}
            onClick={() => setSelectedImage(image)}
            aria-label={t("imageEnlarge", { alt: image.alt })}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="at-species-card-img" src={image.src} alt={image.alt} />
            <span className="at-image-zoom-hint" aria-hidden="true">+</span>
          </button>
        ))}
      </div>

      {selectedImage && typeof document !== "undefined" && createPortal(
        <div
          className="at-image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="at-image-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label={t("imageClose")}
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="at-image-lightbox-image"
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>,
        document.body,
      )}
    </>
  );
}
