'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Compass, Eye, ShieldCheck, ArrowUpRight, Layers, Target, Award } from 'lucide-react';
import Link from 'next/link';
import { BRAND } from '@/data/content';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#030305]">
      
      {/* 1. Ultra-Sleek Dark Mode Background Effects */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Subtle Architectural Grid Lines Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

        {/* Ambient Pulsing Studio Orange Light Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-orange-600/15 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[160px] animate-pulse delay-1000" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[140px]" />

        {/* Diagonal Glowing Studio Beam Lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      </div>

      <div className="max-w-[1700px] w-full mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left / Main Editorial Content Area */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-lg shadow-orange-950/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>Creative Agency & Visual Architecture</span>
          </motion.div>

          {/* Large Bold Typography strictly from PDF */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white uppercase leading-[0.92] font-heading drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            >
              {BRAND.heroHeadline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 pt-1"
            >
              <div className="h-2.5 w-20 sm:w-36 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg shadow-orange-500/80" />
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-orange-500 italic drop-shadow-[0_0_25px_rgba(255,87,34,0.4)]">
                {BRAND.heroSubheadline}
              </h2>
            </motion.div>
          </div>

          {/* Subheadline Positioning Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl font-light text-zinc-300 max-w-2xl leading-relaxed border-l-4 border-orange-500 pl-5 py-1"
          >
            It’s <span className="font-semibold text-white">communication</span>,{' '}
            <span className="font-semibold text-white italic">perception</span>, and{' '}
            <span className="font-semibold text-orange-400">positioning</span>, done{' '}
            <span className="font-bold underline decoration-orange-500 underline-offset-8 text-white">right</span>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <MagneticButton>
              <Link
                href="/work"
                data-cursor="WORK"
                className="px-9 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-orange-600/40 flex items-center gap-3 group"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/about"
                data-cursor="ABOUT"
                className="px-9 py-4 rounded-full bg-zinc-950 hover:bg-zinc-900 border border-white/15 text-zinc-200 hover:text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-md hover:border-orange-500/50"
              >
                Our Philosophy
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Quick Pillar Highlights Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <Compass className="w-4 h-4 shrink-0" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase">Strategy</p>
                <p className="text-[10px] text-zinc-400 font-mono">Direction & Intent</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <Eye className="w-4 h-4 shrink-0" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase">Perception</p>
                <p className="text-[10px] text-zinc-400 font-mono">Visual Systems</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase">Positioning</p>
                <p className="text-[10px] text-zinc-400 font-mono">Built to Remember</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Side Visual Design Showcase Cards & Floating CTA */}
        <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center gap-8">
          
          {/* Glassmorphic Brand Feature Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-md p-6 rounded-3xl bg-zinc-950/80 border border-white/15 backdrop-blur-xl shadow-2xl space-y-4 relative overflow-hidden group hover:border-orange-500/50 transition-all"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-transparent" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  STRATEGY-DRIVEN BRANDING
                </span>
              </div>
              <span className="text-[10px] font-mono text-orange-400 px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30">
                EST. STUDIO
              </span>
            </div>

            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              We bring clarity to brands in a noisy world by turning raw ideas into structured, powerful visual identities.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-lg font-mono font-bold text-orange-400">15+ Years</div>
                <div className="text-[10px] text-zinc-400 font-mono">Industry Authority</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-lg font-mono font-bold text-orange-400">300+ Clients</div>
                <div className="text-[10px] text-zinc-400 font-mono">National Footprint</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Circular CTA Badge (Frisk Reference) */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6, type: 'spring' }}
            className="relative"
          >
            <MagneticButton>
              <Link
                href="/contact"
                data-cursor="PROJECT"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-black font-black text-xs uppercase tracking-wider flex flex-col items-center justify-center text-center p-6 shadow-[0_0_70px_rgba(255,87,34,0.7)] hover:shadow-[0_0_100px_rgba(255,87,34,1)] transition-all duration-500 group relative overflow-hidden"
              >
                {/* Rotating Outer Text Ring */}
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-black/30 animate-[spin_20s_linear_infinite]" />
                
                <span className="text-xs sm:text-sm font-black leading-tight uppercase tracking-tight text-black group-hover:scale-110 transition-transform">
                  LET&apos;S TALK WITH US
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-black/80 pt-1">
                  START A PROJECT
                </span>
                <ArrowUpRight className="w-5 h-5 text-black mt-1.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </MagneticButton>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
