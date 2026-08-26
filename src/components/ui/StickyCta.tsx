"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.65);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href="#contact"
        className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 text-sm font-bold text-white shadow-[0_18px_36px_rgba(255,92,122,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
      >
        Book a Demo
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
