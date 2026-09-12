'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ArrowLeft, ArrowRight, Building2, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  company: string;
  industry: string;
  avatar: string;
  logo: string;
  quote: string;
  keyMetric: string;
  metricLabel: string;
  highlights: string[];
}

const SUCCESS_STORIES: Testimonial[] = [
  {
    id: 'ameerji',
    clientName: 'Ameerji Leadership Team',
    designation: 'Managing Directors',
    company: 'Ameerji Group',
    industry: 'Real Estate & Urban Infrastructure',
    avatar: '/assets/logos/ameerji.png',
    logo: '/assets/logos/ameerji.png',
    quote: 'The Outline completely reimagined our identity for flagship township launches. Their ability to fuse high-concept spatial branding with highway billboard impact led to record pre-launch bookings.',
    keyMetric: '300%+',
    metricLabel: 'Increase in Pre-Launch Inquiries',
    highlights: ['Bespoke Highway Billboard Campaign', '3D Site Signage Systems', 'Luxury Sales Kit Architecture'],
  },
  {
    id: 'reyug',
    clientName: 'Reyug Management',
    designation: 'Brand & Marketing Directors',
    company: 'Reyug Agarbatti & Incense',
    industry: 'FMCG & Premium Wellness',
    avatar: '/assets/logos/reyug.png',
    logo: '/assets/logos/reyug.png',
    quote: 'From metallic foil packaging design to national retailer POS displays, The Outline gave Reyug a distinct shelf presence that outshone traditional incense brands across Pan-India retail counters.',
    keyMetric: '4.8x',
    metricLabel: 'Retail Counter Velocity Growth',
    highlights: ['Custom Fragrance Box Design', 'Foil & Embossed Packaging', 'Pan-India Distribution Deck'],
  },
  {
    id: 'malpani',
    clientName: 'Malpani Corporate Board',
    designation: 'Executive Committee',
    company: 'Malpani Group',
    industry: 'Industrial & Commercial Real Estate',
    avatar: '/assets/logos/malpani.png',
    logo: '/assets/logos/malpani.png',
    quote: 'Working with Ravin and Lakshita has been transformative. Their strategic clarity ensured that our multi-sector industrial presence was communicated with sophistication and unmatched precision.',
    keyMetric: '40+',
    metricLabel: 'Industrial Sites Standardized',
    highlights: ['Corporate Architecture Guidelines', 'B2B Investor Pitch Decks', 'Architectural Site Branding'],
  },
  {
    id: 'terex',
    clientName: 'Terex Equipment Head',
    designation: 'Global Marketing & Fleet Lead',
    company: 'Terex Equipment',
    industry: 'Heavy Machinery & Earthmoving',
    avatar: '/assets/logos/terex.png',
    logo: '/assets/logos/terex.png',
    quote: 'Engineering brands often struggle with visual elegance. The Outline proved that heavy industrial equipment marketing can look sleek, bold, and authoritative across global trade expos.',
    keyMetric: '100%',
    metricLabel: 'Brand Consistency Across Expos',
    highlights: ['Heavy Machinery Fleet Livery', 'Expo Exhibition Design', 'Product Spec Sheets'],
  },
  {
    id: 'lemount',
    clientName: 'Lemount Brand Team',
    designation: 'Founders & Operations',
    company: 'Lemount Beverages',
    industry: 'Food, Beverage & Hospitality',
    avatar: '/assets/logos/lemount.png',
    logo: '/assets/logos/lemount.png',
    quote: 'The Outline crafted a vibrant, modern beverage identity that captured both youth energy and premium shelf appeal. The consumer response to the new label design was instant.',
    keyMetric: '2.5M+',
    metricLabel: 'Units Distributed Nationally',
    highlights: ['Custom Can & Bottle Artwork', 'POS Counter Displays', 'Digital Launch Media'],
  },
  {
    id: 'raas-valley',
    clientName: 'Raas Valley Operations',
    designation: 'Hospitality Directors',
    company: 'The Raas Valley Resort',
    industry: 'Luxury Hospitality & Resorts',
    avatar: '/assets/logos/raas.png',
    logo: '/assets/logos/raas.png',
    quote: 'The luxury positioning and eco-resort storytelling designed by The Outline gave our property an organic elegance that drew high-net-worth travelers right from week one.',
    keyMetric: '92%',
    metricLabel: 'Average Seasonal Occupancy',
    highlights: ['Eco-Luxury Brand Identity', 'Guest Collateral Suite', 'Digital Experience Deck'],
  },
];

export const CustomerSuccessStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % SUCCESS_STORIES.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length);
  };

  const current = SUCCESS_STORIES[currentIndex];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#030305] border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                CUSTOMER SUCCESS STORIES // REAL IMPACT
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-heading">
              VOICES OF <span className="text-orange-500">TRUST & GROWTH</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Discover how strategic design and brand architecture delivered tangible market leadership for leading enterprises across India.
          </p>
        </div>

        {/* Featured Testimonial Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Card (Left 8 Cols) */}
          <div className="lg:col-span-8 bg-zinc-950/90 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-2xl group hover:border-orange-500/40 transition-all duration-500">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-transparent" />

            <div className="space-y-8 relative z-10">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Building2 className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-mono text-zinc-300 font-bold uppercase tracking-wider">
                    {current.company}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs text-orange-400 font-mono">
                    {current.industry}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                  ))}
                  <span className="text-[11px] font-mono font-bold text-white ml-1.5">5.0</span>
                </div>
              </div>

              {/* Dynamic Animated Quote Block */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <Quote className="w-12 h-12 text-orange-500/30" />
                  <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-zinc-100 leading-relaxed font-sans italic">
                    "{current.quote}"
                  </p>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                        {current.clientName}
                      </h4>
                      <p className="text-xs font-mono text-orange-400">
                        {current.designation} — {current.company}
                      </p>
                    </div>

                    {/* Metric Highlight Badge */}
                    <div className="bg-orange-950/40 border border-orange-500/30 px-5 py-3 rounded-2xl">
                      <div className="text-2xl font-mono font-black text-orange-400">
                        {current.keyMetric}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                        {current.metricLabel}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {SUCCESS_STORIES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-zinc-800 hover:bg-zinc-600'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-orange-500 text-white hover:text-orange-400 transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-orange-500 text-white hover:text-orange-400 transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Highlights & Quick Select List (Right 4 Cols) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            {/* Deliverables Delivered */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-orange-400" />
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                  DELIVERED IMPACT HIGHLIGHTS
                </h3>
              </div>
              
              <ul className="space-y-3">
                {current.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-zinc-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Client Selection Cards */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest px-1">
                ALL SUCCESSFUL COLLABORATIONS
              </span>
              <div className="grid grid-cols-2 gap-3">
                {SUCCESS_STORIES.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 ${
                      idx === currentIndex
                        ? 'bg-orange-500/10 border-orange-500/50 text-white'
                        : 'bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold truncate">{item.company}</div>
                    <div className="text-[10px] font-mono text-orange-400 truncate mt-0.5">
                      {item.keyMetric} Impact
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
