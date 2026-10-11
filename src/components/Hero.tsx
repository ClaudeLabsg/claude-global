"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export function Hero({
  eyebrow,
  headline,
  description,
  image,
  imageAlt,
  primaryCta = { label: "Book a Discovery Call", href: "#next-steps" },
  secondaryCta,
  accent,
  breadcrumb,
}: {
  eyebrow: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  accent?: string;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-ink text-bone">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10">
        {breadcrumb && (
          <div className="mb-6 flex items-center gap-2 text-sm text-bone/60">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <Link href={b.href} className="transition-colors hover:text-bone">
                  {b.label}
                </Link>
              </span>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]"
            style={accent ? { borderColor: `${accent}66`, color: accent } : undefined}
          >
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/70">{description}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              {primaryCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-bone/10"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-bone/50" />
      </motion.div>
    </section>
  );
}
