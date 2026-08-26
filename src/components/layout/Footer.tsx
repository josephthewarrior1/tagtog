import React from "react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-100">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-white font-bold text-sm">
                TT
              </div>
              <span className="font-extrabold text-xl text-gray-900 tracking-tight">
                TAGTOG
              </span>
            </div>
            <p className="text-xs text-gray-500 font-mono">
              TAG: Titan Andalan Global · TOG: Technology, Operations &amp; Growth
            </p>
            <p className="text-sm text-gray-600 max-w-md leading-relaxed font-normal">
              A connected event operations ecosystem bringing workflows, master data, documents, audit trails, and access into one reliable flow.
            </p>
          </div>

          {/* Products Col */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-900">
              The Ecosystem
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#offer" className="hover:text-gray-900 transition-colors">
                  <span className="font-semibold text-gray-900">EMS</span> — Event Management
                </a>
              </li>
              <li>
                <a href="#offer" className="hover:text-gray-900 transition-colors">
                  <span className="font-semibold text-gray-900">PMS</span> — Project &amp; Tasks
                </a>
              </li>
              <li>
                <a href="#offer" className="hover:text-gray-900 transition-colors">
                  <span className="font-semibold text-gray-900">CRM</span> — Stakeholder Data
                </a>
              </li>
              <li>
                <a href="#offer" className="hover:text-gray-900 transition-colors">
                  <span className="font-semibold text-gray-900">IAM</span> — Access &amp; Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Methodology Col */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-900">
              Methodology
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Connect Fragmented Info</li>
              <li>Locate What Matters</li>
              <li>Ensure Master Data</li>
              <li>Account for Every Change</li>
              <li>Route to Right People</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Titan Andalan Global. All rights reserved.</span>
          <span className="font-mono text-gray-600">
            Everything in Flow. Everyone in Sync.
          </span>
        </div>
      </div>
    </footer>
  );
}
