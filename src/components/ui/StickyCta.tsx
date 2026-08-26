"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Calendar } from "lucide-react";

interface StickyCtaProps {
  onOpenDemo: (topic?: string) => void;
}

export function StickyCta({ onOpenDemo }: StickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-200">
      <button
        type="button"
        onClick={() => onOpenDemo()}
        className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xl shadow-blue-900/25 active:scale-95 transition-all cursor-pointer border border-blue-500/40"
      >
        <Calendar className="w-4 h-4 text-blue-100" />
        <span>Book a Demo</span>
        <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
}
