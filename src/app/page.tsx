import React from 'react';
import { Preloader } from '@/components/Preloader';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MarqueeTicker } from '@/components/MarqueeTicker';
import { StatsMetricsCounter } from '@/components/StatsMetricsCounter';
import { CustomerSuccessStories } from '@/components/CustomerSuccessStories';
import { CurvedProjectGallery } from '@/components/CurvedProjectGallery';
import { IndustriesServed } from '@/components/IndustriesServed';
import { FallingClientsSection } from '@/components/FallingClientsSection';
import { Footer } from '@/components/Footer';
import { SnakeMarqueeLine } from '@/components/SnakeMarqueeLine';

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

      <SnakeMarqueeLine text="INDUSTRIES & BRAND ARCHITECTURE ✦ OUTLINE CREATIVE ✦ SECTOR IMPACT" />

      {/* INDUSTRIES SERVED */}
      <IndustriesServed />

      <SnakeMarqueeLine reverse speed={22} text="VOICES OF TRUST & GROWTH ✦ CLIENT SUCCESS STORIES ✦ ENTERPRISE IMPACT" />

      {/* CLIENT TESTIMONIALS & SUCCESS STORIES */}
      <CustomerSuccessStories />

      <SnakeMarqueeLine speed={28} text="CURVED PROJECT GALLERY ✦ ULTRA HD SHOWCASE ✦ CREATIVE DIRECTION" />

      {/* 3D CURVED MULTI-AXIS GALLERY STREAM */}
      <CurvedProjectGallery />

      <SnakeMarqueeLine reverse speed={20} text="INTERACTIVE CLIENT PORTFOLIO ✦ INDUSTRY RECOGNITION ✦ BRAND EXPERIENCE" />

      {/* INTERACTIVE FALLING CLIENTS BADGES */}
      <FallingClientsSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}


