import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CcafDocuments, CertificationTracks } from "@/components/CountrySections";
import { countryBySlug } from "@/lib/content";

export async function generateMetadata({ params }: PageProps<"/[slug]/certifications">): Promise<Metadata> {
  const country = countryBySlug((await params).slug);
  return country ? { title: `Certifications — Claude ${country.name} Community` } : {};
}

export default async function CertificationsPage({ params }: PageProps<"/[slug]/certifications">) {
  const country = countryBySlug((await params).slug);
  if (!country) notFound();

  return (
    <main className="bg-surface">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <CertificationTracks country={country} />
        <CcafDocuments />
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-text-secondary/80">
          CCA-F, CCD-F and CCA-P are official Anthropic certifications. Claude Singapore Community provides the
          eligibility pathway; the exams themselves, the fees and the credentials are Anthropic&apos;s.
        </p>
      </section>
    </main>
  );
}
