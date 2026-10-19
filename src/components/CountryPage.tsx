import { ArrowRight, ChevronDown } from "lucide-react";
import { chatChannel, eventChannels, findChannel, type Country } from "@/lib/content";
import { LinkedInIcon } from "./BrandIcons";
import { ChannelIcon, channelMeta } from "./channels";
import { EventsPlaceholder, GetInvolved, JoinConversation, WhatWeDo } from "./CommunitySections";
import { Footer } from "./Footer";
import { FreestyleCoding } from "./FreestyleCoding";
import { InfoCards } from "./InfoCards";
import { Nav } from "./Nav";
import { RotatingWord } from "./RotatingWord";
import { Wordmark } from "./Wordmark";

/** Country community page, laid out after claudecode.sg. */
export function CountryPage({ country }: { country: Country }) {
  const navLinks = [
    { label: "Events", href: "#events" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Freestyle", href: "#freestyle" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "All Communities", href: "/" },
  ];
  const chat = chatChannel(country);
  const primaryEvent = eventChannels(country)[0];
  const linkedin = findChannel(country, "linkedin");
  const joinHref = chat?.href ?? country.channels[0]?.href ?? "#get-involved";

  return (
    <>
      <Nav code={country.code} links={navLinks} joinHref={joinHref} />
      <div className="flex-1">
        <main className="relative">
          {/* Hero */}
          <section className="relative min-h-[80vh] overflow-hidden bg-[#D97757] sm:min-h-[90vh]">
            <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4 text-center sm:min-h-[90vh] sm:px-6">
              <div className="animate-fade-in-up">
                <Wordmark code={country.code} tone="light" size="lg" />
              </div>
              <div className="animate-fade-in-up-delay-1 mt-10">
                <RotatingWord />
              </div>
              <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-md text-sm text-white/60">
                {country.description}
              </p>
              <div className="animate-fade-in-up-delay-3 mt-10 flex flex-wrap justify-center gap-4">
                {primaryEvent && (
                  <a
                    href={primaryEvent.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#D97757] transition-all hover:shadow-xl hover:shadow-black/10 sm:px-7 sm:py-3.5"
                  >
                    <span>Join Next Event</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                )}
                {chat && (
                  <a
                    href={chat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 sm:px-7 sm:py-3.5"
                  >
                    <ChannelIcon type={chat.type} className="h-4 w-4" />
                    <span>{channelMeta[chat.type].name} Group</span>
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 transition-all hover:-translate-y-0.5 hover:bg-[#0954a5] hover:shadow-xl sm:px-7 sm:py-3.5"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    <span>Follow us on LinkedIn</span>
                  </a>
                )}
              </div>
              <div className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/60 sm:block sm:bottom-24">
                <ChevronDown className="h-6 w-6" />
              </div>
            </div>
          </section>

          {/* Upcoming events + info cards, overlapping the hero */}
          <section id="events" className="relative z-10 -mt-12 scroll-mt-24 px-4 sm:-mt-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-3 flex items-center justify-between sm:mb-4">
                <p className="text-xs font-medium uppercase tracking-widest text-white/85">Upcoming Events</p>
                {primaryEvent && (
                  <a
                    href={primaryEvent.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-white/50 transition-colors hover:text-white/80"
                  >
                    {primaryEvent.label} →
                  </a>
                )}
              </div>
              <EventsPlaceholder country={country} />
              <InfoCards country={country} />
            </div>
          </section>

          <WhatWeDo intro="From your first AI prompt to shipping production apps — we've got the workshops, sessions, and resources to get you there." />
          <FreestyleCoding />
          <JoinConversation country={country} />
          <GetInvolved country={country} />
        </main>
      </div>
      <Footer country={country} />
    </>
  );
}
