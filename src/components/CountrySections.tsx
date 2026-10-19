import Image from "next/image";
import Link from "next/link";
import { CalendarDays, FileText } from "lucide-react";
import { formatEventDate, type CommunityEvent, type Country } from "@/lib/content";
import {
  aipExamples,
  aipHighlights,
  ccafDocuments,
  certificationBadges,
  certificationSteps,
  certificationTracks,
  collabOptions,
  collabTiers,
  workshopOptions,
  workshopTiers,
  type Tier,
} from "@/lib/siteCopy";
import { TelegramIcon } from "./BrandIcons";
import { EnquiryForm } from "./EnquiryForm";
import { Wordmark } from "./Wordmark";

// ---------------------------------------------------------------- events

function EventPoster({ event, className }: { event: CommunityEvent; className: string }) {
  if (event.image) {
    return (
      <Image
        src={event.image}
        alt={event.title}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
      />
    );
  }
  // No poster yet: a branded tile with the date.
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#D97757] to-[#c4613f] text-white">
      <CalendarDays className="h-10 w-10 opacity-80" />
      <p className="mt-3 text-sm font-semibold uppercase tracking-widest">{formatEventDate(event.date, false)}</p>
    </div>
  );
}

/** Square event card used over the hero, as on claudecode.sg. */
export function HeroEventCard({ event }: { event: CommunityEvent }) {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl bg-[#1A1A1A]/90 shadow-[0_12px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/15 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-[#1A1A1A] hover:ring-white/25"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <EventPoster event={event} className="" />
        <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
          {formatEventDate(event.date, false)}
        </span>
      </div>
      <div className="flex flex-col gap-1 p-5">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-white sm:text-lg">{event.title}</h3>
        <p className="line-clamp-1 text-sm text-white/55">{event.venue}</p>
        <div className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-claude-orange transition-transform group-hover:translate-x-0.5">
          Register →
        </div>
      </div>
    </a>
  );
}

/** Event tile for the Events page. */
export function EventTile({ event }: { event: CommunityEvent }) {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all hover:border-claude-orange/30 hover:shadow-lg hover:shadow-claude-orange-glow"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <EventPoster event={event} className="" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-claude-orange">{formatEventDate(event.date)}</p>
        <h3 className="mt-2 text-lg font-semibold text-text-primary group-hover:text-claude-orange">{event.title}</h3>
        <p className="mt-1 text-sm text-text-muted">{event.venue}</p>
        <span className="mt-auto pt-4 text-sm font-medium text-claude-orange opacity-0 transition-opacity group-hover:opacity-100">
          Register →
        </span>
      </div>
    </a>
  );
}

// ---------------------------------------------------------------- partners

