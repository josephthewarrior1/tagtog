"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function TrustStrip() {
  const partners = [
    { name: "Global Event Horizon", code: "GEH", category: "Conference Organizer" },
    { name: "Titan Summit Series", code: "TSS", category: "Leadership Forums" },
    { name: "Archipelago Expo Group", code: "AEG", category: "Exhibitions" },
    { name: "Vanguard Live Production", code: "VLP", category: "Production House" },
    { name: "Asia Pacific Energy Summit", code: "APES", category: "Energy Forum" },
    { name: "Prime Stage Governance", code: "PSG", category: "Venue Management" },
  ];

  return (
    <section className="border-b border-gray-200 bg-gray-50/60 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500">
            Trusted by Enterprise Event Producers &amp; Technical Teams
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Role-Based Access Control
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Immutable Audit Logging
          </span>
        </div>
      </div>

      {/* Pure CSS Scrolling Logo Strip (Pause on Hover) */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] py-2">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-gray-200 shadow-2xs group hover:border-blue-400 hover:shadow-xs transition-all cursor-default"
            >
              <div className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0 group-hover:bg-blue-600 transition-colors">
                {partner.code.slice(0, 3)}
              </div>
              <div className="truncate">
                <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 block transition-colors truncate">
                  {partner.name}
                </span>
                <span className="text-[10px] text-gray-400 font-mono block">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
