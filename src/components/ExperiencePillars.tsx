'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PILLARS, BRAND } from '@/data/content';
import { Users, Layers, Target, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6 text-orange-500" />,
  Layers: <Layers className="w-6 h-6 text-orange-500" />,
  Target: <Target className="w-6 h-6 text-orange-500" />,
  Compass: <Compass className="w-6 h-6 text-orange-500" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-orange-500" />,
};

export const ExperiencePillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="pillars" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#050505] relative">
      <div className="max-w-[1700px] w-full mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Strategic Execution
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
              Working <span className="text-orange-500 italic">Experience</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-lg text-sm sm:text-base leading-relaxed">
            {BRAND.workingExperienceStatement}
          </p>
        </div>

        {/* Pillars Grid & Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Pillar Selector List (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {PILLARS.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              return (
                <motion.div
                  key={pillar.number}
                  onClick={() => setActivePillar(idx)}
                  whileHover={{ x: 5 }}
                  className={`cursor-pointer p-6 sm:p-7 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-orange-950/40 to-zinc-900 border-orange-500/50 shadow-xl shadow-orange-950/30'
                      : 'bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono font-bold text-orange-500">
                      {pillar.number}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold uppercase transition-colors ${
                      isSelected ? 'text-white' : 'text-zinc-400'
                    }`}>
                      {pillar.title}
                    </h3>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform ${
                    isSelected ? 'text-orange-500 translate-x-1' : 'text-zinc-600'
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
              className="h-full p-8 sm:p-12 lg:p-16 rounded-3xl bg-zinc-900/80 border border-orange-500/30 flex flex-col justify-between relative overflow-hidden group shadow-2xl min-h-[420px]"
            >
              {/* Background Accent Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="space-y-8 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                    {ICON_MAP[PILLARS[activePillar].iconName]}
                  </div>
                  <span className="text-5xl font-black text-white/10 font-mono">
                    {PILLARS[activePillar].number}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
                    {PILLARS[activePillar].title}
                  </h3>
                  <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed">
                    {PILLARS[activePillar].description}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-orange-400 uppercase tracking-widest relative z-10">
                <Link
                  href={`/pillars/${PILLARS[activePillar].number}`}
                  className="px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-orange-600/30 inline-flex items-center gap-2"
                >
                  <span>Explore Pillar Page</span>
                  <ArrowRight className="w-4 h-4" />
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
