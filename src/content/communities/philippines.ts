import type { Country } from "@/lib/content";

// ClaudePH community. Community leads edit this file and public/communities/philippines/ only.
const community: Country = {
  slug: "philippines",
  name: "Philippines",
  code: "PH",
  flag: "🇵🇭",
  city: "Manila",
  heroImage: "/communities/philippines/hero.jpg",
  heroCredit: "Makati photo: Jopet Sy, CC BY 2.0, via Wikimedia Commons",
  description:
    "A non-profit community in the Philippines dedicated to teaching and building with Claude. Everyone is welcome.",
  timezone: "Asia/Manila",
  coords: { lat: 14.55, lon: 121.02 },
  // Shown in this order. The first chat (WhatsApp/Telegram) and first event platform (Eventbrite/Luma) drive the hero buttons.
  // TODO: replace each "#" with the real link.
  channels: [
    { type: "linkedin", href: "#", label: "Follow ClaudePH" },
    { type: "eventbrite", href: "#", label: "Eventbrite events" },
    { type: "whatsapp", href: "#", label: "WhatsApp group chat" },
    { type: "facebook", href: "#", label: "ClaudePH on Facebook" },
    { type: "instagram", href: "#", label: "@claudeph" },
    { type: "luma", href: "#", label: "Luma calendar" },
  ],
  // Workshop and collaboration enquiries are emailed here. TODO: set the community email.
  // email: "community@example.com",
  phoneExample: "+63 917 123 4567",
  // TODO: link to the AI Integration Programme application form.
  // aipFormUrl: "https://forms.gle/...",

  // About page "community lead" section. Hidden until filled in.
  // lead: {
  //   name: "Your Name",
  //   role: "Community Lead",
  //   bio: "A few sentences about you and why you started the community.",
  //   photo: "/communities/philippines/lead.jpg",
  //   links: [{ label: "LinkedIn", href: "https://linkedin.com/in/..." }],
  // },

  // Upcoming and past events. Past/upcoming is worked out from the date automatically.
  // { title: "Claude 101", date: "2026-11-08", venue: "Venue, City", url: "https://lu.ma/...",
  //   image: "/communities/philippines/events/claude-101.jpg" },
  events: [],

  // Workshop decks shown on the Presentations page.
  // { title: "Claude 101", date: "8 November 2026", description: "What it covers.", url: "https://..." },
  presentations: [],

  // Photo albums for the Gallery page and the "From Our Meetups" strip.
  // { title: "Claude 101", date: "November 8, 2026", venue: "Venue, City",
  //   photos: [{ src: "/communities/philippines/gallery/claude-101-1.jpg", alt: "Group photo" }] },
  gallery: [],

  // Partner logos for the "Friends & Partners" strip. Hidden while empty.
  // { name: "Partner name", logo: "/communities/philippines/partners/partner.png" },
  partners: [],
};

export default community;
