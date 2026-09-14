type ContactItem = {
  icon: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const DETAILS: ContactItem[] = [
  {
    icon: "👤",
    label: "Contact",
    value: "ELLENA — Marketing Director",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+86 185 5048 4652",
    href: "https://wa.me/8618550484652",
  },
  {
    icon: "💚",
    label: "WeChat",
    value: "18550484652",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@zhongxinwood.com",
    href: "mailto:info@zhongxinwood.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "ZHONG XIN WOOD",
    href: "https://www.linkedin.com/company/zhongxinwood/",
    external: true,
  },
  {
    icon: "🌐",
    label: "Website",
    value: "www.zhongxinwood.com",
    href: "https://www.zhongxinwood.com",
  },
];

const QUOTE_POINTS = [
  "Species: Okoumé (Aucoumea klaineana Pierre)",
  "Product form: sawn timber (logs on request)",
  "Grade: FAS, KD or other specification",
  "Dimensions: thickness × width × length (mm)",
  "Volume: in m³ or number of containers",
  "Destination port (for CIF) or FOB",
  "Preferred payment terms",
];

const HOURS = [
  { day: "Monday – Friday", hours: "08:00 – 18:00" },
  { day: "Saturday", hours: "09:00 – 14:00 (WhatsApp only)" },
  { day: "Sunday", hours: "Closed" },
];

const SERVE = [
  "Hardwood importers and distributors",
  "Sawmills and timber processing companies",
  "Plywood and panel manufacturers",
  "Furniture and joinery manufacturers",
  "Construction contractors and project developers",
  "Door and interior decoration producers",
  "Marine and civil engineering firms",
];

const REG = [
  { label: "Company Name", value: "ZHONG XIN WOOD" },
  { label: "Location", value: "GSEZ Nkok, Gabon" },
  { label: "Product", value: "Okoumé Sawn Timber" },
  { label: "Origin", value: "Gabon, Central Africa" },
];

export function ContactContent() {
  return (
    <div className="ct-section">
      <div className="ct-grid">
        <div className="ct-details">
          <h2>Contact Details</h2>
          {DETAILS.map((item) => (
            <div className="ct-item" key={item.label}>
              <span className="ct-item-icon">{item.icon}</span>
              <div>
                <div className="ct-item-label">{item.label}</div>
                <div className="ct-item-value">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ct-quote">
          <h2>Request a Quote</h2>
          <p>
            To help us prepare an accurate quotation, please include the
            following in your enquiry:
          </p>
          <ul>
            {QUOTE_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a href="mailto:info@zhongxinwood.com" className="ct-quote-btn">
            Email Us Now
          </a>
        </div>
      </div>

      <div className="ct-hours">
        <h2>Office Hours</h2>
        <table className="ct-hours-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours (GMT / Gabon)</th>
            </tr>
          </thead>
          <tbody>
            {HOURS.map((row) => (
              <tr key={row.day}>
                <td className="day">{row.day}</td>
                <td>{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ color: "#5a7a6a", fontSize: "0.9rem", margin: "16px 0 0" }}>
          WhatsApp messages are monitored outside office hours for urgent
          enquiries.
        </p>
      </div>

      <div className="ct-serve">
        <h2>Who Should Contact Us?</h2>
        <ul className="ct-serve-list">
          {SERVE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="ct-reg">
        <h2>Company Information</h2>
        <div className="ct-reg-info">
          {REG.map((item) => (
            <div className="ct-reg-item" key={item.label}>
              <div className="ct-reg-label">{item.label}</div>
              <div className="ct-reg-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
