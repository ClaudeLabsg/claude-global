import { Bot, Compass, GraduationCap, Plug2, ShieldCheck, Users } from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "./Reveal";

const icons = [Compass, Bot, Plug2, ShieldCheck, Users, GraduationCap];

export function ServiceGrid({ highlight }: { highlight?: number[] }) {
  return (
    <section id="what-we-do" className="bg-bone-dim py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-dark">What we do</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-balance text-ink sm:text-5xl">
            Six service lines, one delivery team.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            const isHighlighted = highlight?.includes(i);
            return (
              <Reveal key={service.number} delay={(i % 3) * 0.08}>
                <div
                  className={`group h-full p-8 transition-colors ${
                    isHighlighted ? "bg-ink text-bone" : "bg-bone text-ink hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-display text-sm ${isHighlighted ? "text-clay-light" : "text-clay-dark"}`}
                    >
                      {service.number}
                    </span>
                    <Icon className={`h-5 w-5 ${isHighlighted ? "text-clay-light" : "text-clay-dark"}`} />
                  </div>
                  <h3 className="mt-5 font-display text-xl tracking-tight">{service.title}</h3>
                  <p className={`mt-2 text-sm ${isHighlighted ? "text-bone/70" : "text-ink/60"}`}>
                    {service.description}
                  </p>
                  <p
                    className={`mt-4 text-xs font-semibold uppercase tracking-wider ${
                      isHighlighted ? "text-clay-light" : "text-clay-dark"
                    }`}
                  >
                    {service.timeframe}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
