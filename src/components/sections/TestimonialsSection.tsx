import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Before TAGTOG, our 30-person crew operated across 14 WhatsApp groups and 8 spreadsheet versions during multi-day conferences. Having EMS, PMS, and IAM connected in one flow eliminated run-sheet discrepancies completely.",
      author: "Arya Pratama",
      role: "Head of Live Event Operations",
      organization: "National Conference & Summit Consortium",
      metric: "0 Stage Cue Mismatches",
      initials: "AP",
      bgClass: "bg-blue-600",
    },
    {
      quote:
        "The ability to give third-party AV and security vendors time-bounded access that automatically expires post-event gave our IT and legal teams complete peace of mind. Zero lingering access.",
      author: "Siti Rahmawati, CISSP",
      role: "VP Information Security & Infrastructure",
      organization: "Enterprise Event Holding",
      metric: "100% Offboarding Compliance",
      initials: "SR",
      bgClass: "bg-gray-900",
    },
    {
      quote:
        "Syncing speaker slide deck approvals from CRM directly into EMS teleprompter screens cut our pre-stage briefing chaos in half. Everyone knows the exact master version.",
      author: "Budi Santoso",
      role: "Executive Event Producer",
      organization: "Vanguard Live Media",
      metric: "65% Faster Handover Speed",
      initials: "BS",
      bgClass: "bg-blue-800",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
            Field Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            How operational clarity changes showtime
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-normal">
            Real feedback from event producers, stage callers, and technical leadership managing complex multi-stakeholder productions.
          </p>
        </div>

        {/* 3-Card Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 text-[11px] font-mono font-semibold flex items-center gap-1 border border-green-200">
                    <CheckCircle2 className="w-3 h-3" />
                    {item.metric}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${item.bgClass} text-white flex items-center justify-center font-bold text-xs font-mono shrink-0 shadow-xs`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.role} · <span className="text-gray-700 font-medium">{item.organization}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
