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
        
        {/* Sleek Minimal Logo (Matching Screenshot 3) */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group py-1"
        >
          <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center font-black text-black text-xs tracking-tighter shadow-md group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="flex items-center gap-2 leading-none">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans group-hover:text-zinc-300 transition-colors">
              studio<span className="font-editorial italic font-normal text-zinc-400 group-hover:text-white">rs</span>
            </span>
          </div>
        </Link>

        {/* Clean Minimalist Center Navigation (Matching Screenshot 3) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.18em] font-mono font-bold transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Minimalist Right Action Button (Matching Screenshot 3) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full border border-white/25 hover:border-white text-white hover:bg-white hover:text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-black transition-colors" />
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full bg-zinc-900 border border-white/15 text-white hover:text-white transition-colors"
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
                  className="text-base font-bold uppercase tracking-wider text-zinc-200 hover:text-white flex items-center justify-between border-b border-white/5 pb-2.5 group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:bg-zinc-200 transition-colors mt-2"
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

