export default function DeliveryPods() {
  const coreRoles = [
    { icon: '👔', title: 'Product Owner / Project Manager', desc: 'Scope, backlog & sprint velocity' },
    { icon: '🎨', title: 'UI/UX Designer', desc: 'Design systems, wireframes & high-fi prototypes' },
    { icon: '💻', title: 'Frontend Engineer', desc: 'React, Next.js, Vue & responsive web apps' },
    { icon: '⚙️', title: 'Backend Engineer', desc: 'APIs, microservices, databases & auth' },
    { icon: '📱', title: 'Mobile Engineer', desc: 'Flutter & React Native iOS/Android apps' },
    { icon: '🧪', title: 'QA Engineer', desc: 'Manual testing, automated suites & bug tracking' }
  ];

  const supportRoles = [
    { icon: '☁️', title: 'DevOps Engineer', desc: 'Docker, CI/CD, Kubernetes & cloud hosting' },
    { icon: '🗄️', title: 'Database Specialist', desc: 'Schema optimization, queries & replication' },
    { icon: '🤖', title: 'AI / Automation Specialist', desc: 'RAG pipelines, LLM fine-tuning & vectors' },
    { icon: '🛡️', title: 'Security Reviewer', desc: 'RBAC, penetration checks & data hygiene' },
    { icon: '🔧', title: 'Maintenance & Support Owner', desc: '24/7 uptime monitoring & backups' }
  ];

  const lifecycle = [
    { step: 1, title: 'Discovery', desc: 'Requirement mapping, feasibility analysis, user stories, and architecture roadmapping.' },
    { step: 2, title: 'Pod Assignment', desc: 'Dedicated squad allocation, toolchain setup, Git repository initialize, and scope sign-off.' },
    { step: 3, title: 'Architecture', desc: 'Secure database modeling, UX wireframes in Figma, API contracts, and security hygiene.' },
    { step: 4, title: 'Milestone Build', desc: 'Agile 2-week sprints, continuous staging deployments, automated QA, and client review.' },
    { step: 5, title: 'Handover & SLA', desc: 'Production release, documentation, team training, and 24/7 ongoing technical maintenance.' }
  ];

  return (
    <section id="delivery-pod" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Flexible Delivery Model</div>
          <h2 className="section-title">Build Your Own Tech Team</h2>
          <p className="section-subtitle">
            Skip the painful 6-month recruiting cycle. Get a dedicated, cross-functional engineering pod equipped to execute from day one.
          </p>
        </div>

        {/* Pod Architecture Comparison */}
        <div className="pod-architecture-grid">
          {/* Core Pod */}
          <div className="pod-card glass-panel">
            <span className="pod-badge">Sprint Execution Engine</span>
            <h3 className="pod-title">Core Delivery Pod</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px' }}>
              Your dedicated, sprint-focused product squad driving daily features, user feedback, and release readiness.
            </p>
            <div className="pod-roles-list">
              {coreRoles.map((role, idx) => (
                <div key={idx} className="pod-role-item">
                  <span>{role.icon}</span>
                  <div>
                    <strong>{role.title}</strong> — {role.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Pod */}
          <div className="pod-card glass-panel">
            <span className="pod-badge" style={{ color: 'var(--accent-cyan)' }}>
              Specialized Infrastructure
            </span>
            <h3 className="pod-title">Support Pod</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px' }}>
              On-demand senior specialists ensuring reliability, security compliance, data modeling, and AI integration.
            </p>
            <div className="pod-roles-list">
              {supportRoles.map((role, idx) => (
                <div key={idx} className="pod-role-item">
                  <span>{role.icon}</span>
                  <div>
                    <strong>{role.title}</strong> — {role.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5-Step Development Lifecycle */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
            Development Lifecycle
          </h3>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '30px' }}>
            How CeloraIT delivers projects from concept to sustainable operations
          </p>

          <div className="lifecycle-timeline">
            {lifecycle.map((item) => (
              <div key={item.step} className="lifecycle-step">
                <div className="step-number">{item.step}</div>
                <h4 className="step-title">{item.title}</h4>
                <p className="step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
