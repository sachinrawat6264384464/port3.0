'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Eye, PackageCheck, Layers, Tv, ArrowRight } from 'lucide-react';

const REYUG_CATEGORIES = [
  { id: 'all', name: 'All Touchpoints' },
  { id: 'packaging', name: 'Packaging Range' },
  { id: 'channels', name: 'Outdoor & Billboards' },
  { id: 'displays', name: 'Store Banners & Media' },
];

const REYUG_ITEMS = [
  {
    id: 'item-1',
    title: 'Precious Jasmine Incense',
    category: 'packaging',
    image: '/assets/items/reyug/item_4.jpeg',
    subtitle: 'Premium Agarbatti Packaging',
  },
  {
    id: 'item-2',
    title: 'Satvik Chandan Incense',
    category: 'packaging',
    image: '/assets/items/reyug/item_5.jpeg',
    subtitle: 'Traditional Temple Fragrance',
  },
  {
    id: 'item-3',
    title: 'Golden Guggal Dhoop',
    category: 'packaging',
    subtitle: 'Organic Resin Incense Pouch',
    image: '/assets/items/reyug/item_6.jpeg',
  },
  {
    id: 'item-4',
    title: 'Hawan Samagri Box Suite',
    category: 'packaging',
    subtitle: 'Complete Ritual Samagri Box',
    image: '/assets/items/reyug/item_7.jpeg',
  },
  {
    id: 'item-5',
    title: 'Dhoop Sticks Glass Jar',
    category: 'packaging',
    subtitle: 'Solar Grace Specialty Pack',
    image: '/assets/items/reyug/item_8.jpeg',
  },
  {
    id: 'item-6',
    title: 'Reyug Retail Store Stand',
    category: 'displays',
    subtitle: 'Point of Sale Retail Branding',
    image: '/assets/items/reyug/item_10.jpeg',
  },
  {
    id: 'item-7',
    title: 'Reyug Highway Billboard',
    category: 'channels',
    subtitle: 'High Visibility Roadside Campaign',
    image: '/assets/items/reyug/item_7.jpeg',
  },
  {
    id: 'item-8',
    title: 'Reyug Full Product Lineup',
    category: 'all',
    subtitle: 'Complete SKU Range',
    image: '/assets/projects/reyug_lineup.png',
  },
];

export const ReyugCaseStudy: React.FC = () => {
  const [activeCat, setActiveCat] = useState('all');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredItems = activeCat === 'all'
    ? REYUG_ITEMS
    : REYUG_ITEMS.filter((item) => item.category === activeCat);

  return (
    <section className="py-28 px-6 sm:px-10 lg:px-16 bg-[#09090c] border-t border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Orange Flare */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff5528]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-16 relative z-10">
        
        {/* Section Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5528]/10 border border-[#ff5528]/30 text-[#ff5528] text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED 360° BRAND CASE STUDY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-sans">
              REYUG <span className="text-[#ff5528]">Incense & Pooja Range</span>
            </h2>
            <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed">
              Full-circle thinking, Brand impact everywhere. Single individual touchpoints designed for maximum market recall and retail presence.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5528]" />
                <span>15+ SKU Range Packaged</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5528]" />
                <span>360° Omnichannel Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5528]" />
                <span>Nationwide Retail Placement</span>
              </div>
            </div>
          </div>

          <Link
            href="/projects/reyug-brand-impact"
            className="px-8 py-4 rounded-full bg-[#ff5528] text-black hover:bg-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#ff5528]/20 flex items-center gap-3 shrink-0 self-start lg:self-end group"
          >
            <span>Explore Dedicated Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3">
          {REYUG_CATEGORIES.map((cat) => {
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ff5528] text-black font-black shadow-lg shadow-[#ff5528]/25'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Item Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                  onClick={() => setSelectedImg(item.image)}
                  className="group cursor-pointer rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-[#ff5528]/50 p-5 space-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff5528]/10 relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Image Container */}
                    <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden bg-black/70 border border-white/10 group-hover:border-white/20 transition-colors">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-700 p-3"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-[#ff5528] text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#ff5528]/30">
                          <Eye className="w-4 h-4" />
                          <span>Inspect Item</span>
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-white uppercase group-hover:text-[#ff5528] transition-colors font-sans">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase">
                    <span>TOUCHPOINT // 0{idx + 1}</span>
                    <span className="text-[#ff5528]">INSPECT →</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Image Preview Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
        >
          <div className="relative w-full max-w-4xl h-[80vh] rounded-3xl bg-[#0e0e11] border border-[#ff5528]/40 p-6 flex items-center justify-center shadow-2xl">
            <Image
              src={selectedImg}
              alt="Reyug Individual Product Inspection"
              fill
              className="object-contain p-6"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 px-5 py-2.5 rounded-full bg-[#ff5528] text-black font-extrabold text-xs uppercase tracking-wider"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
