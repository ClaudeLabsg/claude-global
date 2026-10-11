import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrackRecord } from "@/components/TrackRecord";
import { DeliveryTimeline } from "@/components/DeliveryTimeline";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Work — Claude Global",
  description: "Measured outcomes, not pilots — our track record and the five-phase delivery model behind it.",
};

export default function WorkPage() {
  return (
    <>
      <Nav variant="dark" />
      <main>
        <Hero
          eyebrow="Work"
          headline="Built to ship, not to demo."
          description="Every engagement ends in a production system your team owns — not a proof-of-concept that quietly dies after the demo."
          image="/images/office-scale.jpg"
          imageAlt="Delivery team working at scale"
          breadcrumb={[
            { label: "Global", href: "/" },
            { label: "Work", href: "/work" },
          ]}
        />
        <TrackRecord />
        <DeliveryTimeline />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
