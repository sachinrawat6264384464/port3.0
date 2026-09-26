'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ArrowLeft, ArrowRight, Building2, Award, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  company: string;
  industry: string;
  quote: string;
  keyMetric: string;
  metricLabel: string;
  highlights: string[];
  statusLabel: string;
  milestones: { label: string; tag: string }[];
}

const SUCCESS_STORIES: Testimonial[] = [
  {
    id: 'ameerji',
    clientName: 'Ameerji Leadership Team',
    designation: 'Managing Directors',
    company: 'AMEERJI GROUP',
    industry: 'Real Estate & Infrastructure',
    quote: 'The Outline completely reimagined our identity for flagship township launches. Their ability to fuse high-concept spatial branding with highway billboard impact led to record pre-launch bookings.',
    keyMetric: '300%+',
    metricLabel: 'Pre-Launch Inquiries Growth',
    highlights: ['Bespoke Highway Billboard Campaign', '3D Site Signage Systems', 'Luxury Sales Kit Architecture'],
    statusLabel: 'FLAGSHIP CASE',
    milestones: [
      { label: 'Bespoke Highway Billboard Campaign', tag: 'Phase 1' },
      { label: '3D Site Signage Systems Architecture', tag: 'Phase 2' },
      { label: 'Luxury Sales Kit & Spatial Identity', tag: 'Phase 3' },
    ],
  },
  {
    id: 'reyug',
    clientName: 'Reyug Management',
    designation: 'Brand & Marketing Directors',
    company: 'REYUG INCENSE',
    industry: 'FMCG & Premium Wellness',
    quote: 'From metallic foil packaging design to national retailer POS displays, The Outline gave Reyug a distinct shelf presence that outshone traditional incense brands across Pan-India retail counters.',
    keyMetric: '4.8x',
    metricLabel: 'Retail Velocity Growth',
    highlights: ['Custom Fragrance Box Design', 'Foil & Embossed Packaging', 'Pan-India Distribution Deck'],
    statusLabel: 'NATIONAL SCALE',
    milestones: [
      { label: 'Custom Metallic Foil Box Design', tag: 'Q1 Launch' },
      { label: 'Pan-India Retailer POS Counter Displays', tag: 'Q2 Scale' },
      { label: 'Embossed Consumer Packaging Suite', tag: 'Complete' },
    ],
  },
  {
    id: 'malpani',
    clientName: 'Malpani Corporate Board',
    designation: 'Executive Committee',
    company: 'MALPANI GROUP',
    industry: 'Industrial & Real Estate',
    quote: 'Working with Ravin and Lakshita has been transformative. Their strategic clarity ensured that our multi-sector industrial presence was communicated with sophistication and unmatched precision.',
    keyMetric: '40+',
    metricLabel: 'Industrial Sites Standardized',
    highlights: ['Corporate Architecture Guidelines', 'B2B Investor Pitch Decks', 'Architectural Site Branding'],
    statusLabel: 'ENTERPRISE',
    milestones: [
      { label: 'Corporate Architecture Guidelines Manual', tag: 'Milestone 1' },
      { label: 'B2B High-Stakes Investor Pitch Deck', tag: 'Milestone 2' },
      { label: 'Architectural Environmental Site Marks', tag: 'Milestone 3' },
    ],
  },
  {
    id: 'terex',
    clientName: 'Terex Equipment Head',
    designation: 'Global Marketing & Fleet Lead',
    company: 'TEREX EQUIPMENT',
    industry: 'Heavy Machinery & Earthmoving',
    quote: 'Engineering brands often struggle with visual elegance. The Outline proved that heavy industrial equipment marketing can look sleek, bold, and authoritative across global trade expos.',
    keyMetric: '100%',
    metricLabel: 'Brand Consistency Across Expos',
    highlights: ['Heavy Machinery Fleet Livery', 'Expo Exhibition Design', 'Product Spec Sheets'],
    statusLabel: 'GLOBAL EXPO',
    milestones: [
      { label: 'Heavy Machinery Fleet Custom Livery', tag: 'Expo 2024' },
      { label: 'Exhibition Pavilion & Spatial Design', tag: 'Global Lead' },
      { label: 'Technical Product Spec Sheets Suite', tag: 'Delivered' },
    ],
  },
  {
    id: 'lemount',
    clientName: 'Lemount Brand Team',
    designation: 'Founders & Operations',
    company: 'LEMOUNT BEVERAGES',
    industry: 'Food, Beverage & Hospitality',
    quote: 'The Outline crafted a vibrant, modern beverage identity that captured both youth energy and premium shelf appeal. The consumer response to the new label design was instant.',
    keyMetric: '2.5M+',
    metricLabel: 'Units Distributed Nationally',
    highlights: ['Custom Can & Bottle Artwork', 'POS Counter Displays', 'Digital Launch Media'],
    statusLabel: 'YOUTH POPULAR',
    milestones: [
      { label: 'Custom Matte Can & Glass Bottle Artwork', tag: 'Volume 1' },
      { label: 'In-Store POS Counter Acrylic Displays', tag: 'Volume 2' },
      { label: 'Digital Launch & Social Campaign Suite', tag: 'Volume 3' },
    ],
  },
  {
    id: 'raas-valley',
    clientName: 'Raas Valley Operations',
    designation: 'Hospitality Directors',
    company: 'RAAS VALLEY RESORT',
    industry: 'Luxury Hospitality & Resorts',
    quote: 'The luxury positioning and eco-resort storytelling designed by The Outline gave our property an organic elegance that drew high-net-worth travelers right from week one.',
    keyMetric: '92%',
    metricLabel: 'Average Seasonal Occupancy',
    highlights: ['Eco-Luxury Brand Identity', 'Guest Collateral Suite', 'Digital Experience Deck'],
    statusLabel: 'LUXURY STAY',
    milestones: [
      { label: 'Eco-Luxury Environmental Brand Identity', tag: 'Season 1' },
      { label: 'High-Net-Worth Guest Collateral Suite', tag: 'Season 2' },
      { label: 'Digital Resort Experience Deck', tag: 'Completed' },
    ],
  },
];

