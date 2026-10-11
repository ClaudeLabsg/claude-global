import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { step: "01", title: "Book an hour", description: "A discovery call with our delivery lead — no deck, just your problem." },
  { step: "02", title: "Get a scoped plan", description: "A roadmap and business case, ranked by value-to-effort." },
  { step: "03", title: "Start Discover", description: "Work begins within two weeks of sign-off." },
];

export function CTASection({ localized }: { localized?: string }) {
  return (
    <section id="next-steps" className="relative overflow-hidden bg-ink py-28 text-bone">
      <div className="mesh-glow absolute inset-0" />
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Next steps</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-balance sm:text-5xl">
              Start with an hour.
            </h2>
            <p className="mt-6 max-w-md text-bone/60">
              {localized
                ? `Talk to our ${localized} delivery team about what's actually worth building first.`
                : "No obligation, no sales deck — just a conversation about what's worth building first."}
            </p>
            <Link
              href="mailto:hello@claude-global.com"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Book a Discovery Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>

          <div className="space-y-8">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="flex gap-5 border-b border-white/10 pb-8 last:border-0">
                  <span className="font-display text-2xl text-clay-light">{s.step}</span>
                  <div>
                    <h3 className="font-display text-lg tracking-tight">{s.title}</h3>
                    <p className="mt-1 text-sm text-bone/60">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
