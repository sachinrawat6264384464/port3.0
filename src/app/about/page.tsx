import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { BrandIntro } from '@/components/BrandIntro';
import { TypographyStatements } from '@/components/TypographyStatements';
import { TrustedFootprints } from '@/components/TrustedFootprints';
import { BRAND, CONTACTS } from '@/data/content';
import { Sparkles, ArrowUpRight, Compass, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Our Studio & Philosophy | The Outline',
  description: 'The Outline is where strategy meets aesthetics. We bring clarity to brands through design with direction.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Page Header Banner */}
      <section className="pt-36 pb-16 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BRAND PHILOSOPHY & FOUNDERS</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none">
          About <span className="text-orange-500 italic">The Outline</span>
        </h1>

        <p className="text-xl sm:text-3xl text-zinc-300 max-w-4xl font-light leading-relaxed">
          &ldquo;{BRAND.positioningStatement}&rdquo;
        </p>
      </section>

      {/* Brand Intro Core Section */}
      <BrandIntro />

      {/* Philosophy Statement Quotes */}
      <TypographyStatements />

      {/* Founder Alignment Breakdown */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
            FOUNDER-LED ALIGNMENT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Direct Leadership & Intent
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            At The Outline, you work directly with our founders Ravin Kothari and Lakshita Kothari. No middle managers, no distorted vision.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CONTACTS.map((c) => (
            <div key={c.name} className="p-8 rounded-3xl bg-zinc-900/60 border border-orange-500/30 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
                {c.name[0]}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white uppercase">{c.name}</h3>
                <p className="text-xs font-mono text-orange-400">{c.title}</p>
              </div>
              <p className="text-xs text-zinc-400 font-mono pt-2 border-t border-white/5">
                {c.email} // +91 {c.phone}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Footprints */}
      <TrustedFootprints />

      {/* CTA Box */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto border-t border-white/10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-orange-950/40 via-zinc-900/90 to-zinc-950 border border-orange-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
              Ready To Outline Your Story?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300">
              {BRAND.ctaSubheadline}
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 shrink-0 shadow-xl shadow-orange-600/30"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
