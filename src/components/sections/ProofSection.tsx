"use client";

import React, { useState } from "react";
import { SITE_COPY } from "@/data/tagtogData";
import { Monitor, Radio, Users, ShieldCheck, X } from "lucide-react";

export function ProofSection() {
  const { proof } = SITE_COPY;
  const [activeModalImg, setActiveModalImg] = useState<{ title: string; desc: string; module: string } | null>(null);

  const galleryItems = [
    {
      id: "control-room",
      title: "Control Room Show Calling",
      desc: "Live rundown synchronization between show callers, audio engineers, and lighting board operators.",
      module: "EMS · Live Run of Show",
      icon: <Monitor className="w-5 h-5 text-blue-600" />,
      tag: "Live Operations",
    },
    {
      id: "plenary-stage",
      title: "Main Stage Plenary Session",
      desc: "Dynamic speaker countdown timers and teleprompter sync keeping multi-track summits strictly on schedule.",
      module: "EMS · Dynamic Timers",
      icon: <Radio className="w-5 h-5 text-green-600" />,
      tag: "Stage Sync",
    },
    {
      id: "vip-protocol",
      title: "VIP Protocol & Hospitality Desk",
      desc: "Instant master data verification for diplomatic guests, ministerial dietary requirements, and sponsor seating.",
      module: "CRM · Master Vault",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      tag: "Master Data",
    },
    {
      id: "av-rigging",
      title: "AV Rigging & Safety Clearance",
      desc: "Structured milestone signoffs for stage fabrication, truss load inspections, and vendor SLA sign-offs.",
      module: "PMS · Milestone Gates",
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
      tag: "Approvals",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {proof.heading}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-normal">
            {proof.description}
          </p>
        </div>

        {/* The CLEAR Framework Methodology Cards */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              The CLEAR Operational Methodology
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {proof.clearFramework.map((item) => (
              <div
                key={item.letter}
                className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 shadow-2xs space-y-2 hover:bg-white hover:border-gray-300 transition-all"
              >
                <span className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center font-mono font-extrabold text-blue-600 text-base">
                  {item.letter}
                </span>
                <span className="font-bold text-base text-gray-900 block">
                  {item.label}
                </span>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Events Style Gallery: On-Site Operational Environments */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              Operational Touchpoints in Action
            </h3>
            <span className="text-xs text-gray-500 font-mono">
              Click to view operational scope
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalImg({ title: item.title, desc: item.desc, module: item.module })}
                className="p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-blue-500 hover:bg-white hover:shadow-md transition-all cursor-pointer space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white border border-gray-200 group-hover:bg-blue-50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] text-gray-500 px-2 py-0.5 rounded bg-gray-200/70">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-[11px] font-mono text-blue-600 font-medium">
                  <span>{item.module}</span>
                  <span>Inspect →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox / Details Modal */}
        {activeModalImg && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <div className="relative w-full max-w-md bg-white rounded-2xl border border-gray-200 p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="font-mono text-xs font-semibold text-blue-600 uppercase">
                  {activeModalImg.module}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalImg(null)}
                  className="p-1 rounded-md text-gray-400 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {activeModalImg.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {activeModalImg.desc}
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setActiveModalImg(null)}
                  className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-xs font-semibold"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
