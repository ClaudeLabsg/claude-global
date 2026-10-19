import type { Metadata } from "next";
import { CountryPage } from "@/components/CountryPage";
import { countries } from "@/lib/content";

const country = countries.find((c) => c.slug === "johor")!;

export const metadata: Metadata = {
  title: "Claude Johor Bahru Community — Educate, Encourage, Empower with AI",
  description: country.description,
};

export default function JohorPage() {
  return <CountryPage country={country} />;
}
