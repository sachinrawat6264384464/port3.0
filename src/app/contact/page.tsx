import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { ContactSection } from '@/components/ContactSection';
import { Sparkles, MessageSquare, ShieldCheck, Mail, Phone, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Start A Project | The Outline',
  description: 'Connect directly with Ravin Kothari and Lakshita Kothari to outline your brand strategy, visual identity, and luxury packaging.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Header Banner */}
      <section className="pt-36 sm:pt-44 pb-12 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto relative z-10 border-b border-white/10">
        <div className="space-y-8">
          
          {/* Top Tag Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5528] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                (05) // DIRECT LEADERSHIP & CONSULTATION
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>AVAILABLE FOR CONSULTATIONS</span>
            </div>
          </div>

          {/* Main Giant Display Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.08] font-sans">
                LET&apos;S OUTLINE YOUR <span className="text-[#ff5528]">BRAND STORY</span>
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                Connect directly with our founders Ravin Kothari &amp; Lakshita Kothari for strategic brand direction, visual identity, packaging, and corporate presentations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Dedicated Executive Founders Contact Cards & CTA Section */}
      <ContactSection />

      <Footer />
    </main>
  );
}
