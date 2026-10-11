import Image from "next/image";
import { trackRecord } from "@/lib/content";
import { Reveal } from "./Reveal";

export function TrackRecord() {
  return (
    <section id="track-record" className="relative overflow-hidden bg-ink py-28 text-bone">
      <Image
        src="/images/global-skyline.jpg"
        alt="Global enterprise skyline"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/70" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Track record</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-balance sm:text-5xl">
            Measured outcomes, not pilots.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {trackRecord.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <p className="font-display text-5xl tracking-tight text-clay sm:text-6xl">{item.stat}</p>
              <p className="mt-3 text-sm leading-relaxed text-bone/60">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
