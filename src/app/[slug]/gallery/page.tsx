import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countryBySlug } from "@/lib/content";

export async function generateMetadata({ params }: PageProps<"/[slug]/gallery">): Promise<Metadata> {
  const country = countryBySlug((await params).slug);
  return country ? { title: `Gallery — Claude ${country.name} Community` } : {};
}

export default async function GalleryPage({ params }: PageProps<"/[slug]/gallery">) {
  const country = countryBySlug((await params).slug);
  if (!country) notFound();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">Community Gallery</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">Meetup Photos</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">
          Moments from our workshops, events, and freestyle coding sessions.
        </p>
      </div>

      {country.gallery.length === 0 && (
        <p className="mt-14 rounded-2xl border border-dashed border-border bg-surface-elevated p-8 text-center text-sm text-text-secondary">
          Photos from our first meetups will appear here.{" "}
          <Link href={`/${country.slug}/events`} className="font-medium text-claude-orange hover:underline">
            See upcoming events →
          </Link>
        </p>
      )}

      {country.gallery.map((album) => (
        <section key={`${album.date}-${album.title}`} className="mt-14">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-text-primary">{album.title}</h2>
            <p className="mt-1 text-sm text-text-secondary">
              {album.date} · {album.venue}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {album.photos.map((photo) => (
              <a
                key={photo.src}
                href={photo.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${photo.alt} larger`}
                className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-xl bg-surface"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-text-primary">View</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
