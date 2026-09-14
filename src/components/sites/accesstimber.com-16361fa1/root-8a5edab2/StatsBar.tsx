const STATS = [
  { number: "25–70mm", label: "Custom Thickness" },
  { number: "KD", label: "Kiln Dried" },
  { number: "FAS", label: "Grade Standard" },
];

export function StatsBar() {
  return (
    <section className="at-stats">
      <div className="at-stats-grid">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="at-stat-number">{stat.number}</div>
            <div className="at-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
