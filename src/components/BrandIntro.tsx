'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '@/data/content';
import { Quote, ArrowUpRight, Compass, ShieldCheck, Zap } from 'lucide-react';

interface BrandIntroProps {
  showHeader?: boolean;
  theme?: 'dark' | 'light';
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ showHeader = true, theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <section 
      id="about" 
      className={`py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-b relative overflow-hidden transition-colors ${
        isLight 
          ? 'bg-blueprint-grid text-zinc-900 border-[#00755e]/15' 
          : 'bg-[#0e0e11] text-white border-white/5'
      }`}
    >
      {/* Background Subtle Ambient Glow */}
      <div className={`absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none -translate-y-1/2 ${
        isLight ? 'bg-[#00755e]/10' : 'bg-white/5'
      }`} />

      <div className="max-w-[1700px] w-full mx-auto relative z-10">
        
        {/* Top Header Tag */}
        {showHeader && (
          <div className={`flex flex-wrap items-center justify-between gap-4 mb-16 pb-8 border-b ${
            isLight ? 'border-[#00755e]/15' : 'border-white/10'
          }`}>
            <div className="flex items-center gap-3">
              <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                isLight ? 'bg-[#00755e]' : 'bg-[#ff5528]'
              }`} />
              <span className={`text-xs font-mono font-bold uppercase tracking-widest ${
                isLight ? 'text-[#00755e]' : 'text-zinc-300'
              }`}>
                (02) // BRAND PHILOSOPHY & DECLARATION
              </span>
            </div>

            <div className={`hidden sm:flex items-center gap-6 text-xs font-mono uppercase tracking-widest ${
              isLight ? 'text-zinc-600' : 'text-zinc-500'
            }`}>
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
              <h3 className={`text-4xl sm:text-5xl font-black uppercase tracking-tight font-sans leading-none ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                THE OUTLINE <br />
                <span className={isLight ? 'font-editorial italic text-[#00755e]' : 'font-editorial italic font-normal text-zinc-400 lowercase'}>
                  manifesto
                </span>
              </h3>
              <p className={`text-sm sm:text-base font-normal leading-relaxed max-w-md ${
                isLight ? 'text-zinc-700' : 'text-zinc-400'
              }`}>
                We believe every brand possesses a unique narrative waiting to be articulated with razor-sharp precision and visual excellence.
              </p>
            </div>

            {/* 3 Pillar Micro Cards */}
            <div className="space-y-4 pt-2">
              
              <div className={`p-5 rounded-2xl transition-all duration-300 group flex items-start gap-4 ${
                isLight 
                  ? 'bg-white border border-[#00755e]/20 hover:border-[#00755e] shadow-sm' 
                  : 'bg-white/[0.03] border border-white/10 hover:border-white/30'
              }`}>
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all shrink-0 ${
                  isLight 
                    ? 'bg-[#00755e]/10 border-[#00755e]/20 text-[#00755e] group-hover:bg-[#00755e] group-hover:text-white'
                    : 'bg-white/10 border-white/20 text-white group-hover:bg-white group-hover:text-black'
                }`}>
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                    isLight ? 'text-zinc-900 group-hover:text-[#00755e]' : 'text-white group-hover:text-zinc-300'
                  }`}>
                    Strategic Intent
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    Rooted in research, engineered to position your enterprise at the forefront of your industry.
                  </p>
                </div>
              </div>

