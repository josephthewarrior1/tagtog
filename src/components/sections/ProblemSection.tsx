import React from "react";
import { SITE_COPY } from "@/data/tagtogData";

export function ProblemSection() {
  const { problem } = SITE_COPY;

  return (
    <section className="py-20 sm:py-24 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {problem.heading}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            <p>{problem.intro1}</p>
            <p>{problem.intro2}</p>
          </div>

          <div className="pt-4">
            <p className="text-base font-semibold text-gray-900 mb-4">
              {problem.questionIntro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {problem.questions.map((question, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-gray-900">
                    &ldquo;{question}&rdquo;
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <div className="p-5 rounded-xl bg-white border-l-4 border-blue-600 shadow-xs">
              <p className="text-base sm:text-lg font-medium text-gray-900">
                {problem.closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
