import type { Metadata } from "next";
import { CountryTemplate } from "@/components/CountryTemplate";
import { countries } from "@/lib/content";

const country = countries.find((c) => c.slug === "singapore")!;

export const metadata: Metadata = {
  title: "Claude Global Singapore — Enterprise AI, Engineered Locally",
  description: country.description,
};

export default function SingaporePage() {
  return <CountryTemplate country={country} />;
}
