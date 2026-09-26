'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Hotel, Home, Factory, Newspaper, Flame, Landmark, Shirt, Leaf, ArrowRight, Layers, Shuffle } from 'lucide-react';

interface IndustryItem {
  id: string;
  category: 'all' | 'fmcg' | 'realestate' | 'corporate';
  categoryLabel: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  clientHighlight: string;
  deliverables: string[];
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: 'retail-fmcg',
    category: 'fmcg',
    categoryLabel: 'FMCG & RETAIL',
    name: 'Retail & FMCG',
    description: 'Product pouches, snack packaging, and in-store point of sale displays.',
    icon: <ShoppingBag className="w-6 h-6 text-[#f5d0a6]" />,
    clientHighlight: 'LUWWA Energy Bar & Savera',
    deliverables: ['Custom Stand-up Pouches', 'Point of Sale Retail Units', 'Brand Box Architecture'],
  },
  {
    id: 'hospitality',
    category: 'realestate',
    categoryLabel: 'SPATIAL & RESORTS',
    name: 'Hospitality & Resorts',
    description: 'Bespoke architectural logo marks, environmental signage, and luxury venue branding.',
    icon: <Hotel className="w-6 h-6 text-[#f5d0a6]" />,
    clientHighlight: 'The Raas Valley Resort & Royal Park',
    deliverables: ['Resort Spatial Signage', 'Guest Amenities Suite', 'Luxury Identity Guidelines'],
  },
  {
    id: 'real-estate',
    category: 'realestate',
    categoryLabel: 'SPATIAL & RESORTS',
    name: 'Real Estate & Interiors',
    description: 'Township visual identities, interior hub marks, and architectural brochures.',
    icon: <Home className="w-6 h-6 text-[#f5d0a6]" />,
    clientHighlight: 'Saveria Hub of Interiors & Valencia',
    deliverables: ['Township Master Brand', 'Sales Kit Architecture', '3D Spatial Signage Marks'],
  },
  {
    id: 'industrial-manufacturing',
    category: 'corporate',
    categoryLabel: 'CORPORATE & INDUSTRIAL',
    name: 'Industrial & Manufacturing',
    description: '40 Years of Legacy annual reports, sustainability spreads, and fibre marks.',
    icon: <Factory className="w-6 h-6 text-[#f5d0a6]" />,
    clientHighlight: 'Terex Equipment & Ariddha Fibre',
    deliverables: ['40 Years Legacy Report', 'Exhibition Expo Pavilion', 'Fleet Livery System'],
  },
  {
    id: 'media-print',
    category: 'corporate',
    categoryLabel: 'CORPORATE & INDUSTRIAL',
    name: 'Media & Print Publications',
    description: 'Full-page newspaper ad campaigns, editorial layouts, and marketing press.',
    icon: <Newspaper className="w-6 h-6 text-[#f5d0a6]" />,
    clientHighlight: 'Dainik Bhaskar & Marketing Express',
    deliverables: ['National Press Ads', 'Editorial Publications', 'Brand Campaign Spread'],
  },
  {
    id: 'incense-wellness',
    category: 'fmcg',
    categoryLabel: 'FMCG & RETAIL',
    name: 'Incense & Consumer Goods',
    description: '360-degree brand packaging suites, agarbatti boxes, and billboard campaigns.',
    icon: <Flame className="w-6 h-6 text-[#f5d0a6]" />,
    clientHighlight: 'Reyug Incense & Pooja Series',
    deliverables: ['Metallic Foil Packaging', 'Pan-India Distribution Deck', 'Retail Counter Displays'],
  },
  {
    id: 'corporate-finance',
    category: 'corporate',
    categoryLabel: 'CORPORATE & INDUSTRIAL',
    name: 'Corporate & Finance',
    description: 'Investor pitch decks, corporate keynotes, and institutional presentations.',
    icon: <Landmark className="w-6 h-6 text-[#f5d0a6]" />,
    clientHighlight: 'D.P. Abushan Limited & Malpani Group',
    deliverables: ['B2B Pitch Architecture', 'Corporate Guidelines', 'Annual Board Reports'],
  },
  {
    id: 'luxury-fashion',
    category: 'fmcg',
    categoryLabel: 'FMCG & RETAIL',
    name: 'Luxury & Fashion Boutiques',
    description: 'Bespoke fashion typography, lifestyle identity marks, and boutique collateral.',
    icon: <Shirt className="w-6 h-6 text-[#f5d0a6]" />,
    clientHighlight: 'AVA Boutiquified & Anvith Luxury',
    deliverables: ['Custom Monogram Identity', 'Luxury Apparel Tags', 'Boutique Collateral Suite'],
  },
  {
    id: 'sustainability-tech',
    category: 'corporate',
    categoryLabel: 'CORPORATE & INDUSTRIAL',
    name: 'Sustainability & Future Tech',
    description: 'Entrepreneurship summits, green transformation publications, and eco initiatives.',
    icon: <Leaf className="w-6 h-6 text-[#f5d0a6]" />,
    clientHighlight: 'EKI Energy & Sustainable Future MP',
    deliverables: ['Carbon Summit Branding', 'ESG Sustainability Decks', 'Green Tech Identity'],
  },
];

