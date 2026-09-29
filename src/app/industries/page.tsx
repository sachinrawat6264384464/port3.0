import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { IndustriesServed } from '@/components/IndustriesServed';
import { BRAND } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Industries We Serve | The Outline',
  description: 'Cross-industry brand solutions: Retail & FMCG, Hospitality, Real Estate, Industrial, FMCG, Media & Corporate.',
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Page Header Banner */}
      <section className="pt-36 sm:pt-44 pb-16 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5528]/10 border border-[#ff5528]/30 text-[#ff5528] text-xs font-mono font-bold uppercase tracking-widest">
          <span>CROSS-SECTOR EXPERTISE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight leading-none font-sans">
          Industries <span className="font-editorial italic font-normal text-[#ff5528]">We Serve</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 max-w-4xl font-normal leading-relaxed">
          Tailored visual architectures for FMCG brands, hospitality resorts, real estate developments, industrial conglomerates, and corporate institutions.
        </p>
      </section>

      {/* Cross-Industry Cards Grid */}
      <IndustriesServed />

      {/* CTA Box */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto border-t border-white/10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-zinc-950 via-[#0d0d12] to-black border border-white/15 hover:border-[#ff5528]/50 transition-all duration-500 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff5528] via-amber-500 to-transparent" />

          <div className="space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
              Operating In A Unique Sector?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              We tailor visual systems to your specific target demographic and market dynamics.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#ff5528] hover:bg-white text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shrink-0 shadow-xl shadow-[#ff5528]/20 group/btn relative z-10"
          >
            <span>Discuss Your Industry</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
