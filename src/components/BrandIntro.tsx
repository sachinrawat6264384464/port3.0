'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '@/data/content';
import { Quote, Sparkles, ArrowUpRight, Compass, ShieldCheck, Zap } from 'lucide-react';

interface BrandIntroProps {
  showHeader?: boolean;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ showHeader = true }) => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] text-white border-t border-b border-white/5 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#ff5528]/5 rounded-full blur-[180px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1700px] w-full mx-auto relative z-10">
        
        {/* Top Header Tag */}
        {showHeader && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-16 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5528] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                (02) // BRAND PHILOSOPHY & DECLARATION
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span>STRATEGY</span>
              <span>•</span>
              <span>AESTHETICS</span>
              <span>•</span>
              <span>DIRECTION</span>
            </div>
          </div>
        )}

        {/* Main 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Pillar Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-sans leading-none">
                THE OUTLINE <br />
                <span className="text-[#ff5528]">MANIFESTO</span>
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-md">
                We believe every brand possesses a unique narrative waiting to be articulated with razor-sharp precision and visual excellence.
              </p>
            </div>

            {/* 3 Pillar Micro Cards */}
            <div className="space-y-4 pt-2">
              
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5528]/50 transition-all duration-300 group flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff5528]/10 border border-[#ff5528]/20 flex items-center justify-center text-[#ff5528] group-hover:bg-[#ff5528] group-hover:text-black transition-all shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#ff5528] transition-colors">
                    Strategic Intent
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Rooted in research, engineered to position your enterprise at the forefront of your industry.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5528]/50 transition-all duration-300 group flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff5528]/10 border border-[#ff5528]/20 flex items-center justify-center text-[#ff5528] group-hover:bg-[#ff5528] group-hover:text-black transition-all shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#ff5528] transition-colors">
                    Aesthetic Precision
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Crafting digital identities with obsessive attention to typography, motion, and visual clarity.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5528]/50 transition-all duration-300 group flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff5528]/10 border border-[#ff5528]/20 flex items-center justify-center text-[#ff5528] group-hover:bg-[#ff5528] group-hover:text-black transition-all shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#ff5528] transition-colors">
                    Unforgettable Impact
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Turning raw ideas into structured visual experiences that leave an indelible mark on audiences.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Hero Quote & Core Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Main Big Quote Statement */}
            <div className="relative">
              <Quote className="w-16 h-16 text-[#ff5528]/20 absolute -top-6 -left-6 pointer-events-none" />
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight relative z-10 font-sans">
                &ldquo;{BRAND.aboutTitle}&rdquo;
              </h2>
            </div>

            {/* Narrative Copy */}
            <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed tracking-wide">
              {BRAND.aboutDescription}
            </p>

            {/* Glassmorphism Quote Callout Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-2xl relative overflow-hidden group hover:border-[#ff5528]/40 transition-all duration-500 shadow-2xl">
              {/* Corner framing indicators */}
              <div className="absolute top-4 left-4 text-zinc-700 font-mono text-xs pointer-events-none select-none">┌</div>
              <div className="absolute top-4 right-4 text-zinc-700 font-mono text-xs pointer-events-none select-none">┐</div>
              <div className="absolute bottom-4 left-4 text-zinc-700 font-mono text-xs pointer-events-none select-none">└</div>
              <div className="absolute bottom-4 right-4 text-zinc-700 font-mono text-xs pointer-events-none select-none">┘</div>

              {/* Accent Glow Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ff5528]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ff5528]/30 transition-all duration-500" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ff5528] font-bold tracking-widest uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>CORE BRANDING PRINCIPLE</span>
                </div>

                <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-wide italic leading-snug">
                  &ldquo;{BRAND.coreQuote}&rdquo;
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <span className="text-xs text-zinc-400 font-mono">
                    DESIGN WITH DIRECTION // THE OUTLINE
                  </span>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#ff5528] uppercase tracking-wider transition-colors"
                  >
                    <span>Our Approach</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
