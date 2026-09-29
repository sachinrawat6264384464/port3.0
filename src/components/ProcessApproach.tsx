'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/data/content';
import { ArrowRight, Lightbulb, Compass, Shield, Share2, Rocket } from 'lucide-react';

const STEP_ICONS = [
  <Lightbulb key="1" className="w-5 h-5 text-zinc-400" />,
  <Compass key="2" className="w-5 h-5 text-zinc-400" />,
  <Shield key="3" className="w-5 h-5 text-zinc-400" />,
  <Share2 key="4" className="w-5 h-5 text-zinc-400" />,
  <Rocket key="5" className="w-5 h-5 text-zinc-400" />,
];

export const ProcessApproach: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] relative overflow-hidden">
      <div className="max-w-[1700px] w-full mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-4xl mx-auto">
          <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-white" />
            End-to-End Creative Delivery
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-sans">
            Concept to <span className="text-zinc-400 font-editorial italic font-normal">Completion</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            Managed projects from initial ideation to final delivery, maintaining quality, consistency, and timelines at every stage.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6 relative">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-transparent border border-white/10 hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Connector line for desktop */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-[1px] bg-white/10 z-20" />
              )}

              <div className="space-y-3 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-sm font-mono font-bold text-zinc-400 group-hover:text-white">
                    {item.step}
                  </span>
                  <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                    {STEP_ICONS[idx]}
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-xs sm:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-zinc-200 transition-colors font-sans leading-tight line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-zinc-400 leading-snug sm:leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 sm:pt-6 sm:mt-6 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                <span>STAGE {item.step}</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
