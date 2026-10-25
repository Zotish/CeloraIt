export interface EstimatorType {
  name: string;
  baseMonths: number;
  baseRateMin: number;
  baseRateMax: number;
  perks: string[];
}

export interface EstimatorPod {
  multiplier: number;
  name: string;
  speed: string;
}

export interface EstimatorTimeline {
  label: string;
  mult: number;
}

export interface EstimatorConfig {
  types: Record<string, EstimatorType>;
  pods: Record<string, EstimatorPod>;
  timeline: Record<string, EstimatorTimeline>;
}

export const ESTIMATOR_DATA: EstimatorConfig = {
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
