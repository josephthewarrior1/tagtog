"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, MessageSquare, Accessibility, Check, Sparkles, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onOpenDemo: (topic?: string) => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hi there! 👋 Welcome to TAGTOG. Interested in seeing how our Connected Event Operations Ecosystem unites EMS, PMS, CRM, and IAM?" }
  ]);
  const [chatInput, setChatInput] = useState("");

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userText = chatInput;
    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setChatInput("");
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks for reaching out! Would you like a personalized 1-on-1 walkthrough of how TAGTOG handles live stage rundowns, project signoffs, and access control?" }
      ]);
    }, 600);
  };

  return (
    <section className={cn("relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0a0d14] text-white", highContrast && "contrast-125")}>
      {/* Background Image with Cinematic Warmth & Ambient Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bizzabo-hero-bg.jpg"
          alt="TAGTOG Connected Event Operations Background"
          fill
          priority
          className="object-cover object-center scale-[1.02] filter brightness-[0.72] contrast-[1.05]"
        />
        {/* Soft Radial and Linear Gradients for crystal-clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/25 to-black/75" />
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-16 pb-12 max-w-5xl mx-auto w-full">
        {/* Overline / Subtitle */}
        <p className="text-sm sm:text-[15px] font-normal text-white/80 tracking-wide mb-3 sm:mb-4">
          The TAGTOG Connected Event Operations OS
        </p>

        {/* Main H1 Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal text-white leading-[1.12] tracking-tight max-w-4xl">
          The intelligence behind<br className="hidden sm:inline" /> every great event
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-white/90 text-base sm:text-lg sm:leading-relaxed font-normal max-w-2xl mx-auto mt-4 mb-8">
          More than a platform, TAGTOG is your event operations partner, connecting EMS, PMS, CRM, and IAM to help teams scale programs, make smarter decisions, and prove impact.
        </p>

        {/* Primary CTA Button */}
        <div className="mb-12">
          <button
            type="button"
            onClick={() => onOpenDemo()}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0080ff] hover:bg-[#0070e6] text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            Get a Demo
          </button>
        </div>

        {/* Social Proof / Rating Badges (G2, Capterra, Gartner) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-16 pt-2">
          {/* G2 CROWD Badge */}
          <div className="flex items-center gap-3 group cursor-pointer hover:opacity-95 transition-opacity" onClick={() => onOpenDemo("G2 Crowd Reviews")}>
            <div className="flex items-center gap-1">
              <span className="bg-white text-gray-950 font-black text-xs px-1.5 py-0.5 rounded-xs tracking-tighter">
                G<span className="text-[10px] align-super">2</span>
              </span>
              <span className="text-white font-bold text-xs tracking-wider uppercase ml-0.5">
                CROWD
              </span>
            </div>
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-0.5 text-[#0080ff]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#0080ff] text-[#0080ff]" />
                ))}
                <div className="relative w-3.5 h-3.5">
                  <Star className="w-3.5 h-3.5 text-[#0080ff]" />
                  <div className="absolute inset-0 overflow-hidden w-[60%]">
                    <Star className="w-3.5 h-3.5 fill-[#0080ff] text-[#0080ff]" />
                  </div>
                </div>
              </div>
              <span className="text-[11px] text-white/80 font-normal mt-0.5">437 reviews</span>
            </div>
          </div>

          {/* Capterra Badge */}
          <div className="flex items-center gap-3 group cursor-pointer hover:opacity-95 transition-opacity" onClick={() => onOpenDemo("Capterra Reviews")}>
            <div className="flex items-center gap-1.5">
              {/* Capterra stylized chevron logo */}
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                <path d="M12 2L2 19.5h5.5L12 11.8l4.5 7.7H22L12 2z" />
              </svg>
              <span className="text-white font-bold text-sm tracking-tight">Capterra</span>
            </div>
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-0.5 text-[#0080ff]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#0080ff] text-[#0080ff]" />
                ))}
              </div>
              <span className="text-[11px] text-white/80 font-normal mt-0.5">171 reviews</span>
            </div>
          </div>

          {/* Gartner Peer Insights Badge */}
          <div className="flex items-center gap-3 group cursor-pointer hover:opacity-95 transition-opacity" onClick={() => onOpenDemo("Gartner Peer Insights")}>
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-xs tracking-tight leading-none">Gartner</span>
              <span className="text-[9px] text-white/80 font-light leading-tight">Peer Insights.</span>
            </div>
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-0.5 text-[#0080ff]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#0080ff] text-[#0080ff]" />
                ))}
              </div>
              <span className="text-[11px] text-white/80 font-normal mt-0.5">71 reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Logos Bottom Strip */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-xs py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 sm:gap-10 overflow-x-auto no-scrollbar opacity-85 hover:opacity-100 transition-opacity">
          {/* AVAYA */}
          <span className="font-extrabold tracking-widest text-base sm:text-lg text-white shrink-0 font-sans">
            AVAYA
          </span>

          {/* Forbes */}
          <span className="font-serif italic font-bold text-lg sm:text-xl text-white shrink-0">
            Forbes
          </span>

          {/* HubSpot */}
          <div className="flex items-center gap-1 font-bold text-base sm:text-lg text-white shrink-0">
            <span>HubSp<span className="inline-block relative top-[-1px] text-white font-mono text-sm">●</span>t</span>
          </div>

          {/* Planned Parenthood */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white shrink-0">
            <span className="border-2 border-white rounded-xs px-1 text-[10px] font-bold">P</span>
            <div className="flex flex-col text-[10px] leading-tight text-left">
              <span>Planned</span>
              <span>Parenthood</span>
            </div>
          </div>

          {/* Teach For America */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white shrink-0">
            <span className="w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center text-[8px]">★</span>
            <span className="text-xs">TEACHFORAMERICA</span>
          </div>

          {/* CNBC */}
          <div className="flex items-center gap-1 text-sm font-bold text-white shrink-0">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="tracking-wider">CNBC</span>
          </div>

          {/* Snowflake */}
          <div className="flex items-center gap-1 text-sm sm:text-base font-semibold text-white shrink-0">
            <span className="text-base text-cyan-300">❄</span>
            <span>snowflake</span>
          </div>

          {/* Harvard Business Review */}
          <div className="flex flex-col text-[11px] font-serif leading-none text-left text-white shrink-0 border-l border-white/30 pl-2">
            <span className="font-bold">Harvard</span>
            <span>Business</span>
            <span>Review</span>
          </div>

          {/* Phenom */}
          <div className="flex items-center gap-1 font-semibold text-sm sm:text-base text-white shrink-0">
            <span className="w-3.5 h-3.5 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold">p</span>
            <span>phenom</span>
          </div>

          {/* Amazon */}
          <div className="flex flex-col items-center text-sm font-bold text-white shrink-0">
            <span>amazon</span>
            <span className="w-8 h-[2px] bg-amber-400 rounded-full mt-[-2px]" />
          </div>

          {/* Bloomberg */}
          <span className="font-sans font-bold text-sm sm:text-base tracking-tight text-white shrink-0">
            Bloomberg
          </span>
        </div>
      </div>

      {/* Floating Bottom Left: Accessibility Icon */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          type="button"
          onClick={() => setAccessibilityOpen(!accessibilityOpen)}
          className="w-11 h-11 rounded-full bg-black/90 hover:bg-black text-white border border-white/20 shadow-xl flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          aria-label="Accessibility settings"
          title="Accessibility Tools"
        >
          <Accessibility className="w-6 h-6 stroke-[2.2]" />
        </button>

        {accessibilityOpen && (
          <div className="absolute bottom-14 left-0 w-64 bg-white text-gray-900 rounded-2xl shadow-2xl border border-gray-200 p-4 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-bold text-xs uppercase tracking-wider text-gray-700">Accessibility</span>
              <button
                type="button"
                onClick={() => setAccessibilityOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2 text-xs">
              <button
                type="button"
                onClick={() => setHighContrast(!highContrast)}
                className="w-full flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100 font-medium"
              >
                <span>High Contrast Mode</span>
                <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold", highContrast ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700")}>
                  {highContrast ? "ON" : "OFF"}
                </span>
              </button>
              <button
                type="button"
                onClick={() => document.documentElement.classList.toggle("text-lg")}
                className="w-full flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100 font-medium"
              >
                <span>Larger Text</span>
                <span className="text-gray-500">Toggle</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Floating Bottom Right: Yellow TAGTOG Chat Launcher */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          className="w-12 h-12 rounded-full bg-[#FFE500] hover:bg-[#ebd300] text-gray-950 shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/50"
          aria-label="Open TAGTOG Chat"
          title="Chat with TAGTOG AI"
        >
          <div className="font-extrabold text-base font-mono leading-none tracking-tight">
            TT
          </div>
        </button>

        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white text-gray-900 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="bg-[#FFE500] p-4 text-gray-950 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-black text-[#FFE500] font-black flex items-center justify-center text-xs">
                  TT
                </div>
                <div>
                  <div className="font-bold text-sm leading-tight">TAGTOG Assistant</div>
                  <div className="text-[11px] text-gray-800 font-medium">Online · Connected Event Operations</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="p-1 rounded-full text-gray-800 hover:bg-black/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 h-64 overflow-y-auto space-y-3 text-xs bg-gray-50/60">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-2xs",
                      msg.sender === "user"
                        ? "bg-[#0080ff] text-white rounded-br-xs"
                        : "bg-white text-gray-900 border border-gray-200 rounded-bl-xs"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendChat} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about EMS, PMS, CRM, IAM, pricing..."
                className="flex-1 text-xs bg-gray-100 rounded-full px-3.5 py-2 outline-hidden text-gray-900 placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-full bg-[#0080ff] text-white text-xs font-semibold hover:bg-[#0070e6] transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
