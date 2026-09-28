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
    <span className="font-sans text-4xl sm:text-5xl font-black text-white tracking-tight">
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
  const labelWords = stat.label.split(' ');
  const mainLabel = labelWords.slice(0, -1).join(' ');
  const accentWord = labelWords[labelWords.length - 1];

  return (
    <div className="relative w-full h-[300px] p-8 flex flex-col items-center justify-center text-center group">
      {/* SVG Notched Corner Border Frame with Refined Dark Studio Interior */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        preserveAspectRatio="none"
        viewBox="0 0 300 380"
      >
        <path
          d="M 18,2 L 282,2 A 16 16 0 0 0 298,18 L 298,362 A 16 16 0 0 0 282,378 L 18,378 A 16 16 0 0 0 2,362 L 2,18 A 16 16 0 0 0 18,2 Z"
          fill="#141418"
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth="1.2"
          strokeOpacity={isReflection ? "0.15" : "0.9"}
          className="group-hover:stroke-white/70 group-hover:stroke-[1.6] transition-all duration-300"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-4 px-2 space-y-4">
        {/* Top Centered Icon */}
        <div className="text-white group-hover:scale-110 transition-all duration-300">
          <IconComponent className="w-10 h-10 stroke-[1.5]" />
        </div>

        {/* Title & Counter Only (No Paragraph Description) */}
        <div className="space-y-2 px-2 text-center">
          <div>
            <CounterNumber
              target={stat.targetNumber}
              suffix={stat.suffix}
              parentInView={isInView}
            />
          </div>

          <h3 className="text-sm sm:text-base font-sans font-black uppercase tracking-wider text-white leading-tight">
            {mainLabel}{' '}
            <span className="font-editorial italic font-normal text-zinc-400 lowercase">{accentWord}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export const StatsMetricsCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section className="pt-8 sm:pt-10 pb-12 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] border-y border-white/10 relative overflow-hidden">
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
