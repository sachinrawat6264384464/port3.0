import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { ExperiencePillars } from '@/components/ExperiencePillars';
import { ProcessApproach } from '@/components/ProcessApproach';
import { BRAND } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Strategic Pillars & Methodology | The Outline',
  description: 'Discover the 5 strategic execution pillars of The Outline, from brand collaboration to concept execution.',
};

export default function PillarsPage() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Page Header Banner */}
      <section className="pt-36 sm:pt-44 pb-16 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono font-bold uppercase tracking-widest">
          <span>STRATEGIC FOUNDATIONS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight leading-none font-sans">
          Working <span className="font-editorial italic font-normal text-zinc-400 lowercase">pillars</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 max-w-4xl font-normal leading-relaxed">
          {BRAND.workingExperienceStatement}
        </p>
      </section>

      {/* Pillars Interactive Showcase */}
      <ExperiencePillars />

      {/* Process Approach Steps */}
      <ProcessApproach />

      {/* CTA Box */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto border-t border-white/10">
        <div className="p-10 sm:p-16 rounded-3xl bg-transparent border-0 hover:bg-white/[0.02] transition-all duration-500 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
              Build On Solid Strategy
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Let&apos;s apply our 5 strategic pillars to your brand.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shrink-0 shadow-xl group/btn relative z-10"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
