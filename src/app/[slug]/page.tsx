import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryPage } from "@/components/CountryPage";
import { countryBySlug } from "@/lib/content";

// Re-render hourly so events move from upcoming to past without a redeploy.
export const revalidate = 3600;

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const country = countryBySlug((await params).slug);
  if (!country) return {};
  return {
    title: `Claude ${country.name} Community — Educate, Encourage, Empower with AI`,
    description: country.description,
  };
}

export default async function CountryHome({ params }: PageProps<"/[slug]">) {
  const country = countryBySlug((await params).slug);
  if (!country) notFound();
  return <CountryPage country={country} />;
}
