import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trust — Claude Global",
  description: "Data residency, regulatory alignment and security practices, scoped to the market you operate in.",
};

export default function TrustPage() {
  return (
    <>
      <Nav variant="dark" />
      <main>
        <Hero
          eyebrow="Trust"
          headline="Security that's scoped to where you operate."
          description="Data residency and regulatory alignment aren't bolted on after delivery — they're part of Discover, for the specific regime your business sits under."
          image="/images/data-security.jpg"
          imageAlt="Security review in a data center"
          breadcrumb={[
            { label: "Global", href: "/" },
            { label: "Trust", href: "/trust" },
          ]}
        />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
