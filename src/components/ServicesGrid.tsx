'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Layers, Palette, Package, Presentation, FileText, Megaphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceDiscipline {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  image: string;
  slug: string;
}

const SERVICES_DATA: ServiceDiscipline[] = [
  {
    id: 'branding',
    number: '01',
    title: 'Brand Strategy & Identity',
    subtitle: 'Strategic Positioning & Logo Architecture',
    description: 'Engineering high-impact logo marks, visual identity systems, typography guidelines, and brand positioning suites built for market recall.',
    icon: Palette,
    tags: ['Creative Direction', 'Logo Marks', 'Brand Identity', 'Graphic Systems', 'Startup Alignment'],
    image: '/assets/projects/logo_raas_valley.png',
    slug: 'logo-design',
  },
  {
    id: 'packaging',
    number: '02',
    title: 'FMCG & Product Packaging',
    subtitle: '3D Dielines, Pouches & Luxury Boxes',
    description: 'Transforming snack pouches, protein energy bars, incense ranges, and luxury bottles into eye-catching retail shelf icons with print dieline precision.',
    icon: Package,
    tags: ['LUWWA Energy Bar', 'Banaras Paan Pouches', 'Reyug Incense Multi-SKU', 'Foil Dielines'],
    image: '/assets/projects/packaging_luwwa.png',
    slug: 'packaging-design',
  },
  {
    id: 'presentations',
    number: '03',
    title: 'Pitch Decks & Presentations',
    subtitle: 'Investor Decks & High-Stakes Keynotes',
    description: 'Crafting persuasive investor pitch decks, corporate keynote decks, financial storytelling spreads, and executive board presentations.',
    icon: Presentation,
    tags: ['Investor Pitch Decks', 'Corporate Keynotes', 'Financial Spreads', 'Executive Storytelling'],
    image: '/assets/projects/presentations_devices.png',
    slug: 'presentation-design',
  },
  {
    id: 'annual-reports',
    number: '04',
    title: 'Annual Reports & Publications',
    subtitle: 'Legacy Corporate Spreads & Infographics',
    description: 'Designing multi-page annual report publications, shareholder documents, corporate infographics, and financial spread architectures.',
    icon: FileText,
    tags: ['Shareholder Reports', 'Legacy Annual Spreads', 'Financial Layouts', 'Corporate Publishing'],
    image: '/assets/projects/annual_report_hero.png',
    slug: 'presentation-design',
  },
  {
    id: 'outdoor',
    number: '05',
    title: 'Highway Billboards & Outdoor',
    subtitle: 'High-Impact Outdoor & Print Media',
    description: 'Executing highway billboards, Dainik Bhaskar print campaigns, architectural environmental signage, and high-visibility outdoor media.',
    icon: Megaphone,
    tags: ['Lemount Highway Billboards', 'Dainik Bhaskar Ads', 'Environmental Signage', 'Outdoor Media'],
    image: '/assets/projects/billboard_lemount.png',
    slug: 'packaging-design',
  },
  {
    id: 'brochures',
    number: '06',
    title: 'Corporate Brochures & Print',
    subtitle: 'Bespoke Catalogue & Print Collateral',
    description: 'Creating foil-stamped corporate brochures, township real estate catalogues, sales kits, and premium tactile print collateral.',
    icon: Layers,
    tags: ['Malpani Corporate Brochure', 'Real Estate Catalogues', 'Sales Kits', 'Foil Stamping'],
    image: '/assets/projects/logo_aurous.png',
    slug: 'logo-design',
  },
];

interface ServicesGridProps {
  showHeader?: boolean;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ showHeader = true }) => {
  return (
    <section id="services" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] text-white border-t border-b border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#ff5528]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1750px] w-full mx-auto space-y-14 relative z-10">
        
        {/* Optional Section Header */}
        {showHeader && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5528]/10 border border-[#ff5528]/30 text-[#ff5528] text-xs font-mono uppercase tracking-widest">
                <span>AGENCY CAPABILITIES</span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none font-sans">
                SPECIALIZED <span className="text-[#ff5528]">DISCIPLINES</span>
              </h2>
            </div>

            <div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#ff5528] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl group"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        )}

        {/* 2-Column Responsive Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.12 }}
                whileHover={{ y: -6 }}
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-950 via-[#0a0a0e] to-black border border-white/10 hover:border-[#ff5528]/60 transition-all duration-500 space-y-6 flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(255,87,34,0.2)] group relative overflow-hidden"
              >
                {/* Glowing Top Ribbon */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff5528] via-amber-500 to-transparent group-hover:via-[#ff5528] transition-all duration-500" />
                
                {/* Background Accent Glow Flare */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#ff5528]/0 group-hover:bg-[#ff5528]/15 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  
                  {/* Card Header: Icon & Monogram Index */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[#ff5528]/10 border border-[#ff5528]/30 text-[#ff5528] group-hover:bg-[#ff5528] group-hover:text-black transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-300 group-hover:text-[#ff5528] transition-colors">
                      ({item.number}) // DISCIPLINE
                    </span>
                  </div>

                  {/* Image Preview Box */}
                  <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-black border border-white/10 group-hover:border-[#ff5528]/40 transition-all duration-500 shadow-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 filter brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-[10px] font-mono text-[#ff5528] uppercase font-bold tracking-wider backdrop-blur-md">
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-sans group-hover:text-[#ff5528] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Skill Tag Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300 group-hover:border-[#ff5528]/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Action Link */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider relative z-10 group-hover:border-[#ff5528]/30 transition-colors">
                  <Link
                    href={`/services/${item.slug}`}
                    className="flex items-center gap-2 text-white group-hover:text-[#ff5528] transition-colors"
                  >
                    <span>View Service Case Studies</span>
                    <ArrowUpRight className="w-4 h-4 text-[#ff5528] transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </Link>
                  <span className="text-[#ff5528] font-extrabold">{item.number}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
