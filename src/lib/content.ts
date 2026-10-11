export const navLinks = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Work", href: "/work" },
  { label: "Governance", href: "/governance" },
  { label: "Company", href: "/company" },
  { label: "Trust", href: "/trust" },
];

export type ExplorePage = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const explorePages: ExplorePage[] = [
  {
    slug: "company",
    title: "Company",
    description: "One team, three disciplines — agent engineering, platform & data, delivery & quality.",
    image: "/images/team-culture.jpg",
  },
  {
    slug: "what-we-do",
    title: "What We Do",
    description: "Six service lines, one delivery team — from strategy to training.",
    image: "/images/code-engineering.jpg",
  },
  {
    slug: "work",
    title: "Work",
    description: "Measured outcomes, not pilots — our track record and delivery model.",
    image: "/images/office-scale.jpg",
  },
  {
    slug: "governance",
    title: "Governance",
    description: "Runtime controls that stop a model from inventing a number.",
    image: "/images/governance-signing.jpg",
  },
  {
    slug: "trust",
    title: "Trust",
    description: "Data residency, compliance and security, built into every engagement.",
    image: "/images/data-security.jpg",
  },
];

export type Service = {
  number: string;
  title: string;
  timeframe: string;
  description: string;
  detail: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "AI Adoption Strategy",
    timeframe: "4–6 weeks",
    description: "Discovery, opportunity assessment, roadmap and business case.",
    detail:
      "We map your processes and systems, then rank candidates by value-to-effort so the first build is the right one.",
  },
  {
    number: "02",
    title: "Custom Agent Development",
    timeframe: "8–20 weeks",
    description: "Production agentic systems on the Claude Agent SDK.",
    detail:
      "Architecture, build, evaluation and deployment — multi-agent coordinators, structured extraction, retrieval with citation.",
  },
  {
    number: "03",
    title: "MCP & Systems Integration",
    timeframe: "4–12 weeks",
    description: "Connecting Claude to the stack you already run.",
    detail:
      "Tool and resource interfaces, authentication, and data flow between Claude and the enterprise systems you already operate.",
  },
  {
    number: "04",
    title: "Data Security & Compliance",
    timeframe: "3–8 weeks",
    description: "Data governance, residency and access control.",
    detail:
      "Regional data residency, audit trails, and security review aligned to the regulatory regime you operate under.",
  },
  {
    number: "05",
    title: "Enterprise Enablement",
    timeframe: "2 weeks – 6 months",
    description: "Role-specific programmes and internal champion networks.",
    detail:
      "We build organisational capability — governance frameworks, internal practitioner networks, targeted training.",
  },
  {
    number: "06",
    title: "Training & Education",
    timeframe: "1 day – 12 weeks",
    description: "Certification pathways for every level.",
    detail:
      "An internationally benchmarked curriculum, including the Claude Certified Architect track and cohort programmes.",
  },
];

export const disciplines = [
  {
    title: "Agent Engineering",
    description: "Claude Agent SDK, MCP servers, tool and interface design.",
    image: "/images/code-engineering.jpg",
  },
  {
    title: "Platform & Data",
    description: "Backend, data pipelines, AWS and access control.",
    image: "/images/data-security.jpg",
  },
  {
    title: "Delivery & Quality",
    description: "Programme management, evaluation, QA and sign-off.",
    image: "/images/office-scale.jpg",
  },
];

export const governanceControls = [
  {
    title: "Citation Gates",
    description: "Every claim an agent makes traces back to a retrievable source before it reaches a user.",
  },
  {
    title: "Nullable Schemas",
    description: "Structured outputs can return \"unknown\" — agents are never forced to invent a value.",
  },
  {
    title: "Confidence Routing",
    description: "Low-confidence responses route to a human reviewer instead of shipping silently.",
  },
  {
    title: "Full Audit Trails",
    description: "Every decision, tool call and output is logged and reconstructable, end to end.",
  },
];

export const trackRecord = [
  { stat: "40%", label: "Reduction in manual review time across deployed agents" },
  { stat: "3.2×", label: "Faster time-to-production vs. in-house build attempts" },
  { stat: "99.9%", label: "Uptime across production agentic systems" },
  { stat: "6 wks", label: "Average time to first deployed agent, discovery to launch" },
];

export const deliveryPhases = [
  { phase: "01", title: "Discover", description: "Process mapping, stakeholder interviews, opportunity sizing." },
  { phase: "02", title: "Design", description: "Architecture, evaluation criteria, and a signed-off technical plan." },
  { phase: "03", title: "Build", description: "Iterative delivery in two-week cycles, demoed as it ships." },
  { phase: "04", title: "Validate", description: "Evaluation against real data, security review, UAT sign-off." },
  { phase: "05", title: "Handover", description: "Full documentation, code and data ownership transferred, day one." },
];

