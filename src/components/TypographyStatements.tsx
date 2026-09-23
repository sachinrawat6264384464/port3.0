'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { PHILOSOPHY_QUOTES } from '@/data/content';
import { Quote, Compass, ArrowRight } from 'lucide-react';

const DeclarationCard: React.FC<{
  item: { quote: string; emphasis: string };
  idx: number;
}> = ({ item, idx }) => {
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.25 });

  // 2 Cards from Left (idx 0 & 2), 2 Cards from Right (idx 1 & 3)
  const isLeft = idx % 2 === 0;
  const initialX = isLeft ? -140 : 140;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: initialX, scale: 0.92 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, scale: 1 }
          : { opacity: 0, x: initialX, scale: 0.92 }
      }
      transition={{
        duration: 0.8,
        delay: (idx % 2) * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className="p-10 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-950 via-[#0a0a0e] to-zinc-900 border border-white/10 hover:border-orange-500/60 transition-all duration-500 space-y-6 relative overflow-hidden group shadow-2xl hover:shadow-[0_20px_50px_rgba(255,87,34,0.2)] flex flex-col justify-between"
    >
      {/* Glowing Left Accent Pillar Bar */}
      <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-orange-500 via-amber-500 to-orange-600 rounded-l-3xl shadow-[0_0_15px_rgba(255,87,34,0.8)]" />

      {/* Top Ambient Glow Flare */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-600/0 group-hover:bg-orange-600/15 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

      <div className="space-y-6 relative z-10 pl-3">
        {/* Card Header Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[11px] font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-orange-400" />
            <span>STATEMENT 0{idx + 1}</span>
          </div>

          <Quote className="w-9 h-9 text-orange-500/20 group-hover:text-orange-500/40 transition-colors" />
        </div>

        {/* Big Impactful Typography */}
        <div className="space-y-3 pt-2">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-orange-100 transition-colors">
            {item.quote}
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-orange-500 italic drop-shadow-[0_2px_12px_rgba(255,87,34,0.3)]">
            {item.emphasis}
          </p>
        </div>
      </div>

      {/* Card Footer Bar */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-wider relative z-10 pl-3 group-hover:border-orange-500/30 transition-colors">
        <span className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
          <span>THE OUTLINE CREATIVE DECLARATION</span>
          <ArrowRight className="w-3.5 h-3.5 text-orange-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
        </span>
        <span className="text-orange-500 font-extrabold text-sm">0{idx + 1}</span>
      </div>
    </motion.div>
  );
};

export const TypographyStatements: React.FC = () => {
  return (
    <section className="py-28 px-6 sm:px-10 lg:px-16 bg-[#030305] border-t border-b border-white/10 relative overflow-hidden">
      {/* Dynamic Background Glowing Light Bulbs */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[700px] h-[400px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none animate-pulse" />

      <div className="max-w-[1700px] w-full mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-widest shadow-md shadow-orange-500/20">
            <span>STUDIO DECLARATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight font-sans">
            Principles That Drive Every Touchpoint
          </h2>
        </div>

        {/* 2 Left & 2 Right Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PHILOSOPHY_QUOTES.map((item, idx) => (
            <DeclarationCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
