"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { countries } from "@/lib/content";
import { Reveal } from "./Reveal";

export function CountryNavigator() {
  return (
    <section id="markets" className="relative overflow-hidden bg-ink py-28 text-bone">
      <div className="grain absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url('/images/world-map-art.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Where we operate</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-balance sm:text-5xl">
            One delivery team. Three markets, executed locally.
          </h2>
          <p className="mt-5 max-w-xl text-bone/60">
            Every engagement runs on the same five-phase model and the same governance bar — adapted to the
            regulatory landscape and data residency expectations of the market you operate in.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {countries.map((country, i) => (
            <Reveal key={country.slug} delay={i * 0.1}>
              <Link
                href={`/${country.slug}`}
                className="group relative block h-[420px] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={country.heroImage}
                  alt={`${country.name} skyline`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10 transition-colors group-hover:from-ink/95" />
                <div
                  className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink"
                  style={{ backgroundColor: country.accentVar }}
                >
                  {country.flag} {country.tagline}
                </div>

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-7">
                  <h3 className="font-display text-3xl tracking-tight">{country.name}</h3>
                  <p className="text-sm text-bone/70">{country.hook}</p>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-clay">
                    Explore {country.name}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
