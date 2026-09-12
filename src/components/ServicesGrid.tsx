'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Sparkles as SparklesIcon, Package, Presentation, Megaphone, CheckCircle2, Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/data/content';
import { MagneticButton } from './MagneticButton';

interface ServiceCategory {
  id: string;
  number: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  statement: string;
  description: string;
  subTags: {
    id: string;
    name: string;
    detail: string;
    image: string;
    highlights: string[];
    brandLogos?: { name: string; path: string }[];
  }[];
}

const DIGISES_SERVICES: ServiceCategory[] = [
  {
    id: 'brand-identity',
    number: '01',
    name: 'Logo & Brand Identity',
    tagline: 'Visual Architecture & Emblems',
    icon: <SparklesIcon className="w-6 h-6 text-orange-500" />,
    statement: 'Logos that Speak Silently yet Powerfully for your Business Growth',
    description:
      'Crafting timeless monograms, architectural marks, and comprehensive visual systems that establish immediate market authority.',
    subTags: [
      {
        id: 'logo-mark',
        name: 'Bespoke Logo Mark Creation',
        detail: 'Handcrafted vector emblems and corporate logos tailored to brand values & positioning.',
        image: '/assets/projects/logo_raas_valley.png',
        highlights: ['Vector Mark Precision', 'Brand Architecture', 'Monogram Design', 'Trademark Ready'],
        brandLogos: [
          { name: 'Raas Valley Resort', path: '/assets/projects/logo_raas_valley.png' },
          { name: 'Trinaas', path: '/assets/logos/trinaas.png' },
          { name: 'Ariddha', path: '/assets/logos/ariddha.png' },
          { name: 'Saveria', path: '/assets/logos/saveria.png' },
        ],
      },
      {
        id: 'visual-identity',
        name: 'Visual Identity Architecture',
        detail: 'End-to-end visual systems, typography rules, color palettes, and brand style guides.',
        image: '/assets/projects/logo_outline.png',
        highlights: ['Color Systems (CMYK/RGB)', 'Typography Hierarchy', 'Stationery Suites', 'Brand Guidelines'],
        brandLogos: [
          { name: 'Anvith', path: '/assets/logos/anvith.png' },
          { name: 'Royal Park', path: '/assets/logos/royal_park.png' },
          { name: 'Pronocis', path: '/assets/logos/pronocis.png' },
          { name: 'Valencia Greens', path: '/assets/logos/valencia_greens.png' },
        ],
      },
      {
        id: 'resort-branding',
        name: 'Environmental & Facade Signage',
        detail: 'Architectural signage and illuminated outdoor facade identity for luxury hospitality destinations.',
        image: '/assets/projects/logo_raas_valley.png',
        highlights: ['Facade Signage', 'Guest Collateral', 'Resort Wayfinding', 'Architectural Emblems'],
      },
    ],
  },
  {
    id: 'packaging-design',
    number: '02',
    name: 'Packaging & FMCG Design',
    tagline: 'Tactile Retail & Unboxing',
    icon: <Package className="w-6 h-6 text-orange-500" />,
    statement: 'Designed to Stand Out, Built to Be Remembered',
    description:
      'Designing retail packaging pouches, custom snack boxes, and FMCG product suites engineered to command retail shelf space.',
    subTags: [
      {
        id: 'luwwa-series',
        name: 'LUWWA Protein Energy Bar',
        detail: 'Vibrant 15g Protein Energy Bar series packaging with high shelf contrast & foil accents.',
        image: '/assets/projects/packaging_luwwa.png',
        highlights: ['Custom Pouch Dieline', 'Metallic Foil Prints', 'Nutritional Callouts', 'Retail Standout'],
      },
      {
        id: 'banaras-paan',
        name: 'Banaras Paan & Snack Pouches',
        detail: 'Traditional snack series with bold visual hierarchy and custom pouch print dielines.',
        image: '/assets/projects/packaging_grid.png',
        highlights: ['Pouch Print Layout', 'Flavor Color Variants', 'Pan-India Distribution', 'FMCG Standard'],
      },
      {
        id: 'reyug-incense',
        name: 'Reyug Incense Multi-SKU Suite',
        detail: 'Complete incense & pooja packaging range across 10+ retail product variants.',
        image: '/assets/projects/reyug_hero.png',
        highlights: ['Gold Foil Stamping', 'Embroidery Textures', '10+ SKU Harmony', 'Retail POS Box'],
      },
    ],
  },
  {
    id: 'presentations-reports',
    number: '03',
    name: 'Presentations & Annual Reports',
    tagline: 'High-Stakes Investor Decks',
    icon: <Presentation className="w-6 h-6 text-orange-500" />,
    statement: 'Performance, Presented with Purpose. Design that Informs!',
    description:
      'Transforming high-stakes pitch decks, corporate investor keynotes, and legacy annual reports into commanding visual narratives.',
    subTags: [
      {
        id: 'investor-pitch',
        name: 'Corporate & Investor Pitch Decks',
        detail: 'High-impact investor presentations for clients like Ameerji, D.P. Abushan, and Malpani Group.',
        image: '/assets/projects/presentations_devices.png',
        highlights: ['Data Layouts', 'Financial Diagrams', '16:9 Screen Hierarchy', 'Executive Styling'],
      },
      {
        id: 'terex-report',
        name: '40 Years of Legacy Annual Report',
        detail: 'Comprehensive corporate publication highlighting financial legacy and eco-innovations.',
        image: '/assets/projects/annual_report_hero.png',
        highlights: ['Editorial Layouts', 'Milestone Timelines', 'Hardcover Binding Layout', 'CSR Callouts'],
      },
      {
        id: 'sustainability-spreads',
        name: 'Sustainability & ESG Publications',
        detail: 'Editorial annual report spreads designed for institutional transparency.',
        image: '/assets/projects/annual_report_spreads.png',
        highlights: ['Infographic Charts', 'ESG Metrics Spreads', 'Financial Transparency', 'Editorial Typography'],
      },
    ],
  },
  {
    id: 'print-outdoor',
    number: '04',
    name: 'Print & Outdoor Campaigns',
    tagline: 'Highway Billboards & Print',
    icon: <Megaphone className="w-6 h-6 text-orange-500" />,
    statement: 'Because Print Still Speaks when Done by the Outline!',
    description:
      'Designing highway outdoor billboards, full-page newspaper advertisements, and prestige corporate brochures crafted for high recall.',
    subTags: [
      {
        id: 'lemount-billboard',
        name: 'Lemount Beer Outdoor Campaign',
        detail: 'High-impact highway billboards engineered for maximum road visibility and brand recall.',
        image: '/assets/projects/billboard_lemount.png',
        highlights: ['Highway Visibility', '3D Product Rendering', 'Night Illumination Layout', 'Pan-India Billboards'],
      },
      {
        id: 'dainik-bhaskar',
        name: 'Dainik Bhaskar Newspaper Ads',
        detail: 'Full-page print advertisements engineered for regional circulation dominance.',
        image: '/assets/projects/newspaper_bhaskar.png',
        highlights: ['Full Page Spread', 'Print Color Calibration', 'High Impact Typography', 'Regional Circulation'],
      },
      {
        id: 'malpani-brochure',
        name: 'Malpani Corporate Brochure',
        detail: 'Prestige corporate profile ("THE TRUE STRENGTH") with metallic finishes and architectural spreads.',
        image: '/assets/projects/brochure_malpani.png',
        highlights: ['Embossed Covers', 'Spot UV Finishes', 'Architectural Layouts', 'Heavy Paper Stock Layout'],
      },
    ],
  },
];

