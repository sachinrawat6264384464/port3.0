'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, Users, Layers } from 'lucide-react';

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
    const duration = 2400;
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
    <span className="font-serif text-lg sm:text-2xl font-black text-white tracking-widest">
      {count}{suffix}
    </span>
  );
};

const CardNotchedFrame: React.FC<{
  stat: MetricItem;
  isInView: boolean;
  isReflection?: boolean;
}> = ({ stat, isInView, isReflection = false }) => {
  const IconComponent = stat.icon;

  return (
    <div className="relative w-full h-[360px] p-8 flex flex-col items-center justify-center text-center group">
      {/* SVG Notched Corner Border Frame with Crisp Pure White Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
        preserveAspectRatio="none"
        viewBox="0 0 300 380"
      >
        <path
          d="M 18,2 L 282,2 A 16 16 0 0 0 298,18 L 298,362 A 16 16 0 0 0 282,378 L 18,378 A 16 16 0 0 0 2,362 L 2,18 A 16 16 0 0 0 18,2 Z"
          fill="#140d09"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeOpacity={isReflection ? "0.2" : "0.85"}
          className="group-hover:stroke-white group-hover:stroke-[2] transition-all duration-300"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full py-4 px-2">
        {/* Top Centered Icon */}
        <div className="mt-2 text-white group-hover:scale-110 group-hover:text-[#e8be90] transition-all duration-300">
          <IconComponent className="w-10 h-10 stroke-[1.5]" />
        </div>

        {/* Title & Counter */}
        <div className="my-auto space-y-3 px-2">
          <h3 className="text-base sm:text-lg font-serif font-extrabold uppercase tracking-widest text-white leading-snug">
            <CounterNumber
              target={stat.targetNumber}
              suffix={stat.suffix}
              parentInView={isInView}
            />{' '}
            <span className="text-[#e8be90] group-hover:text-white transition-colors">{stat.label}</span>
          </h3>

          <p className="text-xs sm:text-[13px] text-zinc-300 font-light leading-relaxed max-w-[250px] mx-auto group-hover:text-white transition-colors">
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const StatsMetricsCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section className="pt-16 pb-4 px-6 sm:px-10 lg:px-16 bg-[#070504] relative overflow-hidden">
      {/* Dark Wooden Floor Planks Texture Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 60px,
            rgba(255, 255, 255, 0.04) 60px,
            rgba(255, 255, 255, 0.04) 61px
          )`,
        }}
      />

      <div ref={containerRef} className="max-w-[1700px] w-full mx-auto relative z-10">
        
        {/* CARDS GRID WITH SMOOTH SLIDE-IN FOR ALL 4 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {STATS_DATA.map((stat, index) => (
            <div key={stat.id} className="relative flex flex-col items-center w-full">
              
              {/* MAIN CARD & REFLECTION - SMOOTH LEFT SLIDE-IN */}
              <motion.div
                initial={{ opacity: 0, x: -70, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 1.0,
                  delay: index * 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8 }}
                className="w-full cursor-pointer flex flex-col items-center"
              >
                <CardNotchedFrame stat={stat} isInView={isInView} />

                {/* CLEAN FLOOR REFLECTION */}
                <div className="w-full relative mt-0.5 pointer-events-none select-none overflow-hidden h-[60px]">
                  {/* Floor seam line */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                  {/* Mirrored upside-down clone */}
                  <div className="w-full transform scale-y-[-1] origin-top opacity-20 blur-[0.8px] mirror-floor-mask">
                    <CardNotchedFrame stat={stat} isInView={isInView} isReflection={true} />
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
