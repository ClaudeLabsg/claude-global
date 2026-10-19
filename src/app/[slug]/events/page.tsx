import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventTile } from "@/components/CountrySections";
import { countryBySlug, eventChannels, pastEvents, upcomingEvents } from "@/lib/content";
import { channelMeta } from "@/components/channels";

// Re-render hourly so events move from upcoming to past without a redeploy.
export const revalidate = 3600;

export async function generateMetadata({ params }: PageProps<"/[slug]/events">): Promise<Metadata> {
  const country = countryBySlug((await params).slug);
  return country ? { title: `Events — Claude ${country.name} Community` } : {};
}

export default async function EventsPage({ params }: PageProps<"/[slug]/events">) {
  const country = countryBySlug((await params).slug);
  if (!country) notFound();

  const upcoming = upcomingEvents(country);
  const past = pastEvents(country);
  const follow = eventChannels(country)[0];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">Community</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">Events</h1>
        <p className="mt-3 max-w-xl text-text-secondary">
          All our workshops, meetups, and freestyle coding sessions.{" "}
          {follow && (
            <>
              <a
                href={follow.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-claude-orange hover:underline"
              >
                Follow us on {channelMeta[follow.type].name}
              </a>{" "}
              for updates.
            </>
          )}
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-text-primary">Upcoming</h2>
        {upcoming.length > 0 ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <EventTile key={`${event.date}-${event.title}`} event={event} />
            ))}
          </div>
        ) : (
          <p className="mt-5 rounded-2xl border border-dashed border-border bg-surface-elevated p-8 text-center text-sm text-text-secondary">
            No upcoming events yet. New sessions are announced in our community channels first.
          </p>
        )}
      </section>

      {past.length > 0 && (
        <section className="mt-14">
          <h2 className="text-lg font-semibold text-text-primary">Past Events</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((event) => (
              <EventTile key={`${event.date}-${event.title}`} event={event} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
