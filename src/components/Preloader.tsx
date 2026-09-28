'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fast high-end count-up simulation
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 4;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#0e0e11] flex flex-col justify-between p-8 sm:p-12 md:p-16 overflow-hidden select-none border-b border-white/10"
        >
          {/* Top Brand Tag */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-xs">R</span>
              </div>
              <span className="text-lg font-black tracking-tight text-white font-sans">
                studio<span className="font-editorial italic font-normal text-zinc-400">rs</span>
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              STRATEGY | DESIGN | DIRECTION
            </span>
          </div>

          {/* Center Masked Slogan Reveal */}
          <div className="my-auto space-y-4 max-w-4xl">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none font-sans"
              >
                ideas with <span className="font-editorial italic font-normal text-zinc-400 lowercase">intent</span>
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-2xl text-zinc-400 font-light font-editorial italic"
              >
                Design with Direction! Turning raw concepts into structured visual identities.
              </motion.p>
            </div>
          </div>

          {/* Bottom Count-up Bar */}
          <div className="pt-6 border-t border-white/10 flex items-end justify-between">
            <div className="space-y-2">
              <div className="w-48 sm:w-64 h-1 rounded-full bg-zinc-900 overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                  style={{ width: `${count}%` }}
                />
              </div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                INITIALIZING STUDIO EXPERIENCE...
              </p>
            </div>

            <div className="text-5xl sm:text-7xl font-black font-serif text-white tracking-tight">
              <span>{count}</span>
              <span className="text-zinc-400 text-3xl font-mono">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
