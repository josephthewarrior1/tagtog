"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ObjectionFaqSection } from "@/components/sections/ObjectionFaqSection";
import { FormAndFinalCta } from "@/components/sections/FormAndFinalCta";
import { DemoModal } from "@/components/ui/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [demoTopic, setDemoTopic] = useState("");

  const handleOpenDemo = (topic?: string) => {
    setDemoTopic(topic || "");
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white relative">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 3. Problem Section ("You already know this feeling.") */}
        <ProblemSection />

        {/* 4. Offer Section (Connected Engines: EMS, PMS, CRM, IAM) */}
        <OfferSection onOpenDemo={handleOpenDemo} />

        {/* 5. Benefits Section ("What changes for your team" - 5 Pillars) */}
        <BenefitsSection />

        {/* 6. How It Works Section ("From planning to reporting, in one flow" - 5 Steps) */}
        <HowItWorksSection />

        {/* 7. Field Perspectives Testimonial Cards */}
        <TestimonialsSection />

        {/* 8. Proof Section (CLEAR Framework & Operational Touchpoints Gallery) */}
        <ProofSection />

        {/* 9. Objection Handling & FAQ Accordion */}
        <ObjectionFaqSection />

        {/* 10. In-Page Form & Final CTA */}
        <FormAndFinalCta onOpenDemo={handleOpenDemo} />
      </main>

      {/* 11. Clean Grounded Footer */}
      <Footer />

      {/* 15. Interactive Demo Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic={demoTopic}
      />
    </div>
  );
}
