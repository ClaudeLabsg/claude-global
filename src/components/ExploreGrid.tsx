import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { explorePages } from "@/lib/content";
import { Reveal } from "./Reveal";

export function ExploreGrid() {
  return (
    <section className="bg-bone py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-dark">Explore Claude Global</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-balance text-ink sm:text-5xl">
            The firm, in five parts.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {explorePages.map((page, i) => (
            <Reveal key={page.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/${page.slug}`}
                className="group relative block h-80 overflow-hidden rounded-2xl bg-ink"
              >
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-2xl tracking-tight text-bone">{page.title}</h3>
                  <p className="mt-2 text-sm text-bone/70">{page.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-clay-light opacity-0 transition-opacity group-hover:opacity-100">
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
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
