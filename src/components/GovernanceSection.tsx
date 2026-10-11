import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { governanceControls } from "@/lib/content";
import { Reveal } from "./Reveal";

export function GovernanceSection() {
  return (
    <section id="governance" className="bg-bone py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-dark">Governance</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-balance text-ink sm:text-5xl">
            &ldquo;A policy document cannot stop a model inventing a number.&rdquo;
          </h2>
          <p className="mt-6 max-w-md text-ink/60">
            Governance that lives in a slide deck does nothing at inference time. Ours runs in the system itself —
            four runtime controls on every agent we ship.
          </p>

          <div className="relative mt-10 h-72 overflow-hidden rounded-2xl">
            <Image
              src="/images/governance-signing.jpg"
              alt="Governance review and sign-off"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {governanceControls.map((control, i) => (
            <Reveal key={control.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-ink/10 bg-white p-7">
                <CheckCircle2 className="h-6 w-6 text-clay" />
                <h3 className="mt-4 font-display text-lg tracking-tight text-ink">{control.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{control.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
