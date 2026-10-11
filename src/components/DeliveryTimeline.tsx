import { deliveryPhases } from "@/lib/content";
import { Reveal } from "./Reveal";

export function DeliveryTimeline() {
  return (
    <section className="bg-bone-dim py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-dark">How we deliver</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-balance text-ink sm:text-5xl">
            Five phases. Nothing is done until you say it is.
          </h2>
        </Reveal>

        <div className="relative mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink/15 lg:block" />
          {deliveryPhases.map((phase, i) => (
            <Reveal key={phase.phase} delay={i * 0.1}>
              <div className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-clay font-display text-lg text-ink">
                  {phase.phase}
                </div>
                <h3 className="mt-5 font-display text-xl tracking-tight text-ink">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{phase.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
