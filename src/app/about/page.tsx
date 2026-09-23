import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { BrandIntro } from '@/components/BrandIntro';
import { TypographyStatements } from '@/components/TypographyStatements';
import { TrustedFootprints } from '@/components/TrustedFootprints';
import { BRAND, CONTACTS } from '@/data/content';
import { Sparkles, ArrowUpRight, Compass, ShieldCheck, UserCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Our Studio & Philosophy | The Outline',
  description: 'The Outline is where strategy meets aesthetics. We bring clarity to brands through design with direction.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Header Banner */}
      <section className="pt-36 sm:pt-44 pb-16 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto relative z-10 border-b border-white/10">
        <div className="space-y-8">
          
          {/* Top Tag Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5528] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                (02) // ABOUT THE OUTLINE & BRAND PHILOSOPHY
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5528]" />
              <span>STRATEGY-DRIVEN BRANDING STUDIO</span>
            </div>
          </div>

          {/* Main Giant Display Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.08] font-sans">
                WE OUTLINE <span className="text-[#ff5528]">UNFORGETTABLE</span> BRAND IDENTITIES.
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                We exist to bring clarity to brands in a noisy world by turning raw ideas into structured, powerful visual identities. Our job is to outline it, sharpen it, and make it unforgettable.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Intro & 3 Pillars Manifesto */}
      <BrandIntro />

      {/* Philosophy Statement Quotes */}
      <TypographyStatements />

      {/* National Client Footprint */}
      <TrustedFootprints />

      <Footer />
    </main>
  );
}
