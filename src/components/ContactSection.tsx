'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACTS, BRAND } from '@/data/content';
import { Mail, Phone, ArrowUpRight, UserCheck, Copy, Check, ShieldCheck, MessageSquare } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[800px] h-[500px] bg-white/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[800px] h-[500px] bg-white/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-20 relative z-10">

        {/* Main CTA Banner - Borderless Transparent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-16 lg:p-20 rounded-3xl bg-transparent border-0 hover:bg-white/[0.02] transition-all duration-500 space-y-10 relative overflow-hidden group"
        >
          <div className="space-y-5 max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border-0 text-zinc-300 text-xs font-mono uppercase tracking-widest shadow-md">
              <span>START A BRAND COLLABORATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.08] font-sans">
              READY TO GIVE YOUR BRAND <span className="font-editorial italic font-normal text-zinc-400 lowercase">the clarity, structure &amp; identity</span> IT TRULY DESERVES?
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
                className="px-9 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center gap-3 group"
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
                className="px-9 py-4 rounded-full bg-white/5 border-0 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-3 backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call: +91 93000 12365</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Executive Founder Leadership Contact Cards */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/5 border-0 text-white">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider font-sans">
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
                  className="p-8 sm:p-12 rounded-3xl bg-transparent border-0 hover:bg-white/[0.02] transition-all duration-500 space-y-8 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-6 relative z-10">
                    {/* Founder Header with Monogram Crest */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* Executive Monogram Avatar Crest */}
                        <div className="w-14 h-14 rounded-2xl bg-white/10 border-0 flex items-center justify-center text-white font-mono font-black text-xl shadow-lg group-hover:scale-105 transition-all duration-300">
                          {initials}
                        </div>
                        <div>
                          <h4 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-sans group-hover:text-zinc-200 transition-colors">
                            {person.name}
                          </h4>
                          <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                            {person.title} — THE OUTLINE
                          </span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border-0 text-zinc-400 group-hover:text-white transition-colors hidden sm:block">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Direct Contact Actions Box */}
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      {/* Email Row */}
                      <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white/[0.02] border-0 hover:bg-white/[0.04] transition-colors group/row">
                        <a
                          href={`mailto:${person.email}`}
                          data-cursor="EMAIL"
                          className="flex items-center gap-3.5 text-sm sm:text-base font-mono text-zinc-200 hover:text-white transition-colors truncate"
                        >
                          <div className="p-2 rounded-xl bg-white/5 text-white border-0">
                            <Mail className="w-4 h-4" />
                          </div>
                          <span className="font-bold truncate">{person.email}</span>
                        </a>

                        <button
                          onClick={() => handleCopy(person.email)}
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
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
                      <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white/[0.02] border-0 hover:bg-white/[0.04] transition-colors group/row">
                        <a
                          href={`tel:${person.phoneRaw}`}
                          data-cursor="CALL"
                          className="flex items-center gap-3.5 text-sm sm:text-base font-mono text-zinc-200 hover:text-white transition-colors"
                        >
                          <div className="p-2 rounded-xl bg-white/5 text-white border-0">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="font-bold">Call : +91 {person.phone}</span>
                        </a>

                        <a
                          href={`tel:${person.phoneRaw}`}
                          className="p-2 rounded-xl bg-white text-black hover:bg-zinc-200 transition-colors shrink-0"
                          title="Direct Call"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400 uppercase tracking-widest relative z-10">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-white" />
                      <span>Direct Executive Support</span>
                    </span>
                    <span className="text-zinc-400 font-bold">ESTD STUDIO</span>
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
