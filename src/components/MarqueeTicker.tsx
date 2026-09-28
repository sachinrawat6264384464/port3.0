'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MARQUEE_ITEMS = [
  'STRATEGY // DESIGN // DIRECTION',
  'PERCEPTION & POSITIONING',
  'OUTLINE CREATIVE STUDIO',
  'LOGOS THAT SPEAK SILENTLY YET POWERFULLY',
  'PACKAGING DESIGNED TO STAND OUT',
  'PERFORMANCE PRESENTED WITH PURPOSE',
  'IDEAS WITH INTENT',
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0d] border-y border-white/10 py-5 sm:py-7 lg:py-8 shadow-2xl z-30 mt-20 sm:mt-28 lg:mt-36 mb-6 sm:mb-8 lg:mb-10">
      {/* Side Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-[#0e0e11] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-[#0e0e11] to-transparent z-20 pointer-events-none" />

      {/* Infinite Scroll Track (Right-to-Left Continuous Loop) */}
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 40,
        }}
        className="flex items-center gap-14 sm:gap-20 whitespace-nowrap w-max select-none"
      >
        {/* Render twice for seamless continuous infinite loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-12 sm:gap-16">
            <div className="flex items-center gap-5 group">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#6b6b7a] font-sans group-hover:text-zinc-200 transition-colors">
                studio<span className="font-editorial italic font-normal text-[#a0a0b0] group-hover:text-white">rs</span>
              </span>
              <span className="text-zinc-400 text-xs sm:text-sm lg:text-base font-mono uppercase tracking-[0.24em] font-medium pl-4 group-hover:text-zinc-200 transition-colors">
                // &nbsp; {item}
              </span>
            </div>
            <span className="text-zinc-600 text-base sm:text-lg font-mono">★</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

