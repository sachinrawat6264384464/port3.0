'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, Hotel, Home, Factory, Newspaper, Flame, Landmark, Shirt, Leaf } from 'lucide-react';

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
    icon: <ShoppingBag className="w-5 h-5 text-white" />,
    clientHighlight: 'LUWWA Energy Bar & Savera',
    deliverables: ['Custom Stand-up Pouches', 'Point of Sale Retail Units', 'Brand Box Architecture'],
  },
  {
    id: 'hospitality',
    category: 'realestate',
    categoryLabel: 'SPATIAL & RESORTS',
    name: 'Hospitality & Resorts',
    description: 'Bespoke architectural logo marks, environmental signage, and luxury venue branding.',
    icon: <Hotel className="w-5 h-5 text-white" />,
    clientHighlight: 'The Raas Valley Resort & Royal Park',
    deliverables: ['Resort Spatial Signage', 'Guest Amenities Suite', 'Luxury Identity Guidelines'],
  },
  {
    id: 'real-estate',
    category: 'realestate',
    categoryLabel: 'SPATIAL & RESORTS',
    name: 'Real Estate & Interiors',
    description: 'Township visual identities, interior hub marks, and architectural brochures.',
    icon: <Home className="w-5 h-5 text-white" />,
    clientHighlight: 'Saveria Hub of Interiors & Valencia',
    deliverables: ['Township Master Brand', 'Sales Kit Architecture', '3D Spatial Signage Marks'],
  },
  {
    id: 'industrial-manufacturing',
    category: 'corporate',
    categoryLabel: 'CORPORATE & INDUSTRIAL',
    name: 'Industrial & Manufacturing',
    description: '40 Years of Legacy annual reports, sustainability spreads, and fibre marks.',
    icon: <Factory className="w-5 h-5 text-white" />,
    clientHighlight: 'Terex Equipment & Ariddha Fibre',
    deliverables: ['40 Years Legacy Report', 'Exhibition Expo Pavilion', 'Fleet Livery System'],
  },
  {
    id: 'media-print',
    category: 'corporate',
    categoryLabel: 'CORPORATE & INDUSTRIAL',
    name: 'Media & Print Publications',
    description: 'Full-page newspaper ad campaigns, editorial layouts, and marketing press.',
    icon: <Newspaper className="w-5 h-5 text-white" />,
    clientHighlight: 'Dainik Bhaskar & Marketing Express',
    deliverables: ['National Press Ads', 'Editorial Publications', 'Brand Campaign Spread'],
  },
  {
    id: 'incense-wellness',
    category: 'fmcg',
    categoryLabel: 'FMCG & RETAIL',
    name: 'Incense & Consumer Goods',
    description: '360-degree brand packaging suites, agarbatti boxes, and billboard campaigns.',
    icon: <Flame className="w-5 h-5 text-white" />,
    clientHighlight: 'Reyug Incense & Pooja Series',
    deliverables: ['Metallic Foil Packaging', 'Pan-India Distribution Deck', 'Retail Counter Displays'],
  },
  {
    id: 'corporate-finance',
    category: 'corporate',
    categoryLabel: 'CORPORATE & INDUSTRIAL',
    name: 'Corporate & Finance',
    description: 'Investor pitch decks, corporate keynotes, and institutional presentations.',
    icon: <Landmark className="w-5 h-5 text-white" />,
    clientHighlight: 'D.P. Abushan Limited & Malpani Group',
    deliverables: ['B2B Pitch Architecture', 'Corporate Guidelines', 'Annual Board Reports'],
  },
  {
    id: 'luxury-fashion',
    category: 'fmcg',
    categoryLabel: 'FMCG & RETAIL',
    name: 'Luxury & Fashion Boutiques',
    description: 'Bespoke fashion typography, lifestyle identity marks, and boutique collateral.',
    icon: <Shirt className="w-5 h-5 text-white" />,
    clientHighlight: 'AVA Boutiquified & Anvith Luxury',
    deliverables: ['Custom Monogram Identity', 'Luxury Apparel Tags', 'Boutique Collateral Suite'],
  },
  {
    id: 'sustainability-tech',
    category: 'corporate',
    categoryLabel: 'CORPORATE & INDUSTRIAL',
    name: 'Sustainability & Future Tech',
    description: 'Entrepreneurship summits, green transformation publications, and eco initiatives.',
    icon: <Leaf className="w-5 h-5 text-white" />,
    clientHighlight: 'EKI Energy & Sustainable Future MP',
    deliverables: ['Carbon Summit Branding', 'ESG Sustainability Decks', 'Green Tech Identity'],
  },
];

