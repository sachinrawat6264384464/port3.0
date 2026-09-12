'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACTS, BRAND } from '@/data/content';
import { Mail, Phone, ArrowUpRight, Sparkles, UserCheck, Copy, Check, ShieldCheck, MessageSquare } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-10 lg:px-16 bg-[#040406] border-t border-white/10 relative overflow-hidden">
      {/* Background Glowing Ambient Light Bulbs */}
      <div className="absolute top-1/3 left-10 w-[800px] h-[500px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-20 relative z-10">
        
        {/* Main CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-16 lg:p-20 rounded-3xl bg-gradient-to-r from-orange-950/50 via-zinc-950 to-black border border-orange-500/40 shadow-[0_20px_60px_rgba(255,87,34,0.15)] space-y-10 relative overflow-hidden group"
        >
          {/* Top Accent Glowing Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />

          <div className="space-y-5 max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-widest shadow-md">
              <Sparkles className="w-4 h-4" />
              <span>START A BRAND COLLABORATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-tight font-heading">
              {BRAND.ctaHeadline}
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed">
              {BRAND.ctaSubheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-white/10 relative z-10">
            <MagneticButton>
              <a
                href="mailto:ravin@theoutline.in"
                data-cursor="EMAIL"
                className="px-9 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-orange-600/40 flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4" />
                <span>Email Founder Directly</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="tel:+919300012365"
                data-cursor="CALL"
                className="px-9 py-4 rounded-full bg-zinc-900/90 border border-white/15 text-white hover:border-orange-500 font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-3 backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span>Call: +91 93000 12365</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Executive Founder Leadership Contact Cards */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider font-heading">
                  DIRECT LEADERSHIP CONTACTS
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest pt-0.5">
                  Speak Directly With The Outline Founders
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Consultations</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONTACTS.map((person, idx) => {
              const initials = person.name
                .split(' ')
                .map((n) => n[0])
                .join('');

              return (
                <motion.div
                  key={person.email}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-950 via-[#0a0a0e] to-black border border-white/15 hover:border-orange-500/60 transition-all duration-500 space-y-8 flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(255,87,34,0.2)] group relative overflow-hidden"
                >
                  {/* Top Glowing Ribbon & Ambient Lighting */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-transparent group-hover:via-orange-500 transition-all duration-500" />
                  <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-orange-600/0 group-hover:bg-orange-600/15 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    {/* Founder Header with Monogram Crest */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* Executive Monogram Avatar Crest */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-950/60 border border-orange-500/40 flex items-center justify-center text-orange-400 font-mono font-black text-xl shadow-lg shadow-orange-950/40 group-hover:scale-105 group-hover:border-orange-500 transition-all duration-300">
                          {initials}
                        </div>
                        <div>
                          <h4 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-heading group-hover:text-orange-400 transition-colors">
                            {person.name}
                          </h4>
                          <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                            {person.title} — THE OUTLINE
                          </span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 group-hover:text-orange-400 transition-colors hidden sm:block">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Direct Contact Actions Box */}
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      {/* Email Row */}
                      <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-orange-500/40 transition-colors group/row">
                        <a
                          href={`mailto:${person.email}`}
                          data-cursor="EMAIL"
                          className="flex items-center gap-3.5 text-sm sm:text-base font-mono text-zinc-200 hover:text-orange-400 transition-colors truncate"
                        >
                          <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            <Mail className="w-4 h-4" />
                          </div>
                          <span className="font-bold truncate">{person.email}</span>
                        </a>

                        <button
                          onClick={() => handleCopy(person.email)}
                          className="p-2 rounded-xl bg-white/5 hover:bg-orange-500/20 text-zinc-400 hover:text-orange-400 transition-colors shrink-0"
                          title="Copy Email"
                        >
                          {copiedEmail === person.email ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Call Row */}
                      <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-orange-500/40 transition-colors group/row">
                        <a
                          href={`tel:${person.phoneRaw}`}
                          data-cursor="CALL"
                          className="flex items-center gap-3.5 text-sm sm:text-base font-mono text-zinc-200 hover:text-orange-400 transition-colors"
                        >
                          <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="font-bold">Call : +91 {person.phone}</span>
                        </a>

                        <a
                          href={`tel:${person.phoneRaw}`}
                          className="p-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white transition-colors shrink-0"
                          title="Direct Call"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase tracking-widest relative z-10">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-orange-500" />
                      <span>Direct Executive Support</span>
                    </span>
                    <span className="text-orange-400 font-bold">ESTD STUDIO</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
