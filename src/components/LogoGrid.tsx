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
    <section id="logos" className="py-28 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[800px] h-[500px] bg-white/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest shadow-md">
              <span>VISUAL ARCHITECTURE &amp; MARKS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-sans">
              LOGO <span className="font-editorial italic font-normal text-zinc-400 lowercase">design &amp; identity</span>
            </h2>
          </div>
          <p className="text-zinc-300 font-light max-w-lg text-base sm:text-lg italic border-l-2 border-white/20 pl-4 py-1">
            &ldquo;Logos that Speak Silently yet Powerfully for your Business Growth&rdquo;
          </p>
        </div>

        {/* Featured Hospitality Logo Banner: The Raas Valley Resort */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-transparent border-0 hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border-0 text-zinc-300 text-xs font-mono uppercase">
                <Award className="w-3.5 h-3.5 text-white" />
                <span>FEATURED HOSPITALITY BRAND MARK</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
                THE RAAS VALLEY RESORT
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Architectural Identity &amp; Environmental Facade Signage crafted for an eco-luxury resort destination.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border-0 text-xs font-mono text-zinc-300">
                  Architectural Signage
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border-0 text-xs font-mono text-zinc-300">
                  Resort Emblem Suite
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border-0 text-xs font-mono text-zinc-300">
                  Guest Wayfinding
                </span>
              </div>
            </div>

            {/* Right Emblem Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950 border-0 shadow-2xl flex flex-col items-center justify-center text-center space-y-4 w-full max-w-sm transition-all duration-500">
                <div className="w-24 h-24 rounded-full bg-white/10 border-0 flex items-center justify-center text-white font-mono font-black text-3xl shadow-xl">
                  RV
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-white uppercase tracking-wider font-sans">
                    THE RAAS VALLEY
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                    LUXURY RESORT &amp; SPA
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
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <Link
                href={`/logos/${logo.id}`}
                className="group p-8 rounded-3xl bg-transparent border-0 hover:bg-white/[0.02] transition-all duration-500 flex flex-col justify-between space-y-6 h-full block relative overflow-hidden"
              >
                {/* Top Emblem Box */}
                <div className="relative w-full h-40 rounded-2xl bg-zinc-950 border-0 flex items-center justify-center p-6 shadow-xl transition-all">
                  {/* Vector Monogram Emblem Badge */}
                  <div className="w-20 h-20 rounded-2xl bg-white/10 border-0 flex items-center justify-center text-white font-mono font-black text-2xl group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-md">
                    {logo.symbolText}
                  </div>

                  <span className="absolute top-3 right-3 text-[10px] font-mono text-zinc-300 px-2.5 py-0.5 rounded-full bg-white/10 border-0">
                    {logo.tag}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-zinc-200 transition-colors font-sans">
                      {logo.name}
                    </h4>
                    <ShieldCheck className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    {logo.category} — {logo.subtitle}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {logo.description}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    <span>VIEW BRAND SPECIFICATIONS</span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
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