const TypewriterHeading: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [part1Text, setPart1Text] = useState('');
  const [part2Text, setPart2Text] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullPart1 = 'INDUSTRIES WE ';
  const fullPart2 = 'SERVE';

  useEffect(() => {
    if (!isInView) {
      setPart1Text('');
      setPart2Text('');
      setIsTypingComplete(false);
      return;
    }

    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < fullPart1.length) {
        setPart1Text(fullPart1.slice(0, charIndex + 1));
        charIndex++;
      } else if (charIndex - fullPart1.length < fullPart2.length) {
        const p2Idx = charIndex - fullPart1.length;
        setPart2Text(fullPart2.slice(0, p2Idx + 1));
        charIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div className="text-center space-y-3 max-w-4xl mx-auto min-h-[90px] flex items-center justify-center">
      <h2
        ref={ref}
        className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black text-white uppercase tracking-tight leading-none inline-flex items-center flex-wrap justify-center"
      >
        <span>{part1Text}</span>
        {part2Text && (
          <span className="font-editorial italic font-normal text-zinc-400 uppercase ml-2 sm:ml-3">
            {part2Text}
          </span>
        )}
        {!isTypingComplete && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="inline-block w-[3px] sm:w-[5px] h-[0.7em] bg-white ml-2 rounded-full align-middle"
          />
        )}
      </h2>
    </div>
  );
};

const TypewriterBoxTitle: React.FC<{ name: string; delay?: number }> = ({ name, delay = 0 }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { amount: 0.15 });
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setDisplayedText('');
      setIsComplete(false);
      return;
    }

    let charIndex = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (charIndex < name.length) {
          setDisplayedText(name.slice(0, charIndex + 1));
          charIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 90);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, name, delay]);

  const hasAmpersand = displayedText.includes('&');
  const part1 = hasAmpersand ? displayedText.split('&')[0] : displayedText;
  const part2 = hasAmpersand ? displayedText.split('&')[1] : '';

  return (
    <h3 ref={ref} className="text-xl sm:text-2xl font-sans font-black text-white uppercase tracking-tight min-h-[1.5em] flex items-center flex-wrap">
      <span>{part1}</span>
      {hasAmpersand && (
        <span className="font-editorial italic font-normal text-zinc-400 lowercase ml-1">
          &amp; {part2}
        </span>
      )}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="inline-block w-[2px] h-[0.7em] bg-white ml-1 align-baseline"
        />
      )}
    </h3>
  );
};

export const IndustriesServed: React.FC = () => {
  return (
    <section id="industries" className="pt-12 pb-20 px-4 sm:px-8 lg:px-12 bg-[#0e0e11] border-t border-b border-white/10 relative overflow-hidden select-none">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-12 relative z-10">
        
        {/* Section Header with Typewriter Effect & Bottom Blur Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(16px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <TypewriterHeading />
        </motion.div>

        {/* 3-COLUMN STATIC BENTO BOXES GRID WITH BOTTOM BLUR SLIDE-UP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {INDUSTRIES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60, filter: 'blur(16px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ amount: 0.15 }}
              transition={{ duration: 1.2, delay: (idx % 3) * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="bg-transparent rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-start">
                  <div className="p-3 rounded-xl bg-white/10 text-white">
                    {item.icon}
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <TypewriterBoxTitle name={item.name} delay={idx * 120} />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-300">
                <span className="truncate text-zinc-400">{item.clientHighlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
