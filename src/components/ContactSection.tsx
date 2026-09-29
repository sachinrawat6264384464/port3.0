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
          className="p-5 sm:p-16 lg:p-20 rounded-2xl sm:rounded-3xl bg-transparent border border-white/10 sm:border-0 hover:bg-white/[0.02] transition-all duration-500 space-y-6 sm:space-y-10 relative overflow-hidden group"
        >
          <div className="space-y-3 sm:space-y-5 max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest shadow-md">
              <span>START A BRAND COLLABORATION</span>
            </div>
            <h2 className="text-2xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.08] font-sans">
              READY TO GIVE YOUR BRAND <span className="font-editorial italic font-normal text-zinc-400 lowercase">the clarity, structure &amp; identity</span> IT TRULY DESERVES?
            </h2>
            <p className="text-sm sm:text-2xl text-zinc-300 font-light leading-relaxed">
              {BRAND.ctaSubheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 pt-4 sm:pt-6 border-t border-white/10 relative z-10 w-full sm:w-auto">
            <MagneticButton>
              <a
                href="mailto:ravin@theoutline.in"
                data-cursor="EMAIL"
                className="w-full sm:w-auto justify-center px-6 py-3.5 sm:px-9 sm:py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center gap-3 group text-center"
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
                className="w-full sm:w-auto justify-center px-6 py-3.5 sm:px-9 sm:py-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center gap-3 backdrop-blur-md text-center"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>+91 93000 12365</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Executive Founder Leadership Contact Cards */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-wider font-sans">
                  DIRECT LEADERSHIP CONTACTS
                </h3>
                <p className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest pt-0.5">
                  Speak Directly With The Outline Founders
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono w-fit">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>Available for Consultations</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-8">
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
                  className="p-3.5 sm:p-12 rounded-2xl sm:rounded-3xl bg-transparent border border-white/10 sm:border-0 hover:bg-white/[0.02] transition-all duration-500 space-y-4 sm:space-y-8 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-4 sm:space-y-6 relative z-10">
                    {/* Founder Header with Monogram Crest */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                        {/* Executive Monogram Avatar Crest */}
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white font-mono font-black text-xs sm:text-xl shadow-lg shrink-0">
                          {initials}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-3xl font-black text-white uppercase tracking-tight font-sans group-hover:text-zinc-200 transition-colors truncate">
                            {person.name}
                          </h4>
                          <span className="text-[9px] sm:text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest block truncate">
                            {person.title}
                          </span>
                        </div>
                      </div>

                      <div className="p-2 rounded-xl bg-white/5 border-0 text-zinc-400 group-hover:text-white transition-colors hidden sm:block shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Direct Contact Actions Box */}
                    <div className="space-y-2.5 sm:space-y-4 pt-3 sm:pt-4 border-t border-white/10">
                      {/* Email Row */}
                      <div className="flex items-center justify-between gap-2 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group/row">
                        <a
                          href={`mailto:${person.email}`}
                          data-cursor="EMAIL"
                          className="flex items-center gap-2 sm:gap-3.5 text-[10px] sm:text-base font-mono text-zinc-200 hover:text-white transition-colors min-w-0 flex-1"
                        >
                          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/5 text-white border-0 shrink-0">
                            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                          <span className="font-bold truncate">{person.email}</span>
                        </a>

                        <button
                          onClick={() => handleCopy(person.email)}
                          className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
                          title="Copy Email"
                        >
                          {copiedEmail === person.email ? (
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          )}
                        </button>
                      </div>

                      {/* Call Row */}
                      <div className="flex items-center justify-between gap-2 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group/row">
                        <a
                          href={`tel:${person.phoneRaw}`}
                          data-cursor="CALL"
                          className="flex items-center gap-2 sm:gap-3.5 text-[10px] sm:text-base font-mono text-zinc-200 hover:text-white transition-colors min-w-0 flex-1"
                        >
                          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/5 text-white border-0 shrink-0">
                            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                          <span className="font-bold truncate">+91 {person.phone}</span>
                        </a>

                        <a
                          href={`tel:${person.phoneRaw}`}
                          className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white text-black hover:bg-zinc-200 transition-colors shrink-0"
                          title="Direct Call"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="pt-3 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[8px] sm:text-[11px] font-mono text-zinc-400 uppercase tracking-widest relative z-10">
                    <span className="flex items-center gap-1.5 truncate">
                      <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" />
                      <span className="truncate">Executive Support</span>
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
