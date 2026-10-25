'use client';

import { useState } from 'react';

interface TechItem {
  icon: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'cloud';
  desc: string;
}

export default function TechStack() {
  const [filter, setFilter] = useState<string>('all');

  const stack: TechItem[] = [
    // Frontend & Mobile
    { icon: '⚛️', name: 'React.js', category: 'frontend', desc: 'Frontend Framework' },
    { icon: '▲', name: 'Next.js', category: 'frontend', desc: 'Fullstack / SSR / PWA' },
    { icon: '🟩', name: 'Vue.js', category: 'frontend', desc: 'Reactive UI Library' },
    { icon: '🎨', name: 'Figma', category: 'frontend', desc: 'UI/UX & Design Systems' },
    { icon: '💙', name: 'Flutter', category: 'frontend', desc: 'Cross-Platform Mobile' },
    { icon: '📱', name: 'React Native', category: 'frontend', desc: 'iOS & Android Apps' },
    { icon: '🤖', name: 'Native Android', category: 'frontend', desc: 'Kotlin / Java' },

    // Backend
    { icon: '🟢', name: 'Node.js', category: 'backend', desc: 'Asynchronous Runtime' },
    { icon: '⚡', name: 'Express.js', category: 'backend', desc: 'RESTful API Engine' },
    { icon: '🐍', name: 'Python', category: 'backend', desc: 'Backend & AI Workflows' },
    { icon: '🚀', name: 'FastAPI', category: 'backend', desc: 'High-Performance APIs' },
    { icon: '🎯', name: 'Django', category: 'backend', desc: 'Robust Web Framework' },
    { icon: '🐘', name: 'PHP / Laravel', category: 'backend', desc: 'Enterprise Web Services' },

    // Databases
    { icon: '🐘', name: 'PostgreSQL', category: 'database', desc: 'Relational Database' },
    { icon: '🐬', name: 'MySQL', category: 'database', desc: 'Relational Database' },
    { icon: '🍃', name: 'MongoDB', category: 'database', desc: 'NoSQL Document Store' },
    { icon: '⚡', name: 'Redis', category: 'database', desc: 'In-Memory Cache & Pub/Sub' },
    { icon: '🔥', name: 'Firebase', category: 'database', desc: 'Realtime DB & Auth' },
    { icon: '⚡', name: 'Supabase', category: 'database', desc: 'Open-Source BaaS' },

    // AI & Data
    { icon: '🤖', name: 'AI & Automation', category: 'ai', desc: 'Custom Workflow Engines' },
    { icon: '🧠', name: 'OpenAI API', category: 'ai', desc: 'GPT-4o & Embeddings' },
    { icon: '✨', name: 'Gemini 2.0 Flash', category: 'ai', desc: 'High-Speed Multimodal AI' },
    { icon: '🔬', name: 'TensorFlow', category: 'ai', desc: 'Deep Learning & ML Models' },
    { icon: '📊', name: 'Metabase & Power BI', category: 'ai', desc: 'Analytics & Visualizations' },

    // Cloud & DevOps
    { icon: '☁️', name: 'AWS', category: 'cloud', desc: 'Cloud Infrastructure' },
    { icon: '🌐', name: 'Google Cloud', category: 'cloud', desc: 'GCP Services & AI' },
    { icon: '🌊', name: 'DigitalOcean', category: 'cloud', desc: 'Cloud Droplets & K8s' },
    { icon: '🐳', name: 'Docker & Compose', category: 'cloud', desc: 'Containerization' },
    { icon: '🔄', name: 'CI/CD Pipelines', category: 'cloud', desc: 'Automated Testing & Release' }
  ];

  const filteredStack = filter === 'all'
    ? stack
    : stack.filter(item => item.category === filter);

  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Engineering Arsenal</div>
          <h2 className="section-title">Technologies We Work With</h2>
          <p className="section-subtitle">
            A battle-tested stack chosen for performance, long-term maintainability, security, and developer velocity.
          </p>
        </div>

        <div className="tech-tabs">
          <button
            className={`tech-tab-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Stack
          </button>
          <button
            className={`tech-tab-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button
            className={`tech-tab-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend & APIs
          </button>
          <button
            className={`tech-tab-btn ${filter === 'database' ? 'active' : ''}`}
            onClick={() => setFilter('database')}
          >
            Databases & Cache
          </button>
          <button
            className={`tech-tab-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI & Data
          </button>
          <button
            className={`tech-tab-btn ${filter === 'cloud' ? 'active' : ''}`}
            onClick={() => setFilter('cloud')}
          >
            Cloud & DevOps
          </button>
        </div>

        <div className="tech-matrix-grid">
          {filteredStack.map((tech, idx) => (
            <div key={idx} className="tech-badge-card">
              <div style={{ fontSize: '1.4rem' }}>{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
              <div className="tech-category-sub">{tech.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
