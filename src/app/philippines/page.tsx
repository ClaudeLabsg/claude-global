import type { Metadata } from "next";
import { CountryPage } from "@/components/CountryPage";
import { countries } from "@/lib/content";

const country = countries.find((c) => c.slug === "philippines")!;

export const metadata: Metadata = {
  title: "Claude Philippines Community — Educate, Encourage, Empower with AI",
  description: country.description,
};

export default function PhilippinesPage() {
  return <CountryPage country={country} />;
}
