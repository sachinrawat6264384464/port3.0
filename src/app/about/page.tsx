import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { BrandIntro } from '@/components/BrandIntro';
import { TypographyStatements } from '@/components/TypographyStatements';
import { TrustedFootprints } from '@/components/TrustedFootprints';
import { Sparkles, ArrowUpRight, Compass, ShieldCheck, Award, Target, Layers, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Our Studio & Philosophy | The Outline',
  description: 'The Outline is a strategy-driven branding studio where aesthetics meet direction. We transform raw business ideas into unforgettable visual identities.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Header Banner */}
      <section className="pt-36 sm:pt-44 pb-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto relative z-10 border-b border-white/10">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#ff5528]/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="space-y-12 relative z-10">
          
          {/* Top Tag Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5528] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                (02) // ABOUT THE OUTLINE & BRAND PHILOSOPHY
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5528]" />
              <span>STRATEGY-DRIVEN BRANDING STUDIO</span>
            </div>
          </div>

          {/* Main Giant Display Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight leading-[1.05] font-sans">
                WE OUTLINE <span className="text-[#ff5528]">UNFORGETTABLE</span> BRAND IDENTITIES.
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                We exist to bring clarity to brands in a noisy world by turning raw ideas into structured, powerful visual identities. Our job is to outline it, sharpen it, and make it unforgettable.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#ff5528] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 group shadow-lg shadow-[#ff5528]/20"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href="#manifesto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Our Manifesto</span>
                </a>
              </div>
            </div>
          </div>

          {/* Key Metric Highlight Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-[#ff5528] font-mono">100+</div>
              <div className="text-xs font-mono uppercase text-zinc-400 mt-2 tracking-wider">Identity Systems Designed</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">99.4%</div>
              <div className="text-xs font-mono uppercase text-zinc-400 mt-2 tracking-wider">Brand Alignment Rate</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-[#ff5528] font-mono">12+</div>
              <div className="text-xs font-mono uppercase text-zinc-400 mt-2 tracking-wider">Global Industry Awards</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">0%</div>
              <div className="text-xs font-mono uppercase text-zinc-400 mt-2 tracking-wider">Template Reliance</div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Intro & 3 Pillars Manifesto (Header hidden to prevent stacking) */}
      <div id="manifesto">
        <BrandIntro showHeader={false} />
      </div>

      {/* Core Studio Operating Pillars */}
      <section className="py-28 px-6 sm:px-10 lg:px-16 bg-[#09090c] border-b border-white/10 relative">
        <div className="max-w-[1700px] w-full mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-wrap items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5528]/10 border border-[#ff5528]/30 text-[#ff5528] text-xs font-mono uppercase tracking-widest w-fit">
                <Target className="w-3.5 h-3.5" />
                <span>STUDIO PILLARS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
                How We Engineer Brand Power
              </h2>
            </div>
            <p className="text-sm sm:text-base text-zinc-400 max-w-md">
              Four fundamental rules that govern every identity system, web artifact, and motion design crafted inside our studio.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/50 transition-all duration-500 space-y-6 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff5528] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#ff5528] uppercase tracking-widest">PILLAR // 01</span>
                <div className="w-12 h-12 rounded-2xl bg-[#ff5528]/10 border border-[#ff5528]/20 flex items-center justify-center text-[#ff5528]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-white tracking-wide group-hover:text-[#ff5528] transition-colors">
                  Strategic Positioning
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  We diagnose market white space before drawing a single line, ensuring your visual identity anchors you as an industry leader.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span>01 / POSITION</span>
                <CheckCircle2 className="w-4 h-4 text-[#ff5528]" />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/50 transition-all duration-500 space-y-6 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff5528] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#ff5528] uppercase tracking-widest">PILLAR // 02</span>
                <div className="w-12 h-12 rounded-2xl bg-[#ff5528]/10 border border-[#ff5528]/20 flex items-center justify-center text-[#ff5528]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-white tracking-wide group-hover:text-[#ff5528] transition-colors">
                  Aesthetic Precision
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Bespoke typography, grid discipline, and harmonious color theory executed with extreme technical mastery.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span>02 / CRAFT</span>
                <CheckCircle2 className="w-4 h-4 text-[#ff5528]" />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/50 transition-all duration-500 space-y-6 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff5528] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#ff5528] uppercase tracking-widest">PILLAR // 03</span>
                <div className="w-12 h-12 rounded-2xl bg-[#ff5528]/10 border border-[#ff5528]/20 flex items-center justify-center text-[#ff5528]">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-white tracking-wide group-hover:text-[#ff5528] transition-colors">
                  Scalable Architecture
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Design guidelines built for digital apps, print collaterals, and high-growth environments without fragmentation.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span>03 / SYSTEM</span>
                <CheckCircle2 className="w-4 h-4 text-[#ff5528]" />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#ff5528]/50 transition-all duration-500 space-y-6 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff5528] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#ff5528] uppercase tracking-widest">PILLAR // 04</span>
                <div className="w-12 h-12 rounded-2xl bg-[#ff5528]/10 border border-[#ff5528]/20 flex items-center justify-center text-[#ff5528]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-white tracking-wide group-hover:text-[#ff5528] transition-colors">
                  Enduring Impression
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Creating visual languages that transcend short-lived design trends to establish long-term brand authority.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span>04 / LONGEVITY</span>
                <CheckCircle2 className="w-4 h-4 text-[#ff5528]" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Philosophy Statement Quotes */}
      <TypographyStatements />

      {/* National Client Footprint */}
      <TrustedFootprints />

      {/* Executive Consultation CTA Card */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] relative">
        <div className="max-w-[1700px] w-full mx-auto">
          <div className="p-10 sm:p-16 lg:p-20 rounded-3xl bg-gradient-to-br from-[#16161c] via-[#121218] to-[#09090d] border border-white/10 relative overflow-hidden group shadow-2xl">
            
            {/* Glowing Orange Background Spot */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5528]/15 rounded-full blur-[160px] pointer-events-none group-hover:bg-[#ff5528]/25 transition-all duration-700" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5528]/10 border border-[#ff5528]/30 text-[#ff5528] text-xs font-mono uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DIRECT CONSULTATION</span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight font-sans">
                  Ready to Outline Your <br className="hidden sm:block" />
                  <span className="text-[#ff5528]">Brand Architecture</span>?
                </h2>
                <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
                  Partner directly with our lead creative strategists to audit your existing brand presence and build a unified identity system.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 px-8 py-5 rounded-full bg-[#ff5528] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-xl shadow-[#ff5528]/25 group/btn"
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
