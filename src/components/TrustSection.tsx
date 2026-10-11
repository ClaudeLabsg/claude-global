import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { countries } from "@/lib/content";
import { Reveal } from "./Reveal";

export function TrustSection() {
  return (
    <section className="bg-bone py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-dark">Trust & compliance</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-balance text-ink sm:text-5xl">
            Compliance that's local to every market we operate in.
          </h2>
          <p className="mt-5 max-w-xl text-ink/60">
            Data residency and regulatory alignment aren't an afterthought bolted onto delivery — they're scoped
            during Discover, for the specific regime you operate under.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {countries.map((country, i) => (
            <Reveal key={country.slug} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-ink/10 bg-white p-7">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink"
                  style={{ backgroundColor: country.accentVar }}
                >
                  {country.flag} {country.name}
                </div>
                <h3 className="mt-5 font-display text-xl tracking-tight text-ink">{country.regulator}</h3>
                <ul className="mt-4 space-y-3">
                  {country.complianceNotes.map((note) => (
                    <li key={note} className="flex gap-3 text-sm text-ink/60">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: country.accentVar }}
                      />
                      {note}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${country.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay-dark"
                >
                  {country.name} delivery details
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
