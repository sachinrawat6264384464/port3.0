'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '@/data/content';
import { Quote, Sparkles } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#08080a] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-orange-500 font-mono text-xs uppercase tracking-widest">
              <span className="w-8 h-[1px] bg-orange-500" />
              <span>Brand Philosophy</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wider">
              The Outline
            </h3>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
              Strategy // Aesthetics // Direction
            </p>
          </motion.div>

          {/* Right Column: Statement & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 space-y-8"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              &ldquo;{BRAND.aboutTitle}&rdquo;
            </h2>

            <p className="text-lg sm:text-2xl text-zinc-300 font-light leading-relaxed">
              {BRAND.aboutDescription}
            </p>

            {/* Core Quote Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-orange-950/30 to-zinc-900/40 border border-orange-500/20 relative">
              <Quote className="w-10 h-10 text-orange-500/40 absolute -top-4 -left-4" />
              <p className="text-xl sm:text-3xl font-bold text-white tracking-wide italic">
                &ldquo;{BRAND.coreQuote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-orange-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STRATEGY-DRIVEN BRANDING PRINCIPLE</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
