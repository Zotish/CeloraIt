/**
 * CeloraIT Portfolio Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderProjects('all');
  initProjectFilters();
  initModalHandlers();
  initValuesTabs();
  initTechStackFilters();
  initContactForm();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavOnScroll();
  });

  // Mobile menu toggle
  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        mobileBtn.innerHTML = '☰';
      } else {
        drawer.classList.add('open');
        mobileBtn.innerHTML = '✕';
      }
    });

    // Close drawer when link clicked
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        mobileBtn.innerHTML = '☰';
      });
    });
  }
}

// Active Nav Spy
function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navLink) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        navLink.classList.add('active');
      }
    }
  });
}

/* --------------------------------------------------------------------------
   2. Render Flagship Projects Grid
   -------------------------------------------------------------------------- */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid-container');
  if (!container || typeof CELORA_PROJECTS === 'undefined') return;

  const filtered = filter === 'all' 
    ? CELORA_PROJECTS 
    : CELORA_PROJECTS.filter(p => p.category === filter || (filter === 'saas' && (p.category === 'saas' || p.badge.includes('SaaS') || p.badge.includes('ERP'))));

  container.innerHTML = filtered.map(p => {
    const metricPills = p.metrics.map(m => `
      <div class="preview-pill">
        <span>${m.label}:</span> <strong>${m.value}</strong>
      </div>
    `).join('');

    const techTags = p.technologies.slice(0, 4).map(t => `
      <span class="tech-pill">${t}</span>
    `).join('') + (p.technologies.length > 4 ? `<span class="tech-pill">+${p.technologies.length - 4}</span>` : '');

    return `
      <div class="project-card" onclick="openProjectModal('${p.id}')">
        <div class="project-card-header">
          <div class="project-badges">
            <span class="project-badge-tag">${p.badge}</span>
            <span style="font-size:0.75rem; color:var(--text-dim); font-family:var(--font-mono);">0${CELORA_PROJECTS.indexOf(p) + 1}</span>
          </div>
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-subtitle">${p.subtitle}</p>
        </div>

        <div class="project-card-preview" style="background: ${p.gradient};">
          <div class="preview-browser-bar">
            <div class="preview-dot dot-red"></div>
            <div class="preview-dot dot-yellow"></div>
            <div class="preview-dot dot-green"></div>
          </div>
          <div class="preview-body">
            <div class="preview-metric-pills">
              ${metricPills}
            </div>
          </div>
        </div>

        <div class="project-card-body">
          <p class="project-card-desc">${p.tagline}</p>
          <div class="project-tech-tags">
            ${techTags}
          </div>
          <div class="project-card-footer">
            <span class="project-view-btn">
              View Case Study
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   3. Projects Filter Bar
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('[data-project-filter]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-project-filter');
      renderProjects(category);
    });
  });
}

/* --------------------------------------------------------------------------
   4. Case Study Modal
   -------------------------------------------------------------------------- */
function initModalHandlers() {
  const modalOverlay = document.getElementById('project-modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', closeProjectModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = getProjectById(projectId);
  if (!project) return;

  const overlay = document.getElementById('project-modal-overlay');
  const body = document.getElementById('modal-dynamic-content');

  const metricsHtml = project.metrics.map(m => `
    <div class="modal-metric-card">
      <div class="val">${m.value}</div>
      <div class="lbl">${m.label}</div>
    </div>
  `).join('');

  const featuresHtml = project.features.map(f => `
    <li>${f}</li>
  `).join('');

  const techHtml = project.technologies.map(t => `
    <span class="tech-pill" style="font-size:0.85rem; padding:6px 14px;">${t}</span>
  `).join('');

  body.innerHTML = `
    <div class="modal-header">
      <span class="modal-category-tag">${project.badge} • Case Study</span>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-subtitle">${project.subtitle}</p>
    </div>

    <div class="modal-metrics-grid">
      ${metricsHtml}
    </div>

    <div class="modal-split-section">
      <div class="problem-box">
        <h4>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          The Problem
        </h4>
        <p style="color:#e2e8f0; font-size:0.92rem; line-height:1.7;">${project.problem}</p>
      </div>

      <div class="solution-box">
        <h4>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          CeloraIT Engineered Solution
        </h4>
        <p style="color:#e2e8f0; font-size:0.92rem; line-height:1.7;">${project.solution}</p>
      </div>
    </div>

    <div style="margin-bottom: 28px;">
      <h3 style="font-size:1.2rem; font-weight:700; color:#fff; margin-bottom:16px;">Core System Capabilities</h3>
      <ul class="modal-features-list">
        ${featuresHtml}
      </ul>
    </div>

    <div>
      <h3 style="font-size:1.2rem; font-weight:700; color:#fff; margin-bottom:14px;">Technologies & Infrastructure</h3>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${techHtml}
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const overlay = document.getElementById('project-modal-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   5. Values Tabs (How We Work vs What Clients Get)
   -------------------------------------------------------------------------- */
function initValuesTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panes = document.querySelectorAll('.tab-content-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Tech Stack Category Matrix Filter
   -------------------------------------------------------------------------- */
function initTechStackFilters() {
  const tabBtns = document.querySelectorAll('.tech-tab-btn');
  const techCards = document.querySelectorAll('.tech-badge-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-tech-filter');
      techCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-tech-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Contact Form Simulation
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('celora-contact-form');
  const statusMsg = document.getElementById('contact-form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Inquiry...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.innerHTML = 'Thank you! Your project inquiry has been received. A CeloraIT technical pod lead will contact you within 24 hours.';
          setTimeout(() => {
            statusMsg.style.display = 'none';
          }, 8000);
        }
      }, 1200);
    });
  }
}

/* --------------------------------------------------------------------------
   8. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
