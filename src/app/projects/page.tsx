import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { ReyugCaseStudy } from '@/components/ReyugCaseStudy';
import { LogoGrid } from '@/components/LogoGrid';
import { Layers, Award, ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Project Showcase & Selected Portfolio | The Outline',
  description: 'Explore our selected portfolio of packaging design, corporate presentations, brand identities, annual reports, outdoor billboards, and marketing brochures.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Header Banner */}
      <section className="pt-36 sm:pt-44 pb-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto relative z-10 border-b border-white/10">
        
        {/* Background Subtle Orange Ambient Light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#ff5528]/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="space-y-12 relative z-10">
          
          {/* Top Tag Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5528] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                (03) // PORTFOLIO ARCHIVE & SELECTED WORK
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 text-[#ff5528]" />
              <span>300+ CREATIVE ASSETS DELIVERED</span>
            </div>
          </div>

          {/* Main Giant Display Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight leading-[1.05] font-sans">
                PROJECT <span className="text-[#ff5528]">SHOWCASE</span>
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                Diverse brand collaborations across packaging, presentations, annual reports, logos, billboards, and brochure design crafted with absolute aesthetic precision.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#ff5528] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 group shadow-lg shadow-[#ff5528]/20"
                >
                  <span>Start New Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Filter Works</span>
                </a>
              </div>
            </div>
          </div>

          {/* Key Portfolio Metric Highlight Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-[#ff5528] font-mono">300+</div>
              <div className="text-xs font-mono uppercase text-zinc-400 mt-2 tracking-wider">Deliverables Produced</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">8+</div>
              <div className="text-xs font-mono uppercase text-zinc-400 mt-2 tracking-wider">Design Disciplines</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-[#ff5528] font-mono">100%</div>
              <div className="text-xs font-mono uppercase text-zinc-400 mt-2 tracking-wider">Bespoke Visual Craft</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">40+</div>
              <div className="text-xs font-mono uppercase text-zinc-400 mt-2 tracking-wider">Enterprise Brand Clients</div>
            </div>
          </div>

        </div>
      </section>

      {/* Filterable Portfolio Grid */}
      <ProjectShowcase showHeader={false} />

      {/* Reyug Featured 360° Case Study Highlight */}
      <ReyugCaseStudy />

      {/* Brand Identity Emblem Vault */}
      <LogoGrid />

      {/* Executive Consultation CTA Card */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] relative">
        <div className="max-w-[1700px] w-full mx-auto">
          <div className="p-10 sm:p-16 lg:p-20 rounded-3xl bg-gradient-to-br from-[#16161c] via-[#121218] to-[#09090d] border border-white/10 relative overflow-hidden group shadow-2xl">
            
            {/* Glowing Orange Spot */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5528]/15 rounded-full blur-[160px] pointer-events-none group-hover:bg-[#ff5528]/25 transition-all duration-700" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5528]/10 border border-[#ff5528]/30 text-[#ff5528] text-xs font-mono uppercase tracking-widest">
                  <span>START A NEW COLLABORATION</span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight font-sans">
                  Have a Creative Project <br className="hidden sm:block" />
                  in Mind for <span className="text-[#ff5528]">Your Brand</span>?
                </h2>
                <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
                  Let us turn your raw business goals into structured, high-conversion visual design assets.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 px-8 py-5 rounded-full bg-[#ff5528] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-xl shadow-[#ff5528]/25 group/btn"
                >
                  <span>Initiate Project Brief</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
