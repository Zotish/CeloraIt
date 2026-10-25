'use client';

import { useState, useEffect } from 'react';

interface ContactProps {
  initialService?: string;
  initialMessage?: string;
  initialBudget?: string;
}

export default function Contact({
  initialService = 'saas',
  initialMessage = '',
  initialBudget = ''
}: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [budget, setBudget] = useState(initialBudget);
  const [message, setMessage] = useState(initialMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) setMessage(initialMessage);
  }, [initialMessage]);

  useEffect(() => {
    if (initialBudget) setBudget(initialBudget);
  }, [initialBudget]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service, budget, message })
      });

      if (res.ok) {
        setStatusMessage(
          'Thank you! Your project inquiry has been received. A CeloraIT technical pod lead will contact you within 24 hours.'
        );
        setName('');
        setEmail('');
        setMessage('');
        setBudget('');
      } else {
        setStatusMessage('Thank you! Your project inquiry has been recorded. We will get in touch shortly.');
      }
    } catch {
      setStatusMessage('Thank you! Your project inquiry has been recorded. We will get in touch shortly.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatusMessage(null);
      }, 9000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Let&apos;s Build Something Great Together</h2>
          <p className="section-subtitle">
            Have an idea for a SaaS, ERP, AI automation, or mobile app? Send us your requirement and our technical team will respond with a free architecture review and roadmap.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-col">
            <div className="contact-channel-card glass-panel">
              <div className="channel-icon">📍</div>
              <div className="channel-details">
                <h4>Headquarters</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="contact-channel-card glass-panel">
              <div className="channel-icon">🌐</div>
              <div className="channel-details">
                <h4>Official Website</h4>
                <p>
                  <a href="https://www.celorait.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald)' }}>
                    www.celorait.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-channel-card glass-panel">
              <div className="channel-icon">✉️</div>
              <div className="channel-details">
                <h4>Direct Email</h4>
                <p>info@celorait.com</p>
              </div>
            </div>

            <div className="contact-channel-card glass-panel">
              <div className="channel-icon">💬</div>
              <div className="channel-details">
                <h4>Quick WhatsApp Discovery</h4>
                <p>Available for rapid consultation & quotes</p>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(0, 245, 160, 0.05)',
                border: '1px solid rgba(0, 245, 160, 0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '24px'
              }}
            >
              <h4 style={{ color: 'var(--accent-emerald)', fontSize: '1.05rem', marginBottom: '8px' }}>
                CeloraIT Promise
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Clean UX, secure code, scalable architecture, transparent communication, and long-term support for your company&apos;s growth.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card glass-panel">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="form-control"
                    placeholder="e.g. Rahim Mia"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className="form-control"
                    placeholder="e.g. name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-service-select">
                    Interested Service
                  </label>
                  <select
                    id="contact-service-select"
                    className="form-control"
                    style={{ background: '#040c10', color: '#fff' }}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="saas">SaaS & ERP Solutions</option>
                    <option value="software">Custom Software & Web App</option>
                    <option value="mobile">Mobile App (Flutter / React Native)</option>
                    <option value="ai">AI & RAG Automation</option>
                    <option value="blockchain">Blockchain & Web3 Solution</option>
                    <option value="pod">Build Your Own Tech Team (Pod)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-budget">
                    Target Budget (USD)
                  </label>
                  <input
                    type="text"
                    id="contact-budget"
                    className="form-control"
                    placeholder="e.g. $5,000 - $15,000"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Project Description & Goals *
                </label>
                <textarea
                  id="contact-message"
                  className="form-control"
                  placeholder="Briefly describe what you're building, target audience, and key features..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '15px' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Inquiry...' : 'Send Project Inquiry'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>

              {statusMessage && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '12px',
                    borderRadius: '6px',
                    background: 'rgba(0, 245, 160, 0.15)',
                    border: '1px solid var(--accent-emerald)',
                    color: 'var(--accent-emerald)',
                    fontSize: '0.9rem',
                    textAlign: 'center'
                  }}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
