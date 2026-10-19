import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countryBySlug } from "@/lib/content";
import { resources, type Resource } from "@/lib/resources";

export async function generateMetadata({ params }: PageProps<"/[slug]/resources">): Promise<Metadata> {
  const country = countryBySlug((await params).slug);
  return country ? { title: `Resources — Claude ${country.name} Community` } : {};
}

const kindBadge: Record<Resource["kind"], string> = {
  Featured: "bg-white/15 text-white",
  Article: "bg-blue-500/10 text-blue-600",
  Presentation: "bg-purple-500/10 text-purple-600",
};

function ResourceCard({ resource }: { resource: Resource }) {
  const featured = resource.kind === "Featured";
  return (
    <a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col rounded-2xl border p-6 transition-all hover:shadow-lg hover:shadow-claude-orange-glow ${
        featured
          ? "border-claude-orange bg-claude-orange-dark hover:brightness-105"
          : "border-border bg-surface-elevated hover:border-claude-orange/30"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${kindBadge[resource.kind]}`}>
            {resource.kind}
          </span>
          {resource.source && (
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                featured ? "bg-white/15 text-white/85" : "bg-surface text-text-muted"
              }`}
            >
              {resource.source}
            </span>
          )}
        </div>
        {resource.date && (
          <span className={`shrink-0 text-xs ${featured ? "text-white/75" : "text-text-muted"}`}>{resource.date}</span>
        )}
      </div>
      <h3
        className={`mt-3 font-semibold ${featured ? "text-white" : "text-text-primary group-hover:text-claude-orange"}`}
      >
        {resource.title}
      </h3>
      <p className={`mt-2 line-clamp-3 text-sm ${featured ? "text-white/85" : "text-text-secondary"}`}>
        {resource.description}
      </p>
    </a>
  );
}

export default async function ResourcesPage({ params }: PageProps<"/[slug]/resources">) {
  if (!countryBySlug((await params).slug)) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold text-text-primary">Resources</h1>
      <p className="mt-2 text-text-secondary">Articles, workshop recordings, and presentation slides.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <ResourceCard key={r.href} resource={r} />
        ))}
      </div>
    </main>
  );
}
