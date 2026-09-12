'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, Users, Layers, Sparkles } from 'lucide-react';

interface MetricItem {
  id: string;
  targetNumber: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const STATS_DATA: MetricItem[] = [
  {
    id: 'years',
    targetNumber: 15,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Pioneering strategy-driven visual branding and corporate architecture.',
    icon: Award,
  },
  {
    id: 'industries',
    targetNumber: 40,
    suffix: '+',
    label: 'Industries Transformed',
    description: 'Across FMCG, hospitality, real estate, corporate & industrial sectors.',
    icon: Briefcase,
  },
  {
    id: 'clients',
    targetNumber: 300,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Startups, scaling enterprises, and national conglomerates.',
    icon: Users,
  },
  {
    id: 'campaigns',
    targetNumber: 500,
    suffix: '+',
    label: 'Identities & Campaigns',
    description: 'Bespoke logos, packaging suites, pitch decks, and highway billboards.',
    icon: Layers,
  },
];

const CounterNumber: React.FC<{ target: number; suffix: string; parentInView: boolean }> = ({
  target,
  suffix,
  parentInView,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!parentInView) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 1800;
    const increment = Math.max(1, Math.ceil(target / (duration / 16)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [parentInView, target]);

  return (
    <span className="font-mono text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-[0_4px_16px_rgba(255,87,34,0.3)]">
      {count}
      <span className="text-orange-500 font-extrabold">{suffix}</span>
    </span>
  );
};

const StatCard: React.FC<{ stat: MetricItem; idx: number }> = ({ stat, idx }) => {
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const IconComponent = stat.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.85, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: idx * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className="p-8 rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-orange-500/60 transition-all duration-500 space-y-5 shadow-2xl hover:shadow-[0_20px_50px_rgba(255,87,34,0.25)] group relative overflow-hidden flex flex-col justify-between"
    >
      {/* Glowing Top & Radial Accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500 transition-all duration-500" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-600/0 group-hover:bg-orange-600/20 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

      {/* Inner Content expanding smoothly from center of card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, filter: 'blur(8px)' }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
            : { opacity: 0, scale: 0.6, filter: 'blur(8px)' }
        }
        transition={{
          duration: 0.6,
          delay: idx * 0.12 + 0.1,
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
        className="space-y-4 origin-center w-full"
      >
        <div className="flex items-center justify-between">
          <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300 shadow-md">
            <IconComponent className="w-7 h-7 text-orange-400 group-hover:text-black transition-colors" />
          </div>
          <span className="text-xs font-mono text-zinc-500 font-bold group-hover:text-orange-400 transition-colors">
            0{idx + 1}
          </span>
        </div>

        <div className="pt-2">
          <CounterNumber
            target={stat.targetNumber}
            suffix={stat.suffix}
            parentInView={isInView}
          />
          <h3 className="text-lg font-bold text-white uppercase tracking-wider pt-2 group-hover:text-orange-400 transition-colors">
            {stat.label}
          </h3>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed font-light group-hover:text-zinc-200 transition-colors">
          {stat.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const StatsMetricsCounter: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#08080b] border-y border-white/10 relative overflow-hidden">
      {/* Background Ambient Pulsing Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none animate-pulse" />

      <div className="max-w-[1700px] w-full mx-auto space-y-14 relative z-10">
        {/* Section Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-white/10 pb-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 shadow-md shadow-orange-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              THE OUTLINE IN NUMBERS // PROVEN IMPACT
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider hidden sm:block">
            EST. CREATIVE STUDIO
          </span>
        </motion.div>

        {/* 4 Animated Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
