import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { ReyugCaseStudy } from '@/components/ReyugCaseStudy';
import { Sparkles, Layers, Award } from 'lucide-react';

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
      <section className="pt-36 sm:pt-44 pb-12 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto relative z-10 border-b border-white/10">
        <div className="space-y-8">
          
          {/* Top Tag Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5528] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                (03) // PORTFOLIO ARCHIVE & SELECTED WORK
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
              <Award className="w-3.5 h-3.5 text-[#ff5528]" />
              <span>300+ CREATIVE ASSETS DELIVERED</span>
            </div>
          </div>

          {/* Main Giant Display Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none font-sans">
                PROJECT <span className="text-[#ff5528]">SHOWCASE</span>
              </h1>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                Diverse brand collaborations across packaging, presentations, annual reports, logos, billboards, and brochure design.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Filterable Portfolio Grid (showHeader={false} prevents duplicate title) */}
      <ProjectShowcase showHeader={false} />

      {/* Reyug Featured Case Study Highlight */}
      <ReyugCaseStudy />

      <Footer />
    </main>
  );
}
