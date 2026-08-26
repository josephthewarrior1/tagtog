"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, X, Menu, Calendar, Users, ShieldCheck, CheckSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenDemo: (topic?: string) => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navProducts = [
    {
      title: "EMS · Event Management System",
      desc: "Live rundown synchronization, stage cue sheets & show-caller flow",
      icon: Calendar,
      href: "#offer",
    },
    {
      title: "PMS · Project Management System",
      desc: "Pre-event milestone timelines, vendor punchlists & approval signoffs",
      icon: CheckSquare,
      href: "#offer",
    },
    {
      title: "CRM · Client & Stakeholder Hub",
      desc: "VIP protocols, sponsor deliverable verification & speaker asset vault",
      icon: Users,
      href: "#offer",
    },
    {
      title: "IAM · Identity & Access Control",
      desc: "Role-based zones, temporary vendor passkeys & immutable audit logs",
      icon: ShieldCheck,
      href: "#offer",
    },
  ];

  const navSolutions = [
    { title: "Enterprise Flagship Summits", desc: "Scale large conferences with zero single-point failure", href: "#benefits" },
    { title: "B2B Field Marketing & Roadshows", desc: "Turn regional events into synchronized pipeline", href: "#benefits" },
    { title: "User & Developer Conferences", desc: "Deep attendee engagement and technical track management", href: "#benefits" },
    { title: "Internal & Partner Summits", desc: "Secure SSO, role-based access & compliance governance", href: "#benefits" },
  ];

  const navResources = [
    { title: "The CLEAR™ Framework", desc: "Connect, Locate, Ensure, Account, Route operations standard", href: "#proof" },
    { title: "Event Operations Benchmark", desc: "Data from 3,500+ complex live event productions", href: "#proof" },
    { title: "Customer Case Studies", desc: "How top production teams scale without chaos", href: "#testimonials" },
    { title: "Knowledge Base & API Docs", desc: "Connect with your existing calendar, CRM, and AV tools", href: "#faq" },
  ];

  const navAbout = [
    { title: "About TAGTOG", desc: "Our mission to turn complex event ops into one connected flow", href: "#problem" },
    { title: "Built by Event Producers", desc: "Designed around real firsthand stage & field workflows", href: "#proof" },
    { title: "Security & Trust Center", desc: "Role-based access, zone isolation & audit compliance", href: "#proof" },
    { title: "Careers", desc: "Join our team building the future of event technology", href: "#problem" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 bg-white",
        isScrolled
          ? "shadow-sm border-b border-gray-100/90"
          : "border-b border-gray-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* TAGTOG Brand Logo */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-extrabold text-sm tracking-tight shadow-xs group-hover:scale-105 transition-transform">
                TT
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-2xl tracking-[-0.03em] text-gray-950 font-sans">
                  TAGTOG
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0080ff]" />
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-1 font-medium text-[15px] text-gray-700">
              {/* Products Dropdown */}
              <div
                className="relative group py-5"
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:text-gray-950 transition-colors cursor-pointer"
                >
                  <span>Products</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 text-gray-500", activeDropdown === "products" && "rotate-180")} />
                </button>

                {activeDropdown === "products" && (
                  <div className="absolute top-[64px] left-0 w-[560px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 grid grid-cols-2 gap-3 transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                    {navProducts.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          className="p-3 rounded-xl hover:bg-blue-50/60 transition-colors group/item flex items-start gap-3"
                        >
                          <div className="p-2 rounded-lg bg-blue-100/70 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-2 mt-0.5 leading-snug">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative group py-5"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:text-gray-950 transition-colors cursor-pointer"
                >
                  <span>Solutions</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 text-gray-500", activeDropdown === "solutions" && "rotate-180")} />
                </button>

                {activeDropdown === "solutions" && (
                  <div className="absolute top-[64px] left-0 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 space-y-1 transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                    {navSolutions.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block p-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 leading-snug">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Ecosystem Link */}
              <a
                href="#offer"
                className="px-3 py-1.5 rounded-md hover:text-gray-950 transition-colors"
              >
                Ecosystem
              </a>

              {/* Resources Dropdown */}
              <div
                className="relative group py-5"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:text-gray-950 transition-colors cursor-pointer"
                >
                  <span>Resources</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 text-gray-500", activeDropdown === "resources" && "rotate-180")} />
                </button>

                {activeDropdown === "resources" && (
                  <div className="absolute top-[64px] left-0 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 space-y-1 transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                    {navResources.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block p-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 leading-snug">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* About Us Dropdown */}
              <div
                className="relative group py-5"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:text-gray-950 transition-colors cursor-pointer"
                >
                  <span>About Us</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 text-gray-500", activeDropdown === "about" && "rotate-180")} />
                </button>

                {activeDropdown === "about" && (
                  <div className="absolute top-[64px] left-0 w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 space-y-1 transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                    {navAbout.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block p-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 leading-snug">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Pricing Link */}
              <a
                href="#faq"
                className="px-3 py-1.5 rounded-md hover:text-gray-950 transition-colors"
              >
                Pricing
              </a>
            </nav>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            {/* Primary "Get a Demo" Pill Button */}
            <button
              type="button"
              onClick={() => onOpenDemo()}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0080ff] hover:bg-[#0070e6] text-white text-sm font-semibold tracking-tight shadow-sm hover:shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              Get a Demo
            </button>

            {/* Mobile menu hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-950"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-5 pt-3 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1 font-medium text-base text-gray-800">
            <a
              href="#offer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg hover:bg-gray-50"
            >
              Products (EMS, PMS, CRM, IAM)
            </a>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg hover:bg-gray-50"
            >
              Solutions
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg hover:bg-gray-50"
            >
              The Ecosystem
            </a>
            <a
              href="#proof"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg hover:bg-gray-50"
            >
              Resources &amp; CLEAR Framework
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg hover:bg-gray-50"
            >
              Pricing &amp; FAQ
            </a>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-full bg-[#0080ff] hover:bg-[#0070e6] text-white font-semibold text-center shadow-sm"
            >
              Get a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
