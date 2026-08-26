"use client";

import React, { useState } from "react";
import { SITE_COPY } from "@/data/tagtogData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FormAndFinalCtaProps {
  onOpenDemo: (topic?: string) => void;
}

export function FormAndFinalCta({ onOpenDemo }: FormAndFinalCtaProps) {
  const { form, finalCta } = SITE_COPY;

  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [problemText, setProblemText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !workEmail || !company || !role) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div>
      {/* 11. Form Section */}
      <section id="demo-form" className="py-24 bg-gray-50/70 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                {form.heading}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                {form.subtext}
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inpage-name" className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="inpage-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dimas Rahadian"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="inpage-email" className="block text-xs font-semibold text-gray-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      id="inpage-email"
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inpage-company" className="block text-xs font-semibold text-gray-700 mb-1">
                      Company *
                    </label>
                    <input
                      id="inpage-company"
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Apex Global"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="inpage-role" className="block text-xs font-semibold text-gray-700 mb-1">
                      Role *
                    </label>
                    <input
                      id="inpage-role"
                      type="text"
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Head of Events"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inpage-solve" className="block text-xs font-semibold text-gray-700 mb-1">
                    What are you looking to solve first? (optional)
                  </label>
                  <input
                    id="inpage-solve"
                    type="text"
                    value={problemText}
                    onChange={(e) => setProblemText(e.target.value)}
                    placeholder="e.g. Live stage rundowns, vendor approvals, VIP protocols..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-full font-semibold text-base hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : form.submitButton}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-center text-xs text-gray-500 pt-1">
                  {form.microCopy}
                </p>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Demo Request Received</h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-gray-900">{fullName}</span>. We&apos;ll be in touch at <span className="font-mono text-gray-900">{workEmail}</span> with walkthrough details tailored for <span className="font-semibold text-gray-900">{company}</span>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 12. Final CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {finalCta.heading}
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {finalCta.subtext}
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenDemo()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-base shadow-lg active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>{finalCta.button}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
