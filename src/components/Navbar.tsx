'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-[#0e0e11]/90 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1750px] w-full mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        
        {/* REDOX Left Logo Badge Pill */}
        <Link 
          href="/" 
          className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/15 bg-zinc-950/70 backdrop-blur-md hover:border-[#ff5528]/60 transition-all group shadow-lg shadow-black/40"
        >
          <div className="w-8 h-8 rounded-full bg-[#ff5528] flex items-center justify-center font-black text-black text-sm tracking-tighter shadow-md">
            O
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-black tracking-wide text-white uppercase group-hover:text-[#ff5528] transition-colors">
              THE OUTLINE
            </span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase pt-0.5">
              AGENCY
            </span>
          </div>
        </Link>

        {/* REDOX Center Pill Navigation Bar */}
        <nav className="hidden md:flex items-center gap-1.5 border border-white/15 bg-zinc-950/80 px-4 py-2.5 rounded-full backdrop-blur-xl shadow-2xl shadow-black/60">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-[#ff5528]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* REDOX Right Action Button Pill (Let's Talk) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-7 py-3 rounded-full bg-white hover:bg-[#ff5528] text-black hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-[#ff5528]/30 flex items-center gap-2 group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full bg-zinc-900 border border-white/15 text-white hover:text-[#ff5528] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111115] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold uppercase tracking-wider text-zinc-200 hover:text-[#ff5528] flex items-center justify-between border-b border-white/5 pb-2.5"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ff5528]" />
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center rounded-full bg-[#ff5528] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#ff5528]/30 mt-2"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

