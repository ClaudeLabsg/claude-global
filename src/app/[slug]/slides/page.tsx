import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countryBySlug } from "@/lib/content";

export async function generateMetadata({ params }: PageProps<"/[slug]/slides">): Promise<Metadata> {
  const country = countryBySlug((await params).slug);
  return country ? { title: `Presentations — Claude ${country.name} Community` } : {};
}

export default async function SlidesPage({ params }: PageProps<"/[slug]/slides">) {
  const country = countryBySlug((await params).slug);
  if (!country) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold text-text-primary">Presentations</h1>
      <p className="mt-2 text-text-secondary">Workshop presentations you can view and present from the browser.</p>
      {country.presentations.length > 0 ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {country.presentations.map((deck) => (
            <a
              key={deck.url}
              href={deck.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border p-5 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-text-primary">{deck.title}</h3>
              <p className="mt-1 text-sm text-text-secondary">{deck.date}</p>
              <p className="mt-2 text-sm text-text-secondary">{deck.description}</p>
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-2xl border border-dashed border-border bg-surface-elevated p-8 text-center text-sm text-text-secondary">
          Slides from our workshops will appear here after each session.
        </p>
      )}
    </main>
  );
}
