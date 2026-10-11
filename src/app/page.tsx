import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { CountryNavigator } from "@/components/CountryNavigator";
import { ExploreGrid } from "@/components/ExploreGrid";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav variant="dark" />
      <main>
        <Hero
          eyebrow="AI Integration & Implementation · Singapore"
          headline="Setting the frontier of enterprise AI in Southeast Asia."
          description="We design, build and deploy agentic systems on the Claude Agent SDK and AWS for Southeast Asian enterprises — then hand over complete ownership, documentation included."
          image="/images/hero-earth.jpg"
          imageAlt="Earth at night, city lights across the globe"
          secondaryCta={{ label: "See Our Markets", href: "#markets" }}
        />
        <Marquee />
        <CountryNavigator />
        <ExploreGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
