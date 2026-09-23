'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Compass, CheckCircle2, Share2, Users, Eye, ShieldCheck } from 'lucide-react';

const LEFT_REASONS = [
  {
    id: 'left-01',
    number: '01',
    title: 'Strategy-Driven Design',
    description: 'Transformed business goals and brand intent into structured, impactful visual systems that strengthen recognition and recall.',
    icon: <Target className="w-5 h-5 text-orange-500" />,
  },
  {
    id: 'left-02',
    number: '02',
    title: 'End-to-End Creative Delivery',
    description: 'Handled complete brand journeys from strategy and identity creation to communication design and final execution across platforms.',
    icon: <Layers className="w-5 h-5 text-orange-500" />,
  },
  {
    id: 'left-03',
    number: '03',
    title: 'Founder-Led Alignment',
    description: 'Worked closely with founders and leadership teams to ensure brand identity aligns with vision, values, and long-term growth plans.',
    icon: <Compass className="w-5 h-5 text-orange-500" />,
  },
  {
    id: 'left-04',
    number: '04',
    title: 'Concept to Completion',
    description: 'Managed projects from initial ideation to final delivery, maintaining quality, consistency, and timelines at every stage.',
    icon: <CheckCircle2 className="w-5 h-5 text-orange-500" />,
  },
];

const RIGHT_REASONS = [
  {
    id: 'right-05',
    number: '05',
    title: 'One Brand Voice',
    description: 'Across every touchpoint and channel, we make strategy, identity, communication, and execution work together seamlessly.',
    icon: <Share2 className="w-5 h-5 text-orange-500" />,
  },
  {
    id: 'right-06',
    number: '06',
    title: 'Diverse Collaborations',
    description: 'Partnered with startups, scaling businesses, and established brands across industries, understanding unique challenges.',
    icon: <Users className="w-5 h-5 text-orange-500" />,
  },
  {
    id: 'right-07',
    number: '07',
    title: 'Performance with Purpose',
    description: 'For us, good design is not decoration — design that informs, stands out, and is built to be remembered.',
    icon: <Eye className="w-5 h-5 text-orange-500" />,
  },
  {
    id: 'right-08',
    number: '08',
    title: 'Consistent Media Impact',
    description: 'Every medium covered, every message consistent — because print still speaks when done by The Outline!',
    icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
  },
];

