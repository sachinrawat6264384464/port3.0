'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

const FOOTPRINT_REGIONS = [
  { region: 'Madhya Pradesh', hub: 'Indore / Bhopal Hub', count: '180+ Projects' },
  { region: 'Maharashtra', hub: 'Mumbai / Pune Reach', count: '90+ Campaigns' },
  { region: 'Gujarat', hub: 'Ahmedabad / Surat FMCG', count: '75+ Packaging' },
  { region: 'Delhi NCR', hub: 'Corporate & B2B Decks', count: '60+ Identity Suites' },
  { region: 'Rajasthan', hub: 'Resorts & Hospitality', count: '45+ Luxury Brands' },
  { region: 'Pan-India', hub: 'Retail Distribution', count: '500+ Touchpoints' },
];

export const TrustedFootprints: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#040406] border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glowing Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NATIONAL BRAND FOOTPRINT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-heading">
            TRUSTED <span className="text-orange-500 italic">FOOTPRINTS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
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
              className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-orange-500/50 transition-all duration-300 space-y-2 group shadow-lg"
            >
              <div className="flex items-center justify-between">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-[10px] font-mono text-orange-400 font-bold">
                  {item.count}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
                {item.region}
              </h3>
              <p className="text-[11px] font-mono text-zinc-500 truncate">{item.hub}</p>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
};
