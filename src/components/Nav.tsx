"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { navLinks, countries } from "@/lib/content";

export function Nav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md ${
        isDark
          ? "bg-ink/70 border-white/10 text-bone"
          : "bg-bone/80 border-ink/10 text-ink"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2 font-display text-lg tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-clay" />
          Claude Global
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setRegionOpen((v) => !v)}
              onBlur={() => setTimeout(() => setRegionOpen(false), 150)}
              className="flex items-center gap-1 opacity-80 transition-opacity hover:opacity-100"
            >
              Markets
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${regionOpen ? "rotate-180" : ""}`} />
            </button>
            {regionOpen && (
              <div
                className={`absolute right-0 top-full mt-3 w-56 overflow-hidden rounded-xl border shadow-xl ${
                  isDark ? "border-white/10 bg-ink-soft" : "border-ink/10 bg-white"
                }`}
              >
                <Link
                  href="/"
                  className="flex items-center justify-between px-4 py-3 text-sm hover:bg-clay/10"
                >
                  Global
                  <span className="text-xs opacity-60">HQ view</span>
                </Link>
                {countries.map((c) => (
                  <Link
                    key={c.slug}
                    href={c.url ?? `/${c.slug}`}
                    target={c.url ? "_blank" : undefined}
                    rel={c.url ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between border-t border-current/10 px-4 py-3 text-sm hover:bg-clay/10"
                  >
                    <span className="flex items-center gap-2">
                      <span>{c.flag}</span>
                      {c.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#next-steps"
            className="group inline-flex items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Book a Discovery Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className={`border-t px-6 pb-6 lg:hidden ${isDark ? "border-white/10" : "border-ink/10"}`}>
          <nav className="flex flex-col gap-4 pt-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-current/10" />
            <Link href="/" onClick={() => setOpen(false)}>
              Global
            </Link>
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={c.url ?? `/${c.slug}`}
                target={c.url ? "_blank" : undefined}
                rel={c.url ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
              >
                {c.flag} {c.name}
              </Link>
            ))}
            <Link
              href="#next-steps"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-clay px-5 py-3 text-sm font-semibold text-ink"
            >
              Book a Discovery Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
