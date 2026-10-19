import type { Country } from "@/lib/content";

// ClaudeVN community. Community leads edit this file and public/communities/vietnam/ only.
const community: Country = {
  slug: "vietnam",
  name: "Vietnam",
  code: "VN",
  flag: "🇻🇳",
  city: "Ho Chi Minh City",
  heroImage: "/communities/vietnam/hero.jpg",
  heroCredit: "Ho Chi Minh City photo: lumoplank, CC0, via Wikimedia Commons",
  description:
    "A non-profit community in Vietnam dedicated to teaching and building with Claude. Everyone is welcome.",
  timezone: "Asia/Ho_Chi_Minh",
  coords: { lat: 10.78, lon: 106.7 },
  // Shown in this order. The first chat (WhatsApp/Telegram) and first event platform (Eventbrite/Luma) drive the hero buttons.
  // TODO: replace each "#" with the real link.
  channels: [
    { type: "linkedin", href: "#", label: "Follow ClaudeVN" },
    { type: "eventbrite", href: "#", label: "Eventbrite events" },
    { type: "whatsapp", href: "#", label: "WhatsApp group chat" },
    { type: "facebook", href: "#", label: "ClaudeVN on Facebook" },
    { type: "instagram", href: "#", label: "@claudevn" },
    { type: "luma", href: "#", label: "Luma calendar" },
  ],
  // Workshop and collaboration enquiries are emailed here. TODO: set the community email.
  // email: "community@example.com",
  phoneExample: "+84 912 345 678",
  // TODO: link to the AI Integration Programme application form.
  // aipFormUrl: "https://forms.gle/...",

  // About page "community lead" section. Hidden until filled in.
  // lead: {
  //   name: "Your Name",
  //   role: "Community Lead",
  //   bio: "A few sentences about you and why you started the community.",
  //   photo: "/communities/vietnam/lead.jpg",
  //   links: [{ label: "LinkedIn", href: "https://linkedin.com/in/..." }],
  // },

  // Upcoming and past events. Past/upcoming is worked out from the date automatically.
  // { title: "Claude 101", date: "2026-11-08", venue: "Venue, City", url: "https://lu.ma/...",
  //   image: "/communities/vietnam/events/claude-101.jpg" },
  events: [],

  // Workshop decks shown on the Presentations page.
  // { title: "Claude 101", date: "8 November 2026", description: "What it covers.", url: "https://..." },
  presentations: [],

  // Photo albums for the Gallery page and the "From Our Meetups" strip.
  // { title: "Claude 101", date: "November 8, 2026", venue: "Venue, City",
  //   photos: [{ src: "/communities/vietnam/gallery/claude-101-1.jpg", alt: "Group photo" }] },
  gallery: [],

  // Partner logos for the "Friends & Partners" strip. Hidden while empty.
  // { name: "Partner name", logo: "/communities/vietnam/partners/partner.png" },
  partners: [],
};

export default community;
