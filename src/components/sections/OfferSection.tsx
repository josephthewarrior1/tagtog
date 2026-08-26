"use client";

import React from "react";
import { SITE_COPY } from "@/data/tagtogData";
import {
  CheckCircle2,
  ArrowRight,
  Radio,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface OfferSectionProps {
  onOpenDemo: (topic?: string) => void;
}

export function OfferSection({ onOpenDemo }: OfferSectionProps) {
  const { offer } = SITE_COPY;

  return (
    <section id="offer" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {offer.heading}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-normal">
            {offer.subheading}
          </p>
        </div>

        {/* 4 Alternating Product Spotlights (TAGTOG Connected Engines) */}
        <div className="space-y-24">
          {offer.products.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Text Content Column */}
                <div
                  className={cn(
                    "lg:col-span-5 space-y-5",
                    !isEven ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="space-y-1.5">
                    <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                      {product.name}
                      <span className="text-lg font-normal text-gray-500 block mt-0.5">
                        {product.fullName}
                      </span>
                    </h3>
                  </div>

                  <p className="text-base font-semibold text-gray-900 leading-snug">
                    {product.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Bullet Checklist */}
                  <div className="pt-2 space-y-2.5">
                    {product.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Action */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => onOpenDemo(`${product.name} (${product.fullName})`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                    >
                      <span>Book a Demo for {product.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* UI Preview Card with macOS Window Chrome */}
                <div
                  className={cn(
                    "lg:col-span-7",
                    !isEven ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="rounded-2xl border border-gray-300 bg-white shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                    {/* macOS Chrome Header */}
                    <div className="bg-gray-900 px-4 py-3 flex items-center justify-between text-xs text-gray-300 border-b border-gray-800">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        </div>
                        <span className="font-mono text-[11px] text-gray-400 ml-2">
                          tagtog.app/{product.id}/preview
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-gray-800 text-[10px] font-mono text-gray-300 uppercase">
                        {product.name} Master
                      </span>
                    </div>

                    {/* Mockup Content Specific to Module */}
                    <div className="p-5 sm:p-6 bg-gray-50/70 min-h-[300px] flex flex-col justify-between">
                      {product.id === "ems" && <EmsWindowPreview />}
                      {product.id === "pms" && <PmsWindowPreview />}
                      {product.id === "crm" && <CrmWindowPreview />}
                      {product.id === "iam" && <IamWindowPreview />}
                    </div>

                    {/* Window Footer */}
                    <div className="px-4 py-2 bg-white border-t border-gray-200 flex items-center justify-between text-[11px] font-mono text-gray-500">
                      <span>Synchronized via TAGTOG Connected Flow</span>
                      <span className="text-green-600 font-medium">Active Engine</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modular Adoption Note */}
        <div className="mt-20 p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 text-center max-w-3xl mx-auto">
          <p className="text-base text-gray-800 font-medium leading-relaxed">
            {offer.adoptionNote}
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   CLEAN AUTHENTIC MODULE WINDOW PREVIEWS
   ========================================================================= */

function EmsWindowPreview() {
  return (
    <div className="space-y-3.5 text-xs">
      <div className="flex items-center justify-between p-2.5 bg-blue-50 border border-blue-100 rounded-xl">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="font-bold text-gray-900">Stage Control · Grand Ballroom</span>
        </div>
        <span className="font-mono font-semibold text-green-700">Drift: 0.0s (On Time)</span>
      </div>

      <div className="p-3.5 bg-white border-2 border-blue-600 rounded-xl space-y-2">
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono font-bold text-[10px]">
            CUE #04 · ON STAGE NOW
          </span>
          <span className="font-mono text-blue-600 font-bold">00:14:32 remaining</span>
        </div>
        <h4 className="font-bold text-sm text-gray-900">Opening Plenary Keynote</h4>
        <p className="text-gray-500 text-xs">Speaker: Dr. Hendra Wijaya · Teleprompter Synced</p>
      </div>

      <div className="p-2.5 bg-white border border-gray-200 rounded-lg flex items-center justify-between">
        <div>
          <span className="font-mono text-[10px] text-gray-400 block">UP NEXT: CUE #05</span>
          <span className="font-semibold text-gray-800">Panel Discussion: Energy Future</span>
        </div>
        <span className="font-mono text-gray-500">14:45 — 15:30</span>
      </div>
    </div>
  );
}

function PmsWindowPreview() {
  return (
    <div className="space-y-3.5 text-xs">
      <div className="flex items-center justify-between p-2.5 bg-gray-100 border border-gray-200 rounded-xl">
        <span className="font-bold text-gray-900">Milestone Approvals &amp; Deliverables</span>
        <span className="text-green-600 font-semibold font-mono">14 / 14 Complete</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-2">
          <span className="font-bold text-green-700 block text-[11px]">✓ Approved Signoffs</span>
          <div className="p-2 bg-gray-50 rounded border border-gray-100 space-y-0.5">
            <span className="font-semibold text-gray-900 block">Truss Rigging Load Check</span>
            <span className="text-[10px] text-gray-500">Approved by Lead Engineer</span>
          </div>
          <div className="p-2 bg-gray-50 rounded border border-gray-100 space-y-0.5">
            <span className="font-semibold text-gray-900 block">Backdrop Printing Proof</span>
            <span className="text-[10px] text-gray-500">Verified with Sponsor Matrix</span>
          </div>
        </div>

        <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl space-y-2">
          <span className="font-bold text-blue-800 block text-[11px]">⏳ Final Gate</span>
          <div className="p-2 bg-white rounded border border-blue-200 space-y-0.5">
            <span className="font-semibold text-gray-900 block">VIP Escort Briefing</span>
            <span className="text-[10px] text-blue-600 font-mono">SLA: 2h remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrmWindowPreview() {
  return (
    <div className="space-y-3.5 text-xs">
      <div className="flex items-center justify-between p-2.5 bg-gray-100 border border-gray-200 rounded-xl">
        <span className="font-mono text-gray-600">Master Directory: 84 Speakers · 12 Sponsors</span>
        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded font-mono text-[10px]">
          CRM ↔ EMS Synced
        </span>
      </div>

      <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
              HW
            </div>
            <span className="font-bold text-gray-900">Dr. Hendra Wijaya</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-green-50 text-green-700 text-[10px] font-mono">
            Slide Deck v3 Verified
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 bg-gray-50 p-2 rounded text-[10px] text-gray-600">
          <div><strong className="text-gray-900 block">Dietary:</strong> Halal</div>
          <div><strong className="text-gray-900 block">Liaison:</strong> Officer Citra</div>
          <div><strong className="text-gray-900 block">Stage Cue:</strong> Cue #04</div>
        </div>
      </div>

      <div className="p-3 bg-white border border-gray-200 rounded-xl flex items-center justify-between">
        <div>
          <span className="font-bold text-gray-900 block">CloudScale Technologies</span>
          <span className="text-[10px] text-gray-500">Headline Platinum Sponsor</span>
        </div>
        <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-[10px] font-mono font-semibold">
          100% Entitlements Met
        </span>
      </div>
    </div>
  );
}

function IamWindowPreview() {
  return (
    <div className="space-y-3.5 text-xs font-mono">
      <div className="flex items-center justify-between p-2.5 bg-gray-900 text-white rounded-xl">
        <span className="font-bold">IAM Security &amp; Access Matrix</span>
        <span className="text-green-400 text-[10px]">Zero Lingering Access</span>
      </div>

      <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">Passkey: Vendor_Lighting_AV</span>
          <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px]">
            Expires Today 22:00
          </span>
        </div>
        <div className="text-[10px] text-gray-600 space-y-0.5">
          <div className="flex justify-between">
            <span>Scope:</span>
            <span className="text-gray-900 font-semibold">ems.cues.view_only</span>
          </div>
          <div className="flex justify-between">
            <span>Zone:</span>
            <span className="text-gray-900">Control Room A</span>
          </div>
        </div>
      </div>

      <div className="p-2.5 bg-gray-100 rounded-lg text-[10px] text-gray-600 space-y-0.5">
        <span className="text-gray-400 font-bold block uppercase">Immutable Audit Trail:</span>
        <p>[14:12:08] ShowCaller_Arya updated Cue #04 duration -&gt; <span className="text-green-600">Logged</span></p>
      </div>
    </div>
  );
}
