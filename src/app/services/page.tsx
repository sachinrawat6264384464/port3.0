import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { ServicesGrid } from '@/components/ServicesGrid';
import { BRAND } from '@/data/content';
import { Sparkles, ArrowUpRight, Layers, ShieldCheck, Compass, Target, Zap, Rocket } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Services & Core Capabilities | The Outline',
  description: 'Explore full capabilities: Logo Design, Packaging & FMCG, Presentations, Annual Reports, Brochures, Print & Outdoor.',
};

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'Deconstructing brand position, market research, competitor landscape, and core target audience persona.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Concept & Identities',
    description: 'Engineered visual explorations, bespoke typography suites, and distinctive logo mark prototypes.',
    icon: Target,
  },
  {
    step: '03',
    title: 'Refinement & Dielines',
    description: 'Perfecting color palettes, packaging dielines, presentation layouts, and print production specifications.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Production & Deployment',
    description: 'Final asset delivery, print supervision, digital export suites, and nationwide brand deployment.',
    icon: Rocket,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Header Banner */}
      <section className="pt-36 sm:pt-44 pb-12 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto relative z-10 border-b border-white/10">
        <div className="space-y-8">
          
          {/* Top Tag Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5528] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                (01) // CORE AGENCY CAPABILITIES & PROFICIENCY
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 uppercase">
              <Layers className="w-3.5 h-3.5 text-[#ff5528]" />
              <span>6+ SPECIALIZED DISCIPLINES</span>
            </div>
          </div>

          {/* Main Giant Display Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.08] font-sans">
                STRATEGIC DESIGN & <span className="text-[#ff5528]">BRAND ARCHITECTURE</span>
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                From bespoke logo marks and FMCG packaging suites to high-stakes investor pitch decks, highway billboards, and comprehensive brand identity systems.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Brand New 3-Column Bento Cards Grid */}
      <ServicesGrid showHeader={false} />

      {/* 4-Step Execution Process Section */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 max-w-[1750px] w-full mx-auto border-t border-white/10 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5528]/10 border border-[#ff5528]/30 text-[#ff5528] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW WE EXECUTE SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight font-sans">
            OUR SERVICE <span className="text-[#ff5528]">METHODOLOGY</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            A battle-tested 4-phase framework ensuring strategy, precision, and flawless production for every touchpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-[#ff5528]/50 transition-all duration-300 space-y-5 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#ff5528]/10 border border-[#ff5528]/30 text-[#ff5528] group-hover:bg-[#ff5528] group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#ff5528]">
                    PHASE {step.step}
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#ff5528] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Executive CTA Box */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto border-t border-white/10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-zinc-950 via-[#0d0d12] to-black border border-white/15 hover:border-[#ff5528]/50 transition-all duration-500 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff5528] via-amber-500 to-transparent" />
          
          <div className="space-y-3 relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff5528] uppercase font-bold tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>BESPOKE BRANDING STRATEGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
              Need Tailored Services?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl leading-relaxed">
              {BRAND.ctaSubheadline}
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#ff5528] hover:bg-white text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shrink-0 shadow-xl shadow-[#ff5528]/20 group/btn relative z-10"
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
