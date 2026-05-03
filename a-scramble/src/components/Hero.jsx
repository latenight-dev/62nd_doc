export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Cinema-Commerce in 10 Minutes</p>
        <h1 className="hero-title">
          <span className="brand-a">A</span> Scramble
          <br />
          <span className="hero-subtitle">Production-in-a-Box</span>
        </h1>
        <p className="hero-tagline">
          We translate the raw reality of your business into a story narrative
          that expresses your skills and master craftsmanship.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Get Started
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('services')}>
            Our Services
          </button>
        </div>
      </div>
      <div className="hero-scroll-hint">↓ Scroll to explore</div>
    </section>
  );
}
