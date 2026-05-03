const problems = [
  {
    icon: '📋',
    title: 'No Client List Strategy',
    desc: 'You have the talent but no roadmap to build a loyal, recurring client base.',
  },
  {
    icon: '💸',
    title: 'Limited Funding & High Costs',
    desc: 'Professional media production is expensive and out of reach for most independent creators.',
  },
  {
    icon: '🚪',
    title: 'Missed Opportunities',
    desc: 'Great work goes unseen because it never reaches the right audience at the right time.',
  },
  {
    icon: '📈',
    title: 'Unsustainable Growth',
    desc: 'One viral post means nothing without systems that convert attention into long-term revenue.',
  },
  {
    icon: '🎯',
    title: 'Quality & Skill Gap',
    desc: 'Raw talent without polished storytelling leaves buyers unconvinced.',
  },
  {
    icon: '👻',
    title: 'Invisible Expertise',
    desc: 'Masters of their craft are dismissed as "just another so-and-so" instead of the go-to authority.',
  },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <p className="section-eyebrow">The Problem We Solve</p>
        <h2 className="section-title">Your Craft Deserves to Be Seen</h2>
        <p className="section-desc">
          Independent designers, sneaker collectors, and resale boutiques share
          one painful truth — <strong>the invisible expertise trap</strong>. You
          are masters of your craft, but the market doesn't know it yet.
        </p>
        <div className="problem-grid">
          {problems.map((p) => (
            <div key={p.title} className="problem-card">
              <span className="problem-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
