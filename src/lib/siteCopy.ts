// Copy shared by every community page, mirrored from claudecode.sg.
// Community-specific details (events, presentations, photos, links) live in src/content/communities/.

export const certificationBadges = [
  { src: "/badges/claude-certified-architect-professional.webp", name: "Claude Certified Architect", level: "Professional" },
  { src: "/badges/claude-certified-associate.webp", name: "Claude Certified Associate", level: "Foundations" },
  { src: "/badges/claude-certified-architect.webp", name: "Claude Certified Architect", level: "Foundations" },
  { src: "/badges/claude-certified-developer.webp", name: "Claude Certified Developer", level: "Foundations" },
];

export const certificationTracks = [
  {
    code: "CCA-F",
    name: "Claude Certified Architect",
    level: "Foundations",
    difficulty: "Hard",
    highlight: true,
    badge: "/badges/claude-certified-architect.webp",
    description: "The core architect exam — architecture, design decisions and the trade-offs behind them.",
    href: "https://ccaf-onboarding.claudecode.sg/screening.html",
    price: "USD 125",
  },
  {
    code: "CCD-F",
    name: "Claude Certified Developer",
    level: "Foundations",
    difficulty: "Easy",
    highlight: false,
    badge: "/badges/claude-certified-developer.webp",
    description:
      "The lightest of the three — building with Claude day to day. Start here if you are new to the platform.",
    href: "https://ccaf-onboarding.claudecode.sg/screening.html?exam=ccdf",
    price: "USD 125",
  },
  {
    code: "CCA-P",
    name: "Claude Certified Architect",
    level: "Professional",
    difficulty: "Advanced",
    highlight: true,
    badge: "/badges/claude-certified-architect-professional.webp",
    description:
      "The professional tier of the architect track — for experienced architects ready for the hardest exam.",
    href: "https://ccaf-onboarding.claudecode.sg/screening.html?exam=ccap",
    price: "USD 175",
  },
];

export const certificationSteps = [
  "Pick your exam and fill in the screening form.",
  "Once approved, you are issued a @claudecode.sg address for exam access and sign a freelance developer agreement under Anthropic's Partner terms.",
  "From there everything is automated — follow the instructions sent to you.",
];

export const ccafDocuments = [
  {
    title: "CCA-F Exam Infographic",
    description: "The exam at a glance — format, domains, and what to expect.",
    href: "https://claudecode.sg/cca-f/cca-f-exam-infographic.pdf",
  },
  {
    title: "CCA-F Exam Policy",
    description: "Official policies and rules for sitting the exam.",
    href: "https://claudecode.sg/cca-f/cca-f-exam-policy.pdf",
  },
  {
    title: "CCA-F Terms & Conditions",
    description: "Terms and conditions for the certification.",
    href: "https://claudecode.sg/cca-f/cca-f-terms-and-conditions.pdf",
  },
];

export const aipHighlights = [
  { title: "One use case", description: "Small enough to ship, real enough to use on Monday." },
  { title: "Built with you", description: "Your team is in the room, so it keeps working after we leave." },
  { title: "Yours to keep", description: "The build, the prompts and the know-how stay with the business." },
];

export const aipExamples = [
  {
    tag: "Customer-facing",
    title: "Website FAQ assistant",
    description:
      "Answers customer questions from your own pages, price lists and policies — and hands over to a human the moment it is out of its depth.",
  },
  {
    tag: "Customer-facing",
    title: "Enquiry-to-quote intake",
    description:
      "Turns a messy email or web form into a structured quote request: what they want, how many, by when, and the questions still to ask.",
  },
  {
    tag: "Customer-facing",
    title: "Reviews and social replies",
    description:
      "Drafts responses to Google reviews, enquiries and social comments in your own voice, ready for a one-second check before they go out.",
  },
  {
    tag: "Internal",
    title: "Ask-your-documents helper",
    description:
      "SOPs, product sheets, supplier terms, past proposals. Staff ask a question and get the answer with the source, instead of hunting through folders.",
  },
  {
    tag: "Internal",
    title: "Document reader",
    description:
      "Invoices, receipts, delivery orders and forms read straight into a spreadsheet — fields extracted, totals checked, mismatches flagged.",
  },
  {
    tag: "Internal",
    title: "Leave and onboarding assistant",
    description:
      "A simple HR helper: leave requests, onboarding checklists and policy questions handled in one place, so nobody is chasing the boss on WhatsApp.",
  },
];

