export default function Team() {
  const teamMembers = [
    { initials: 'RA', name: 'Rasel Ahmed', role: 'Software & AI', tag: 'Full-Stack & GenAI' },
    { initials: 'MH', name: 'Mehedi Hasan', role: 'Marketing & SEO', tag: 'Growth & Visibility' },
    { initials: 'ZC', name: 'Zotish Chandra', role: 'Blockchain & Software', tag: 'Protocol & Web3' },
    { initials: 'M', name: 'Mobin', role: 'Developer & SQA', tag: 'Quality & Performance' }
  ];

  const guildPills = [
    'Software Architect',
    'Senior Full-Stack Engineer',
    'Frontend Engineer',
    'Backend Engineer',
    'Mobile App Engineer',
    'UI/UX Designer',
    'QA Engineer',
    'DevOps Engineer',
    'Database Engineer'
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Team</div>
          <h2 className="section-title">Leadership & Core Engineers</h2>
          <p className="section-subtitle">
            A cohesive team of builders, architects, and growth engineers committed to turning your product vision into scalable reality.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card glass-panel">
              <div className="team-avatar-wrap">
                <div className="team-avatar-inner">{member.initials}</div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <span className="team-badge-pill">{member.tag}</span>
            </div>
          ))}
        </div>

        {/* Technical Team Roles */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '30px',
            textAlign: 'center'
          }}
        >
          <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '14px' }}>
            Backed by our Specialized Engineering Guild:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {guildPills.map((pill, idx) => (
              <span key={idx} className="tech-pill">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
