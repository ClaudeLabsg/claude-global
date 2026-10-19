import type { Country } from "@/lib/content";

// ClaudeSG community. Community leads edit this file and public/communities/singapore/ only.
const community: Country = {
  slug: "singapore",
  name: "Singapore",
  code: "SG",
  url: "https://claudecode.sg/",
  flag: "🇸🇬",
  city: "Singapore",
  heroImage: "/communities/singapore/hero.jpg",
  description:
    "A non-profit community in Singapore dedicated to teaching and building with Claude. Everyone is welcome.",
  timezone: "Asia/Singapore",
  coords: { lat: 1.29, lon: 103.85 },
  // Shown in this order. The first chat (WhatsApp/Telegram) and first event platform (Eventbrite/Luma) drive the hero buttons.
  channels: [
    { type: "telegram", href: "https://t.me/claudesg", label: "t.me/claudesg" },
    { type: "luma", href: "https://lu.ma/claudesg", label: "lu.ma/claudesg" },
    { type: "linkedin", href: "https://linkedin.com/company/claudesg", label: "Follow ClaudeSG" },
  ],
  // Workshop and collaboration enquiries are emailed here. TODO: set the community email.
  // email: "community@example.com",
  phoneExample: "+65 9123 4567",
  // TODO: link to the AI Integration Programme application form.
  // aipFormUrl: "https://forms.gle/...",

  // About page "community lead" section. Hidden until filled in.
  // lead: {
  //   name: "Your Name",
  //   role: "Community Lead",
  //   bio: "A few sentences about you and why you started the community.",
  //   photo: "/communities/singapore/lead.jpg",
  //   links: [{ label: "LinkedIn", href: "https://linkedin.com/in/..." }],
  // },

  // Upcoming and past events. Past/upcoming is worked out from the date automatically.
  // { title: "Claude 101", date: "2026-11-08", venue: "Venue, City", url: "https://lu.ma/...",
  //   image: "/communities/singapore/events/claude-101.jpg" },
  events: [],

  // Workshop decks shown on the Presentations page.
  // { title: "Claude 101", date: "8 November 2026", description: "What it covers.", url: "https://..." },
  presentations: [],

  // Photo albums for the Gallery page and the "From Our Meetups" strip.
  // { title: "Claude 101", date: "November 8, 2026", venue: "Venue, City",
  //   photos: [{ src: "/communities/singapore/gallery/claude-101-1.jpg", alt: "Group photo" }] },
  gallery: [],

  // Partner logos for the "Friends & Partners" strip. Hidden while empty.
  // { name: "Partner name", logo: "/communities/singapore/partners/partner.png" },
  partners: [],
};

export default community;