export type Tier = {
  eyebrow: string;
  title: string;
  price?: string;
  description: string;
  points: string[];
  highlight: boolean;
};

// Prices are the same as claudecode.sg.
export const workshopTiers: Tier[] = [
  {
    eyebrow: "Free corporate training",
    title: "For NGOs and registered charities",
    description:
      "No fee, no catch. We cover our own costs so that the people who need this training most are not priced out of it. Places are limited and every request is reviewed.",
    points: [
      "Registered NGOs and charities only",
      "One free session per organisation",
      "Two hours or more per session",
      "Subject to approval — we run a limited number of events each month",
    ],
    highlight: false,
  },
  {
    eyebrow: "Paid corporate training",
    title: "For every other organisation",
    price: "$3,000 – $5,000",
    description:
      "The same workshop, delivered for your team as a three-hour session — companies, schools, associations and agencies alike. The fee funds the free sessions, the community events and the venues — none of it is profit.",
    points: [
      "$3,000 for up to 40 people",
      "$5,000 for 41 people and above",
      "Three hours per session",
      "Tailored to your tools, your workflows and your use cases",
      "Every dollar goes straight back into community building",
    ],
    highlight: true,
  },
];

export const workshopOptions = [
  "Free — we are a registered NGO or charity (subject to approval)",
  "$3,000 — up to 40 people",
  "$5,000 — 41 people and above",
  "Custom package — something else in mind",
  "Not sure yet",
];

export const collabTiers: Tier[] = [
  {
    eyebrow: "Community collaboration",
    title: "Free — when it is for the people",
    description:
      "Built around what the room learns, not what it buys. If your event genuinely serves the community, there is no fee.",
    points: [
      "Learning, building and networking come first",
      "No sales pitch and no product placement from the stage",
      "Co-hosted, co-promoted and open to our members",
      "Shared with our event calendar and community channels",
    ],
    highlight: false,
  },
  {
    eyebrow: "Sponsored collaboration",
    title: "Sponsored event",
    price: "$3,000 – $5,000",
    description:
      "Your product, your message, our room. Sponsored events are clearly labelled as sponsored so the community always knows what it is walking into.",
    points: [
      "$3,000 for under 250 people, with a 100-person minimum",
      "$5,000 for more than 250 people",
      "Venue and F&B are not included",
      "Publicly marked as a sponsored event, and every dollar goes back into community building",
    ],
    highlight: true,
  },
];

export const collabOptions = [
  "Free — a community event, not a product pitch",
  "$3,000 — sponsored, under 250 people (100 minimum)",
  "$5,000 — sponsored, more than 250 people",
  "Not sure yet",
];

export const aboutPillars = [
  {
    word: "Educate",
    headline: "Teach it properly, and teach it free.",
    body: "Every session is hands-on. You work on your own laptop, you build something real, and you leave with it. Workshops, resources and certification prep are free wherever we can make them free — and when an organisation pays us, that money funds the sessions that stay free.",
  },
  {
    word: "Encourage",
    headline: "Nobody is the wrong level for the room.",
    body: "The same session holds people opening an AI tool for the first time and engineers already running agents in production, and both get something out of it. Nothing is assumed, no question is too basic to ask out loud, and things break in front of everyone and get fixed in front of everyone.",
  },
  {
    word: "Empower",
    headline: "Leave able to do something you could not do before.",
    body: "Not inspiration — capability. People ship during the session, take the skills back to their own work, and a good number come back to teach the next room. That loop is the whole point: the community grows because the people it taught stay and pass it on.",
  },
];
