import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, CalendarDays, Code, Hammer } from "lucide-react";
import { activities, chatChannel, eventChannels, type Country } from "@/lib/content";
import { ChannelIcon, channelMeta } from "./channels";

const activityIcons = { workshops: Hammer, freestyle: Code, resources: BookOpen };

type ActivityKey = (typeof activities)[number]["icon"];

/** `links` makes each card clickable, as on the country pages. */
export function WhatWeDo({ intro, links }: { intro: string; links?: Record<ActivityKey, string> }) {
  return (
    <section id="what-we-do" className="relative z-10 scroll-mt-20 py-10 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">What We Do</p>
          <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Build the Future, Together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">{intro}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {activities.map((a) => {
            const Icon = activityIcons[a.icon];
            const href = links?.[a.icon];
            const Card = href ? Link : "div";
            return (
              <Card
                key={a.title}
                href={href as string}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1A1A] to-[#222] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-claude-orange/20 hover:shadow-2xl"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-claude-orange transition-all duration-300 group-hover:scale-110 group-hover:bg-claude-orange/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base leading-tight font-bold text-white">{a.title}</h3>
                      <p className="text-xs font-medium text-claude-orange">{a.tagline}</p>
                    </div>
                    {href && (
                      <span className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all duration-300 group-hover:bg-claude-orange group-hover:text-white">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
                    {a.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function JoinConversation({ country }: { country: Country }) {
  const chat = chatChannel(country);
  if (!chat) return null;
  const { name } = channelMeta[chat.type];

  return (
    <section className="relative z-10 overflow-hidden bg-[#D97757] py-12 sm:py-20">
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white">
          <ChannelIcon type={chat.type} className="h-8 w-8" />
        </div>
        <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Join the Conversation</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Our {name} group is where the community lives. Get event updates, share what you&apos;re building, ask
          questions, and connect with fellow AI builders in {country.name}.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Active daily
          </span>
          <span>·</span>
          <span>Event announcements</span>
          <span>·</span>
          <span>Project showcases</span>
        </div>
        <a
          href={chat.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#D97757] transition-all hover:shadow-xl hover:shadow-black/10"
        >
          <ChannelIcon type={chat.type} className="h-4 w-4" />
          Join {chat.label}
        </a>
      </div>
    </section>
  );
}

export function GetInvolved({ country }: { country: Country }) {
  return (
    <section id="get-involved" className="relative z-10 scroll-mt-20 border-t border-white/10 bg-[#1A1A1A] py-10 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-claude-orange">Find Us</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Get Involved</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {country.channels.map((channel) => {
            const { name, tint, hover } = channelMeta[channel.type];
            return (
              <a
                key={channel.type}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-all hover:-translate-y-1 hover:bg-white/10 sm:p-8 ${hover}`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${tint}`}
                >
                  <ChannelIcon type={channel.type} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{name}</h3>
                <p className="mt-1 text-sm text-white/40">{channel.label}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function EventsPlaceholder({ country }: { country: Country }) {
  const events = eventChannels(country);
  const primary = events[0];
  if (!primary) return null;
  const chat = chatChannel(country);
  const announcedOn = [...events, ...(chat ? [chat] : [])].map((c) => channelMeta[c.type].name);
  const announcedText =
    announcedOn.length > 1 ? `${announcedOn.slice(0, -1).join(", ")} and ${announcedOn.at(-1)}` : announcedOn[0];

  return (
    <a
      href={primary.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between gap-6 overflow-hidden rounded-2xl bg-[#1A1A1A]/90 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/15 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-[#1A1A1A] hover:ring-white/25 sm:flex-row sm:items-center sm:p-8"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
          <CalendarDays className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white sm:text-lg">Meetups &amp; workshops in {country.city}</h3>
          <p className="text-sm text-white/55">New sessions are announced on {announcedText} first.</p>
        </div>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-claude-orange transition-transform group-hover:translate-x-0.5">
        See upcoming events <ArrowRight className="h-4 w-4" />
      </span>
    </a>
  );
}
