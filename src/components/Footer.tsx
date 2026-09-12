'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030304] border-t border-white/10 py-12 px-6 sm:px-10 lg:px-16 text-zinc-400">
      <div className="max-w-[1700px] w-full mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/5 pb-8">
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-orange-500/40 bg-orange-500/10 flex items-center justify-center">
                <span className="text-orange-500 font-bold text-sm">O</span>
              </div>
              <span className="text-lg font-black tracking-wider text-white uppercase">
                The Outline
              </span>
            </Link>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              strategy | design | direction
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center gap-8 text-xs uppercase font-mono tracking-wider font-semibold">
            <Link href="#work" className="hover:text-orange-500 transition-colors">Work</Link>
            <Link href="#about" className="hover:text-orange-500 transition-colors">About</Link>
            <Link href="#pillars" className="hover:text-orange-500 transition-colors">Pillars</Link>
            <Link href="#services" className="hover:text-orange-500 transition-colors">Services</Link>
            <Link href="#logos" className="hover:text-orange-500 transition-colors">Logos</Link>
            <Link href="#contact" className="hover:text-orange-500 transition-colors">Contact</Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-zinc-900 border border-white/10 text-white hover:text-orange-500 hover:border-orange-500 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} The Outline. All Rights Reserved. Strategy + Aesthetics.</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            <span>Built with Next.js & Framer Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
