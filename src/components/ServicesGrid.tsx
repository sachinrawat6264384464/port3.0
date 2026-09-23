'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const PROFICIENCY_ITEMS = [
  {
    number: '(01)',
    title: 'Branding & Identity',
    tags: ['Creative Direction', 'Brand Identity', 'Branding Strategy', 'Graphic Design', 'Startup Alignment'],
    image: '/assets/projects/logo_raas_valley.png',
  },
  {
    number: '(02)',
    title: 'UI-UX Design',
    tags: ['UI UX Consulting', 'UX Research', 'Usability Testing', 'Wireframing', 'Interactive Prototyping'],
    image: '/assets/projects/presentations_devices.png',
  },
  {
    number: '(03)',
    title: 'Packaging & FMCG',
    tags: ['LUWWA Protein Energy Bar', 'Banaras Paan Pouches', 'Reyug Incense Multi-SKU', 'Foil & Print Dielines'],
    image: '/assets/projects/packaging_luwwa.png',
  },
  {
    number: '(04)',
    title: 'Presentations & Annual Reports',
    tags: ['Investor Pitch Decks', 'Legacy Annual Reports', 'Financial Spreads', 'Corporate Storytelling'],
    image: '/assets/projects/annual_report_hero.png',
  },
  {
    number: '(05)',
    title: 'Print & Outdoor Campaigns',
    tags: ['Lemount Highway Billboards', 'Dainik Bhaskar Ads', 'Malpani Corporate Brochure', 'Print Execution'],
    image: '/assets/projects/billboard_lemount.png',
  },
];

interface ServicesGridProps {
  showHeader?: boolean;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ showHeader = true }) => {
  return (
    <section id="services" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] text-white border-t border-white/10">
      <div className="max-w-[1750px] w-full mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header matching REDOX Image 4 */}
        {showHeader && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <h2 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight leading-none font-sans">
                Complex <br />
                <span className="text-[#ff5528]">proficiency</span>
              </h2>
            </div>

            <div>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#ff5528] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-[#ff5528]/30 group"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        )}

        {/* Numbered Service Proficiency Items */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {PROFICIENCY_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:bg-white/[0.02] transition-colors px-4 rounded-2xl"
            >
              {/* Number (01) */}
              <div className="lg:col-span-2 text-2xl font-mono text-zinc-400 font-medium">
                {item.number}
              </div>

              {/* Title & Tags List */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-[#ff5528] transition-colors">
                  {item.title}
                </h3>
                
                <div className="flex flex-col gap-1.5 text-xs text-zinc-400 font-medium">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="hover:text-zinc-200 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Visual Image Card with Rounded Corners */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-[#ff5528]/50 transition-all duration-500 shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

