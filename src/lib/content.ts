import indonesia from "@/content/communities/indonesia";
import johor from "@/content/communities/johor";
import philippines from "@/content/communities/philippines";
import singapore from "@/content/communities/singapore";
import vietnam from "@/content/communities/vietnam";

export type ChannelType = "telegram" | "whatsapp" | "luma" | "eventbrite" | "linkedin" | "facebook" | "instagram";

export type Channel = { type: ChannelType; href: string; label: string };

export type Country = {
  slug: string;
  name: string;
  /** Short region code shown in the wordmark, e.g. "SG" → ClaudeSG. */
  code: string;
  /** External site for communities that already run their own (e.g. claudecode.sg). */
  url?: string;
  flag: string;
  city: string;
  heroImage: string;
  heroCredit?: string;
  description: string;
  timezone: string;
  coords: { lat: number; lon: number };
  /** Social channels in display order. The first chat and first event channel drive the hero buttons. */
  channels: Channel[];
  /** Where workshop and collaboration enquiries are emailed. Enquiry forms are disabled until this is set. */
  email?: string;
  /** Example number shown in the enquiry forms' phone field. */
  phoneExample: string;
  /** Application form for the AI Integration Programme. The Apply button is hidden until this is set. */
  aipFormUrl?: string;
  /** Shown on the About page. The lead section is hidden until this is set. */
  lead?: CommunityLead;
  events: CommunityEvent[];
  presentations: Presentation[];
  gallery: GalleryAlbum[];
  partners: Partner[];
};

export type CommunityEvent = {
  title: string;
  /** ISO date, e.g. "2026-11-08". Events move from Upcoming to Past automatically after this date. */
  date: string;
  venue: string;
  /** Registration page (Luma, Eventbrite, ...). */
  url: string;
  /** Optional poster in public/communities/<slug>/events/. */
  image?: string;
};

export type Presentation = {
  title: string;
  date: string;
  description: string;
  /** Link to the slides (Google Slides, Canva, PDF in public/communities/<slug>/, ...). */
  url: string;
};

export type GalleryAlbum = {
  title: string;
  date: string;
  venue: string;
  /** Photos in public/communities/<slug>/gallery/. */
  photos: { src: string; alt: string }[];
};

export type Partner = {
  name: string;
  /** Logo in public/communities/<slug>/partners/, ideally a white or transparent PNG. */
  logo: string;
};

export type CommunityLead = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  links?: { label: string; href: string }[];
};

// Each community's details live in its own file so community leads only ever edit their own.
export const countries: Country[] = [singapore, johor, indonesia, vietnam, philippines];

const isChat = (c: Channel) => c.type === "telegram" || c.type === "whatsapp";
const isEvent = (c: Channel) => c.type === "luma" || c.type === "eventbrite";

/** The group chat (Telegram or WhatsApp) the community lives in. */
export function chatChannel(country: Country) {
  return country.channels.find(isChat);
}

/** Event platforms, primary one first. */
export function eventChannels(country: Country) {
  return country.channels.filter(isEvent);
}

export function findChannel(country: Country, type: ChannelType) {
  return country.channels.find((c) => c.type === type);
}

/** Today's date (YYYY-MM-DD) in the community's timezone. */
function today(country: Country) {
  return new Date().toLocaleDateString("en-CA", { timeZone: country.timezone });
}

export function upcomingEvents(country: Country) {
  const now = today(country);
  return country.events.filter((e) => e.date >= now).sort((a, b) => a.date.localeCompare(b.date));
}

export function pastEvents(country: Country) {
  const now = today(country);
  return country.events.filter((e) => e.date < now).sort((a, b) => b.date.localeCompare(a.date));
}

export function formatEventDate(date: string, withYear = true) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    ...(withYear ? { year: "numeric" } : {}),
    timeZone: "UTC",
  });
}

export function countryBySlug(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export function countryHref(country: Country) {
  return country.url ?? `/${country.slug}`;
}

export const activities = [
  {
    icon: "workshops",
    title: "Workshops",
    tagline: "Learn by building",
    description: "Hands-on sessions covering everything from first prompts to shipping production AI apps.",
  },
  {
    icon: "freestyle",
    title: "Freestyle Coding",
    tagline: "Audience picks, we build live",
    description: "The audience chooses topics and a developer builds it live on the spot. Unrehearsed.",
  },
  {
    icon: "resources",
    title: "Resources",
    tagline: "Open knowledge",
    description: "Session recordings, slide decks, and curated articles. Everything shared publicly.",
  },
] as const;

export const principles = [
  {
    title: "Non-profit",
    description: "No products to sell and no sales pitch from the stage. The point is what the room learns.",
  },
  {
    title: "Free to join",
    description: "Meetups, workshops and the group chats are open to everyone — students, builders and the curious.",
  },
  {
    title: "Run by volunteers",
    description: "Each community is organised locally by people who use Claude every day and want to share it.",
  },
];

export const quotes = [
  { text: "The best way to predict the future is to build it.", author: "Alan Kay" },
  { text: "Tell me and I forget, teach me and I may remember, involve me and I learn.", author: "Benjamin Franklin" },
  { text: "Alone we can do so little; together we can do so much.", author: "Helen Keller" },
];
