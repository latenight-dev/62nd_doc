const metrics = [
  { value: '10 min', label: 'Cinema-Commerce turnaround' },
  { value: '3', label: 'Core customer segments served' },
  { value: '2×', label: 'Revenue streams per project' },
  { value: '100%', label: 'Mobile, on-location production' },
];

const advantages = [
  {
    title: 'Journalistic Storytelling',
    desc: 'We use real interview techniques to uncover the human story inside every business — not a scripted ad.',
  },
  {
    title: 'Air-Brushed Creative IP',
    desc: 'A unique visual identity that blends cinematic aesthetics with commerce-ready content.',
  },
  {
    title: 'More Affordable Than Agencies',
    desc: "Flexible lease-based pricing means you don't pay a fortune upfront — we grow when you grow.",
  },
  {
    title: 'Fastest Turnaround',
    desc: 'Receive finished, publish-ready content the same day or within days — not weeks.',
  },
];

export default function Value() {
  return (
    <section id="value" className="section value-section">
      <div className="container">
        <p className="section-eyebrow">Why A Scramble</p>
        <h2 className="section-title">Our Unfair Advantage</h2>

        <div className="metrics-row">
          {metrics.map((m) => (
            <div key={m.label} className="metric-card">
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="advantages-grid">
          {advantages.map((a) => (
            <div key={a.title} className="advantage-card">
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="value-quote">
          "We help artisans achieve exposure by translating the raw reality of
          their business into a story narrative that expresses their skills and
          master craftsmanship."
        </blockquote>
      </div>
    </section>
  );
}
