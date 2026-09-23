import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { ReyugCaseStudy } from '@/components/ReyugCaseStudy';
import { ContactSection } from '@/components/ContactSection';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Project Showcase & Selected Portfolio | The Outline',
  description: 'Explore our selected portfolio of packaging design, corporate presentations, brand identities, annual reports, outdoor billboards, and marketing brochures.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Page Header Banner */}
      <section className="pt-36 pb-12 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5528] animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
            (03) // SELECTED PORTFOLIO & WORK
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none font-sans">
              PROJECT <span className="text-[#ff5528]">SHOWCASE</span>
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-2">
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              Diverse brand collaborations across packaging, presentations, annual reports, logos, billboards, and brochure design.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Project Showcase Component */}
      <ProjectShowcase />

      {/* Reyug Key Case Study Highlight */}
      <ReyugCaseStudy />

      {/* Contact & Footer */}
      <ContactSection />
      <Footer />
    </main>
  );
}
