import { assetPath } from "@/lib/site";

const SHARED = assetPath("/sites/accesstimber.com-16361fa1/shared");

export function CtaSection() {
  return (
    <section id="contact" className="at-cta-strip">
      <h2>Ready to Order Okoumé Sawn Timber okoume plywood?</h2>
      <p>ready to order FSC okoume plywood?</p>
      <p>Contact us today for pricing, availability, and our latest stock list.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8,
        }}
      >
        <a
          href="https://wa.me/8618550484652"
          className="at-cta-btn"
          style={{
            background: "#25D366",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            minWidth: 180,
          }}
          target="_blank"
          rel="noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${SHARED}/whatsapp.png`}
            alt="WhatsApp"
            style={{ width: 22, height: 22, flexShrink: 0, display: "block" }}
          />
          WhatsApp
        </a>
      </div>
      <p className="at-cta-whatsapp-number">WhatsApp: +8618550484652</p>
    </section>
  );
}