export function PartnersMarquee({ country }: { country: Country }) {
  if (country.partners.length === 0) return null;
  // Duplicated so the marquee loops seamlessly.
  const logos = [...country.partners, ...country.partners];

  return (
    <section className="relative z-10 mt-10 bg-[#262626] py-10 sm:mt-16 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Friends &amp; Partners</p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Friends &amp; partners we&apos;ve worked with.</h2>
        </div>
      </div>
      <div className="partner-marquee mt-8 sm:mt-10">
        <div className="partner-marquee__track">
          {logos.map((p, i) => (
            <div key={`${p.name}-${i}`} className="logo-box">
              {/* eslint-disable-next-line @next/next/no-img-element -- logos have arbitrary aspect ratios */}
              <img src={p.logo} alt={p.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- certifications

export function CertificationBadges() {
  return (
    <section className="relative z-10 border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">Certifications</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Claude certifications you can earn.
          </h2>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-10 sm:gap-8 lg:grid-cols-4">
          {certificationBadges.map((b) => (
            <li key={b.src} className="flex flex-col items-center text-center">
              <Image src={b.src} alt={`${b.name} — ${b.level}`} width={200} height={200} className="h-32 w-32 sm:h-40 sm:w-40" />
              <h3 className="mt-5 text-base font-semibold leading-snug text-text-primary sm:text-lg">{b.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-text-secondary">{b.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CertificationTracks({ country }: { country: Country }) {
  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">Certifications · now open</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl md:text-5xl">
          Take the exam. All three tracks are open to you.
        </h2>
      </div>
      <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certificationTracks.map((t) => (
          <li
            key={t.code}
            className={`flex flex-col rounded-3xl border p-7 shadow-sm sm:p-9 ${
              t.highlight ? "border-claude-orange/40 bg-[#FFF6F0]" : "border-border bg-white"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted">
                  {t.name} · {t.level}
                </p>
                <p className="mt-2 whitespace-nowrap text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-5xl">
                  {t.code}
                </p>
                <span
                  className={`mt-3 inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${
                    t.difficulty === "Easy" ? "bg-emerald-600/10 text-emerald-700" : "bg-claude-orange/15 text-claude-orange"
                  }`}
                >
                  {t.difficulty} level
                </span>
              </div>
              <Image
                src={t.badge}
                alt={`${t.name} badge`}
                width={96}
                height={96}
                className="h-20 w-20 shrink-0 sm:h-24 sm:w-24 lg:h-20 lg:w-20"
              />
            </div>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">{t.description}</p>
            <a
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-claude-orange px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-claude-orange/25 transition-colors hover:bg-claude-orange-dark"
            >
              Take the {t.code} exam →
            </a>
            <p className="mt-3 text-center text-sm text-text-muted">{t.price} · paid directly to Anthropic</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white/70 p-5 sm:p-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted">Why you can sit it here</h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Anthropic Academy only accepts exam sign-ups from partner organisation email domains. The pathway is run by
            Claude Singapore Community, a member of the{" "}
            <b className="font-semibold text-text-primary">Claude Partner Network</b>, and is open to members of
            Claude {country.name} Community too — a credential that counts when you are looking for your next role.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-white/70 p-5 sm:p-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted">How it works</h3>
          <ol className="mt-4 space-y-3">
            {certificationSteps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-claude-orange text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-border bg-[#1A1A1A] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-claude-orange">Telegram</p>
          <h3 className="mt-2 text-2xl font-bold">Claude Architects Community</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
            The group for everyone who has taken a Claude certification or is thinking about it. How people passed,
            what the exam is like, and the latest news on the pathway.
          </p>
        </div>
        <a
          href="https://t.me/claudearchitects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-claude-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-claude-orange-dark"
        >
          <TelegramIcon className="h-4 w-4" />
          Join t.me/claudearchitects
        </a>
      </div>
    </div>
  );
}

export function CcafDocuments() {
  return (
    <div className="mt-12 max-w-2xl">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-text-primary">
          Official CCA-F exam information
        </h2>
        <span className="text-xs text-text-secondary">Updated 1 July 2026</span>
      </div>
      <div className="mt-4 space-y-3">
        {ccafDocuments.map((doc) => (
          <a
            key={doc.href}
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-claude-orange"
          >
            <div className="min-w-0">
              <p className="font-semibold text-text-primary">{doc.title}</p>
              <p className="mt-0.5 text-sm text-text-secondary">{doc.description}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-claude-orange px-4 py-2 text-sm font-semibold text-claude-orange">
              <FileText className="h-4 w-4" />
              PDF
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- AI Integration Programme

export function AiProgramme({ country }: { country: Country }) {
  return (
    <section
      id="ai-integration-programme"
      className="relative z-10 scroll-mt-24 overflow-hidden bg-[#FAF7F2] py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(55% 60% at 92% 0%, rgba(217,119,87,0.16) 0%, transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Wordmark code={country.code} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">AI Integration Programme</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              Your first AI build, done with you, for free.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-secondary">
              A programme for {country.name} SMEs that have not used AI in the business yet. Pick one thing that eats
              time every week, and we build a working version of it with you — no fee, no vendor lock-in, and you keep
              everything.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-text-secondary sm:grid-cols-3 lg:grid-cols-1">
            {aipHighlights.map((h) => (
              <li key={h.title} className="rounded-2xl border border-border bg-white/70 px-4 py-3">
                <span className="block font-semibold text-text-primary">{h.title}</span>
                <span className="mt-0.5 block leading-snug">{h.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">Six examples of what we build</p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aipExamples.map((ex) => (
              <li
                key={ex.title}
                className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
              >
                <span
                  className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
                    ex.tag === "Internal" ? "bg-[#1A1A1A]/8 text-text-secondary" : "bg-claude-orange/12 text-claude-orange"
                  }`}
                >
                  {ex.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-text-primary">{ex.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{ex.description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-secondary">
            Not on the list? Tell us what your week looks like and we will suggest one.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-border bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="text-xl font-bold text-text-primary sm:text-2xl">Apply for the programme</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
              A short form — who you are, what the business does, and the one thing you would like to try. We read
              every application and reply by email.
            </p>
          </div>
          {country.aipFormUrl ? (
            <a
              href={country.aipFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-claude-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-claude-orange/25 transition-colors hover:bg-claude-orange-dark"
            >
              Apply now →
            </a>
          ) : (
            <span className="inline-flex shrink-0 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text-muted">
              Applications open soon
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- workshops & collaborations

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-6 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-7 ${
        tier.highlight ? "border-claude-orange/50 bg-[#FFF6F0]/95" : "border-white/25 bg-white/95"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-widest ${
          tier.highlight ? "text-claude-orange" : "text-text-muted"
        }`}
      >
        {tier.eyebrow}
      </p>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-xl font-bold text-text-primary sm:text-2xl">{tier.title}</h3>
        {tier.price && <span className="text-xl font-bold text-claude-orange sm:text-2xl">{tier.price}</span>}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{tier.description}</p>
      <ul className="mt-5 flex flex-col gap-2.5">
        {tier.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm text-text-secondary">
            <span
              aria-hidden="true"
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tier.highlight ? "bg-claude-orange" : "bg-text-muted"}`}
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection({
  id,
  country,
  eyebrow,
  title,
  intro,
  tiers,
  footnote,
  form,
}: {
  id: string;
  country: Country;
  eyebrow: string;
  title: string;
  intro: string;
  tiers: Tier[];
  footnote: React.ReactNode;
  form: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 scroll-mt-24 overflow-hidden py-14 sm:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image src={country.heroImage} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#12100E]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100E]/70 via-[#12100E]/45 to-[#12100E]/80" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">{intro}</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {tiers.map((tier) => (
            <TierCard key={tier.eyebrow} tier={tier} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-white/75">{footnote}</p>
        <div className="mx-auto mt-6 w-full max-w-3xl">{form}</div>
      </div>
    </section>
  );
}

function EmailLink({ email }: { email?: string }) {
  if (!email) return <>through our community channels</>;
  return (
    <>
      at{" "}
      <a
        href={`mailto:${email}`}
        className="font-semibold text-white underline underline-offset-4 transition-colors hover:text-claude-orange"
      >
        {email}
      </a>
    </>
  );
}

export function CorporateWorkshops({ country }: { country: Country }) {
  return (
    <PricingSection
      id="corporate-workshops"
      country={country}
      eyebrow="Corporate Workshops"
      title="Bring Claude to Your Team"
      intro="We run hands-on Claude training for organisations. Registered NGOs and charities can apply for one free session; every other organisation pays — and every dollar goes back into the community."
      tiers={workshopTiers}
      footnote={
        <>
          Not sure which one you are? Tell us what your organisation does and we will tell you honestly. Free sessions
          go to registered NGOs and charities, are approved case by case, and are capped by how many events we can run
          each month. For a customisable package, email us directly <EmailLink email={country.email} />.
        </>
      }
      form={
        <EnquiryForm
          id="workshop"
          email={country.email}
          subject={`Workshop enquiry — Claude ${country.name} Community`}
          phoneExample={country.phoneExample}
          selectLabel="Which applies to you?"
          options={workshopOptions}
          selectHint="Pick the closest. If you are not sure, say so and we will tell you honestly."
          messageLabel="What would you like the workshop to cover?"
          messagePlaceholder="A few lines on your team, what they do, and roughly when."
          submitLabel="Send workshop enquiry →"
        />
      }
    />
  );
}

export function EventCollaborations({ country }: { country: Country }) {
  return (
    <PricingSection
      id="event-collaborations"
      country={country}
      eyebrow="Event Collaborations"
      title="Run an Event With Us"
      intro="We collaborate on events both ways — free when the event is for the community, sponsored when it is for your product. What it costs depends entirely on which one it is."
      tiers={collabTiers}
      footnote="Venue and F&B are yours to arrange either way. Tell us what you have in mind and we will be straight with you about which side of the line it falls on."
      form={
        <EnquiryForm
          id="collab"
          email={country.email}
          subject={`Event collaboration — Claude ${country.name} Community`}
          phoneExample={country.phoneExample}
          selectLabel="What kind of event is it?"
          options={collabOptions}
          selectHint="Venue and F&B are yours to arrange either way."
          messageLabel="Tell us about the event"
          messagePlaceholder="Format, audience, rough date and the outcome you are after."
          submitLabel="Send collaboration proposal →"
        />
      }
    />
  );
}

// ---------------------------------------------------------------- gallery strip

export function MeetupStrip({ country }: { country: Country }) {
  const photos = country.gallery.flatMap((album) => album.photos).slice(0, 8);
  if (photos.length === 0) return null;

  return (
    <section className="relative z-10 py-10 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex items-end justify-between sm:mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">Community</p>
            <h2 className="mt-1 text-2xl font-bold text-text-primary sm:text-3xl">From Our Meetups</h2>
          </div>
          <Link
            href={`/${country.slug}/gallery`}
            className="shrink-0 text-sm font-medium text-claude-orange hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
          {photos.map((photo) => (
            <Link
              key={photo.src}
              href={`/${country.slug}/gallery`}
              className="group relative aspect-square w-44 shrink-0 overflow-hidden rounded-xl bg-surface sm:w-auto"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 176px, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