export const WhyChooseOutline: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="why-us" className="py-28 px-6 sm:px-10 lg:px-16 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Ambient Radial Orange Lighting Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase"
          >
            <span>THE OUTLINE VALUE PROPOSITION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight"
          >
            Why Choose <span className="text-orange-500 italic">The Outline</span> For Your Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            We exist to bring clarity to brands in a noisy world by turning raw ideas into structured, powerful visual identities.
          </motion.p>
        </div>

        {/* Central Node Architecture Diagram with Dynamic Flowing Connecting Ropes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Full Widescreen Dynamic Animated Connecting SVG Lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 650" fill="none">
              <defs>
                <linearGradient id="ropeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff5722" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ff9800" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ff5722" stopOpacity="0.8" />
                </linearGradient>

                <filter id="orangeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Left Side 4 Curved Dynamic Connecting Ropes (From Center (600, 325) to Left Cards) */}
              {[
                { y: 80, id: 'left-01' },
                { y: 230, id: 'left-02' },
                { y: 380, id: 'left-03' },
                { y: 530, id: 'left-04' },
              ].map((item, idx) => {
                const isHovered = hoveredCard === item.id;
                return (
                  <g key={item.id}>
                    {/* Base Curved Rope Path */}
                    <path
                      d={`M 400 ${item.y} C 500 ${item.y}, 520 325, 600 325`}
                      stroke={isHovered ? '#ff5722' : 'rgba(255, 87, 34, 0.35)'}
                      strokeWidth={isHovered ? '4' : '2'}
                      filter={isHovered ? 'url(#orangeGlow)' : undefined}
                      className="transition-all duration-300"
                    />

                    {/* Dynamic Animated Flowing Rope Dash Line (Right-to-Left / Left-to-Right Flow) */}
                    <motion.path
                      d={`M 400 ${item.y} C 500 ${item.y}, 520 325, 600 325`}
                      stroke="url(#ropeGradient)"
                      strokeWidth={isHovered ? '4' : '2'}
                      strokeDasharray="10 10"
                      animate={{ strokeDashoffset: [0, -40] }}
                      transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 1.8 - idx * 0.2,
                      }}
                    />
                  </g>
                );
              })}

              {/* Right Side 4 Curved Dynamic Connecting Ropes (From Center (600, 325) to Right Cards) */}
              {[
                { y: 80, id: 'right-05' },
                { y: 230, id: 'right-06' },
                { y: 380, id: 'right-07' },
                { y: 530, id: 'right-08' },
              ].map((item, idx) => {
                const isHovered = hoveredCard === item.id;
                return (
                  <g key={item.id}>
                    {/* Base Curved Rope Path */}
                    <path
                      d={`M 800 ${item.y} C 700 ${item.y}, 680 325, 600 325`}
                      stroke={isHovered ? '#ff5722' : 'rgba(255, 87, 34, 0.35)'}
                      strokeWidth={isHovered ? '4' : '2'}
                      filter={isHovered ? 'url(#orangeGlow)' : undefined}
                      className="transition-all duration-300"
                    />

                    {/* Dynamic Animated Flowing Rope Dash Line */}
                    <motion.path
                      d={`M 800 ${item.y} C 700 ${item.y}, 680 325, 600 325`}
                      stroke="url(#ropeGradient)"
                      strokeWidth={isHovered ? '4' : '2'}
                      strokeDasharray="10 10"
                      animate={{ strokeDashoffset: [0, 40] }}
                      transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 1.8 - idx * 0.2,
                      }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Left 4 Cards */}
          <div className="lg:col-span-4 space-y-6 relative z-10">
            {LEFT_REASONS.map((item, idx) => {
              const isHovered = hoveredCard === item.id;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group p-7 rounded-3xl transition-all duration-500 space-y-3 relative shadow-xl border cursor-pointer ${
                    isHovered
                      ? 'bg-gradient-to-r from-orange-950/60 via-zinc-900 to-zinc-950 border-orange-500 shadow-2xl shadow-orange-950/60 scale-[1.03]'
                      : 'bg-zinc-900/60 border-white/10 hover:border-orange-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl border transition-colors ${
                      isHovered ? 'bg-orange-500 border-orange-400 text-white' : 'bg-orange-500/10 border-orange-500/20'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-orange-500">
                      {item.number}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold uppercase transition-colors ${
                    isHovered ? 'text-orange-400' : 'text-white'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Central Emblem Node (Connected Hub Box) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-8 relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-orange-600 via-orange-700 to-orange-950 p-1 border-2 border-orange-500 shadow-[0_0_80px_rgba(255,87,34,0.6)] flex items-center justify-center text-center group cursor-pointer"
            >
              {/* Pulse Ambient Outer Ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-orange-500/50 animate-ping pointer-events-none" />

              <div className="w-full h-full rounded-2xl bg-[#08080c] p-6 flex flex-col items-center justify-center space-y-4 relative z-10">
                <div className="relative w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                  <span className="text-orange-500 font-extrabold text-3xl">O</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-orange-500 animate-ping" />
                </div>
                <div className="space-y-1">
                  <span className="text-xl font-black text-white uppercase tracking-wider block group-hover:text-orange-400 transition-colors">
                    The Outline
                  </span>
                  <span className="text-[10px] text-orange-400 font-mono tracking-widest block uppercase">
                    STRATEGY // AESTHETICS
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right 4 Cards */}
          <div className="lg:col-span-4 space-y-6 relative z-10">
            {RIGHT_REASONS.map((item, idx) => {
              const isHovered = hoveredCard === item.id;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group p-7 rounded-3xl transition-all duration-500 space-y-3 relative shadow-xl border cursor-pointer ${
                    isHovered
                      ? 'bg-gradient-to-l from-orange-950/60 via-zinc-900 to-zinc-950 border-orange-500 shadow-2xl shadow-orange-950/60 scale-[1.03]'
                      : 'bg-zinc-900/60 border-white/10 hover:border-orange-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl border transition-colors ${
                      isHovered ? 'bg-orange-500 border-orange-400 text-white' : 'bg-orange-500/10 border-orange-500/20'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-orange-500">
                      {item.number}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold uppercase transition-colors ${
                    isHovered ? 'text-orange-400' : 'text-white'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
