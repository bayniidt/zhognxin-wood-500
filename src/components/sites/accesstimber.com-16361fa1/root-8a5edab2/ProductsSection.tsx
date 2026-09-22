"use client";

import { assetPath } from "@/lib/site";
import Link from "next/link";
import { useTranslation } from "../shared/i18n";
import { ProductImageGallery } from "./ProductImageGallery";

const IMG = assetPath("/sites/zhongxinwood");

const PRODUCTS = [
  {
    nameKey: "productOkoumeName",
    img: "timber/product-okoume-logs.jpg",
    altKey: "productOkoumeAlt",
    descKey: "productOkoumeDesc",
  },
  {
    nameKey: "productKilnName",
    img: "timber/product-okoume-board.jpg",
    altKey: "productKilnAlt",
    descKey: "productKilnDesc",
  },
  {
    nameKey: "productFasName",
    img: "timber/product-okoume-stacks.jpg",
    altKey: "productFasAlt",
    descKey: "productFasDesc",
  },
  {
    nameKey: "productCustomName",
    img: "timber/product-okoume-sawn.jpg",
    altKey: "productCustomAlt",
    altTwoKey: "productCustomAltTwo",
    img2: "timber/product-custom-thickness-2.jpg",
    descKey: "productCustomDesc",
  },
  {
    nameKey: "productWoodName",
    img: "timber/product-okoume-blocks.jpg",
    altKey: "productWoodAlt",
    descKey: "productWoodDesc",
  },
  {
    nameKey: "productMillName",
    img: "timber/product-okoume-container.jpg",
    altKey: "productMillAlt",
    descKey: "productMillDesc",
  },
] as const;

export function ProductsSection() {
  const { t } = useTranslation();

  return (
    <section className="at-section-gray" id="products">
      <div className="at-section">
        <p className="at-label" style={{ textAlign: "center" }}>{t("ourProducts")}</p>
        <h2 className="at-heading" style={{ textAlign: "center" }}>{t("productsTitle")}</h2>
        <p className="at-body" style={{ textAlign: "center", maxWidth: 650, margin: "0 auto 40px" }}>
          {t("productsIntro")}<br />
          {t("productsIntroTwo")}<br />
          {t("productsIntroThree")}
        </p>
        <div className="at-species-grid">
          {PRODUCTS.map((product) => {
            const images = [
              { src: `${IMG}/${product.img}`, alt: t(product.altKey) },
              ...("img2" in product && "altTwoKey" in product && product.img2 && product.altTwoKey
                ? [{ src: `${IMG}/${product.img2}`, alt: t(product.altTwoKey) }]
                : []),
            ];

            return (
              <div className="at-species-card" key={product.nameKey}>
                <ProductImageGallery images={images} />
                <div className="at-species-card-body">
                  <p className="at-species-name">{t(product.nameKey)}</p>
                  <p className="at-species-desc">{t(product.descKey)}</p>
                  <Link href="/contact/" className="at-species-btn">{t("enquireNow")}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
