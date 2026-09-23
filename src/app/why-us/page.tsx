import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { WhyChooseOutline } from '@/components/WhyChooseOutline';
import { ProcessApproach } from '@/components/ProcessApproach';
import { ExperiencePillars } from '@/components/ExperiencePillars';
import { BRAND } from '@/data/content';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Why Choose The Outline | Core Competitive Advantage',
  description: '8 strategic reasons why leading brands choose The Outline for strategy, perception, and positioning.',
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Page Header Banner */}
      <section className="pt-36 sm:pt-44 pb-12 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto relative z-10 border-b border-white/10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5528] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
              (04) // COMPETITIVE ADVANTAGE & METHODOLOGY
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none font-sans">
            Why Choose <span className="text-[#ff5528]">The Outline</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-4xl font-normal leading-relaxed">
            It&apos;s communication, perception, and positioning done right. Discover why brands trust our founder-led direction.
          </p>
        </div>
      </section>

      {/* Why Choose Outline Section */}
      <WhyChooseOutline />

      {/* Process Approach & Methodology */}
      <ProcessApproach />

      {/* Experience Pillars */}
      <ExperiencePillars />

      <Footer />
    </main>
  );
}
