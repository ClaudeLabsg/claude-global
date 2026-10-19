"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";

export type NavLink = { label: string; href: string; external?: boolean };

const linkClass =
  "whitespace-nowrap text-sm font-medium text-text-secondary transition-colors hover:text-claude-orange";

function NavAnchor({ link, className, onClick }: { link: NavLink; className: string; onClick?: () => void }) {
  return (
    <Link
      href={link.href}
      className={className}
      onClick={onClick}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
    >
      {link.label}
    </Link>
  );
}

export function Nav({ code, links, joinHref }: { code: string; links: NavLink[]; joinHref: string }) {
  const [open, setOpen] = useState(false);
  const externalProps = joinHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Claude Global Community home">
          <Wordmark code={code} />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavAnchor key={link.label} link={link} className={linkClass} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={joinHref}
            {...externalProps}
            className="hidden rounded-full bg-claude-orange px-5 py-2 text-sm font-medium text-white transition-all hover:bg-claude-orange-dark hover:shadow-lg hover:shadow-claude-orange-glow sm:inline-flex"
          >
            Join Community
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-surface lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-bg px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <NavAnchor key={link.label} link={link} className={linkClass} onClick={() => setOpen(false)} />
            ))}
            <a
              href={joinHref}
              {...externalProps}
              className="mt-2 inline-flex justify-center rounded-full bg-claude-orange px-5 py-2.5 text-sm font-medium text-white"
            >
              Join Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