              <div className={`p-5 rounded-2xl transition-all duration-300 group flex items-start gap-4 ${
                isLight 
                  ? 'bg-white border border-[#00755e]/20 hover:border-[#00755e] shadow-sm' 
                  : 'bg-white/[0.03] border border-white/10 hover:border-white/30'
              }`}>
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all shrink-0 ${
                  isLight 
                    ? 'bg-[#00755e]/10 border-[#00755e]/20 text-[#00755e] group-hover:bg-[#00755e] group-hover:text-white'
                    : 'bg-white/10 border-white/20 text-white group-hover:bg-white group-hover:text-black'
                }`}>
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                    isLight ? 'text-zinc-900 group-hover:text-[#00755e]' : 'text-white group-hover:text-zinc-300'
                  }`}>
                    Aesthetic Precision
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    Crafting digital identities with obsessive attention to typography, motion, and visual clarity.
                  </p>
                </div>
              </div>

              <div className={`p-5 rounded-2xl transition-all duration-300 group flex items-start gap-4 ${
                isLight 
                  ? 'bg-white border border-[#00755e]/20 hover:border-[#00755e] shadow-sm' 
                  : 'bg-white/[0.03] border border-white/10 hover:border-white/30'
              }`}>
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all shrink-0 ${
                  isLight 
                    ? 'bg-[#00755e]/10 border-[#00755e]/20 text-[#00755e] group-hover:bg-[#00755e] group-hover:text-white'
                    : 'bg-white/10 border-white/20 text-white group-hover:bg-white group-hover:text-black'
                }`}>
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                    isLight ? 'text-zinc-900 group-hover:text-[#00755e]' : 'text-white group-hover:text-zinc-300'
                  }`}>
                    Unforgettable Impact
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
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
              <Quote className={`w-16 h-16 absolute -top-6 -left-6 pointer-events-none ${
                isLight ? 'text-[#00755e]/15' : 'text-white/10'
              }`} />
              <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] tracking-tight relative z-10 font-sans ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                &ldquo;{BRAND.aboutTitle}&rdquo;
              </h2>
            </div>

            {/* Narrative Copy */}
            <p className={`text-lg sm:text-2xl font-normal leading-relaxed tracking-wide ${
              isLight ? 'text-zinc-700' : 'text-zinc-300'
            }`}>
              {BRAND.aboutDescription}
            </p>

            {/* Quote Callout Card */}
            <div className={`p-8 sm:p-12 rounded-3xl relative overflow-hidden group transition-all duration-500 shadow-xl ${
              isLight 
                ? 'bg-white border border-[#00755e]/25 hover:border-[#00755e]'
                : 'bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-2xl hover:border-white/30'
            }`}>
              {/* Corner framing indicators */}
              <div className={`absolute top-4 left-4 font-mono text-xs pointer-events-none select-none ${isLight ? 'text-[#00755e]/40' : 'text-zinc-700'}`}>┌</div>
              <div className={`absolute top-4 right-4 font-mono text-xs pointer-events-none select-none ${isLight ? 'text-[#00755e]/40' : 'text-zinc-700'}`}>┐</div>
              <div className={`absolute bottom-4 left-4 font-mono text-xs pointer-events-none select-none ${isLight ? 'text-[#00755e]/40' : 'text-zinc-700'}`}>└</div>
              <div className={`absolute bottom-4 right-4 font-mono text-xs pointer-events-none select-none ${isLight ? 'text-[#00755e]/40' : 'text-zinc-700'}`}>┘</div>

              {/* Accent Glow Circle */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-all duration-500 ${
                isLight ? 'bg-[#00755e]/10 group-hover:bg-[#00755e]/20' : 'bg-white/5 group-hover:bg-white/10'
              }`} />

              <div className="relative z-10 space-y-6">
                <div className={`flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase ${
                  isLight ? 'text-[#00755e]' : 'text-zinc-400'
                }`}>
                  <span>CORE BRANDING PRINCIPLE</span>
                </div>

                <p className={`text-2xl sm:text-4xl font-extrabold tracking-wide leading-snug ${
                  isLight ? 'text-[#00755e] font-editorial italic' : 'text-white font-editorial italic font-normal'
                }`}>
                  &ldquo;{BRAND.coreQuote}&rdquo;
                </p>

                <div className={`pt-2 flex items-center justify-between border-t ${
                  isLight ? 'border-[#00755e]/15' : 'border-white/10'
                }`}>
                  <span className={`text-xs font-mono ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    DESIGN WITH DIRECTION // THE OUTLINE
                  </span>
                  <a
                    href="#services"
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                      isLight ? 'text-zinc-900 hover:text-[#00755e]' : 'text-white hover:text-[#ff5528]'
                    }`}
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
