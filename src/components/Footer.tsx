'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0b0e] text-zinc-300 pt-20 pb-12 px-6 sm:px-10 lg:px-16 border-t border-white/10 relative">
      <div className="max-w-[1750px] w-full mx-auto space-y-16">
        
        {/* Top Block matching REDOX Image 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-white/10">
          
          {/* Left Column: Stylized Logo */}
          <div className="lg:col-span-6 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#ff5528] flex items-center justify-center font-black text-black text-3xl shadow-xl">
              O
            </div>
            <div className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
                THE OUTLINE
              </span>
              <span className="text-sm font-mono tracking-[0.3em] text-zinc-400 uppercase pt-1">
                A G E N C Y
              </span>
            </div>
          </div>

          {/* Right Column: Description & Email */}
          <div className="lg:col-span-6 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl lg:ml-auto">
            The Outline is a startup digital agency of design, development and marketing that works friendly with global client{' '}
            <a href="mailto:ravin@theoutline.in" className="text-white underline decoration-zinc-500 hover:text-[#ff5528] transition-colors">
              ravin@theoutline.in
            </a>
          </div>

        </div>

        {/* Middle Block: Privacy Statement on Left, 3 Columns on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-16">
          
          {/* Left: Newsletter / Privacy Notice */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">
              By subscribing you agree with our{' '}
              <a href="#privacy" className="text-white underline hover:text-[#ff5528] transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Right: 3 Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-8 text-xs sm:text-sm font-medium text-zinc-400 lg:justify-items-end">
            
            {/* Company Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">Agency</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#pillars" className="hover:text-white transition-colors">Creative</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>

            {/* Office Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Office</h4>
              <ul className="space-y-2">
                <li><span className="hover:text-white transition-colors">Madhya Pradesh</span></li>
                <li><span className="hover:text-white transition-colors">Mumbai</span></li>
                <li><span className="hover:text-white transition-colors">Delhi</span></li>
                <li><span className="hover:text-white transition-colors">London</span></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Floating Scroll to top */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p className="w-full text-center">
            © {new Date().getFullYear()} <span className="text-zinc-300 font-bold">The Outline</span>. All right reserved
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-black hover:bg-[#ff5528] hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

