import Link from "next/link";
import { countries, countryHref, type Country } from "@/lib/content";
import { channelMeta } from "./channels";
import { Wordmark } from "./Wordmark";

const headingClass = "text-[9px] font-semibold uppercase tracking-widest text-white/25 sm:text-[10px]";
const linkClass = "text-[11px] text-white/40 transition-colors hover:text-claude-orange";

export function Footer({ country }: { country?: Country }) {
  // Photo credits: the home page shows every country's photo, a country page only its own.
  const credits = (country ? [country] : countries).flatMap((c) => (c.heroCredit ? [c.heroCredit] : []));

  return (
    <footer className="border-t border-border bg-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-center gap-3">
          <Wordmark code={country?.code ?? "Global"} tone="white" />
          <span className="text-[10px] text-white/30">Educate, Encourage, Empower with AI.</span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:mt-8 md:grid-cols-4">
          <div>
            <h4 className={headingClass}>Communities</h4>
            <div className="mt-2 flex flex-col gap-1.5">
              <Link href="/" className={linkClass}>
                Global
              </Link>
              {countries.map((c) => (
                <Link
                  key={c.slug}
                  href={countryHref(c)}
                  target={c.url ? "_blank" : undefined}
                  rel={c.url ? "noopener noreferrer" : undefined}
                  className={linkClass}
                >
                  {c.flag} {c.name}
                </Link>
              ))}
            </div>
          </div>

          {country && (
            <div>
              <h4 className={headingClass}>Community</h4>
              <div className="mt-2 flex flex-col gap-1.5">
                {country.channels.map((channel) => (
                  <a
                    key={channel.type}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {channelMeta[channel.type].name}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className={headingClass}>Explore</h4>
            <div className="mt-2 flex flex-col gap-1.5">
              <a href="#what-we-do" className={linkClass}>
                What We Do
              </a>
              <a href={country ? "#freestyle" : "#principles"} className={linkClass}>
                {country ? "Freestyle Coding" : "How We Run"}
              </a>
              <a href="#get-involved" className={linkClass}>
                Get Involved
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-4 sm:flex-row sm:pt-6">
          <div className="flex flex-col items-center gap-0.5 sm:items-start">
            <p className="text-[9px] text-white/20">
              © {new Date().getFullYear()} Claude {country?.name ?? "Global"} Community
            </p>
            <p className="text-[9px] text-white/20">A non-profit community. Not affiliated with Anthropic.</p>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:items-end">
            <p className="text-[9px] text-white/20">Free to join · Everyone is welcome</p>
            {credits.map((credit) => (
              <p key={credit} className="text-[9px] text-white/20">
                {credit}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
