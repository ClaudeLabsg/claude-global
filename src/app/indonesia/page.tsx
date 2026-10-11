import type { Metadata } from "next";
import { CountryTemplate } from "@/components/CountryTemplate";
import { countries } from "@/lib/content";

const country = countries.find((c) => c.slug === "indonesia")!;

export const metadata: Metadata = {
  title: "Claude Global Indonesia — Enterprise AI, Scaled Locally",
  description: country.description,
};

export default function IndonesiaPage() {
  return <CountryTemplate country={country} />;
}
