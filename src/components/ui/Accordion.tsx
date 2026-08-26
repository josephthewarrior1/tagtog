"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("divide-y divide-[#e2e2ea] border-y border-[#e2e2ea]", className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-4 transition-colors">
            <h3>
              <button
                type="button"
                id={`accordion-btn-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between text-left py-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2 rounded-md"
              >
                <div className="flex items-center gap-3 pr-4">
                  <span className="font-mono text-xs text-[#7d7d94] font-normal shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-[#090a0f] group-hover:text-[#1d4ed8] transition-colors">
                    {item.question}
                  </span>
                </div>
                <div
                  className={cn(
                    "w-8 h-8 rounded-full border border-[#e2e2ea] bg-white flex items-center justify-center shrink-0 transition-transform duration-200 text-[#525266] group-hover:border-[#1d4ed8] group-hover:text-[#1d4ed8]",
                    isOpen && "rotate-180 bg-[#eff6ff] text-[#1d4ed8] border-[#bfdbfe]"
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
            </h3>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-btn-${item.id}`}
              hidden={!isOpen}
              className={cn(
                "pt-2 pb-3 pl-8 text-sm sm:text-base text-[#525266] leading-relaxed transition-all",
                !isOpen && "hidden"
              )}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
