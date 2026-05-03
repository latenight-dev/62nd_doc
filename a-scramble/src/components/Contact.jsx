import { useState } from 'react';

const INITIAL = { name: '', email: '', phone: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Tell us a bit about your project.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Contact Us Now</h2>
          <p className="contact-blurb">
            Ready to stop being the best-kept secret in your city? Let's build
            your founder story together. Reach out — we move fast.
          </p>
          <ul className="contact-details">
            <li>
              <span className="contact-icon">📍</span> Hyper-local &amp; mobile — we come to you
            </li>
            <li>
              <span className="contact-icon">📺</span> YouTube: A Scramble Channel
            </li>
            <li>
              <span className="contact-icon">🤝</span> Local fashion pop-ups &amp; direct API
            </li>
          </ul>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div className="form-success">
              <span className="success-icon">✅</span>
              <h3>Message Received!</h3>
              <p>
                Thank you, <strong>{form.name}</strong>. We'll be in touch
                within 24 hours to start your project.
              </p>
              <button className="btn-primary" onClick={() => { setForm(INITIAL); setSubmitted(false); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">— Select a service —</option>
                  <option value="media-vault">Media-Vault Engine</option>
                  <option value="documentary">Cinematic Mini-Documentary</option>
                  <option value="lease">Agentic Lease Model</option>
                  <option value="mobile-kit">Mobile Production Kit</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Project *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your brand, what you sell, and what you're trying to achieve..."
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? 'input-error' : ''}
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-primary btn-full">
                Send My Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
