'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ScrollTextSection: React.FC = () => {
  return (
    <section id="about-intro" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] text-white border-t border-b border-white/5">
      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-center justify-center text-center space-y-8">
        
        {/* Subtle corner framing indicators matching REDOX aesthetic */}
        <div className="absolute -top-4 -left-4 text-zinc-700 font-mono text-xl pointer-events-none select-none">┌</div>
        <div className="absolute -top-4 -right-4 text-zinc-700 font-mono text-xl pointer-events-none select-none">┐</div>
        <div className="absolute -bottom-4 -left-4 text-zinc-700 font-mono text-xl pointer-events-none select-none">└</div>
        <div className="absolute -bottom-4 -right-4 text-zinc-700 font-mono text-xl pointer-events-none select-none">┘</div>

        {/* Small Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff5528]" />
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase">
            WHO WE ARE // BRAND ARCHITECTURE
          </span>
        </motion.div>

        {/* Intro Paragraph: 100% Bright White, Bold & Crystal Clear Text */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-relaxed tracking-wide text-center max-w-4xl mx-auto drop-shadow-md"
        >
          We’re a dynamic startup agency specializing in innovative solutions for businesses looking to elevate their brand presence. We offer a range of services including digital marketing, branding, web development, and creative strategy to help companies grow.
        </motion.p>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-4 flex justify-center"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black hover:bg-[#ff5528] hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-[#ff5528]/40"
          >
            Learn More
          </a>
        </motion.div>

      </div>
    </section>
  );
};