export type Country = {
  slug: string;
  name: string;
  flag: string;
  accent: string;
  accentVar: string;
  tagline: string;
  hook: string;
  heroImage: string;
  secondaryImage: string;
  secondaryCaption: string;
  headline: string;
  description: string;
  regulator: string;
  dataResidency: string;
  timezone: string;
  stats: { stat: string; label: string }[];
  focusServices: [number, number, number];
  complianceNotes: string[];
  quote: { text: string; attribution: string };
};

export const countries: Country[] = [
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    accent: "sg",
    accentVar: "var(--color-sg)",
    tagline: "Regional HQ",
    hook: "Our home base — Singapore-by-default data residency on AWS ap-southeast-1.",
    heroImage: "/images/singapore-hero.jpg",
    secondaryImage: "/images/singapore-jewel.jpg",
    secondaryCaption: "Jewel Changi Airport — infrastructure built to the same standard we hold our systems to.",
    headline: "Enterprise AI, engineered from Singapore.",
    description:
      "Singapore is where Claude Global is based, and where most of our delivery teams sit. Engagements here run closest to the source — shortest feedback loops, same-timezone governance reviews, and infrastructure that defaults to local residency.",
    regulator: "PDPA & MAS TRM Guidelines",
    dataResidency: "AWS ap-southeast-1 (Singapore) by default",
    timezone: "GMT+8 — same timezone as our delivery team",
    stats: [
      { stat: "HQ", label: "Regional headquarters and primary delivery base" },
      { stat: "ap-se-1", label: "Default AWS region for data residency" },
      { stat: "GMT+8", label: "Full overlap with your working hours" },
    ],
    focusServices: [1, 3, 4],
    complianceNotes: [
      "PDPA-aligned data handling across every engagement",
      "MAS Technology Risk Management guidelines for financial-sector clients",
      "Architecture reviews available for MAS-regulated institutions",
    ],
    quote: {
      text: "Singapore is not a market we serve remotely — it's where the team building your system sits.",
      attribution: "Delivery & Quality, Claude Global",
    },
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    accent: "my",
    accentVar: "var(--color-my)",
    tagline: "KL Delivery Partner",
    hook: "Kuala Lumpur enterprises, delivered with the same five-phase model, PDPA-aligned.",
    heroImage: "/images/malaysia-hero.jpg",
    secondaryImage: "/images/office-scale.jpg",
    secondaryCaption: "Delivery teams run the same discovery-to-handover model in every market we operate in.",
    headline: "Enterprise AI, built for Malaysia.",
    description:
      "From Kuala Lumpur's financial district to manufacturing operations across the Klang Valley, we run the same rigorous delivery model we use everywhere — adapted to Malaysia's regulatory landscape and data residency expectations.",
    regulator: "Malaysia PDPA & Bank Negara RMiT",
    dataResidency: "In-region residency available on request",
    timezone: "GMT+8 — same timezone as our delivery team",
    stats: [
      { stat: "GMT+8", label: "Same working hours as our Singapore base" },
      { stat: "5", label: "Phase delivery model, applied without exception" },
      { stat: "4–20", label: "Weeks from strategy engagement to first build" },
    ],
    focusServices: [0, 1, 4],
    complianceNotes: [
      "Malaysia Personal Data Protection Act (PDPA) alignment",
      "Bank Negara Malaysia RMiT considerations for financial institutions",
      "In-region data residency options evaluated during Discover",
    ],
    quote: {
      text: "Malaysian enterprises don't need a slower version of our process — they need the same one, applied locally.",
      attribution: "AI Adoption Strategy, Claude Global",
    },
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    accent: "id",
    accentVar: "var(--color-id)",
    tagline: "Jakarta & Beyond",
    hook: "Jakarta's largest enterprises, scaled across the archipelago's biggest digital economy.",
    heroImage: "/images/indonesia-hero.jpg",
    secondaryImage: "/images/indonesia-tanahlot.jpg",
    secondaryCaption: "Scaling across Southeast Asia's largest digital economy, archipelago-wide.",
    headline: "Enterprise AI, scaled for Indonesia.",
    description:
      "Indonesia is Southeast Asia's largest digital economy, and its enterprises operate at a scale few markets match. We build agentic systems designed for that scale from day one — and for Indonesia's data protection law.",
    regulator: "UU PDP (Personal Data Protection Law) & OJK",
    dataResidency: "In-country residency options for regulated sectors",
    timezone: "GMT+7 — one hour offset from our delivery base",
    stats: [
      { stat: "#1", label: "Largest digital economy in Southeast Asia" },
      { stat: "GMT+7", label: "One hour offset, full-day overlap maintained" },
      { stat: "OJK", label: "Financial-sector reviews available on request" },
    ],
    focusServices: [1, 2, 3],
    complianceNotes: [
      "UU PDP (Indonesia's Personal Data Protection Law) alignment",
      "OJK considerations for financial-services deployments",
      "In-country data residency evaluated for regulated clients",
    ],
    quote: {
      text: "Scale is the default expectation in Indonesia — our architecture is designed for that from the first workshop.",
      attribution: "Custom Agent Development, Claude Global",
    },
  },
];
