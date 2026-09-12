'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

const MARQUEE_ITEMS = [
  'STRATEGY // DESIGN // DIRECTION',
  'DESIGN WITH DIRECTION',
  'PERCEPTION & POSITIONING',
  'THE OUTLINE CREATIVE STUDIO',
  'LOGOS THAT SPEAK SILENTLY YET POWERFULLY',
  'PACKAGING DESIGNED TO STAND OUT',
  'PERFORMANCE PRESENTED WITH PURPOSE',
  'IDEAS WITH INTENT',
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-orange-950/80 via-[#0a0a0d] to-orange-950/80 border-y border-orange-500/30 py-5 sm:py-6 shadow-2xl z-30">
      {/* Side Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

      {/* Infinite Scroll Track (Right-to-Left Continuous Loop) */}
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
        className="flex items-center gap-8 sm:gap-12 whitespace-nowrap w-max"
      >
        {/* Render twice for seamless continuous infinite loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 sm:gap-12">
            <span className="text-sm sm:text-lg font-black text-white uppercase tracking-[0.2em] font-mono group hover:text-orange-400 transition-colors">
              {item}
            </span>
            <div className="flex items-center gap-2 text-orange-500">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <Star className="w-3 h-3 fill-orange-500 text-orange-500" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
