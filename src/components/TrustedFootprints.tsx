'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const FOOTPRINT_REGIONS = [
  { region: 'Madhya Pradesh', hub: 'Indore / Bhopal Hub', count: '180+ Projects' },
  { region: 'Maharashtra', hub: 'Mumbai / Pune Reach', count: '90+ Campaigns' },
  { region: 'Gujarat', hub: 'Ahmedabad / Surat FMCG', count: '75+ Packaging' },
  { region: 'Delhi NCR', hub: 'Corporate & B2B Decks', count: '60+ Identity Suites' },
  { region: 'Rajasthan', hub: 'Resorts & Hospitality', count: '45+ Luxury Brands' },
  { region: 'Pan-India', hub: 'Retail Distribution', count: '500+ Touchpoints' },
];

interface TrustedFootprintsProps {
  theme?: 'dark' | 'light';
}

export const TrustedFootprints: React.FC<TrustedFootprintsProps> = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <section className={`py-24 px-6 sm:px-10 lg:px-16 border-t relative overflow-hidden transition-colors ${
      isLight ? 'bg-blueprint-grid text-zinc-900 border-[#00755e]/15' : 'bg-[#0e0e11] text-white border-white/10'
    }`}>
      {/* Background Ambient Glowing Lights */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full blur-[180px] pointer-events-none ${
        isLight ? 'bg-[#00755e]/10' : 'bg-white/5'
      }`} />

      <div className="max-w-[1700px] w-full mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest shadow-md ${
            isLight ? 'bg-[#00755e]/10 border border-[#00755e]/30 text-[#00755e]' : 'bg-white/5 border border-white/10 text-zinc-300'
          }`}>
            <span>NATIONAL BRAND FOOTPRINT</span>
          </div>
          <h2 className={`text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-sans ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            TRUSTED <span className={isLight ? 'font-editorial italic text-[#00755e]' : 'font-editorial italic font-normal text-zinc-400 lowercase'}>footprints</span>
          </h2>
          <p className={`text-sm sm:text-base font-normal leading-relaxed ${
            isLight ? 'text-zinc-700' : 'text-zinc-300'
          }`}>
            Partnered with leading enterprises, growth brands, regional icons, and visionaries across India.
          </p>
        </div>

        {/* Regional Reach Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {FOOTPRINT_REGIONS.map((item, idx) => (
            <motion.div
              key={item.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-5 rounded-2xl border transition-all duration-300 space-y-2 group shadow-md ${
                isLight 
                  ? 'bg-white border-[#00755e]/20 hover:border-[#00755e]'
                  : 'bg-zinc-950/80 border-white/10 hover:border-white/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <MapPin className={`w-4 h-4 ${isLight ? 'text-[#00755e]' : 'text-zinc-400'}`} />
                <span className={`text-[10px] font-mono font-bold ${isLight ? 'text-[#00755e]' : 'text-zinc-400'}`}>
                  {item.count}
                </span>
              </div>
              <h3 className={`text-sm font-bold uppercase transition-colors ${
                isLight ? 'text-zinc-900 group-hover:text-[#00755e]' : 'text-white group-hover:text-zinc-300'
              }`}>
                {item.region}
              </h3>
              <p className={`text-[11px] font-mono truncate ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>{item.hub}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
