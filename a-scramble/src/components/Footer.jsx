export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-a">A</span> Scramble
          <p>Production-in-a-Box &copy; {new Date().getFullYear()}</p>
        </div>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#value">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="footer-tagline">
          Cinema-Commerce for the Invisible Expert.
        </p>
      </div>
    </footer>
  );
}
