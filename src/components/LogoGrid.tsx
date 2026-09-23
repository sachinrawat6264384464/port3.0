'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award, Layers } from 'lucide-react';

interface LogoDisplayItem {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  symbolText: string;
  accentColor: string;
  tag: string;
}

const FEATURED_LOGOS: LogoDisplayItem[] = [
  {
    id: 'saveria',
    name: 'Saveria',
    category: 'The Hub of Interiors',
    subtitle: 'Luxury Space Architecture',
    description: 'Bespoke identity for interior architecture and high-end residential spaces.',
    symbolText: 'S',
    accentColor: '#f97316',
    tag: 'INTERIOR ARCHITECTURE',
  },
  {
    id: 'trinaas',
    name: 'Trinaas',
    category: 'Brand Identity',
    subtitle: 'Corporate Monogram Suite',
    description: 'Sophisticated geometric monogram and visual identity guidelines.',
    symbolText: 'T',
    accentColor: '#fb923c',
    tag: 'CORPORATE BRANDING',
  },
  {
    id: 'ariddha',
    name: 'Ariddha',
    category: 'Fibre Center',
    subtitle: 'Textile & Industrial Mark',
    description: 'Industrial brand mark engineered for textile & fibre manufacturing.',
    symbolText: 'A',
    accentColor: '#ea580c',
    tag: 'INDUSTRIAL FIBRE',
  },
  {
    id: 'royal-park',
    name: 'Royal Park',
    category: 'Hospitality & Greens',
    subtitle: 'Luxury Event Destination',
    description: 'Regal emblem design for premier wedding parks and event destinations.',
    symbolText: 'RP',
    accentColor: '#f97316',
    tag: 'LUXURY HOSPITALITY',
  },
  {
    id: 'valencia-greens',
    name: 'Valencia Greens',
    category: 'Real Estate & Living',
    subtitle: 'Township & Infrastructure',
    description: 'Architectural brand mark for gated residential townships.',
    symbolText: 'VG',
    accentColor: '#fb923c',
    tag: 'REAL ESTATE TOWNSHIP',
  },
  {
    id: 'anvith',
    name: 'Anvith',
    category: 'Luxury Branding',
    subtitle: 'Bespoke Lifestyle Mark',
    description: 'High-end minimalist emblem for premium lifestyle products.',
    symbolText: 'AN',
    accentColor: '#f97316',
    tag: 'LIFESTYLE & FASHION',
  },
  {
    id: 'pronocis',
    name: 'Pronocis',
    category: 'Corporate Identity',
    subtitle: 'Tech & B2B Solutions',
    description: 'Clean corporate tech mark designed for global B2B operations.',
    symbolText: 'P',
    accentColor: '#ea580c',
    tag: 'CORPORATE TECH',
  },
  {
    id: 'marketing-express',
    name: 'Marketing Express',
    category: 'Media & Marketing',
    subtitle: 'Dynamic Speed Mark',
    description: 'High-impact kinetic emblem engineered for media agency presence.',
    symbolText: 'ME',
    accentColor: '#f97316',
    tag: 'MEDIA & ADVERTISING',
  },
  {
    id: 'ava',
    name: 'AVA',
    category: 'Boutiquified Fashion',
    subtitle: 'High-Fashion Typography',
    description: 'Bespoke fashion typography & brand mark for luxury couture.',
    symbolText: 'AVA',
    accentColor: '#fb923c',
    tag: 'COUTURE & BOUTIQUE',
  },
];

export const LogoGrid: React.FC = () => {
  return (
    <section id="logos" className="py-28 px-6 sm:px-10 lg:px-16 bg-[#030305] border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[800px] h-[500px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-widest shadow-md">
              <span>VISUAL ARCHITECTURE & MARKS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-heading">
              LOGO <span className="text-orange-500 italic">DESIGN & IDENTITY</span>
            </h2>
          </div>
          <p className="text-zinc-300 font-light max-w-lg text-base sm:text-lg italic border-l-2 border-orange-500 pl-4 py-1">
            &ldquo;Logos that Speak Silently yet Powerfully for your Business Growth&rdquo;
          </p>
        </div>

        {/* Featured Hospitality Logo Banner: The Raas Valley Resort */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-zinc-950 via-[#0a0a0e] to-black border border-orange-500/40 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>FEATURED HOSPITALITY BRAND MARK</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-heading">
                THE RAAS VALLEY RESORT
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Architectural Identity & Environmental Facade Signage crafted for an eco-luxury resort destination.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                  Architectural Signage
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                  Resort Emblem Suite
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                  Guest Wayfinding
                </span>
              </div>
            </div>

            {/* Right Emblem Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="p-8 sm:p-10 rounded-2xl bg-black border border-orange-500/30 shadow-2xl flex flex-col items-center justify-center text-center space-y-4 w-full max-w-sm group-hover:border-orange-500 transition-all duration-500">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-950/80 border border-orange-500/50 flex items-center justify-center text-orange-400 font-mono font-black text-3xl shadow-[0_0_30px_rgba(255,87,34,0.3)]">
                  RV
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-white uppercase tracking-wider">
                    THE RAAS VALLEY
                  </h4>
                  <span className="text-[11px] font-mono text-orange-400 uppercase tracking-widest">
                    LUXURY RESORT & SPA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 9 Vector Brand Marks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_LOGOS.map((logo, idx) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link
                href={`/logos/${logo.id}`}
                className="group p-8 rounded-3xl bg-gradient-to-br from-zinc-950 via-[#09090d] to-black border border-white/10 hover:border-orange-500/60 transition-all duration-500 flex flex-col justify-between space-y-6 shadow-2xl hover:shadow-[0_20px_40px_rgba(255,87,34,0.2)] h-full block relative overflow-hidden"
              >
                {/* Glowing Top Ribbon */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500 transition-all duration-500" />

                {/* Top Emblem Box */}
                <div className="relative w-full h-40 rounded-2xl bg-black border border-white/10 group-hover:border-orange-500/30 flex items-center justify-center p-6 shadow-inner group-hover:shadow-[0_0_25px_rgba(255,87,34,0.15)] transition-all">
                  {/* Vector Monogram Emblem Badge */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/15 via-zinc-900 to-black border border-orange-500/40 flex items-center justify-center text-orange-400 font-mono font-black text-2xl group-hover:scale-110 group-hover:border-orange-500 group-hover:bg-orange-500/20 transition-all duration-500 shadow-md">
                    {logo.symbolText}
                  </div>

                  <span className="absolute top-3 right-3 text-[10px] font-mono text-orange-400 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                    {logo.tag}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-orange-400 transition-colors font-heading">
                      {logo.name}
                    </h4>
                    <ShieldCheck className="w-4 h-4 text-orange-500/40 group-hover:text-orange-500 transition-colors" />
                  </div>

                  <p className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">
                    {logo.category} — {logo.subtitle}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {logo.description}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    <span>VIEW BRAND SPECIFICATIONS</span>
                    <ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
