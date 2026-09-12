'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Sparkles, Check, Copy, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { CONTACTS } from '@/data/content';

const FOOTPRINT_REGIONS = [
  { region: 'Madhya Pradesh', hub: 'Indore / Bhopal Hub', count: '180+ Projects' },
  { region: 'Maharashtra', hub: 'Mumbai / Pune Reach', count: '90+ Campaigns' },
  { region: 'Gujarat', hub: 'Ahmedabad / Surat FMCG', count: '75+ Packaging' },
  { region: 'Delhi NCR', hub: 'Corporate & B2B Decks', count: '60+ Identity Suites' },
  { region: 'Rajasthan', hub: 'Resorts & Hospitality', count: '45+ Luxury Brands' },
  { region: 'Pan-India', hub: 'Retail Distribution', count: '500+ Touchpoints' },
];

export const TrustedFootprints: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

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

        {/* Executive Direct Leadership Contact Cards (Tailwind CSS Replacement) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-zinc-950 via-[#09090d] to-black border border-orange-500/40 shadow-2xl space-y-8 relative overflow-hidden group"
        >
          {/* Top Accent Glowing Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />

          {/* Title Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider font-heading">
                  DIRECT LEADERSHIP CONTACTS
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  Connect Directly With Founders for Strategic Brand Direction
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono">
              <Award className="w-4 h-4 text-orange-400" />
              <span>THE OUTLINE EXECUTIVE BOARD</span>
            </div>
          </div>

          {/* 2 Founder Executive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONTACTS.map((person, idx) => {
              const initials = person.name
                .split(' ')
                .map((n) => n[0])
                .join('');

              return (
                <motion.div
                  key={person.email}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-white/15 hover:border-orange-500/60 transition-all duration-300 space-y-6 flex flex-col justify-between shadow-xl group/card relative overflow-hidden"
                >
                  <div className="space-y-5">
                    {/* Header Monogram & Name */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-950/60 border border-orange-500/40 flex items-center justify-center text-orange-400 font-mono font-black text-xl shadow-md group-hover/card:scale-105 group-hover/card:border-orange-500 transition-all">
                        {initials}
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover/card:text-orange-400 transition-colors">
                          {person.name}
                        </h4>
                        <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">
                          {person.title}
                        </span>
                      </div>
                    </div>

                    {/* Email & Phone Actions */}
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      {/* Email Row */}
                      <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-orange-500/40 transition-colors">
                        <a
                          href={`mailto:${person.email}`}
                          className="flex items-center gap-3 text-xs sm:text-sm font-mono text-zinc-200 hover:text-orange-400 transition-colors truncate"
                        >
                          <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                          <span className="font-bold truncate">{person.email}</span>
                        </a>
                        <button
                          onClick={() => handleCopy(person.email)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-orange-500/20 text-zinc-400 hover:text-orange-400 transition-colors shrink-0"
                          title="Copy Email"
                        >
                          {copiedEmail === person.email ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* Phone Row */}
                      <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-orange-500/40 transition-colors">
                        <a
                          href={`tel:${person.phoneRaw}`}
                          className="flex items-center gap-3 text-xs sm:text-sm font-mono text-zinc-200 hover:text-orange-400 transition-colors"
                        >
                          <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                          <span className="font-bold">Call : +91 {person.phone}</span>
                        </a>
                        <a
                          href={`tel:${person.phoneRaw}`}
                          className="p-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white transition-colors shrink-0"
                          title="Call Now"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
