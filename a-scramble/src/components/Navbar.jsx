export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-a">A</span> Scramble
      </div>
      <ul className="navbar-links">
        <li><button onClick={() => scrollTo('about')}>About</button></li>
        <li><button onClick={() => scrollTo('services')}>Services</button></li>
        <li><button onClick={() => scrollTo('value')}>Why Us</button></li>
        <li><button onClick={() => scrollTo('contact')} className="nav-cta">Contact Us</button></li>
      </ul>
    </nav>
  );
}
