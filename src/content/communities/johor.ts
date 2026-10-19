import type { Country } from "@/lib/content";

// ClaudeJB community. Community leads edit this file and public/communities/johor/ only.
const community: Country = {
  slug: "johor",
  name: "Johor Bahru",
  code: "JB",
  flag: "🇲🇾",
  city: "Johor Bahru",
  heroImage: "/communities/johor/hero.jpg",
  heroCredit:
    "Johor Bahru photo: xiquinhosilva, CC BY 2.0, via Wikimedia Commons",
  description:
    "A non-profit community in Johor Bahru dedicated to teaching and building with Claude. Everyone is welcome.",
  timezone: "Asia/Kuala_Lumpur",
  coords: { lat: 1.46, lon: 103.76 },
  // Shown in this order. The first chat (WhatsApp/Telegram) and first event platform (Eventbrite/Luma) drive the hero buttons.
  // TODO: replace each "#" with the real link.
  channels: [
    {
      type: "linkedin",
      href: "https://www.linkedin.com/company/claude-jb-community/",
      label: "Follow ClaudeJB",
    },
    { type: "eventbrite", href: "#", label: "Eventbrite events" },
    {
      type: "whatsapp",
      href: "https://chat.whatsapp.com/Dc7nYLASfiNFppgP6dllUG",
      label: "WhatsApp group chat",
    },
    {
      type: "facebook",
      href: "https://www.facebook.com/profile.php?id=61595400241148",
      label: "ClaudeJB on Facebook",
    },
    {
      type: "instagram",
      href: "https://www.instagram.com/claudejohor/",
      label: "@claudejb",
    },
    { type: "luma", href: "https://luma.com/claudejb", label: "Luma calendar" },
  ],
  // Workshop and collaboration enquiries are emailed here. TODO: set the community email.
  // email: "community@example.com",
  phoneExample: "+60 12-345 6789",
  // TODO: link to the AI Integration Programme application form.
  // aipFormUrl: "https://forms.gle/...",

  // About page "community lead" section. Hidden until filled in.
  // lead: {
  //   name: "Your Name",
  //   role: "Community Lead",
  //   bio: "A few sentences about you and why you started the community.",
  //   photo: "/communities/johor/lead.jpg",
  //   links: [{ label: "LinkedIn", href: "https://linkedin.com/in/..." }],
  // },

  // Upcoming and past events. Past/upcoming is worked out from the date automatically.
  // { title: "Claude 101", date: "2026-11-08", venue: "Venue, City", url: "https://lu.ma/...",
  //   image: "/communities/johor/events/claude-101.jpg" },
  events: [],

  // Workshop decks shown on the Presentations page.
  // { title: "Claude 101", date: "8 November 2026", description: "What it covers.", url: "https://..." },
  presentations: [],

  // Photo albums for the Gallery page and the "From Our Meetups" strip.
  // { title: "Claude 101", date: "November 8, 2026", venue: "Venue, City",
  //   photos: [{ src: "/communities/johor/gallery/claude-101-1.jpg", alt: "Group photo" }] },
  gallery: [],

  // Partner logos for the "Friends & Partners" strip. Hidden while empty.
  // { name: "Partner name", logo: "/communities/johor/partners/partner.png" },
  partners: [],
};

export default community;
