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
      
      <div className="max-w-[1750px] w-full mx-auto space-y-14 relative z-10">
        
        {/* Optional Section Header */}
        {showHeader && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black text-white uppercase tracking-tight leading-none">
                SPECIALIZED <span className="font-editorial italic font-normal text-zinc-400 uppercase">DISCIPLINES</span>
              </h2>
            </div>

            <div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl group"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        )}

        {/* 2-Column Responsive Bento Cards Grid with Borderless Transparent Aesthetic */}
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
                className="p-8 sm:p-10 rounded-3xl bg-transparent border-0 hover:bg-white/[0.03] transition-all duration-500 space-y-6 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-6 relative z-10">
                  
                  {/* Card Header: Icon & Monogram Index */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/5 border-0 text-white group-hover:bg-white group-hover:text-black transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-white transition-colors">
                      ({item.number}) // DISCIPLINE
                    </span>
                  </div>

                  {/* Image Preview Box - Widescreen HD Edge-to-Edge */}
                  <div className="relative w-full h-[260px] sm:h-[280px] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-white/25 transition-all duration-500 shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[1.05] contrast-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute bottom-3.5 left-3.5 px-3.5 py-1.5 rounded-full bg-black/75 border border-white/15 text-[11px] font-mono text-zinc-200 uppercase font-bold tracking-wider backdrop-blur-md shadow-lg">
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-sans group-hover:text-zinc-200 transition-colors leading-tight">
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
                        className="px-3 py-1 rounded-full bg-white/5 border-0 text-[11px] font-mono text-zinc-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Action Link */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider relative z-10 transition-colors">
                  <Link
                    href={`/services/${item.slug}`}
                    className="flex items-center gap-2 text-white group-hover:text-zinc-300 transition-colors"
                  >
                    <span>View Service Case Studies</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </Link>
                  <span className="text-zinc-400 font-extrabold group-hover:text-white">{item.number}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
