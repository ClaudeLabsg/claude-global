import Image from "next/image";
import { disciplines } from "@/lib/content";
import { Reveal } from "./Reveal";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-bone py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-dark">Who we are</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-balance text-ink sm:text-5xl">
            One team, three disciplines.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.1}>
              <div className="group relative h-[380px] overflow-hidden rounded-2xl bg-ink">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-2xl tracking-tight text-bone">{d.title}</h3>
                  <p className="mt-2 text-sm text-bone/70">{d.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
