'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MagneticButton } from './MagneticButton';

const NAV_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Pillars', href: '/pillars' },
  { name: 'Work', href: '/work' },
  { name: 'Industries', href: '/industries' },
  { name: 'Logos', href: '/logos' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 py-5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-[1700px] w-full mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Logo strictly from PDF */}
        <Link href="/" className="group flex items-center gap-3.5">
          <div className="relative w-11 h-11 rounded-full border border-orange-500/40 bg-orange-500/10 flex items-center justify-center transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500/20 shadow-md shadow-orange-950/30">
            <span className="text-orange-500 font-extrabold text-xl">O</span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-wider text-white group-hover:text-orange-500 transition-colors uppercase font-heading">
              The Outline
            </span>
            <span className="text-[10px] tracking-[0.2em] text-zinc-400 font-mono uppercase">
              strategy | design | direction
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 bg-zinc-950/90 border border-white/15 px-9 py-4 rounded-full backdrop-blur-xl shadow-xl shadow-black/50">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[13px] uppercase tracking-[0.14em] transition-all duration-300 font-bold py-1 ${
                  isActive ? 'text-orange-500 font-extrabold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-orange-500 rounded-full shadow-sm shadow-orange-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button with Magnetic Hover */}
        <div className="hidden md:flex items-center gap-4">
          <MagneticButton>
            <Link
              href="/contact"
              data-cursor="PROJECT"
              className="relative group overflow-hidden px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-600/40 flex items-center gap-2.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white hover:text-orange-500 transition-colors"
          aria-label="Toggle Mobile Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0c] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold uppercase tracking-widest flex items-center justify-between border-b border-white/5 pb-3 ${
                    pathname === link.href ? 'text-orange-500' : 'text-zinc-300 hover:text-orange-500'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-orange-500" />
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 text-center rounded-full bg-orange-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-orange-600/30"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
