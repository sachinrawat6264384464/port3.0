'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Compass, Share2, Users, Eye } from 'lucide-react';

const LEFT_REASONS = [
  {
    id: 'left-01',
    number: '01',
    title: 'STRATEGY-DRIVEN DESIGN',
    description: 'Transformed business goals and brand intent into structured, impactful visual systems that strengthen recognition and recall.',
    icon: <Target className="w-5 h-5 text-zinc-300" />,
  },
  {
    id: 'left-02',
    number: '02',
    title: 'END-TO-END CREATIVE DELIVERY',
    description: 'Handled complete brand journeys from strategy and identity creation to communication design and final execution across platforms.',
    icon: <Layers className="w-5 h-5 text-zinc-300" />,
  },
  {
    id: 'left-03',
    number: '03',
    title: 'FOUNDER-LED ALIGNMENT',
    description: 'Worked closely with founders and leadership teams to ensure brand identity aligns with vision, values, and long-term growth plans.',
    icon: <Compass className="w-5 h-5 text-zinc-300" />,
  },
];

const RIGHT_REASONS = [
  {
    id: 'right-05',
    number: '05',
    title: 'ONE BRAND VOICE',
    description: 'Across every touchpoint and channel, we make strategy, identity, communication, and execution work together seamlessly.',
    icon: <Share2 className="w-5 h-5 text-zinc-300" />,
  },
  {
    id: 'right-06',
    number: '06',
    title: 'DIVERSE COLLABORATIONS',
    description: 'Partnered with startups, scaling businesses, and established brands across industries, understanding unique challenges.',
    icon: <Users className="w-5 h-5 text-zinc-300" />,
  },
  {
    id: 'right-07',
    number: '07',
    title: 'PERFORMANCE WITH PURPOSE',
    description: 'For us, good design is not decoration — design that informs, stands out, and is built to be remembered.',
    icon: <Eye className="w-5 h-5 text-zinc-300" />,
  },
];

export const WhyChooseOutline: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="why-us" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] border-t border-white/5 relative overflow-hidden">
      {/* Ambient Lighting Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono font-bold uppercase tracking-widest"
          >
            <span>THE OUTLINE VALUE PROPOSITION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-sans"
          >
            Why Choose <span className="text-zinc-400 font-editorial italic font-normal lowercase">the outline</span> For Your Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            We exist to bring clarity to brands in a noisy world by turning raw ideas into structured, powerful visual identities.
          </motion.p>
        </div>

        {/* Central Mindmap Architecture Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          
          {/* Connecting SVG Lines (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
              <defs>
                <linearGradient id="ropeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#a1a1aa" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
                </linearGradient>

                <filter id="whiteGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Left Side 3 Curved Lines (Center x=600, y=300 -> Left Cards x=380) */}
              {[
                { y: 80, path: 'M 380 80 C 470 80, 480 180, 485 220', id: 'left-01' },
                { y: 300, path: 'M 380 300 C 450 300, 470 300, 485 300', id: 'left-02' },
                { y: 520, path: 'M 380 520 C 470 520, 480 420, 485 380', id: 'left-03' },
              ].map((item, idx) => {
                const isHovered = hoveredCard === item.id;
                return (
                  <g key={item.id}>
                    <path
                      d={item.path}
                      stroke={isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.25)'}
                      strokeWidth={isHovered ? '2.5' : '1.5'}
                      filter={isHovered ? 'url(#whiteGlow)' : undefined}
                      className="transition-all duration-300"
                    />
                    <motion.path
                      d={item.path}
                      stroke="url(#ropeGradient)"
                      strokeWidth={isHovered ? '2.5' : '1.5'}
                      strokeDasharray="6 6"
                      animate={{ strokeDashoffset: [0, -24] }}
                      transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 2 - idx * 0.3,
                      }}
                    />
                  </g>
                );
              })}

              {/* Right Side 3 Curved Lines (Center x=600, y=300 -> Right Cards x=820) */}
              {[
                { y: 80, path: 'M 820 80 C 730 80, 720 180, 715 220', id: 'right-05' },
                { y: 300, path: 'M 820 300 C 750 300, 730 300, 715 300', id: 'right-06' },
                { y: 520, path: 'M 820 520 C 730 520, 720 420, 715 380', id: 'right-07' },
              ].map((item, idx) => {
                const isHovered = hoveredCard === item.id;
                return (
                  <g key={item.id}>
                    <path
                      d={item.path}
                      stroke={isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.25)'}
                      strokeWidth={isHovered ? '2.5' : '1.5'}
                      filter={isHovered ? 'url(#whiteGlow)' : undefined}
                      className="transition-all duration-300"
                    />
                    <motion.path
                      d={item.path}
                      stroke="url(#ropeGradient)"
                      strokeWidth={isHovered ? '2.5' : '1.5'}
                      strokeDasharray="6 6"
                      animate={{ strokeDashoffset: [0, 24] }}
                      transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 2 - idx * 0.3,
                      }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Left 3 Cards */}
          <div className="lg:col-span-4 space-y-6 relative z-10">
            {LEFT_REASONS.map((item, idx) => {
              const isHovered = hoveredCard === item.id;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group p-6 sm:p-7 rounded-2xl transition-all duration-300 space-y-4 relative cursor-pointer border ${
                    isHovered
                      ? 'bg-[#15151a] border-zinc-600 shadow-2xl scale-[1.01]'
                      : 'bg-[#111115]/80 border-zinc-800/80 hover:bg-[#15151a] hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-zinc-300 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-white transition-colors">
                      {item.number}
                    </span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-white font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central Emblem Card ("THE OUTLINE") */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-6 relative z-10">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-3 rounded-[32px] border border-white/10 bg-zinc-900/40 shadow-2xl backdrop-blur-md relative group cursor-pointer"
            >
              <div className="p-2 rounded-[24px] border border-zinc-800 bg-black/40">
                <div className="w-60 h-60 sm:w-68 sm:h-68 rounded-2xl bg-[#0e0e11] border border-zinc-800 flex flex-col items-center justify-center p-6 text-center space-y-4 relative">
                  
                  {/* Central O Emblem */}
                  <div className="w-14 h-14 rounded-full bg-zinc-800/90 border border-zinc-700 flex items-center justify-center relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-2xl font-sans">O</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white absolute top-2 right-2 shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-widest font-sans group-hover:text-zinc-200 transition-colors">
                      THE OUTLINE
                    </h3>
                    <p className="text-[10px] sm:text-xs text-zinc-400 font-mono tracking-widest font-bold uppercase">
                      STRATEGY // AESTHETICS
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

          {/* Right 3 Cards */}
          <div className="lg:col-span-4 space-y-6 relative z-10">
            {RIGHT_REASONS.map((item, idx) => {
              const isHovered = hoveredCard === item.id;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group p-6 sm:p-7 rounded-2xl transition-all duration-300 space-y-4 relative cursor-pointer border ${
                    isHovered
                      ? 'bg-[#15151a] border-zinc-600 shadow-2xl scale-[1.01]'
                      : 'bg-[#111115]/80 border-zinc-800/80 hover:bg-[#15151a] hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-zinc-300 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-white transition-colors">
                      {item.number}
                    </span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-white font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

