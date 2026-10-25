'use client';

import { useState } from 'react';
import { CELORA_PROJECTS, CeloraProject } from '@/data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<CeloraProject | null>(null);

  const filteredProjects = filter === 'all'
    ? CELORA_PROJECTS
    : CELORA_PROJECTS.filter(p => {
        if (filter === 'saas') return p.category === 'saas' || p.badge.includes('SaaS') || p.badge.includes('ERP');
        return p.category === filter;
      });

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Flagship Projects</div>
          <h2 className="section-title">Case Studies & Production Systems</h2>
          <p className="section-subtitle">
            Explore 8 production-grade systems engineered by CeloraIT — from Bengali retail POS to strictly grounded RAG and custom Layer-1 blockchains.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="portfolio-filter-bar">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects (8)
          </button>
          <button
            className={`filter-btn ${filter === 'saas' ? 'active' : ''}`}
            onClick={() => setFilter('saas')}
          >
            SaaS & ERP
          </button>
          <button
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI & Automation
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web & Mobile
          </button>
          <button
            className={`filter-btn ${filter === 'blockchain' ? 'active' : ''}`}
            onClick={() => setFilter('blockchain')}
          >
            Blockchain & Web3
          </button>
        </div>

        {/* Projects Grid Container */}
        <div className="projects-grid">
          {filteredProjects.map((p, idx) => {
            const techTags = p.technologies.slice(0, 3);
            const remainingCount = p.technologies.length - 3;

            return (
              <div
                key={p.id}
                className="project-card"
                onClick={() => setSelectedProject(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedProject(p);
                  }
                }}
              >
                <div className="project-card-header">
                  <div className="project-badges">
                    <span className="project-badge-tag">{p.badge}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      0{CELORA_PROJECTS.indexOf(p) + 1}
                    </span>
                  </div>
                  <h3 className="project-card-title">{p.title}</h3>
                  <p className="project-card-subtitle">{p.subtitle}</p>
                </div>

                <p className="project-card-desc">{p.tagline}</p>

                <div className="project-metrics-mini">
                  {p.metrics.slice(0, 2).map((m, mIdx) => (
                    <span key={mIdx} className="mini-metric-pill">
                      <span>{m.label}:</span> <strong>{m.value}</strong>
                    </span>
                  ))}
                </div>

                <div className="project-tech-tags">
                  {techTags.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">{tech}</span>
                  ))}
                  {remainingCount > 0 && (
                    <span className="tech-pill">+{remainingCount}</span>
                  )}
                </div>

                <div className="project-card-footer">
                  <span className="project-view-btn">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
