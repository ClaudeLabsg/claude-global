const items = [
  "Claude Agent SDK",
  "AWS ap-southeast-1",
  "Model Context Protocol",
  "Singapore",
  "Malaysia",
  "Indonesia",
  "PDPA-Aligned",
  "Enterprise Governance",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-bone py-6">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl tracking-tight text-ink/25">
            {item}
            <span className="text-clay">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
