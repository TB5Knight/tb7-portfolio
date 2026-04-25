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

            <div className="contact__socials">
              <a href="https://github.com/TB5Knight" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="http://www.linkedin.com/in/tripp-burdgess7" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/tburdgess22" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="https://www.threads.com/@tburdgess22?igshid=NTc4MTIwNjQ2YQ==" className="social-icon" aria-label="Threads" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.583-1.3-.881-2.344-.887h-.012c-.797 0-1.548.213-2.097.776-.134.14-.249.294-.343.46l-1.807-.94c.206-.388.47-.74.784-1.05.75-.73 1.81-1.171 3.015-1.207l.463-.002c1.598.045 2.88.56 3.72 1.513.787.893 1.208 2.149 1.251 3.74.65.38 1.235.836 1.737 1.362 1.03 1.1 1.595 2.526 1.568 3.98-.03 1.663-.736 3.205-2.009 4.342C17.148 23.315 14.9 24 12.186 24zm-1.085-9.362c-.67.04-1.222.22-1.594.52-.298.245-.451.555-.43.898.02.351.208.657.537.865.394.255.944.387 1.573.35 1.023-.056 1.733-.49 2.177-1.328.264-.502.434-1.147.505-1.918a11.56 11.56 0 0 0-2.768-.387z"/>
                </svg>
              </a>
            </div>
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
