'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Eye, PackageCheck, Layers, Tv } from 'lucide-react';

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
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#09090b] border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED 360° BRAND CASE STUDY</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight"
            >
              REYUG <span className="text-orange-500 italic">Incense & Pooja Range</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-2xl text-zinc-300 font-light max-w-3xl"
            >
              Full-circle thinking, Brand impact everywhere. Single individual touchpoints designed for maximum market recall.
            </motion.p>
          </div>

          <Link
            href="/projects/reyug-brand-impact"
            className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-orange-600/30 flex items-center gap-2 shrink-0 self-start lg:self-end"
          >
            <span>View Dedicated Case Study Page →</span>
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-4">
          {REYUG_CATEGORIES.map((cat) => {
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Individual Item Cards Grid with Alternate Left/Right Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: isEven ? -60 : 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: (idx % 4) * 0.1 }}
                  onClick={() => setSelectedImg(item.image)}
                  className="group cursor-pointer rounded-3xl bg-zinc-950 border border-white/10 hover:border-orange-500/50 p-5 space-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-950/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500 transition-all duration-500" />

                  {/* Individual Image Display */}
                  <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden bg-black border border-white/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-108 transition-transform duration-700 p-2"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-orange-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Item</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    <h3 className="text-lg font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-orange-400 font-mono">
                      {item.subtitle}
                    </p>
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
          <div className="relative w-full max-w-4xl h-[80vh] rounded-3xl bg-zinc-950 border border-orange-500/40 p-6 flex items-center justify-center">
            <Image
              src={selectedImg}
              alt="Reyug Individual Product Inspection"
              fill
              className="object-contain p-4"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 px-4 py-2 rounded-full bg-orange-600 text-white font-bold text-xs uppercase"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