export const CustomerSuccessStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // Start centered on Terex (index 3)

  const current = SUCCESS_STORIES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SUCCESS_STORIES.length);
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-[#0a0705] border-t border-b border-white/10 relative overflow-hidden select-none">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#d8ab7e]/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8be90]/15 border border-[#e8be90]/40 text-[#f5d0a6] text-xs font-mono font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-[#f5d0a6]" />
            <span>(04) // CLIENT SUCCESS TIMELINE & CASE IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white uppercase tracking-wider drop-shadow-md">
            VOICES OF <span className="text-[#e8be90] italic">TRUST & GROWTH</span>
          </h2>
        </div>

        {/* 1. NOTCHED CARDS ROW (Biscuit fill + Crisp White border + Pure White text) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-[1600px] mx-auto">
          {SUCCESS_STORIES.map((story, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={story.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative cursor-pointer transition-all duration-300 p-4 sm:p-5 rounded-xl border flex flex-col justify-between text-center min-h-[140px] sm:min-h-[160px] ${
                  isActive
                    ? 'bg-gradient-to-b from-[#3a281b] via-[#2a1c12] to-[#1c120b] border-2 border-white scale-[1.03] z-20 shadow-xl shadow-white/10'
                    : 'bg-[#18110b]/90 border border-white/80 hover:border-white hover:bg-[#22170f] opacity-95 hover:opacity-100 shadow-sm'
                }`}
              >
                {/* Notched Bottom Arrow Tip (Active only) */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#1c120b] border-r border-b border-white z-10" />
                )}

                <div className="space-y-1">
                  <div className="text-base sm:text-xl font-serif font-black tracking-wider text-white">
                    {story.keyMetric}
                  </div>

                  <h3 className="text-xs sm:text-sm font-sans font-extrabold uppercase tracking-wider text-white truncate">
                    {story.company}
                  </h3>
                </div>

                <div className="pt-2 border-t border-white/20 text-[10px] font-mono text-zinc-300 truncate uppercase">
                  {story.industry.split('&')[0]}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. EXPANDED DETAIL CONTAINER BOX (Biscuit background + Crisp White border) */}
        <div className="max-w-[1600px] mx-auto bg-[#130d08] border-2 border-white rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          
          {/* Top Title Header Tag */}
          <div className="text-center font-serif text-white text-lg sm:text-2xl font-bold uppercase tracking-widest border-b border-white/30 pb-4 mb-8">
            {current.company} — <span className="text-[#f5d0a6] font-normal italic">{current.industry}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* LEFT SIDE: Quote & Metric Box */}
              <div className="lg:col-span-7 space-y-6">
                <Quote className="w-10 h-10 text-[#f5d0a6]/80" />

                <p className="text-lg sm:text-2xl font-normal text-white leading-relaxed font-sans italic tracking-wide">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <div className="pt-6 border-t border-white/30 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-serif">
                      {current.clientName}
                    </h4>
                    <p className="text-xs font-mono text-[#f5d0a6]">
                      {current.designation}
                    </p>
                  </div>

                  {/* Rating & Metric Badge */}
                  <div className="flex items-center gap-4 bg-[#23170e] border border-white px-5 py-3 rounded-xl shadow-sm">
                    <div className="flex items-center gap-1 text-[#f5d0a6]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#f5d0a6]" />
                      ))}
                    </div>
                    <div className="h-6 w-[1px] bg-white/30" />
                    <div>
                      <div className="text-lg font-mono font-black text-white">{current.keyMetric}</div>
                      <div className="text-[9px] font-mono text-[#f5d0a6] uppercase font-bold">{current.metricLabel}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Milestones Table List */}
              <div className="lg:col-span-5 bg-[#1c130d] border-2 border-white rounded-xl p-5 sm:p-6 space-y-4 shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-white/30">
                  <div className="flex items-center gap-2 text-xs font-mono text-white uppercase font-bold tracking-wider">
                    <Award className="w-4 h-4 text-[#f5d0a6]" />
                    <span>KEY DELIVERABLES & MILESTONES</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#f5d0a6] font-bold uppercase">STATUS</span>
                </div>

                <div className="space-y-3">
                  {current.milestones.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-[#0e0906] border border-white/40 hover:border-white transition-all text-xs font-mono"
                    >
                      <div className="flex items-center gap-2.5 text-white">
                        <CheckCircle2 className="w-4 h-4 text-[#f5d0a6] shrink-0" />
                        <span className="font-sans font-semibold text-white">{m.label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#f5d0a6] font-bold px-2 py-0.5 rounded bg-[#f5d0a6]/15 border border-white/40 shrink-0 ml-2">
                        {m.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Bottom Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-white/30 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">
              STEP {currentIndex + 1} OF {SUCCESS_STORIES.length}
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-[#23170e] border border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
                aria-label="Previous Story"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#23170e] border border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
                aria-label="Next Story"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

