"use client";

import { useEffect, useState } from "react";

const WORDS = ["Educate", "Encourage", "Empower"];

export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, 400);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-14 items-center overflow-hidden sm:h-16 md:h-20">
        <span
          className="block text-4xl font-bold text-white transition-all duration-500 sm:text-5xl md:text-6xl"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          {WORDS[index]}
        </span>
      </div>
      <span className="text-lg font-medium text-white/60 sm:text-xl">with AI</span>
    </div>
  );
}
