'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Hotel, Home, Factory, Newspaper, Flame, Landmark, Shirt, Leaf } from 'lucide-react';

const INDUSTRIES = [
  {
    id: 'retail-fmcg',
    name: 'Retail & FMCG',
    description: 'Product pouches, snack packaging, and in-store point of sale displays.',
    icon: <ShoppingBag className="w-6 h-6 text-orange-500" />,
    clientHighlight: 'LUWWA Energy Bar & Savera',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Resorts',
    description: 'Bespoke architectural logo marks, environmental signage, and luxury venue branding.',
    icon: <Hotel className="w-6 h-6 text-orange-500" />,
    clientHighlight: 'The Raas Valley Resort & Royal Park',
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Interiors',
    description: 'Township visual identities, interior hub marks, and architectural brochures.',
    icon: <Home className="w-6 h-6 text-orange-500" />,
    clientHighlight: 'Saveria Hub of Interiors & Valencia',
  },
  {
    id: 'industrial-manufacturing',
    name: 'Industrial & Manufacturing',
    description: '40 Years of Legacy annual reports, sustainability spreads, and fibre marks.',
    icon: <Factory className="w-6 h-6 text-orange-500" />,
    clientHighlight: 'Terex Equipment & Ariddha Fibre',
  },
  {
    id: 'media-print',
    name: 'Media & Print Publications',
    description: 'Full-page newspaper ad campaigns, editorial layouts, and marketing press.',
    icon: <Newspaper className="w-6 h-6 text-orange-500" />,
    clientHighlight: 'Dainik Bhaskar & Marketing Express',
  },
  {
    id: 'incense-wellness',
    name: 'Incense & Consumer Goods',
    description: '360-degree brand packaging suites, agarbatti boxes, and billboard campaigns.',
    icon: <Flame className="w-6 h-6 text-orange-500" />,
    clientHighlight: 'Reyug Incense & Pooja Series',
  },
  {
    id: 'corporate-finance',
    name: 'Corporate & Finance',
    description: 'Investor pitch decks, corporate keynotes, and institutional presentations.',
    icon: <Landmark className="w-6 h-6 text-orange-500" />,
    clientHighlight: 'D.P. Abushan Limited & Malpani Group',
  },
  {
    id: 'luxury-fashion',
    name: 'Luxury & Fashion Boutiques',
    description: 'Bespoke fashion typography, lifestyle identity marks, and boutique collateral.',
    icon: <Shirt className="w-6 h-6 text-orange-500" />,
    clientHighlight: 'AVA Boutiquified & Anvith Luxury',
  },
  {
    id: 'sustainability-tech',
    name: 'Sustainability & Future Tech',
    description: 'Entrepreneurship summits, green transformation publications, and eco initiatives.',
    icon: <Leaf className="w-6 h-6 text-orange-500" />,
    clientHighlight: 'EKI Energy & Sustainable Future MP',
  },
];

export const IndustriesServed: React.FC = () => {
  return (
    <section id="industries" className="py-28 px-6 sm:px-10 lg:px-16 bg-[#08080b] border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CROSS-INDUSTRY EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight"
          >
            Industries We <span className="text-orange-500 italic">Serve</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Partnered with startups, scaling businesses, and established brands across diverse sectors with tailored visual solutions.
          </motion.p>
        </div>

        {/* Industries 3x3 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="group p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-orange-950/30 min-h-[220px]"
              >
                {/* Glowing Top Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500 transition-all duration-500" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      SECTOR 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white uppercase tracking-wide group-hover:text-orange-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>KEY CLIENT / CASE STUDY:</span>
                  <span className="text-orange-400 font-bold">{item.clientHighlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
