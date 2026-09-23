/**
 * CeloraIT Flagship Projects Data
 * Source: CeloraIT Official Company Profile & Presentation Deck
 */
const CELORA_PROJECTS = [
  {
    id: "pathasathi",
    title: "Pathasathi",
    category: "ai",
    badge: "AI & Social PWA",
    subtitle: "Multilingual AI-based Social & Immigrant Support Platform",
    tagline: "Empowering immigrants with community support, reels, local services & AI guidance",
    context: "A multilingual AI-based Social App designed for immigrants navigating life abroad.",
    problem: "Immigrants need one trusted place for community support, local services, marketplace, maps, reels, orders, and legal guidance without language barriers.",
    solution: "CeloraIT designed an end-to-end PWA architecture with modular microservices, multilingual UX, local caching, and scalable backend layers.",
    metrics: [
      { label: "Architecture", value: "PWA + Microservices" },
      { label: "Language Support", value: "Multilingual" },
      { label: "Map & Feeds", value: "Real-time" }
    ],
    features: [
      "Feed & Community with media interactions",
      "Short-form Reels & educational content",
      "Multilingual UX & real-time translation",
      "Comprehensive Admin & Moderation Dashboard",
      "LocalStorage offline-first cache",
      "Interactive map for local immigrant resources & emergency alerts"
    ],
    technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Map API", "PWA", "Cloud", "Figma"],
    mockupType: "mobile-social",
    accentColor: "#00f5a0",
    gradient: "linear-gradient(135deg, rgba(0, 245, 160, 0.15), rgba(14, 165, 233, 0.05))"
  },
  {
    id: "retailos-bd",
    title: "RetailOS BD",
    category: "saas",
    badge: "Retail SaaS & POS",
    subtitle: "Smart Shop Management & Due Tracing for Bangladesh Retailers",
    tagline: "Modernizing grocery, clothing, pharmacy and SME stores with Bengali-first workflows",
    context: "A tailored management platform for Bangladeshi medium retail shops such as grocery, clothing, pharmacy, and local stores.",
    problem: "Shop owners still manage sales, stock, due (বাকি খাতা), profit, and cashflow manually on paper ledgers, causing severe errors and lost revenue visibility.",
    solution: "CeloraIT built a Bengali-friendly SaaS with mobile POS, automated due ledger tracking, digital billing, courier integration, and real-time financial reporting.",
    metrics: [
      { label: "Due Tracking", value: "100% Automated" },
      { label: "Platform", value: "Web + Mobile POS" },
      { label: "Language", value: "Bengali & English" }
    ],
    features: [
      "Mobile POS with lightning-fast barcode & manual billing",
      "Automated Due Tracing (বাকি খাতা) with SMS reminders",
      "SMS & Facebook automated marketing integration",
      "Courier & Delivery aggregator integration",
      "No-code customer-facing storefront builder",
      "Comprehensive accounting, VAT & Tax, and P&L financial reports",
      "Direct bKash/Nagad and digital payment gateway sync"
    ],
    technologies: ["React", "Next.js", "Flutter", "Node.js", "PostgreSQL", "Firebase"],
    mockupType: "pos-dashboard",
    accentColor: "#00d2b4",
    gradient: "linear-gradient(135deg, rgba(0, 210, 180, 0.15), rgba(16, 185, 129, 0.05))"
  },
  {
    id: "motoparts-erp",
    title: "MotoParts ERP",
    category: "saas",
    badge: "Automotive ERP",
    subtitle: "Specialized Motorbike Spare Parts & Fitment ERP System",
    tagline: "High-precision SKU tracking, motorcycle fitment mapping, and workshop management",
    context: "A specialized SaaS/ERP built specifically for motorbike parts shops, wholesalers, and multi-branch distributors.",
    problem: "Parts businesses handle thousands of complex SKUs, vehicle compatibility matrices, multiple suppliers, mechanics, and warranties without any unified ERP.",
    solution: "CeloraIT engineered a sector-specific ERP with granular purchase & sales tracking, instant SKU search, bike model fitment mapping, and technician service records.",
    metrics: [
      { label: "SKU Capacity", value: "50,000+ SKUs" },
      { label: "Fitment Accuracy", value: "Model-Specific" },
      { label: "Inventory Value", value: "Real-time ৳" }
    ],
    features: [
      "Advanced SKU management with barcode & OEM number indexing",
      "Bike model fitment mapping (Honda, Yamaha, Bajaj, Suzuki, TVS)",
      "Automated low-stock and dead-stock threshold alerts",
      "Supplier ledger with credit and payment schedule management",
      "Service workshop records with mechanic commission calculation",
      "Warranty tracking and serial-number based returns"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Flutter", "Barcode Scanning", "Cloud"],
    mockupType: "erp-table",
    accentColor: "#38bdf8",
    gradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(3, 105, 161, 0.05))"
  },
  {
    id: "activeguide-ai",
    title: "ActiveGuide AI",
    category: "ai",
    badge: "GenAI & RAG",
    subtitle: "AI Health Tips Automation & Grounded RAG Assistant",
    tagline: "Evidence-based health & physical activity guidance backed by official medical guidelines",
    context: "ActiveGuide AI is a RAG-powered health assistant that answers questions about Physical Activity Guidelines with AI-generated, source-cited, evidence-based responses.",
    problem: "Users and health practitioners struggle to find exact physical activity guidance. Generic LLMs hallucinate medical advice, while manual PDF searches through 300+ pages are tedious.",
    solution: "CeloraIT built a custom RAG pipeline using BAAI BGE Embeddings, Gemini 2.0 Flash, and cosine similarity vector retrieval with expandable page-by-page source citations.",
    metrics: [
      { label: "Model", value: "Gemini 2.0 Flash" },
      { label: "Hallucination", value: "Strictly Grounded" },
      { label: "Citations", value: "Page-Accurate" }
    ],
    features: [
      "Strictly grounded RAG pipeline eliminating AI hallucinations",
      "Page-cited answers with expandable source evidence drawer",
      "Custom Cosine Similarity client/edge vector search engine",
      "Dynamic suggested inquiry chips and real-time streaming response",
      "PWA installable on iOS, Android, and Desktop",
      "Markdown-formatted health responses with structured takeaways"
    ],
    technologies: ["Next.js 15", "React 19", "Gemini 2.0 Flash", "BAAI BGE Embeddings", "OpenRouter API", "Vector Search", "Vanilla CSS", "PWA"],
    mockupType: "ai-chat",
    accentColor: "#10b981",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.05))"
  },
  {
    id: "bus-dorkar",
    title: "Bus Dorkar",
    category: "web",
    badge: "Ticketing & Mobility",
    subtitle: "Unified Multi-Role Bus Ticketing & Fleet Ecosystem",
    tagline: "Seamless online booking, counter POS, digital QR boarding, and real-time bus tracking",
    context: "A comprehensive inter-district bus ticketing platform supporting three key roles: Passenger, Operator, and Admin across Bangladesh.",
    problem: "Passengers encounter long physical counter lines, unknown seat availability, and double booking. Bus operators suffer from fragmented manual counter sheets.",
    solution: "CeloraIT engineered a unified multi-role ecosystem connecting passengers, bus operators, and counter staff with real-time seat reservation, digital QR tickets, and route telemetry.",
    metrics: [
      { label: "Roles", value: "Passenger • Operator • Admin" },
      { label: "Ticketing", value: "Instant QR Validation" },
      { label: "Maps", value: "Interactive Route Telemetry" }
    ],
    features: [
      "Interactive seat selection layout (AC, Non-AC, Sleeper, Multi-Axle)",
      "Digital QR ticket generation with counter scan verification",
      "Interactive map integration with district terminals & counters",
      "Operator fleet & schedule automation dashboard",
      "Multi-role RBAC security for regional counters",
      "Real-time revenue, commission and occupancy analytics"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Leaflet Maps"],
    mockupType: "booking-map",
    accentColor: "#06b6d4",
    gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(14, 116, 144, 0.05))"
  },
  {
    id: "custom-social",
    title: "AI-Driven Custom Social Media",
    category: "ai",
    badge: "High-Scale Social",
    subtitle: "Next-Gen Full-Stack Social Platform with Real-Time Core",
    tagline: "Sub-millisecond feeds, AI content moderation, and ultra-fast Trie search",
    context: "A high-performance full-stack social media platform engineered with cutting-edge caching algorithms and real-time synchronization.",
    problem: "Traditional social apps suffer from slow feed rendering, delayed messaging, and excessive database overhead under peak user loads.",
    solution: "CeloraIT architected a multi-tier caching system combining Redis, Firebase Realtime, and custom in-memory Trie/LRU/Graph data structures.",
    metrics: [
      { label: "Search Speed", value: "< 5ms Trie Indexing" },
      { label: "Messaging", value: "Real-time WebSockets" },
      { label: "Tech Stack", value: "Next.js 16 + React 19" }
    ],
    features: [
      "Real-time feed streaming with instant reaction and repost counters",
      "Sub-millisecond autocomplete user & tag search using in-memory Trie",
      "Firebase-powered instant messaging with typing indicators",
      "Automated AI content moderation and spam prevention",
      "Full OAuth authentication & Better Auth credential sessions",
      "Follower graph traversal algorithms for personalized discover feeds"
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "Redis", "Firebase", "Better Auth", "UploadThing", "Zod"],
    mockupType: "social-feed",
    accentColor: "#8b5cf6",
    gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.05))"
  },
  {
    id: "doctor-portal",
    title: "Doctor Portal (MediCare Pro)",
    category: "saas",
    badge: "Healthcare SaaS",
    subtitle: "Multi-Specialty Doctor Chamber Management & Online Booking",
    tagline: "Connecting patients with specialist chambers, digital prescriptions, and automated billing",
    context: "A full-stack multi-specialty healthcare platform allowing patients to book appointments while clinics run operations smoothly.",
    problem: "Patients endure hours in clinic waiting rooms with manual paper tickets. Doctors lack centralized scheduling, patient medical history, and automated invoicing.",
    solution: "CeloraIT built MediCare Pro, enabling self-service patient slot reservation across 9 medical specialties with automated digital invoices and unified clinic dashboards.",
    metrics: [
      { label: "Specialties", value: "9+ Medical Depts" },
      { label: "Satisfaction", value: "4.9 / 5 Rating" },
      { label: "Appointments", value: "10,000+ Processed" }
    ],
    features: [
      "Patient self-service slot booking with doctor availability calendar",
      "Specialist profiles with qualifications, visiting hours, and fees",
      "Centralized clinic admin dashboard with doctor schedule controls",
      "Automated digital invoice & receipt generation",
      "Offline sync support for intermittent internet connectivity",
      "Role-based access control (Admin, Doctor, Receptionist, Patient)"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "TailwindCSS", "JWT", "React Query"],
    mockupType: "medical-calendar",
    accentColor: "#0ea5e9",
    gradient: "linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(2, 132, 199, 0.05))"
  },
  {
    id: "custom-blockchain",
    title: "Custom Layer-1 Blockchain",
    category: "blockchain",
    badge: "Web3 & Core Protocol",
    subtitle: "Custom Layer-1 Blockchain Infrastructure & BFT Consensus",
    tagline: "High-throughput deterministic blockchain protocol with signed BFT consensus and block explorer",
    context: "A purpose-built Layer-1 blockchain infrastructure designed for high transaction throughput, instant finality, and verifiable state transitions.",
    problem: "Existing public blockchains suffer from high gas fees, slow block times, and opaque state transitions unsuitable for dedicated enterprise ecosystems.",
    solution: "CeloraIT architected a custom Layer-1 protocol with EC-VRF proposer selection, signed BFT consensus (Prevote → Precommit → Final QC), full RPC endpoints, and an explorer UI.",
    metrics: [
      { label: "Block Time", value: "2s Average" },
      { label: "Finality", value: "Signed BFT QC" },
      { label: "Tooling", value: "Explorer + Web Wallet" }
    ],
    features: [
      "Custom Layer-1 Blockchain engine with versioned chain specifications",
      "Deterministic state transitions with state root & replay verification",
      "EC-VRF Proposer Selection with cryptographic randomness",
      "Signed BFT Consensus pipeline (Prevote → Precommit → Final QC)",
      "Validator set transitions, timeout handling, and slashing mechanisms",
      "Full Web3 Block Explorer, JSON-RPC endpoints, and browser wallet"
    ],
    technologies: ["React", "JavaScript SDK", "REST/HTTP APIs", "Docker", "Docker Compose", "GitHub GHCR", "Cryptographic Primitives"],
    mockupType: "blockchain-explorer",
    accentColor: "#00f5a0",
    gradient: "linear-gradient(135deg, rgba(0, 245, 160, 0.18), rgba(6, 182, 212, 0.05))"
  }
];

// Helper to get project by ID
function getProjectById(id) {
  return CELORA_PROJECTS.find(p => p.id === id);
}
