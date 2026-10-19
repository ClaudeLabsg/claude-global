import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { chatChannel, countries, countryBySlug } from "@/lib/content";

// One set of pages per community. Unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export default async function CountryLayout({ children, params }: LayoutProps<"/[slug]">) {
  const { slug } = await params;
  const country = countryBySlug(slug);
  if (!country) notFound();

  const base = `/${country.slug}`;
  // Same menu as claudecode.sg.
  const navLinks = [
    { label: "Gallery", href: `${base}/gallery` },
    { label: "Events", href: `${base}/events` },
    { label: "Presentations", href: `${base}/slides` },
    { label: "Resources", href: `${base}/resources` },
    { label: "AI Programme", href: `${base}#ai-integration-programme` },
    { label: "Workshops", href: `${base}#corporate-workshops` },
    { label: "Collaborate", href: `${base}#event-collaborations` },
    { label: "Certifications", href: `${base}/certifications` },
    { label: "About", href: `${base}/about` },
  ];
  const joinHref = chatChannel(country)?.href ?? country.channels[0]?.href ?? `${base}#get-involved`;

  return (
    <>
      <Nav code={country.code} links={navLinks} joinHref={joinHref} homeHref={base} />
      <div className="flex-1">{children}</div>
      <Footer country={country} />
    </>
  );
}
