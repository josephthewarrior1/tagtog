"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_COPY } from "@/data/tagtogData";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export function DemoModal({ isOpen, onClose, defaultTopic = "" }: ModalProps) {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [problemText, setProblemText] = useState(defaultTopic);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultTopic) {
      setProblemText(defaultTopic);
    }
  }, [defaultTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <span className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-wider">
            TAGTOG Ecosystem
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <div>
              <div className="mb-6 space-y-1.5">
                <h2 id="modal-heading" className="text-2xl font-bold text-gray-900 tracking-tight">
                  {SITE_COPY.form.heading}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {SITE_COPY.form.subtext}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-semibold text-gray-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-company" className="block text-xs font-semibold text-gray-700 mb-1">
                      Company *
                    </label>
                    <input
                      id="modal-company"
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Apex Global"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-role" className="block text-xs font-semibold text-gray-700 mb-1">
                      Role *
                    </label>
                    <input
                      id="modal-role"
                      type="text"
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Head of Events"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-solve" className="block text-xs font-semibold text-gray-700 mb-1">
                    What are you looking to solve first? (optional)
                  </label>
                  <input
                    id="modal-solve"
                    type="text"
                    value={problemText}
                    onChange={(e) => setProblemText(e.target.value)}
                    placeholder="e.g. Live stage rundowns, vendor approvals, VIP protocols..."
                    className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : SITE_COPY.form.submitButton}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-center text-xs text-gray-500 pt-1">
                  {SITE_COPY.form.microCopy}
                </p>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-3 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Demo Request Received</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-gray-900">{fullName}</span>. We&apos;ll be in touch at <span className="font-mono text-gray-900">{workEmail}</span> with walkthrough details tailored for <span className="font-semibold text-gray-900">{company}</span>.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
