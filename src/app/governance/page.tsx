import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { GovernanceSection } from "@/components/GovernanceSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Governance — Claude Global",
  description: "Runtime controls — citation gates, nullable schemas, confidence routing, full audit trails — on every agent we ship.",
};

export default function GovernancePage() {
  return (
    <>
      <Nav variant="dark" />
      <main>
        <Hero
          eyebrow="Governance"
          headline="Governance that runs at inference time."
          description="Not a policy document on a shelf — four runtime controls built into every agent we ship, live on every request."
          image="/images/governance-signing.jpg"
          imageAlt="Governance review and sign-off"
          breadcrumb={[
            { label: "Global", href: "/" },
            { label: "Governance", href: "/governance" },
          ]}
        />
        <GovernanceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
