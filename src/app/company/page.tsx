import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Company — Claude Global",
  description: "One team spanning agent engineering, platform & data, and delivery & quality — based in Singapore, delivering across Southeast Asia.",
};

export default function CompanyPage() {
  return (
    <>
      <Nav variant="dark" />
      <main>
        <Hero
          eyebrow="Company"
          headline="Specialists, not a staffing pool."
          description="We're a single team spanning three disciplines, based in Singapore and delivering across Southeast Asia — not a bench of generalists assembled per project."
          image="/images/team-culture.jpg"
          imageAlt="Claude Global team"
          breadcrumb={[
            { label: "Global", href: "/" },
            { label: "Company", href: "/company" },
          ]}
        />
        <WhoWeAre />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
