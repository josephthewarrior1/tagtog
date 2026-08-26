import React from "react";
import { SITE_COPY } from "@/data/tagtogData";

export function HowItWorksSection() {
  const { howItWorks } = SITE_COPY;

  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {howItWorks.heading}
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl">
          {howItWorks.steps.map((item) => (
            <div
              key={item.step}
              className="p-6 sm:p-8 rounded-2xl bg-gray-50/70 border border-gray-200/80 hover:bg-white hover:shadow-xs transition-all flex flex-col sm:flex-row items-start gap-6"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-300 flex items-center justify-center font-mono font-bold text-gray-900 shrink-0 shadow-2xs">
                {item.step}
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
