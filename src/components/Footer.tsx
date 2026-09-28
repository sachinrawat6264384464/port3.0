'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080b] text-zinc-300 pt-24 pb-12 px-6 sm:px-10 lg:px-16 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-white/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1750px] w-full mx-auto space-y-16 relative z-10">
        
        {/* Top Header Block: Studio Branding & Interactive Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-white/10">
          
          {/* Left Column: Brand Logo & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center font-black text-black text-2xl shadow-xl shadow-white/10 group-hover:scale-105 transition-transform">
                O
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase font-sans">
                  THE OUTLINE
                </span>
                <span className="text-xs font-mono tracking-[0.3em] text-zinc-400 uppercase">
                  BRANDING AGENCY
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-md">
              A strategy-driven branding studio operating at the intersection of business strategy, bespoke typography, and high-impact visual architecture.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Available for New Projects</span>
              </span>
            </div>
          </div>

          {/* Right Column: Newsletter Subscription Box */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/30 text-white text-xs font-mono uppercase">
                <span>EXECUTIVE DISPATCH</span>
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase">QUARTERLY INSIGHTS</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-sans">
                Subscribe to Studio Insights
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Receive curated intelligence on brand strategy, packaging innovations, and visual design trends. Zero spam.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <Mail className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email address..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-black/60 border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-white transition-colors font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 shrink-0 flex items-center justify-center gap-2 shadow-lg shadow-white/10 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-mono text-white pt-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Thank you! You are now subscribed to executive updates.</span>
                </div>
              ) : (
                <p className="text-[11px] font-mono text-zinc-500">
                  By subscribing, you agree to our{' '}
                  <a href="#privacy" className="text-zinc-400 underline hover:text-white">
                    Privacy Policy & Terms
                  </a>
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Middle Block: 4 Structured Navigation & Expertise Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-16 border-b border-white/10 text-sm">
          
          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-zinc-400 text-xs sm:text-sm font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Studio</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services & Pricing</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Selected Projects</Link></li>
              <li><Link href="/why-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Executive Contact</Link></li>
            </ul>
          </div>

          {/* Expertise Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              DISCIPLINE & CRAFT
            </h4>
            <ul className="space-y-2.5 text-zinc-400 text-xs sm:text-sm font-medium">
              <li><Link href="/services" className="hover:text-white transition-colors">Brand Architecture</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Packaging Identity</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Investor Pitch Decks</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Outdoor Billboard Media</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Annual Reports & Print</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Spatial Signage Systems</Link></li>
            </ul>
          </div>

          {/* Regional Hubs Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              REGIONAL HUBS
            </h4>
            <ul className="space-y-2.5 text-zinc-400 text-xs sm:text-sm font-medium">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                <span>Delhi NCR (HQ)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>Mumbai Financial Center</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>Bengaluru Tech Hub</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>Madhya Pradesh Region</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>London Desk</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              DIRECT CONTACT
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">EMAIL</span>
                <a href="mailto:ravin@theoutline.in" className="text-white hover:text-zinc-300 transition-colors font-medium">
                  ravin@theoutline.in
                </a>
              </li>
              <li>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">DIRECT PHONE</span>
                <a href="tel:+919876543210" className="text-white hover:text-zinc-300 transition-colors font-medium">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">STUDIO HOURS</span>
                <span className="text-zinc-300">Mon - Sat: 09:30 - 19:30 IST</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Large Brand Watermark - Massive responsive SVG text */}
        <div className="py-8 w-full select-none pointer-events-none flex items-center justify-center overflow-hidden">
          <svg className="w-full h-auto max-h-[260px] sm:max-h-[300px] md:max-h-[340px] px-2" viewBox="0 0 920 95" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="footerBrandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.35)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.7)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.35)" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              fill="url(#footerBrandGradient)"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1.8"
              style={{ fontFamily: 'var(--font-sans), sans-serif', fontWeight: 900, letterSpacing: '-0.01em' }}
              className="text-[98px] uppercase"
            >
              OUTLINE AGENCY
            </text>
          </svg>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-white font-bold">The Outline Agency</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Engagement</Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-lg group cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
