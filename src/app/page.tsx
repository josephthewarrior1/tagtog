import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProductSuiteSection } from "@/components/landing/ProductSuiteSection";
import { ScopeOfWorkSection } from "@/components/landing/ScopeOfWorkSection";
import { StartSmallSection } from "@/components/landing/StartSmallSection";
import { TechnicalEvaluatorsSection } from "@/components/landing/TechnicalEvaluatorsSection";
import { TestimonialCarouselSection } from "@/components/landing/TestimonialCarouselSection";
import { WhyTagtogSection } from "@/components/landing/WhyTagtogSection";
import { StickyCta } from "@/components/ui/StickyCta";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] text-[var(--color-text-primary)] selection:bg-[var(--color-primary)] selection:text-white">
      <LandingNavbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProductSuiteSection />
        <ScopeOfWorkSection />
        <WhyTagtogSection />
        <TestimonialCarouselSection />
        <TechnicalEvaluatorsSection />
        <StartSmallSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <LandingFooter />
      <StickyCta />
    </div>
  );
}
