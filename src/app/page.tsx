import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { ChannelIcon, channelMeta } from "@/components/channels";
import { WhatWeDo } from "@/components/CommunitySections";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Wordmark } from "@/components/Wordmark";
import { chatChannel, countries, countryHref, principles } from "@/lib/content";

const navLinks = [
  ...countries.map((c) => ({ label: c.name, href: countryHref(c), external: Boolean(c.url) })),
  { label: "Get Involved", href: "#get-involved" },
];

// Three per row on desktop; an incomplete last row stays centred.
const cardWidth = "w-full sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-2.5rem)/3)]";

export default function Home() {
  return (
    <>
      <Nav code="Global" links={navLinks} joinHref="#communities" />
      <div className="flex-1">
        <main className="relative">
          {/* Hero: pick your community */}
          <section
            id="communities"
            className="relative min-h-[90vh] scroll-mt-16 overflow-hidden bg-[#D97757] pb-20 pt-14 sm:pt-20"
          >
            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
              <div className="animate-fade-in-up">
                <Wordmark code="Global" tone="light" size="lg" />
              </div>
              <h1 className="animate-fade-in-up-delay-1 mt-8 text-2xl font-bold text-white sm:text-4xl">
                Find your local Claude community.
              </h1>
              <p className="animate-fade-in-up-delay-1 mx-auto mt-4 max-w-lg text-sm text-white/70 sm:text-base">
                Non-profit, volunteer-run communities teaching and building with Claude across Southeast Asia. Free
                to join. Everyone is welcome.
              </p>

              <div className="animate-fade-in-up-delay-2 mt-10 flex w-full flex-wrap justify-center gap-4 sm:gap-5">
                {countries.map((c) => (
                  <Link
                    key={c.slug}
                    href={countryHref(c)}
                    target={c.url ? "_blank" : undefined}
                    rel={c.url ? "noopener noreferrer" : undefined}
                    className={`group flex flex-col overflow-hidden rounded-2xl bg-black/30 text-left ${cardWidth} ring-1 ring-white/15 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-black/40 hover:ring-white/25`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={c.heroImage}
                        alt={`${c.city} skyline`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                        {c.flag} {c.city}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 p-5">
                      <h2 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                        Claude {c.name} Community
                      </h2>
                      <p className="text-sm text-white/55">Meetups, workshops and a group chat in {c.city}.</p>
                      <div className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-white transition-transform group-hover:translate-x-0.5">
                        {c.url ? (
                          <>
                            Visit {c.url.replace(/^https?:\/\/|\/$/g, "")} <ArrowUpRight className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Enter community <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <a
                href="#what-we-do"
                className="animate-fade-in-up-delay-3 mt-12 animate-bounce text-white/60"
                aria-label="Scroll to learn more"
              >
                <ChevronDown className="h-6 w-6" />
              </a>
            </div>
          </section>

          <WhatWeDo intro="Every community runs the same kind of sessions — hands-on, free, and open to anyone curious about building with Claude." />

          {/* How the communities run */}
          <section id="principles" className="relative z-10 scroll-mt-20 border-y border-border bg-surface">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">How We Run</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
                  Purely community. Nothing to sell.
                </h2>
              </div>
              <ul className="mt-10 grid gap-5 md:grid-cols-3">
                {principles.map((p) => (
                  <li key={p.title} className="rounded-2xl border border-border bg-white/70 p-6">
                    <h3 className="text-lg font-semibold text-text-primary">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{p.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Join the conversation — one group per country */}
          <section id="get-involved" className="relative z-10 scroll-mt-20 bg-[#1A1A1A] py-12 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">Find Us</p>
                <h2 className="mt-3 text-3xl font-bold text-white">Join the Conversation</h2>
                <p className="mx-auto mt-4 max-w-xl text-white/50">
                  Each community lives in its own group chat — event updates, show-and-tell, and questions
                  answered by fellow builders.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-5">
                {countries.map((c) => {
                  const chat = chatChannel(c);
                  if (!chat) return null;
                  const { tint, hover } = channelMeta[chat.type];
                  return (
                    <a
                      key={c.slug}
                      href={chat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:-translate-y-1 hover:bg-white/10 sm:p-8 ${cardWidth} ${hover}`}
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${tint}`}
                      >
                        <ChannelIcon type={chat.type} className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 font-semibold text-white">
                        {c.flag} Claude{c.code}
                      </h3>
                      <p className="mt-1 text-sm text-white/40">{chat.label}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
