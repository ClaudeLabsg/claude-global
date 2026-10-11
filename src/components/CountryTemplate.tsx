import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, Compass, GraduationCap, Plug2, ShieldCheck, Users } from "lucide-react";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { CTASection } from "./CTASection";
import { Reveal } from "./Reveal";
import { countries, services, type Country } from "@/lib/content";

const icons = [Compass, Bot, Plug2, ShieldCheck, Users, GraduationCap];

export function CountryTemplate({ country }: { country: Country }) {
  const otherCountries = countries.filter((c) => c.slug !== country.slug);
  const focusedServices = country.focusServices.map((i) => ({ ...services[i], icon: icons[i] }));

  return (
    <>
      <Nav variant="dark" />
      <main>
        <Hero
          eyebrow={`${country.flag} ${country.tagline}`}
          headline={country.headline}
          description={country.description}
          image={country.heroImage}
          imageAlt={`${country.name} skyline`}
          accent={country.accentVar}
          breadcrumb={[
            { label: "Global", href: "/" },
            { label: country.name, href: `/${country.slug}` },
          ]}
        />

        {/* Local snapshot stats */}
        <section className="bg-bone-dim py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-dark">
                {country.name} at a glance
              </p>
            </Reveal>
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              {country.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <p className="font-display text-5xl tracking-tight text-ink" style={{ color: country.accentVar }}>
                    {s.stat}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary visual band */}
        <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
          <Image
            src={country.secondaryImage}
            alt={country.secondaryCaption}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-12 lg:px-10">
            <p className="max-w-lg font-display text-2xl leading-snug text-bone sm:text-3xl">
              &ldquo;{country.quote.text}&rdquo;
            </p>
            <p className="mt-3 text-sm text-bone/60">{country.quote.attribution}</p>
          </div>
        </section>

        {/* Focused services */}
        <section className="bg-bone py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-dark">
                Built for {country.name}
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-balance text-ink sm:text-5xl">
                Where we focus first in {country.name}.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {focusedServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.number} delay={i * 0.1}>
                    <div className="h-full rounded-2xl border border-ink/10 bg-white p-7">
                      <Icon className="h-6 w-6" style={{ color: country.accentVar }} />
                      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink/40">
                        {service.number} · {service.timeframe}
                      </p>
                      <h3 className="mt-2 font-display text-xl tracking-tight text-ink">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/60">{service.detail}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <Link
                href="/#what-we-do"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-clay-dark"
              >
                See all six service lines
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Compliance / trust */}
        <section id="governance" className="relative overflow-hidden bg-ink py-28 text-bone">
          <div className="grain absolute inset-0" />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">
                Trust & compliance in {country.name}
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-balance sm:text-5xl">
                {country.regulator}
              </h2>
              <div className="mt-8 space-y-4 text-sm text-bone/70">
                <p>
                  <span className="font-semibold text-bone">Data residency — </span>
                  {country.dataResidency}
                </p>
                <p>
                  <span className="font-semibold text-bone">Timezone — </span>
                  {country.timezone}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-5">
                {country.complianceNotes.map((note) => (
                  <li key={note} className="flex gap-4 border-b border-white/10 pb-5 text-sm text-bone/80 last:border-0">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: country.accentVar }} />
                    {note}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Cross-country links */}
        <section className="bg-bone-dim py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-dark">Also delivering in</p>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {otherCountries.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.1}>
                  <Link
                    href={`/${c.slug}`}
                    className="group relative block h-56 overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={c.heroImage}
                      alt={c.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                      <h3 className="font-display text-2xl tracking-tight text-bone">
                        {c.flag} {c.name}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-bone transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection localized={country.name} />
      </main>
      <Footer />
    </>
  );
}
