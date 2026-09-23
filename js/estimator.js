/**
 * CeloraIT Interactive Project & Pod Estimator
 * Calculates estimated timeline, budget range, and included engineering deliverables
 */

const ESTIMATOR_DATA = {
  types: {
    saas: {
      name: "SaaS / Web App",
      baseMonths: 2.5,
      baseRateMin: 4500,
      baseRateMax: 8500,
      perks: [
        "Scalable Multi-Tenant Architecture",
        "Modern UI/UX Design System in Figma",
        "Role-Based Access Control (RBAC)",
        "Stripe / bKash / Payment Gateway Integration",
        "Automated CI/CD & Cloud Deployment"
      ]
    },
    erp: {
      name: "ERP & Inventory System",
      baseMonths: 3.5,
      baseRateMin: 6000,
      baseRateMax: 12000,
      perks: [
        "Complex SKU & Stock Level Management",
        "Supplier Ledger & Due Tracing",
        "Custom Invoicing & Barcode Scanner Sync",
        "Granular Financial & P&L Reports",
        "Offline-First Sync Capability"
      ]
    },
    mobile: {
      name: "Cross-Platform Mobile App",
      baseMonths: 2.5,
      baseRateMin: 5000,
      baseRateMax: 9500,
      perks: [
        "Single Codebase for iOS & Android (Flutter/RN)",
        "Offline Storage & Push Notifications",
        "Native Device APIs (Camera, GPS, Biometrics)",
        "App Store & Google Play Release Preparation",
        "High-Speed Backend API Integration"
      ]
    },
    ai: {
      name: "AI, RAG & Automation",
      baseMonths: 2,
      baseRateMin: 4000,
      baseRateMax: 9000,
      perks: [
        "Strictly Grounded RAG Pipeline (Gemini 2.0 / OpenAI)",
        "Custom Cosine Similarity Vector Retrieval",
        "Zero-Hallucination Source Citations",
        "Document Parsing & Ingestion Workflows",
        "Secure Enterprise Data Isolation"
      ]
    },
    blockchain: {
      name: "Layer-1 & Web3 Solution",
      baseMonths: 4,
      baseRateMin: 9000,
      baseRateMax: 18000,
      perks: [
        "Custom Layer-1 Consensus Architecture (BFT / VRF)",
        "Deterministic State Transition & State Root Verification",
        "Complete Web3 Block Explorer & Browser Wallet",
        "Dockerized Validator & Node Infrastructure",
        "Security Audit & Slashing Mechanism"
      ]
    }
  },
  pods: {
    sprint: {
      multiplier: 1.0,
      name: "Sprint Pod (3 Engineers + PM)",
      speed: "Fast MVP Speed"
    },
    full: {
      multiplier: 1.6,
      name: "Full Delivery Pod (6 Specialists)",
      speed: "Accelerated Delivery"
    },
    enterprise: {
      multiplier: 2.5,
      name: "Enterprise Scaled Pod (10+ Pod + Support)",
      speed: "Maximum Parallel Velocity"
    }
  },
  timeline: {
    mvp: {
      label: "4 - 8 Weeks (MVP)",
      mult: 0.8
    },
    prod: {
      label: "3 - 6 Months (Production)",
      mult: 1.2
    },
    continuous: {
      label: "Dedicated Ongoing Pod",
      mult: 1.5
    }
  }
};

let currentEstimatorState = {
  type: "saas",
  pod: "full",
  timeline: "prod"
};

function initEstimator() {
  const typeBtns = document.querySelectorAll('[data-est-type]');
  const podBtns = document.querySelectorAll('[data-est-pod]');
  const timeBtns = document.querySelectorAll('[data-est-time]');

  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentEstimatorState.type = btn.getAttribute('data-est-type');
      updateEstimatorDisplay();
    });
  });

  podBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      podBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentEstimatorState.pod = btn.getAttribute('data-est-pod');
      updateEstimatorDisplay();
    });
  });

  timeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentEstimatorState.timeline = btn.getAttribute('data-est-time');
      updateEstimatorDisplay();
    });
  });

  updateEstimatorDisplay();
}

function updateEstimatorDisplay() {
  const typeData = ESTIMATOR_DATA.types[currentEstimatorState.type];
  const podData = ESTIMATOR_DATA.pods[currentEstimatorState.pod];
  const timeData = ESTIMATOR_DATA.timeline[currentEstimatorState.timeline];

  if (!typeData || !podData || !timeData) return;

  const minPrice = Math.round((typeData.baseRateMin * podData.multiplier * timeData.mult) / 100) * 100;
  const maxPrice = Math.round((typeData.baseRateMax * podData.multiplier * timeData.mult) / 100) * 100;

  const priceEl = document.getElementById('est-price-display');
  const timelineEl = document.getElementById('est-timeline-display');
  const perksListEl = document.getElementById('est-perks-list');

  if (priceEl) {
    priceEl.textContent = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`;
  }

  if (timelineEl) {
    timelineEl.innerHTML = `Estimated Scope: <strong>${timeData.label}</strong> with <strong>${podData.name}</strong>`;
  }

  if (perksListEl) {
    perksListEl.innerHTML = typeData.perks.map(p => `<li>${p}</li>`).join('');
  }
}

// Pre-fill contact form when clicking 'Apply Estimate to Inquiry'
function applyEstimateToForm() {
  const typeData = ESTIMATOR_DATA.types[currentEstimatorState.type];
  const podData = ESTIMATOR_DATA.pods[currentEstimatorState.pod];
  const timeData = ESTIMATOR_DATA.timeline[currentEstimatorState.timeline];

  const selectService = document.getElementById('contact-service-select');
  const messageInput = document.getElementById('contact-message');

  if (selectService) {
    selectService.value = currentEstimatorState.type;
  }

  if (messageInput) {
    messageInput.value = `Hi CeloraIT Team,\n\nI used the Scope Estimator for a ${typeData.name} project.\n- Selected Pod: ${podData.name}\n- Expected Timeline: ${timeData.label}\n\nPlease share your detailed proposal and pod availability.`;
  }

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', initEstimator);
