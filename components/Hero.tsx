import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-tag">
            <span className="hero-tag-dot"></span>
            Bangladesh-Based Next-Gen Software & AI Engineering
          </div>

          <h1 className="hero-title">
            Engineering Scalable Software, <span className="text-accent">SaaS & AI Systems</span>
          </h1>

          <p className="hero-description">
            CeloraIT builds high-performance digital products, Bengali-tailored SaaS & ERP platforms, strictly grounded AI automation, and custom Layer-1 blockchain infrastructure.
          </p>

          <div className="hero-actions">
            <Link href="#projects" className="btn btn-primary">
              Explore Flagship Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="#delivery-pod" className="btn btn-secondary">
              Build Your Own Tech Team
            </Link>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="stats-banner">
          <div className="stat-item">
            <div className="stat-number">8+</div>
            <div className="stat-label">Production Systems</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Core Technical Domains</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">End-to-End Execution</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Dedicated Support & SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
