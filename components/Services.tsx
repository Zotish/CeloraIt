export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Software Development",
      desc: "Custom web platforms, scalable backend services, high-throughput REST/GraphQL APIs, enterprise dashboards, and business software.",
      features: [
        "Custom Web & Backend Engineering",
        "High-Throughput REST & GraphQL APIs",
        "Enterprise Admin Dashboards",
        "Database Architecture & Optimization"
      ]
    },
    {
      icon: "📊",
      title: "SaaS & ERP Solutions",
      desc: "Multi-tenant subscription products, shop management, retail inventory, mobile POS, due tracing (বাকি খাতা), accounting, and workflow automation.",
      features: [
        "Multi-Tenant Cloud Architectures",
        "Retail POS & Real-Time Inventory",
        "Due Ledger & Financial Accounting",
        "Subscription Billing & Payment Gateways"
      ]
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Android, iOS, Flutter, React Native, and Progressive Web Applications (PWA) with fast load times and clean user experience.",
      features: [
        "Cross-Platform Flutter & React Native",
        "Native Android Performance",
        "Offline-First PWA Capabilities",
        "App Store & Google Play Publishing"
      ]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "User research, wireframing, high-fidelity clickable prototypes in Figma, scalable design systems, and modern product redesigns.",
      features: [
        "User Research & Customer Journey Mapping",
        "Interactive Figma Wireframes & Prototypes",
        "Design Tokens & Reusable Component Systems",
        "Accessibility & Mobile-First UX"
      ]
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      desc: "Grounded RAG pipelines, Gemini 2.0 Flash & OpenAI LLM integrations, vector search, conversational chatbots, OCR, and workflow automation.",
      features: [
        "Strictly Grounded RAG Architectures",
        "Custom Vector Search (Cosine Similarity)",
        "Document OCR & Automated Data Ingestion",
        "Conversational AI & Customer Support Bots"
      ]
    },
    {
      icon: "⛓️",
      title: "Blockchain Solution",
      desc: "Custom Layer-1 blockchain infrastructure, Dapp development, Web3.0 solutions, BFT consensus engines, block explorers, and node monitoring.",
      features: [
        "Custom Layer-1 Architecture & State Machines",
        "Signed BFT Consensus & Proposer Selection",
        "Dapps, Smart Contracts & Web3 Wallets",
        "Validator Nodes, Docker & CI/CD Tooling"
      ]
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Services</div>
          <h2 className="section-title">What CeloraIT Can Deliver</h2>
          <p className="section-subtitle">
            From early product strategy to cloud infrastructure and AI automation, we provide full lifecycle engineering.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <div key={i} className="service-card glass-panel">
              <div>
                <div className="service-icon-wrap">{svc.icon}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
              </div>
              <ul className="service-features-list">
                {svc.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
