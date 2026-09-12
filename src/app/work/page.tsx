import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { ReyugCaseStudy } from '@/components/ReyugCaseStudy';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Selected Work & Portfolio | The Outline',
  description: 'Explore selected brand identity, packaging, presentation design, and outdoor campaigns by The Outline.',
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Page Header Banner */}
      <section className="pt-36 pb-16 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTFOLIO ARCHIVE</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none">
          Selected <span className="text-orange-500 italic">Work</span>
        </h1>

        <p className="text-xl sm:text-3xl text-zinc-300 max-w-4xl font-light leading-relaxed">
          Strategy-driven visual identity, packaging, investor presentations, annual reports, and high-impact outdoor campaigns.
        </p>
      </section>

      {/* Filterable Project Showcase */}
      <ProjectShowcase />

      {/* 360° Reyug Showcase */}
      <ReyugCaseStudy />

      {/* CTA Box */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto border-t border-white/10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-orange-950/40 via-zinc-900/90 to-zinc-950 border border-orange-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
              Impressed By Our Work?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300">
              Let&apos;s outline a brand strategy and visual system tailored to your growth goals.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 shrink-0 shadow-xl shadow-orange-600/30"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
