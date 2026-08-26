"use client";

import React, { useState } from "react";
import { SITE_COPY } from "@/data/tagtogData";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function ObjectionFaqSection() {
  const { objections, faq } = SITE_COPY;
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. Objections Handling */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
              Straightforward Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {objections.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objections.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50/70 border border-gray-200/80 shadow-xs space-y-3"
              >
                <h3 className="font-bold text-base text-gray-900 leading-snug">
                  &ldquo;{item.question}&rdquo;
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. FAQ Accordion */}
        <div className="space-y-8 pt-8 border-t border-gray-200">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {faq.heading}
            </h3>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faq.items.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id} className="py-4">
                  <h4>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleFaq(item.id)}
                      className="w-full flex items-center justify-between text-left py-2 group cursor-pointer focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                        {item.question}
                      </span>
                      <div
                        className={cn(
                          "w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 shrink-0 transition-transform duration-150",
                          isOpen && "rotate-180 bg-blue-50 text-blue-600 border-blue-200"
                        )}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                  </h4>
                  {isOpen && (
                    <div className="pt-2 pb-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
