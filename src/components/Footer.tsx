import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { countries, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-tight">Claude Global</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/60">
              AI integration and implementation for Southeast Asian enterprises — Claude and AWS, designed, built,
              deployed, and handed over.
            </p>
            <Link
              href="#next-steps"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-bone/30 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-bone hover:text-ink"
            >
              Book a Discovery Call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-bone/40">Practice</p>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-bone/70 transition-colors hover:text-bone">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-bone/40">Markets</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-bone/70 transition-colors hover:text-bone">
                  Global
                </Link>
              </li>
              {countries.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="text-bone/70 transition-colors hover:text-bone">
                    {c.flag} {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-bone/40">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-bone/70">
              <li>hello@claude-global.com</li>
              <li>Singapore, SG · HQ</li>
              <li>GMT+8</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-bone/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Claude Global. All rights reserved.</p>
          <p>Built on the Claude Agent SDK · Delivered on AWS</p>
        </div>
      </div>
    </footer>
  );
}
