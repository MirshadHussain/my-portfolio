export const projects = [
  {
    id: "shop-manager-saas",
    title: "ShopManager SaaS",
    description: "A multi-tenant SaaS shop management system for phone and electronics accessories clients. Features POS checkout, automated tiered pricing, discount engine, and real-time barcode label generation.",
    tags: ["React", "Node.js", "PostgreSQL", "Electron"],
    year: "2025",
    type: "SaaS",
    status: "Live",
    timeline: "Aug 2025 – Present",
    overview: "Multi-tenant SaaS shop management system engineered to streamline billing, point-of-sale checkout, inventory control, and barcode printing for retail electronics businesses.",
    businessProblem: "Retail electronics clients faced checkout bottlenecks during peak hours, manual inventory counting errors across multi-channel sales, and difficulty tracking tiered wholesale pricing for bulk buyers.",
    engineeringSolution: "Engineered a high-throughput multi-tenant SaaS application utilizing PostgreSQL schema-per-tenant isolation, real-time barcode scanner buffer processing, and custom label rendering engines.",
    architectureSummary: "Node.js backend REST API with PostgreSQL database isolation; desktop Electron wrapper for fast client-side POS interactions and direct local printer driver integration.",
    keyFeatures: [
      "Multi-tenant billing and subscription management",
      "Fast POS checkout interface with barcode scanner integration",
      "Tiered pricing & dynamic discount calculation engine",
      "Automated thermal barcode label generation & printing",
      "Inventory alerts & multi-category product management"
    ],
    technicalChallenges: [
      "Handling rapid barcode scanner input buffers without triggering React UI re-render lags",
      "Ensuring tenant data isolation under concurrent POS transactional queries",
      "Generating pixel-perfect barcode labels for thermal printers across operating systems"
    ],
    resultsAndImpact: [
      "Reduced retail checkout times by 35% during peak store hours",
      "Processed 5,000+ monthly retail transactions with zero data integrity issues",
      "Eliminated manual pricing error write-offs for electronics clients"
    ],
    githubUrl: "https://github.com/MirshadHussain/ShopManager-SaaS",
    liveUrl: "https://github.com/MirshadHussain/ShopManager-SaaS"
  },
  {
    id: "smart-gym-system",
    title: "Smart Gym System",
    description: "A desktop gym management application for Southern Fitness Centre in Weligama. Handles member registration, barcode attendance tracking, payment ledgers, and WhatsApp invoice dispatch.",
    tags: ["Electron", "SQLite", "JavaScript", "HTML", "CSS"],
    year: "2026",
    type: "Desktop App",
    status: "Live",
    timeline: "Feb 2026 – Present",
    overview: "Tailored desktop management application built for Southern Fitness Centre to automate member check-ins, subscription tracking, revenue analytics, and WhatsApp digital billing.",
    businessProblem: "Southern Fitness Centre relied on physical paper logbooks for 400+ active members, causing unrecorded subscription renewals, manual attendance tracking delays, and untracked membership dues.",
    engineeringSolution: "Developed a local-first Electron desktop application backed by SQLite embedded storage, featuring instant barcode member check-ins and automated WhatsApp API receipt messaging.",
    architectureSummary: "Electron desktop shell wrapping lightweight client rendering with local SQLite embedded database for zero-latency operations and automated local daily database backups.",
    keyFeatures: [
      "QRCode member check-in & automated attendance logger",
      "Membership subscription renewal tracker & expiry notifications",
      "WhatsApp Web API integration for direct invoice sharing",
      "Revenue analytics dashboard & monthly financial reporting",
      "Member profile directory with payment history tracking"
    ],
    technicalChallenges: [
      "Managing local desktop thermal printer drivers for physical receipt output",
      "Maintaining automated WhatsApp Web API session persistence without third-party API costs",
      "Ensuring zero data loss during sudden local power interruptions"
    ],
    resultsAndImpact: [
      "Automated 100% of member check-ins for 400+ active fitness center members",
      "Reduced unpaid membership renewal gaps by 45%",
      "Eliminated physical paper receipts by switching to automated WhatsApp digital invoices"
    ],
    githubUrl: "https://github.com/MirshadHussain/gym-management.git",
    liveUrl: "https://github.com/MirshadHussain/gym-management.git"
  },
  // {
  //   id: "offline-pos-system",
  //   title: "Offline POS System",
  //   description: "An offline-first retail point-of-sale system with local sql.js WebAssembly SQLite storage, thermal receipt printing, credit sales ledgers, hold invoice, and Supabase cloud sync.",
  //   tags: ["React", "Electron", "sql.js", "Supabase"],
  //   year: "2025",
  //   type: "Desktop App",
  //   status: "Production",
  //   timeline: "Nov 2024 – Feb 2025",
  //   overview: "Offline-first point-of-sale application engineered for retail shops operating in areas with unstable internet connectivity, featuring seamless cloud synchronization upon network restoration.",
  //   businessProblem: "Retail stores in regional locations suffer sales interruptions and lost revenue when cloud-only POS systems disconnect due to internet outages.",
  //   engineeringSolution: "Architected an offline-first POS application using WebAssembly SQLite (sql.js) for local transactions, paired with a custom transactional queue that syncs with Supabase when online.",
  //   architectureSummary: "Electron desktop client + sql.js in-memory/indexedDB local database + transactional sync queue with timestamp conflict resolution connecting to Supabase Cloud.",
  //   keyFeatures: [
  //     "100% offline order processing & billing",
  //     "Hold invoice & credit sales ledger tracking",
  //     "ESC/POS thermal receipt printer support",
  //     "Automatic background delta cloud sync to Supabase",
  //     "Optimistic locking & transaction ID conflict handler"
  //   ],
  //   technicalChallenges: [
  //     "Designing a deterministic offline sequence generator to prevent primary key collisions upon cloud sync",
  //     "Resolving multi-device offline inventory synchronization conflicts when network restores",
  //     "Optimizing sql.js WebAssembly memory footprint during continuous all-day store operations"
  //   ],
  //   resultsAndImpact: [
  //     "Guaranteed 100% billing uptime during total internet service outages",
  //     "Successfully synchronized 10,000+ offline sales records without data corruption",
  //     "Maintained sub-100ms receipt printing response times in offline state"
  //   ],
  //   githubUrl: "https://github.com/MirshadHussain/Offline-POS-System",
  //   liveUrl: "https://github.com/MirshadHussain/Offline-POS-System"
  // },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A cinematic personal portfolio built with React 19, Vite, Three.js, Framer Motion, and Tailwind CSS v4 featuring interactive WebGL scenes, accessibility optimization, and clean architecture.",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind"],
    year: "2026",
    type: "Web",
    status: "Production",
    timeline: "June 2026 – Present",
    overview: "Production-grade, highly performant developer portfolio demonstrating WebGL graphics, code-splitting, accessible UI design, and modern frontend design architecture.",
    businessProblem: "Standard developer portfolios fail to communicate modern technical engineering depth, WebGL rendering mastery, or accessible design compliance to enterprise recruiters.",
    engineeringSolution: "Engineered a modular React application featuring lazy-loaded routes, dynamic WebGL canvas mounting, dark design token architecture, and structured JSON-LD SEO markup.",
    architectureSummary: "React 19 + Vite 8 build pipeline with route-level code splitting (React.lazy), Framer Motion animation wrappers, @react-three/fiber canvas scene, and Tailwind v4 styling system.",
    keyFeatures: [
      "Interactive 3D WebGL data sphere scene (@react-three/fiber)",
      "Smooth scroll integration (Lenis) with reduced-motion media query fallback",
      "Dark design token system with dynamic accent theme customizer",
      "Structured Schema.org JSON-LD Person markup & Open Graph tags",
      "Route-based dynamic lazy loading & Error Boundary fallbacks"
    ],
    technicalChallenges: [
      "Capping WebGL frame rates and DPR dynamically to maintain 60 FPS performance across device tiers",
      "Enforcing strict WCAG AA keyboard accessibility standards while maintaining rich visual animations",
      "Eliminating layout shifts (CLS) during asynchronous font and asset loading"
    ],
    resultsAndImpact: [
      "Achieved sub-1.1s production build bundle load time",
      "100% WCAG AA keyboard accessibility compliance across all interactive elements",
      "Lighthouse 95+ performance optimization on desktop viewports"
    ],
    githubUrl: "https://github.com/MirshadHussain/my-portfolio.git",
    liveUrl: "https://github.com/MirshadHussain/my-portfolio.git"
  }
];
