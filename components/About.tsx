'use client';

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'how' | 'what'>('how');

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">About Us</div>
          <h2 className="section-title">Who We Are & What We Build</h2>
          <p className="section-subtitle">
            Reliable engineering partners committed to creating measurable business impact through scalable architecture.
          </p>
        </div>

        <div className="about-grid">
          {/* Overview */}
          <div className="about-card glass-panel">
            <h3>Company Overview</h3>
            <p style={{ marginBottom: 0 }}>
              CeloraIT is a modern Bangladesh-based software company building scalable digital products, SaaS platforms, ERP systems, AI-enabled automation, mobile apps, websites, and cloud-backed business solutions for startups and growing businesses.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="about-card glass-panel">
            <h3>Vision & Mission</h3>
            <div style={{ marginBottom: '20px' }}>
              <strong style={{ color: 'var(--accent-emerald)', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>
                OUR VISION
              </strong>
              <p style={{ marginBottom: 0 }}>
                To become a trusted technology partner for startups and growing businesses by building reliable software that creates measurable business impact.
              </p>
            </div>
            <div>
              <strong style={{ color: 'var(--accent-cyan)', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>
                OUR MISSION
              </strong>
              <p style={{ marginBottom: 0 }}>
                Deliver end-to-end software, SaaS, ERP, mobile, web, AI, and cloud solutions with clear communication, scalable architecture, and long-term technical support.
              </p>
            </div>
          </div>
        </div>

        {/* Values Interactive Tabs */}
        <div className="values-tabs-container">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === 'how' ? 'active' : ''}`}
              onClick={() => setActiveTab('how')}
            >
              How We Work
            </button>
            <button
              className={`tab-btn ${activeTab === 'what' ? 'active' : ''}`}
              onClick={() => setActiveTab('what')}
            >
              What Clients Get
            </button>
          </div>

          {/* How We Work */}
          {activeTab === 'how' && (
            <div className="tab-content-pane active">
              <div className="value-box">
                <h4>Transparency in Communication</h4>
                <p>Direct communication channels, regular sprint demos, and no hidden surprises in scope or billing.</p>
              </div>
              <div className="value-box">
                <h4>Ownership in Delivery</h4>
                <p>We treat your product as our own, taking complete accountability from discovery through release.</p>
              </div>
              <div className="value-box">
                <h4>Practical Innovation</h4>
                <p>We adopt modern AI and cloud tools that solve real operational bottlenecks, avoiding hype for hype’s sake.</p>
              </div>
              <div className="value-box">
                <h4>Customer-First Problem Solving</h4>
                <p>Designing software around actual business workflows and intuitive user experiences.</p>
              </div>
            </div>
          )}

          {/* What Clients Get */}
          {activeTab === 'what' && (
            <div className="tab-content-pane active">
              <div className="value-box">
                <h4>Clear Scope & Roadmap</h4>
                <p>Well-defined technical specs, sprint milestones, and transparent delivery checkpoints.</p>
              </div>
              <div className="value-box">
                <h4>Modern UI/UX & Secure Engineering</h4>
                <p>Clean design systems, role-based access control (RBAC), and enterprise-grade data hygiene.</p>
              </div>
              <div className="value-box">
                <h4>Fast Iteration & Measurable Output</h4>
                <p>2-week agile sprints, working staging releases, and rapid feedback implementation.</p>
              </div>
              <div className="value-box">
                <h4>Reliable Maintenance & Support</h4>
                <p>Post-launch warranty, uptime monitoring, backup routines, and feature roadmap expansions.</p>
              </div>
            </div>
          )}
        </div>

        {/* Brand Belief Banner */}
        <div className="belief-banner">
          <div className="belief-quote-mark">“</div>
          <div className="belief-text">
            Technology should make work easier, customers happier, and businesses more ready for growth.
          </div>
        </div>
      </div>
    </section>
  );
}
