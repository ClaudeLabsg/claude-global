import type { Country } from "@/lib/content";

// ClaudeID community. Community leads edit this file and public/communities/indonesia/ only.
const community: Country = {
  slug: "indonesia",
  name: "Indonesia",
  code: "ID",
  flag: "🇮🇩",
  city: "Jakarta",
  heroImage: "/communities/indonesia/hero.jpg",
  description:
    "A non-profit community in Indonesia dedicated to teaching and building with Claude. Everyone is welcome.",
  timezone: "Asia/Jakarta",
  coords: { lat: -6.21, lon: 106.85 },
  // Shown in this order. The first chat (WhatsApp/Telegram) and first event platform (Eventbrite/Luma) drive the hero buttons.
  // TODO: replace each "#" with the real link.
  channels: [
    { type: "telegram", href: "#", label: "Telegram group" },
    { type: "luma", href: "#", label: "Luma calendar" },
    { type: "linkedin", href: "#", label: "Follow ClaudeID" },
  ],
  // Workshop and collaboration enquiries are emailed here. TODO: set the community email.
  // email: "community@example.com",
  phoneExample: "+62 812-3456-7890",
  // TODO: link to the AI Integration Programme application form.
  // aipFormUrl: "https://forms.gle/...",

  // About page "community lead" section. Hidden until filled in.
  // lead: {
  //   name: "Your Name",
  //   role: "Community Lead",
  //   bio: "A few sentences about you and why you started the community.",
  //   photo: "/communities/indonesia/lead.jpg",
  //   links: [{ label: "LinkedIn", href: "https://linkedin.com/in/..." }],
  // },

  // Upcoming and past events. Past/upcoming is worked out from the date automatically.
  // { title: "Claude 101", date: "2026-11-08", venue: "Venue, City", url: "https://lu.ma/...",
  //   image: "/communities/indonesia/events/claude-101.jpg" },
  events: [],

  // Workshop decks shown on the Presentations page.
  // { title: "Claude 101", date: "8 November 2026", description: "What it covers.", url: "https://..." },
  presentations: [],

  // Photo albums for the Gallery page and the "From Our Meetups" strip.
  // { title: "Claude 101", date: "November 8, 2026", venue: "Venue, City",
  //   photos: [{ src: "/communities/indonesia/gallery/claude-101-1.jpg", alt: "Group photo" }] },
  gallery: [],

  // Partner logos for the "Friends & Partners" strip. Hidden while empty.
  // { name: "Partner name", logo: "/communities/indonesia/partners/partner.png" },
  partners: [],
};

export default community;
