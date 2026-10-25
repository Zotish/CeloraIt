'use client';

import { useEffect } from 'react';
import { CeloraProject } from '@/data/projects';

interface ProjectModalProps {
  project: CeloraProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay open"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-container">
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-content-body">
          <div className="modal-header">
            <span className="modal-category-tag">{project.badge} • Case Study</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>

          <div className="modal-metrics-grid">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="modal-metric-card">
                <div className="val">{m.value}</div>
                <div className="lbl">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="modal-split-section">
            <div className="problem-box">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                The Problem
              </h4>
              <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.7 }}>
                {project.problem}
              </p>
            </div>

            <div className="solution-box">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                CeloraIT Engineered Solution
              </h4>
              <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.7 }}>
                {project.solution}
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-highlight)', marginBottom: '16px' }}>
              Core System Capabilities
            </h3>
            <ul className="modal-features-list">
              {project.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-highlight)', marginBottom: '14px' }}>
              Technologies & Infrastructure
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="tech-pill"
                  style={{ fontSize: '0.85rem', padding: '6px 14px' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
