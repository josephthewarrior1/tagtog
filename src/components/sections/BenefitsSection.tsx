import React from "react";
import { SITE_COPY } from "@/data/tagtogData";

export function BenefitsSection() {
  const { benefits } = SITE_COPY;

  return (
    <section id="benefits" className="py-24 bg-gray-50/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {benefits.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 rounded-2xl bg-white border border-gray-200/90 hover:border-gray-300 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-gray-400 block">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
