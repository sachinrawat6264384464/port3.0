'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PILLARS, BRAND } from '@/data/content';
import { Users, Layers, Target, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6 text-zinc-400" />,
  Layers: <Layers className="w-6 h-6 text-zinc-400" />,
  Target: <Target className="w-6 h-6 text-zinc-400" />,
  Compass: <Compass className="w-6 h-6 text-zinc-400" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-zinc-400" />,
};

export const ExperiencePillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="pillars" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] relative">
      <div className="max-w-[1700px] w-full mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-white" />
              Strategic Execution
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-sans">
              Working <span className="font-editorial italic font-normal text-zinc-400 lowercase">experience</span>
            </h2>
          </div>
          <p className="text-zinc-300 max-w-lg text-sm sm:text-base leading-relaxed font-normal">
            {BRAND.workingExperienceStatement}
          </p>
        </div>

        {/* Pillars Grid & Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Pillar Selector List (Left) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-1 gap-2.5 sm:gap-3">
            {PILLARS.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              return (
                <motion.div
                  key={pillar.number}
                  onClick={() => setActivePillar(idx)}
                  whileHover={{ x: 5 }}
                  className={`cursor-pointer p-3.5 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 border-0 flex items-center justify-between gap-2 ${
                    isSelected
                      ? 'bg-white/10 text-white shadow-xl scale-[1.01]'
                      : 'bg-white/[0.02] sm:bg-transparent text-zinc-400 hover:bg-white/[0.03] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                    <span className="text-[10px] sm:text-sm font-mono font-bold text-zinc-400 group-hover:text-white shrink-0">
                      {pillar.number}
                    </span>
                    <h3 className={`text-xs sm:text-base font-bold uppercase transition-colors leading-tight line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-zinc-400'
                    }`}>
                      {pillar.title}
                    </h3>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform shrink-0 ${
                    isSelected ? 'text-white translate-x-0.5' : 'text-zinc-600'
                  }`} />
                </motion.div>
              );
            })}
          </div>

          {/* Active Pillar Card Detail (Right) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full p-5 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-zinc-950/80 sm:bg-transparent border border-white/10 sm:border-0 flex flex-col justify-between relative overflow-hidden group shadow-2xl min-h-[280px] sm:min-h-[420px]"
            >
              {/* Background Accent Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="space-y-4 sm:space-y-8 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 border-0 flex items-center justify-center text-white">
                    {ICON_MAP[PILLARS[activePillar].iconName]}
                  </div>
                  <span className="text-3xl sm:text-5xl font-black text-white/10 font-mono">
                    {PILLARS[activePillar].number}
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <h3 className="text-xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-sans leading-tight">
                    {PILLARS[activePillar].title}
                  </h3>
                  <p className="text-xs sm:text-xl text-zinc-300 font-light leading-snug sm:leading-relaxed">
                    {PILLARS[activePillar].description}
                  </p>
                </div>
              </div>

              <div className="pt-4 sm:pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest relative z-10 font-bold mt-4">
                <Link
                  href={`/pillars/${PILLARS[activePillar].number}`}
                  className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 shadow-xl inline-flex items-center gap-2"
                >
                  <span>Explore Pillar Page</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <span>PILLAR 0{activePillar + 1} / 05</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
