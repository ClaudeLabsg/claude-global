import { Lightbulb, Terminal, Users } from "lucide-react";

function FlowDiagram() {
  return (
    <div className="mx-auto flex w-full max-w-[460px] flex-col items-center">
      <div className="grid w-full grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className="inline-flex items-center justify-center gap-1 rounded-full bg-white/10 px-2 py-1.5 text-[11px] font-medium text-white/80 ring-1 ring-white/15"
          >
            <Lightbulb className="h-3 w-3" />
            Idea {n}
          </span>
        ))}
      </div>

      {/* converging lines */}
      <svg viewBox="0 0 200 40" className="h-12 w-full" fill="none" aria-hidden="true">
        {[25, 75, 125, 175].map((x) => (
          <path
            key={x}
            d={`M ${x} 0 v 10 q 0 6 ${x < 100 ? 6 : -6} 6 h ${100 - x + (x < 100 ? -12 : 12)} q ${x < 100 ? 6 : -6} 0 ${x < 100 ? 6 : -6} 6 v 18`}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-1.5 text-[11px] text-white/80">
        Experimentation &amp; Exploration → Teaching → Execution
      </div>

      <div className="mt-4 flex h-28 w-28 flex-col items-center justify-center rounded-3xl bg-[#1A1A1A] text-center text-lg leading-tight font-bold text-white shadow-2xl shadow-black/20 ring-1 ring-white/10">
        Claude
        <br />
        Code
      </div>

      <div className="mt-4 flex gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#D97757]">
          <Users className="h-3.5 w-3.5" /> Teaching
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#D97757]">
          <Terminal className="h-3.5 w-3.5" /> Live Build
        </span>
      </div>
    </div>
  );
}

export function FreestyleCoding() {
  return (
    <section id="freestyle" className="relative z-10 scroll-mt-20 overflow-hidden bg-[#D97757] pt-12 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 sm:text-sm">
            Our Signature Format
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-4xl">Freestyle Coding</h2>
          <p className="mt-4 text-white/80">
            Freestyle Coding is a live, interactive coding format where the audience chooses a few topics and a
            developer meshes concepts and builds it on the spot.
          </p>
          <p className="mt-3 text-sm text-white/60">
            Ideas from the audience flow through experimentation and teaching, converging into a live build with
            Claude Code.
          </p>
        </div>
        <FlowDiagram />
      </div>
      <div className="mx-auto mt-12 h-px max-w-6xl bg-white/15 sm:mt-16" />
    </section>
  );
}
