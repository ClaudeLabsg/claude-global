import type { Metadata } from "next";
import { CountryTemplate } from "@/components/CountryTemplate";
import { countries } from "@/lib/content";

const country = countries.find((c) => c.slug === "malaysia")!;

export const metadata: Metadata = {
  title: "Claude Global Malaysia — Enterprise AI, Built Locally",
  description: country.description,
};

export default function MalaysiaPage() {
  return <CountryTemplate country={country} />;
}