export const ServicesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubTag, setActiveSubTag] = useState(0);

  const currentCategory = DIGISES_SERVICES[activeCategory];
  const currentSubTag = currentCategory.subTags[activeSubTag] || currentCategory.subTags[0];

  const handleCategorySelect = (idx: number) => {
    setActiveCategory(idx);
    setActiveSubTag(0);
  };

  return (
    <section id="services" className="py-28 px-6 sm:px-10 lg:px-16 bg-[#040406] border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-widest shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR CORE CAPABILITIES</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-heading"
          >
            STRATEGY & <span className="text-orange-500 italic">VISUAL ARCHITECTURE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            End-to-end strategy, visual identities, packaging, pitch decks, and outdoor billboard campaigns engineered for brand dominance.
          </motion.p>
        </div>

        {/* Tier 1: 4 Core Category Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIGISES_SERVICES.map((cat, idx) => {
            const isActive = activeCategory === idx;
            return (
              <motion.button
                key={cat.id}
                onClick={() => handleCategorySelect(idx)}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`p-8 rounded-3xl text-left transition-all duration-500 relative flex flex-col justify-between border shadow-2xl ${
                  isActive
                    ? 'bg-gradient-to-b from-orange-950/70 via-zinc-950 to-zinc-900 border-orange-500 shadow-orange-950/60'
                    : 'bg-zinc-950/80 border-white/10 hover:border-orange-500/40 hover:bg-zinc-900/90'
                }`}
              >
                {/* Top Highlight Indicator */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-t-3xl" />
                )}

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-2xl border transition-colors ${
                      isActive ? 'bg-orange-500/20 border-orange-500' : 'bg-white/5 border-white/10'
                    }`}>
                      {cat.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-orange-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xl font-extrabold uppercase tracking-wide transition-colors ${
                      isActive ? 'text-white' : 'text-zinc-300'
                    }`}>
                      {cat.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 pt-1">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>{isActive ? 'ACTIVE SERVICE' : 'SELECT CAPABILITY'}</span>
                  <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-orange-500 animate-ping' : 'bg-zinc-700'}`} />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Tier 2: Sub-Service Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {currentCategory.subTags.map((sub, subIdx) => {
            const isSubActive = activeSubTag === subIdx;
            return (
              <button
                key={sub.id}
                onClick={() => setActiveSubTag(subIdx)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isSubActive
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/40'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10 hover:border-white/30'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isSubActive ? 'bg-white' : 'bg-orange-500/60'}`} />
                <span>{sub.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tier 3: Detailed Interactive Capabilities Showcase Box */}
        <motion.div
          layout
          className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-zinc-950 via-[#08080c] to-black border border-orange-500/40 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${activeSubTag}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left Column: Core Positioning Statement & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{currentCategory.name} // {currentSubTag.name}</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight font-heading">
                  {currentSubTag.name}
                </h3>

                <p className="text-xl sm:text-2xl text-orange-400 font-bold italic border-l-4 border-orange-500 pl-4 py-1">
                  &ldquo;{currentCategory.statement}&rdquo;
                </p>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  {currentSubTag.detail} {currentCategory.description}
                </p>

                {/* Delivered Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {currentSubTag.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs font-mono text-zinc-300 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-6 flex flex-wrap gap-4 items-center">
                  <MagneticButton>
                    <Link
                      href={`/services/${SERVICES[activeCategory]?.id || 'logo-design'}`}
                      className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-orange-600/40 inline-flex items-center gap-3 group"
                    >
                      <span>View Service Deep-Dive</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </MagneticButton>

                  <MagneticButton>
                    <Link
                      href="/contact"
                      className="px-8 py-4 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300"
                    >
                      Inquire Capability
                    </Link>
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: Dynamic Interactive Visual Showcase */}
              <div className="lg:col-span-5 relative space-y-4">
                
                {/* Brand Logos Showcase Grid if in Logo Design */}
                {currentSubTag.brandLogos ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>SELECTED BRAND MARKS</span>
                      <span className="text-orange-400 font-bold">THE OUTLINE PORTFOLIO</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {currentSubTag.brandLogos.map((logo, lIdx) => (
                        <div
                          key={lIdx}
                          className="p-6 rounded-2xl bg-black border border-white/15 hover:border-orange-500/60 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-3 group/logo shadow-xl"
                        >
                          <div className="relative w-28 h-20">
                            <Image
                              src={logo.path}
                              alt={logo.name}
                              fill
                              className="object-contain filter contrast-125 brightness-110 group-hover/logo:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <span className="text-[11px] font-mono text-zinc-400 uppercase font-bold group-hover/logo:text-orange-400 transition-colors">
                            {logo.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Standard Image Showcase Card */
                  <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group/img">
                    <Image
                      src={currentSubTag.image}
                      alt={currentSubTag.name}
                      fill
                      className="object-contain p-4 group-hover/img:scale-105 transition-transform duration-700 filter contrast-110 brightness-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300">
                      <span className="px-3 py-1 rounded-full bg-black/80 border border-white/20">
                        {currentSubTag.name}
                      </span>
                      <span className="text-orange-400 font-bold">100% VECTOR HIGH-RES</span>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
