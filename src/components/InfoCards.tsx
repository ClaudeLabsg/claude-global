"use client";

import { useEffect, useState } from "react";
import { quotes, type Country } from "@/lib/content";

const cardClass =
  "relative overflow-hidden rounded-2xl border border-white/15 bg-[#1A1A1A]/85 p-6 backdrop-blur-xl transition-all duration-500 ease-out";
const cardShadow =
  "0 12px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.05)";

// WMO weather codes from Open-Meteo, collapsed into a few buckets.
function describe(code: number): { label: string; emoji: string } {
  if (code === 0) return { label: "Clear sky", emoji: "☀️" };
  if (code <= 3) return { label: "Partly cloudy", emoji: "🌤" };
  if (code <= 48) return { label: "Foggy", emoji: "🌫" };
  if (code <= 67 || (code >= 80 && code <= 82)) return { label: "Rain", emoji: "🌧" };
  if (code >= 95) return { label: "Thunderstorm", emoji: "⛈" };
  return { label: "Cloudy", emoji: "☁️" };
}

function CardChrome() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.06), transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] rounded-t-2xl"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
      />
    </>
  );
}

function WeatherCard({ country }: { country: Country }) {
  const [time, setTime] = useState<string | null>(null);
  const [weather, setWeather] = useState<{ temp: number; humidity: number; code: number } | null>(null);

  useEffect(() => {
    const fmt = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: country.timezone }),
      );
    fmt();
    const id = setInterval(fmt, 30_000);
    return () => clearInterval(id);
  }, [country.timezone]);

  useEffect(() => {
    const { lat, lon } = country.coords;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code`,
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) =>
        setWeather({
          temp: Math.round(d.current.temperature_2m),
          humidity: d.current.relative_humidity_2m,
          code: d.current.weather_code,
        }),
      )
      .catch(() => {});
  }, [country.coords]);

  const info = weather ? describe(weather.code) : null;

  return (
    <div
      className={cardClass}
      style={{ transform: "perspective(800px) rotateX(5deg) rotateY(-4deg)", boxShadow: cardShadow }}
    >
      <CardChrome />
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/80">{country.city}</p>
            <p className="mt-1 text-[10px] text-white/40">{time ?? "--:--"}</p>
          </div>
          <span className="text-3xl">{info?.emoji ?? "🌤"}</span>
        </div>
        <div className="mt-4">
          <p className="text-4xl font-bold text-white">{weather?.temp ?? "--"}°</p>
          <p className="mt-1 text-sm text-white/50">{info?.label ?? "Loading..."}</p>
        </div>
        <div className="mt-3 flex items-center gap-3 text-xs text-white/30">
          <span>💧 {weather?.humidity ?? "--"}%</span>
        </div>
      </div>
    </div>
  );
}

function QuoteCard() {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];

  return (
    <button
      type="button"
      onClick={() => setIndex((i) => (i + 1) % quotes.length)}
      className={`${cardClass} cursor-pointer text-left`}
      style={{ transform: "perspective(800px) rotateX(-4deg) rotateY(4deg)", boxShadow: cardShadow }}
      aria-label="Show another quote"
    >
      <CardChrome />
      <div className="relative z-10">
        <p className="text-xs font-medium uppercase tracking-widest text-white/80">AI Thought</p>
        <blockquote className="mt-3 text-sm leading-relaxed text-white/70">“{quote.text}”</blockquote>
        <p className="mt-3 text-xs text-white/40">— {quote.author}</p>
      </div>
    </button>
  );
}

export function InfoCards({ country }: { country: Country }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
      <WeatherCard country={country} />
      <QuoteCard />
    </div>
  );
}
