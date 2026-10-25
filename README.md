# CeloraIT — Next-Gen Software, SaaS & AI Engineering

Modern Bangladesh-based software company building scalable digital products, SaaS platforms, ERP systems, AI-enabled automation, mobile apps, and cloud solutions.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript / React 18+
- **Styling:** Vanilla CSS design tokens & modular components
- **Typography:** Google Fonts (`Plus Jakarta Sans` & `JetBrains Mono`)
- **Backend / API:** Next.js Route Handlers (`app/api/contact/route.ts`)

## Project Structure
```
CeloraIt/
├── app/
│   ├── api/contact/route.ts   # Contact inquiry API handler
│   ├── globals.css            # Design tokens & styles
│   ├── layout.tsx             # Root layout with fonts & SEO metadata
│   └── page.tsx               # Main application page
├── components/
│   ├── Navbar.tsx             # Navigation header with active section spy
│   ├── Hero.tsx               # Hero banner with CTA and key stats
│   ├── About.tsx              # Overview, Vision & Mission, interactive Values
│   ├── Services.tsx           # 6 Core technical capability pillars
│   ├── Projects.tsx           # Portfolio grid with category filters
│   ├── ProjectModal.tsx       # Case study deep-dive modal
│   ├── TechStack.tsx          # Engineering arsenal matrix
│   ├── DeliveryPods.tsx       # Core/Support pods & 5-step lifecycle
│   ├── Team.tsx               # Leadership & specialized engineering guild
│   ├── Clients.tsx            # Geographies, client types & industries
│   ├── Estimator.tsx          # Scope & pod investment calculator
│   ├── Contact.tsx            # Inquiry form with live validation & feedback
│   └── Footer.tsx             # Quick links, modal triggers & back-to-top
├── data/
│   ├── projects.ts            # Flagship systems & case studies data
│   └── estimator.ts           # Pricing formulas and scope deliverables
├── public/
│   └── assets/logo.svg        # Official CeloraIT SVG brand logo
├── package.json
└── tsconfig.json
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Production Build
```bash
npm run build
npm start
```

## Features
- **Interactive Project Showcase:** 8 flagship production systems with expandable case studies.
- **Dynamic Scope & Pod Estimator:** Interactive investment range calculator synced with the inquiry form.
- **Dedicated Tech Team Pods:** Transparent Sprint Pod vs. Support Pod architectures.
- **Strictly Grounded Architecture:** Production-ready responsive layout, clean aesthetic, and zero external CSS bloat.
