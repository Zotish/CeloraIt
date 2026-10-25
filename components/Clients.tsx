export default function Clients() {
  const partners = [
    'SMPConnect',
    'Code my pixel',
    'Boisakhi Trade International',
    'Loop Meme',
    'P2Ptrader.net',
    'LiquidityBlockchain'
  ];

  return (
    <section id="clients" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Markets & Clients</div>
          <h2 className="section-title">Markets We Serve & Past Collaborations</h2>
          <p className="section-subtitle">
            Partnering with visionary founders and organizations across Bangladesh, North America, Europe, and the Middle East.
          </p>
        </div>

        <div className="markets-grid">
          <div className="market-card glass-panel">
            <h4>🌍 Geographies</h4>
            <ul>
              <li>Bangladesh (Domestic Market)</li>
              <li>USA & Diaspora Market</li>
              <li>Middle East (GCC)</li>
              <li>Europe</li>
              <li>Global Remote Clients</li>
            </ul>
          </div>

          <div className="market-card glass-panel">
            <h4>🏢 Client Types</h4>
            <ul>
              <li>Early-Stage & Seed Startups</li>
              <li>SMEs Modernizing Operations</li>
              <li>Retail & Wholesale Businesses</li>
              <li>Digital Product Founders</li>
              <li>Service & Mobility Providers</li>
            </ul>
          </div>

          <div className="market-card glass-panel">
            <h4>⚙️ Industries</h4>
            <ul>
              <li>Retail, POS & ERP</li>
              <li>Marketplaces & Communities</li>
              <li>Healthcare & Doctor Chambers</li>
              <li>Mobility, Transport & Ticketing</li>
              <li>Blockchain & Web3 R&D</li>
            </ul>
          </div>
        </div>

        {/* Worked With Brand Badges */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span
            style={{
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-dim)',
              fontWeight: 600
            }}
          >
            Organizations & Products We Have Worked With
          </span>
        </div>
        <div className="client-logos-row">
          {partners.map((partner, idx) => (
            <div key={idx} className="client-tag-box">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
