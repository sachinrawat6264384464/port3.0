import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { BrandIntro } from '@/components/BrandIntro';
import { TrustedFootprints } from '@/components/TrustedFootprints';
import { ArrowUpRight, Compass, ShieldCheck, Target, Layers, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Our Studio & Philosophy | The Outline',
  description: 'The Outline is a strategy-driven branding studio where aesthetics meet direction. We transform raw business ideas into unforgettable visual identities.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-blueprint-grid text-zinc-900 relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Header Banner */}
      <section className="pt-36 sm:pt-44 pb-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto relative z-10 border-b border-[#00755e]/15">
        
        {/* Background Ambient Emerald Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#00755e]/10 rounded-full blur-[180px] pointer-events-none" />

        {/* Blueprint Corner & Side Annotations (Matching Image 2 Architectural Sketch Style) */}
        <div className="absolute inset-0 pointer-events-none select-none font-mono text-[11px] text-[#00755e]/40 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span>c4 // DESIGN_SYSTEM</span>
            <span>e5 // BLUEPRINT_ANNOTATION</span>
          </div>
          <div className="flex justify-between items-end">
            <span>Nf3 // ARCHITECTURE</span>
            <span>Bc4 // OUTLINE_STUDIO</span>
          </div>
        </div>

        <div className="space-y-12 relative z-10">
          
          {/* Top Tag Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00755e] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00755e]">
                (02) // ABOUT THE OUTLINE & BRAND PHILOSOPHY
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00755e]/25 text-xs font-mono text-[#00755e] font-bold uppercase tracking-widest shadow-sm">
              <span>STRATEGY-DRIVEN BRANDING STUDIO</span>
            </div>
          </div>

          {/* Main Giant Display Header (Image 2 Luxury Serif Style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-900 uppercase tracking-tight leading-[1.05] font-sans">
                WE OUTLINE{' '}
                <span className="font-editorial italic font-black text-[#00755e] drop-shadow-sm">
                  UNFORGETTABLE
                </span>{' '}
                BRAND IDENTITIES.
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <p className="text-base sm:text-lg text-zinc-700 font-medium leading-relaxed">
                We exist to bring clarity to brands in a noisy world by turning raw ideas into structured, powerful visual identities. Our job is to outline it, sharpen it, and make it unforgettable.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#00755e] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#005a48] transition-all duration-300 group shadow-lg shadow-[#00755e]/20"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href="#manifesto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#00755e]/30 hover:border-[#00755e] text-[#00755e] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>Our Manifesto</span>
                </a>
              </div>
            </div>
          </div>

          {/* Key Metric Highlight Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            <div className="p-6 rounded-2xl bg-white/90 border border-[#00755e]/20 hover:border-[#00755e] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-3xl sm:text-4xl font-black text-[#00755e] font-mono">100+</div>
              <div className="text-xs font-mono uppercase text-zinc-600 mt-2 tracking-wider font-bold">Identity Systems Designed</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/90 border border-[#00755e]/20 hover:border-[#00755e] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-3xl sm:text-4xl font-black text-zinc-900 font-mono">99.4%</div>
              <div className="text-xs font-mono uppercase text-zinc-600 mt-2 tracking-wider font-bold">Brand Alignment Rate</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/90 border border-[#00755e]/20 hover:border-[#00755e] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-3xl sm:text-4xl font-black text-[#00755e] font-mono">12+</div>
              <div className="text-xs font-mono uppercase text-zinc-600 mt-2 tracking-wider font-bold">Global Industry Awards</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/90 border border-[#00755e]/20 hover:border-[#00755e] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-3xl sm:text-4xl font-black text-zinc-900 font-mono">0%</div>
              <div className="text-xs font-mono uppercase text-zinc-600 mt-2 tracking-wider font-bold">Template Reliance</div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Intro & 3 Pillars Manifesto (Light Blueprint Theme) */}
      <div id="manifesto">
        <BrandIntro showHeader={false} theme="light" />
      </div>

      {/* Core Studio Operating Pillars */}
      <section className="py-28 px-6 sm:px-10 lg:px-16 bg-blueprint-grid border-b border-[#00755e]/15 relative">
        <div className="max-w-[1700px] w-full mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-wrap items-end justify-between gap-6 pb-8 border-b border-[#00755e]/15">
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00755e]/10 border border-[#00755e]/30 text-[#00755e] text-xs font-mono font-bold uppercase tracking-widest w-fit">
                <Target className="w-3.5 h-3.5" />
                <span>STUDIO PILLARS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 uppercase tracking-tight font-sans">
                How We Engineer Brand Power
              </h2>
            </div>
            <p className="text-sm sm:text-base text-zinc-700 max-w-md font-medium">
              Four fundamental rules that govern every identity system, web artifact, and motion design crafted inside our studio.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 rounded-3xl bg-white border border-[#00755e]/20 hover:border-[#00755e] transition-all duration-500 space-y-6 group relative overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00755e] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#00755e] uppercase tracking-widest">PILLAR // 01</span>
                <div className="w-12 h-12 rounded-2xl bg-[#00755e]/10 border border-[#00755e]/25 flex items-center justify-center text-[#00755e]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-zinc-900 tracking-wide group-hover:text-[#00755e] transition-colors">
                  Strategic Positioning
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  We diagnose market white space before drawing a single line, ensuring your visual identity anchors you as an industry leader.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span>01 / POSITION</span>
                <CheckCircle2 className="w-4 h-4 text-[#00755e]" />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#00755e]/20 hover:border-[#00755e] transition-all duration-500 space-y-6 group relative overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00755e] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#00755e] uppercase tracking-widest">PILLAR // 02</span>
                <div className="w-12 h-12 rounded-2xl bg-[#00755e]/10 border border-[#00755e]/25 flex items-center justify-center text-[#00755e]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-zinc-900 tracking-wide group-hover:text-[#00755e] transition-colors">
                  Aesthetic Precision
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Bespoke typography, grid discipline, and harmonious color theory executed with extreme technical mastery.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span>02 / CRAFT</span>
                <CheckCircle2 className="w-4 h-4 text-[#00755e]" />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#00755e]/20 hover:border-[#00755e] transition-all duration-500 space-y-6 group relative overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00755e] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#00755e] uppercase tracking-widest">PILLAR // 03</span>
                <div className="w-12 h-12 rounded-2xl bg-[#00755e]/10 border border-[#00755e]/25 flex items-center justify-center text-[#00755e]">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-zinc-900 tracking-wide group-hover:text-[#00755e] transition-colors">
                  Scalable Architecture
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Design guidelines built for digital apps, print collaterals, and high-growth environments without fragmentation.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span>03 / SYSTEM</span>
                <CheckCircle2 className="w-4 h-4 text-[#00755e]" />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#00755e]/20 hover:border-[#00755e] transition-all duration-500 space-y-6 group relative overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00755e] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#00755e] uppercase tracking-widest">PILLAR // 04</span>
                <div className="w-12 h-12 rounded-2xl bg-[#00755e]/10 border border-[#00755e]/25 flex items-center justify-center text-[#00755e]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-zinc-900 tracking-wide group-hover:text-[#00755e] transition-colors">
                  Enduring Impression
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Creating visual languages that transcend short-lived design trends to establish long-term brand authority.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span>04 / LONGEVITY</span>
                <CheckCircle2 className="w-4 h-4 text-[#00755e]" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* National Client Footprint */}
      <TrustedFootprints />

      {/* Executive Consultation CTA Card */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-blueprint-grid relative">
        <div className="max-w-[1700px] w-full mx-auto">
          <div className="p-10 sm:p-16 lg:p-20 rounded-3xl bg-gradient-to-br from-[#022c22] via-[#043e33] to-[#011e17] border border-[#00755e]/40 relative overflow-hidden group shadow-2xl text-white">
            
            {/* Glowing Mint Accent Spot */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d6a4]/15 rounded-full blur-[160px] pointer-events-none group-hover:bg-[#00d6a4]/25 transition-all duration-700" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d6a4]/10 border border-[#00d6a4]/30 text-[#00d6a4] text-xs font-mono font-bold uppercase tracking-widest">
                  <span>DIRECT CONSULTATION</span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight font-sans">
                  Ready to Outline Your <br className="hidden sm:block" />
                  <span className="text-[#00d6a4] font-editorial italic font-black">Brand Architecture</span>?
                </h2>
                <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed">
                  Partner directly with our lead creative strategists to audit your existing brand presence and build a unified identity system.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 px-8 py-5 rounded-full bg-[#00d6a4] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-xl shadow-[#00d6a4]/25 group/btn"
                >
                  <span>Book Executive Session</span>
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

