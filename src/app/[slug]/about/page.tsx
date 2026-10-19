import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { channelMeta } from "@/components/channels";
import { Wordmark } from "@/components/Wordmark";
import { countryBySlug } from "@/lib/content";
import { aboutPillars } from "@/lib/siteCopy";

export async function generateMetadata({ params }: PageProps<"/[slug]/about">): Promise<Metadata> {
  const country = countryBySlug((await params).slug);
  return country ? { title: `About — Claude ${country.name} Community` } : {};
}

export default async function AboutPage({ params }: PageProps<"/[slug]/about">) {
  const country = countryBySlug((await params).slug);
  if (!country) notFound();
  const { lead } = country;

  return (
    <main>
      <section className="relative isolate overflow-hidden px-6 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <Image src={country.heroImage} alt="" aria-hidden fill sizes="100vw" className="-z-10 object-cover opacity-70" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F0EBE1]/40 via-[#F0EBE1]/70 to-[#F0EBE1]"
        />
        <div className="mx-auto max-w-3xl">
          <div className="animate-fade-in-up">
            <Wordmark code={country.code} />
          </div>
          <h1 className="animate-fade-in-up-delay-1 mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            Educate. Encourage. Empower.
          </h1>
          <p className="animate-fade-in-up-delay-2 mt-6 text-lg leading-relaxed text-text-secondary">
            Claude {country.name} Community is a non-profit run by volunteers, teaching people to build with AI — from
            a first prompt through to agents running in production. Founders, engineers, designers and complete
            beginners end up in the same room. Everything we run is hands-on, and almost all of it is free.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">What we are here to do</h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            Three words, in order. Everything we run has to earn all three.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {aboutPillars.map((p) => (
              <div key={p.word} className="flex h-full flex-col rounded-3xl border border-border bg-surface-elevated p-7 sm:p-8">
                <h3 className="text-2xl font-bold tracking-tight text-claude-orange sm:text-3xl">{p.word}</h3>
                <span aria-hidden="true" className="mt-4 h-px w-10 bg-claude-orange/40" />
                <p className="mt-4 text-lg font-semibold leading-snug text-text-primary">{p.headline}</p>
                <p className="mt-3 leading-relaxed text-text-secondary">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lead && (
        <section className="bg-[#E8E2D6]/50 px-6 py-16 sm:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[220px_1fr]">
            {lead.photo && (
              <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-3xl md:w-full">
                <Image src={lead.photo} alt={lead.name} fill sizes="220px" className="object-cover" />
              </div>
            )}
            <div className={lead.photo ? "" : "md:col-span-2"}>
              <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">The community lead</p>
              <h2 className="mt-2 text-3xl font-bold text-text-primary">{lead.name}</h2>
              <p className="mt-1 text-sm text-text-secondary">{lead.role}</p>
              <p className="mt-5 leading-relaxed text-text-secondary">{lead.bio}</p>
              {lead.links && lead.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-4">
                  {lead.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-claude-orange hover:underline"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">Come and find us</h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            Everything is open. Turn up to an{" "}
            <Link href={`/${country.slug}/events`} className="font-medium text-claude-orange hover:underline">
              event
            </Link>
            , or just lurk in the group chat until something looks interesting.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {country.channels.map((channel) => (
              <a
                key={channel.type}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-border bg-surface-elevated px-5 py-4 transition-colors hover:border-claude-orange"
              >
                <span className="font-semibold text-text-primary">{channelMeta[channel.type].name}</span>
                <span className="text-sm text-text-secondary">{channel.label}</span>
              </a>
            ))}
            {country.email && (
              <a
                href={`mailto:${country.email}`}
                className="flex items-center justify-between rounded-2xl border border-border bg-surface-elevated px-5 py-4 transition-colors hover:border-claude-orange"
              >
                <span className="font-semibold text-text-primary">Email</span>
                <span className="text-sm text-text-secondary">{country.email}</span>
              </a>
            )}
          </div>
          <p className="mt-10 text-sm text-text-muted">
            Claude {country.name} Community is a non-profit, volunteer-run initiative. We are not affiliated with
            Anthropic.
          </p>
        </div>
      </section>
    </main>
  );
}