export const IndustriesServed: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<IndustryItem>(INDUSTRIES[0]);
  const [isDealt, setIsDealt] = useState(false);

  return (
    <section id="industries" className="pt-10 pb-16 px-4 sm:px-8 lg:px-12 bg-[#090604] border-t border-b border-white/10 relative overflow-hidden select-none">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#d8ab7e]/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8be90]/15 border border-[#e8be90]/40 text-[#f5d0a6] text-xs font-mono font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-[#f5d0a6]" />
            <span>CROSS-INDUSTRY BRAND ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white uppercase tracking-wider drop-shadow-md">
            INDUSTRIES WE <span className="text-[#e8be90] italic">SERVE</span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto font-sans leading-relaxed">
            Partnered with scaling businesses, FMCG conglomerates, and real estate leaders with bespoke visual solutions.
          </p>
        </div>

        {/* DYNAMIC BENTO GRID LAYOUT WITH SPOTLIGHT SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* FEATURED SECTOR SPOTLIGHT PANEL (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#2e1f14] via-[#1f140c] to-[#120b06] border-2 border-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            
            {/* Technical Corner Framing Indicators */}
            <div className="absolute top-4 left-4 text-white/50 font-mono text-xs pointer-events-none select-none">┌</div>
            <div className="absolute top-4 right-4 text-white/50 font-mono text-xs pointer-events-none select-none">┐</div>
            <div className="absolute bottom-4 left-4 text-white/50 font-mono text-xs pointer-events-none select-none">└</div>
            <div className="absolute bottom-4 right-4 text-white/50 font-mono text-xs pointer-events-none select-none">┘</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSector.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 relative z-10"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-xl bg-[#e8be90]/15 border border-white text-[#f5d0a6]">
                    {selectedSector.icon}
                  </div>
                  <span className="text-[10px] font-mono text-white uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white">
                    {selectedSector.categoryLabel}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-white uppercase tracking-wide">
                    {selectedSector.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                    {selectedSector.description}
                  </p>
                </div>

                {/* Key Deliverables Scope */}
                <div className="pt-4 border-t border-white/30 space-y-3">
                  <span className="text-[11px] font-mono text-[#f5d0a6] uppercase font-bold tracking-wider block">
                    DELIVERABLE SCOPE & ASSETS:
                  </span>
                  <div className="space-y-2">
                    {selectedSector.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-sans text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f5d0a6]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Client Highlight Box */}
                <div className="pt-4 border-t border-white/30 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase">PROMINENT CASE STUDY:</span>
                  <span className="text-xs font-mono font-bold text-white bg-[#e8be90]/20 border border-white px-3 py-1 rounded-lg">
                    {selectedSector.clientHighlight}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* BENTO CARDS SHOWCASE GRID (Right 7 Cols) WITH CARD DECK SHUFFLE & DEAL EFFECT */}
          <div
            className="lg:col-span-7 flex flex-col space-y-3"
            onMouseEnter={() => setIsDealt(true)}
            onMouseLeave={() => setIsDealt(false)}
          >
            {/* Deck Header Status & Toggle */}
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-mono text-[#f5d0a6] uppercase font-bold tracking-widest flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#f5d0a6]" />
                <span>SECTOR DECK (9 CATEGORIES)</span>
              </span>
              <button
                onClick={() => setIsDealt(!isDealt)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-[#e8be90] hover:text-black border border-white/30 text-[10px] font-mono font-bold text-white uppercase transition-all duration-300 cursor-pointer shadow-sm"
              >
                <Shuffle className="w-3 h-3 text-[#f5d0a6] group-hover:text-black" />
                <span>{isDealt ? 'CARD DECK DEALT' : 'HOVER OR CLICK TO SHUFFLE DECK'}</span>
              </button>
            </div>

            {/* 3x3 Bento Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative min-h-[550px]">
              {INDUSTRIES.map((item, idx) => {
                const isSelected = selectedSector.id === item.id;
                const row = Math.floor(idx / 3);
                const col = idx % 3;

                // Stack offsets towards center card (Row 1, Col 1)
                const offX = (1 - col) * 105;
                const offY = (1 - row) * 105;
                const stackRot = (idx - 4) * 3.5;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={false}
                    animate={{
                      x: isDealt ? '0%' : `${offX}%`,
                      y: isDealt ? '0%' : `${offY}%`,
                      rotate: isDealt ? 0 : stackRot,
                      scale: isDealt ? (isSelected ? 1.03 : 1) : 0.94 + idx * 0.01,
                      zIndex: isDealt ? (isSelected ? 30 : 10) : idx + 1,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: isDealt ? idx * 0.045 : (8 - idx) * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => {
                      setIsDealt(true);
                      setSelectedSector(item);
                    }}
                    className={`group cursor-pointer p-5 rounded-xl border flex flex-col justify-between text-left transition-all duration-300 min-h-[170px] ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#3a281b] via-[#2a1c12] to-[#1c120b] border-2 border-white scale-[1.03] z-20 shadow-xl shadow-white/10'
                        : 'bg-[#18110b]/90 border border-white/80 hover:border-white hover:bg-[#22170f] opacity-95 hover:opacity-100 shadow-sm'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-lg bg-white/10 border border-white/40 text-[#f5d0a6] group-hover:border-white transition-colors">
                          {item.icon}
                        </div>
                        <span className="text-[9px] font-mono text-white/70 uppercase">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-sm font-sans font-extrabold text-white uppercase tracking-wider truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-zinc-300 line-clamp-2 leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-zinc-300 group-hover:text-white transition-colors">
                      <span className="truncate">{item.clientHighlight.split('&')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#f5d0a6] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

