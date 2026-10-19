/**
 * Text logo modelled on the ClaudeSG wordmark: serif "Claude" + region code,
 * with lowercase "community" letter-spaced to the full width underneath.
 */
const tones = {
  // Colours sampled from ClaudeSGblack.png / ClaudeSGwhite.png.
  dark: { base: "text-[#301909]", code: "text-[#ef873b]" },
  light: { base: "text-[#edd9cb]", code: "text-[#301909]" },
  // For dark backgrounds such as the footer.
  white: { base: "text-white", code: "text-[#ef873b]" },
};

const sizes = {
  sm: { top: "text-[26px]", bottom: "text-[11px] mt-0.5" },
  lg: { top: "text-6xl sm:text-8xl md:text-9xl", bottom: "text-2xl sm:text-4xl md:text-5xl mt-1 sm:mt-2" },
};

export function Wordmark({
  code,
  tone = "dark",
  size = "sm",
}: {
  code: string;
  tone?: keyof typeof tones;
  size?: keyof typeof sizes;
}) {
  const t = tones[tone];
  const s = sizes[size];

  return (
    <span className={`inline-flex flex-col font-logo leading-[0.85] ${t.base}`} aria-label={`Claude${code} Community`}>
      <span className={`whitespace-nowrap font-medium tracking-tight ${s.top}`} aria-hidden="true">
        Claude<span className={`ml-[0.1em] ${t.code}`}>{code}</span>
      </span>
      <span className={`flex w-full justify-between ${s.bottom}`} aria-hidden="true">
        {"community".split("").map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </span>
    </span>
  );
}
