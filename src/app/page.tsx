import React from 'react';
import { Preloader } from '@/components/Preloader';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MarqueeTicker } from '@/components/MarqueeTicker';
import { StatsMetricsCounter } from '@/components/StatsMetricsCounter';
import { CustomerSuccessStories } from '@/components/CustomerSuccessStories';
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

      {/* STATS & METRICS COUNTER */}
      <StatsMetricsCounter />

      {/* CLIENT TESTIMONIALS & SUCCESS STORIES */}
      <CustomerSuccessStories />

      {/* INDUSTRIES SERVED & CLIENT LOGOS */}
      <IndustriesServed />
      <LogoGrid />
      <FallingClientsSection />
      <TrustedFootprints />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

