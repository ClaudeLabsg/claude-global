import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "What We Do — Claude Global",
  description: "Six service lines, one delivery team: strategy, agent development, integration, security, enablement and training.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <Nav variant="dark" />
      <main>
        <Hero
          eyebrow="What We Do"
          headline="One delivery model, six ways in."
          description="From first assessment to a trained internal team, we run one coherent delivery model — not six disconnected engagements stitched together."
          image="/images/code-engineering.jpg"
          imageAlt="Engineer working on an agentic system"
          breadcrumb={[
            { label: "Global", href: "/" },
            { label: "What We Do", href: "/what-we-do" },
          ]}
        />
        <ServiceGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
