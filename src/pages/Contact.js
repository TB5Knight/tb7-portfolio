import { useState } from 'react';
import heroImage from '../img/hero-image.jpg';
import './Contact.css';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: wire up to your email service / backend
    if (form.name && form.email && form.message) {
      setStatus('success');
      setForm(initialForm);
    } else {
      setStatus('error');
    }
  };

  return (
    <main
      className="contact page-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.82), rgba(10,10,10,0.92)), url(${heroImage})`,
      }}
    >
      <div className="contact__container">
        <header className="page-header">
          <p className="page-header__tag">Let's talk</p>
          <h1 className="page-header__title">Contact</h1>
        </header>

        <div className="contact__layout">
          <div className="contact__info">
            <p className="contact__blurb">
              Have a project in mind, a question, or just want to say hello?
              I'd love to hear from you. Fill out the form and I'll get back to
              you as soon as possible.
            </p>
            <ul className="contact__details">
              <li>
                <span className="contact__detail-label">Email</span>
                <span className="contact__detail-value">ta116473@ucf.edu</span>
              </li>
              <li>
                <span className="contact__detail-label">Location</span>
                <span className="contact__detail-value">Orlando, FL</span>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            {status === 'success' && (
              <div className="form-banner form-banner--success">
                Message sent! I'll be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-banner form-banner--error">
                Please fill out all fields before submitting.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="What's on your mind?"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn--primary form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
