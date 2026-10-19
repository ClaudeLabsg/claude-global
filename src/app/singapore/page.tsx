import type { Metadata } from "next";
import { CountryPage } from "@/components/CountryPage";
import { countries } from "@/lib/content";

const country = countries.find((c) => c.slug === "singapore")!;

export const metadata: Metadata = {
  title: "Claude Singapore Community — Educate, Encourage, Empower with AI",
  description: country.description,
};

export default function SingaporePage() {
  return <CountryPage country={country} />;
}
