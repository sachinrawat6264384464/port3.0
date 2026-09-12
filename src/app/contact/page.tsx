import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { ContactSection } from '@/components/ContactSection';
import { BRAND } from '@/data/content';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Start A Project | The Outline',
  description: 'Connect directly with Ravin Kothari and Lakshita Kothari to outline your brand strategy and visual identity.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Page Header Banner */}
      <section className="pt-36 pb-8 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START A CONVERSATION</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none">
          Contact <span className="text-orange-500 italic">The Outline</span>
        </h1>

        <p className="text-xl sm:text-3xl text-zinc-300 max-w-4xl font-light leading-relaxed">
          {BRAND.ctaHeadline}
        </p>
      </section>

      {/* Direct Contact Cards & Inquiry Form */}
      <ContactSection />

      <Footer />
    </main>
  );
}
