import type { Metadata } from "next";
import { CountryPage } from "@/components/CountryPage";
import { countries } from "@/lib/content";

const country = countries.find((c) => c.slug === "indonesia")!;

export const metadata: Metadata = {
  title: "Claude Indonesia Community — Educate, Encourage, Empower with AI",
  description: country.description,
};

export default function IndonesiaPage() {
  return <CountryPage country={country} />;
}
