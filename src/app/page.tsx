import React from 'react';
import { Preloader } from '@/components/Preloader';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MarqueeTicker } from '@/components/MarqueeTicker';
import { StatsMetricsCounter } from '@/components/StatsMetricsCounter';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhyChooseOutline } from '@/components/WhyChooseOutline';
import { ProcessApproach } from '@/components/ProcessApproach';
import { ExperiencePillars } from '@/components/ExperiencePillars';
import { CustomerSuccessStories } from '@/components/CustomerSuccessStories';
import { ReyugCaseStudy } from '@/components/ReyugCaseStudy';
import { IndustriesServed } from '@/components/IndustriesServed';
import { LogoGrid } from '@/components/LogoGrid';
import { FallingClientsSection } from '@/components/FallingClientsSection';
import { TrustedFootprints } from '@/components/TrustedFootprints';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white relative overflow-hidden">
      <Preloader />
      <CustomCursor />
      <Navbar />

      {/* 1. HERO SECTION */}
      <Hero />

      <MarqueeTicker />

      {/* 3. STATS & YEARS OF EXPERIENCE SECTION */}
      <StatsMetricsCounter />

      {/* 5. OUR SERVICES (COMPLEX PROFICIENCY) SECTION */}
      <ServicesGrid />

      {/* 6. WHY OUTLINE SECTION */}
      <WhyChooseOutline />

      {/* 7. HOW WE WORK & EXPERIENCE PILLARS SECTION */}
      <ProcessApproach />
      <ExperiencePillars />

      {/* 8. CUSTOMER SUCCESS STORIES & CASE STUDIES */}
      <CustomerSuccessStories />
      <ReyugCaseStudy />

      {/* 9. INDUSTRIES SERVED & BRAND LOGO MARKS */}
      <IndustriesServed />
      <LogoGrid />
      <FallingClientsSection />
      <TrustedFootprints />

      {/* 10. FOOTER SECTION */}
      <Footer />
    </main>
  );
}

