import type { Metadata } from "next";
import { CountryPage } from "@/components/CountryPage";
import { countries } from "@/lib/content";

const country = countries.find((c) => c.slug === "vietnam")!;

export const metadata: Metadata = {
  title: "Claude Vietnam Community — Educate, Encourage, Empower with AI",
  description: country.description,
};

export default function VietnamPage() {
  return <CountryPage country={country} />;
}
