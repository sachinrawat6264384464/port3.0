'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/data/content';
import { ArrowRight, Lightbulb, Compass, Shield, Share2, Rocket } from 'lucide-react';

const STEP_ICONS = [
  <Lightbulb key="1" className="w-5 h-5 text-orange-500" />,
  <Compass key="2" className="w-5 h-5 text-orange-500" />,
  <Shield key="3" className="w-5 h-5 text-orange-500" />,
  <Share2 key="4" className="w-5 h-5 text-orange-500" />,
  <Rocket key="5" className="w-5 h-5 text-orange-500" />,
];

export const ProcessApproach: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1700px] w-full mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-4xl mx-auto">
          <span className="text-orange-500 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            End-to-End Creative Delivery
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
            Concept to <span className="text-orange-500 italic">Completion</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Managed projects from initial ideation to final delivery, maintaining quality, consistency, and timelines at every stage.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/60 border border-white/5 hover:border-orange-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Connector line for desktop */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-[1px] bg-white/10 z-20" />
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-orange-500">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                    {STEP_ICONS[idx]}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-orange-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-orange-500 transition-colors">
                <span>STAGE {item.step}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
