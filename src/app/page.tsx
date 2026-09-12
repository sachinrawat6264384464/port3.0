import React from 'react';
import { Preloader } from '@/components/Preloader';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MarqueeTicker } from '@/components/MarqueeTicker';
import { StatsMetricsCounter } from '@/components/StatsMetricsCounter';
import { BrandIntro } from '@/components/BrandIntro';
import { TypographyStatements } from '@/components/TypographyStatements';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhyChooseOutline } from '@/components/WhyChooseOutline';
import { ProcessApproach } from '@/components/ProcessApproach';
import { ExperiencePillars } from '@/components/ExperiencePillars';
import { CustomerSuccessStories } from '@/components/CustomerSuccessStories';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { ReyugCaseStudy } from '@/components/ReyugCaseStudy';
import { IndustriesServed } from '@/components/IndustriesServed';
import { LogoGrid } from '@/components/LogoGrid';
import { TrustedFootprints } from '@/components/TrustedFootprints';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] relative overflow-hidden">
      <Preloader />
      <CustomCursor />
      <Navbar />

      {/* 1. HERO SECTION */}
      <Hero />
      <MarqueeTicker />

      {/* 2. STATS & YEARS OF EXPERIENCE SECTION */}
      <StatsMetricsCounter />

      {/* 3. BRAND PHILOSOPHY SECTION */}
      <BrandIntro />
      <TypographyStatements />

      {/* 4. OUR SERVICES SECTION */}
      <ServicesGrid />

      {/* 5. WHY OUTLINE SECTION (With SVG Dynamic Animated Ropes) */}
      <WhyChooseOutline />

      {/* 6. HOW WE WORK & EXPERIENCE PILLARS SECTION */}
      <ProcessApproach />
      <ExperiencePillars />

      {/* 7. CUSTOMER SUCCESS STORIES & CASE STUDIES */}
      <CustomerSuccessStories />
      <ReyugCaseStudy />
      <ProjectShowcase />

      {/* 8. INDUSTRIES SERVED & BRAND LOGO MARKS */}
      <IndustriesServed />
      <LogoGrid />
      <TrustedFootprints />

      {/* 9. CONTACT & FOOTER SECTION */}
      <ContactSection />
      <Footer />
    </main>
  );
}
