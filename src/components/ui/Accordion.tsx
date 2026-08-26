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
    <div className={cn("divide-y divide-[var(--color-secondary)]/12 border-y border-[var(--color-secondary)]/12", className)}>
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
                className="w-full flex items-center justify-between text-left py-2 group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
              >
                <div className="flex items-center gap-3 pr-4">
                  <span className="shrink-0 font-mono text-xs font-normal text-[var(--color-text-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-primary)] sm:text-lg">
                    {item.question}
                  </span>
                </div>
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-secondary)]/18 bg-white text-[var(--color-secondary)] transition-transform duration-200 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]",
                    isOpen && "rotate-180 border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
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
                "pt-2 pb-3 pl-8 text-sm leading-relaxed text-[var(--color-text-muted)] transition-all sm:text-base",
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
