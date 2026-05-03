const services = [
  {
    num: '01',
    title: 'Media-Vault Engine',
    desc: 'While we film, our system identifies your "basics" — sneakers, clothes, products — and builds storefront metadata instantly. You receive a finished, shoppable product before we leave the shoot.',
    tags: ['Videography', 'Auto-Tagging', 'Shop-the-Look'],
  },
  {
    num: '02',
    title: 'Cinematic Mini-Documentary',
    desc: 'Raw, high-impact storytelling that humanizes your brand. Unlike polished agency ads that viewers skip, our founder-authority films create emotional connection and trust.',
    tags: ['Brand Story', 'Cinematography', 'Editing'],
  },
  {
    num: '03',
    title: 'Agentic Lease Model',
    desc: 'No big upfront fee. We provide your media as a "lease" — our AI agent tracks sales generated from your YouTube and blog content, giving us a long-term revenue share.',
    tags: ['Revenue Share', 'AI Tracking', 'Blog/Video Metadata'],
  },
  {
    num: '04',
    title: 'Mobile Production Kit',
    desc: 'We come to you. Our hyper-local, mobile-first production kit means professional cinema-quality content anywhere — pop-ups, studios, storefronts.',
    tags: ['On-Location', 'Pop-Ups', 'Fast Turnaround'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <p className="section-eyebrow">What We Offer</p>
        <h2 className="section-title">Production-in-a-Box Services</h2>
        <p className="section-desc">
          Cinema-Commerce in 10 minutes. Automated tagging + professional
          storytelling — built for independent fashion designers, rare sneaker
          collectors, and local resale boutiques.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              <span className="service-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
