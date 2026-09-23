import React from 'react';
import { LOGOS } from '@/data/projects';
import { BRAND } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return LOGOS.map((l) => ({
    id: l.id,
  }));
}

interface LogoPageProps {
  params: Promise<{ id: string }>;
}

export default async function LogoDetailPage({ params }: LogoPageProps) {
  const { id } = await params;
  const logo = LOGOS.find((l) => l.id === id);

  if (!logo) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-8">
        <Link
          href="/#logos"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-orange-500 hover:text-orange-500 text-xs font-mono uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back To Brand Marks</span>
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase">
            <span>{logo.category} // Brand Identity Mark</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none">
            {logo.name}
          </h1>

          <p className="text-xl sm:text-3xl text-orange-400 font-semibold italic">
            &ldquo;Logos that Speak Silently yet Powerfully&rdquo;
          </p>

          <p className="text-base sm:text-xl text-zinc-300 max-w-4xl font-light leading-relaxed">
            {logo.description}
          </p>
        </div>
      </section>

      {/* Single High-Impact Showcase Image */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto py-6">
        <div className="relative w-full h-[400px] sm:h-[600px] rounded-3xl overflow-hidden border border-orange-500/30 bg-black shadow-2xl group flex items-center justify-center p-8">
          <Image
            src={logo.image}
            alt={logo.name}
            fill
            className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 filter drop-shadow-[0_10px_30px_rgba(255,87,34,0.3)]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Identity Story & Details */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10">
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>IDENTITY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Design Philosophy
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Crafted strictly to encapsulate the core essence of {logo.name} in the {logo.category} sector. Every curve, geometry, and color contrast was refined to ensure high visibility across digital platforms, signage, and merchandise.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white uppercase flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              Brand Mark Specifications
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm font-mono text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Vector Geometry: Scalable without loss of precision from favicons to building facades.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Custom Color Systems: Curated contrast palette engineered for high recall.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Trademark Protection Ready: Unique visual geometry crafted for proprietary registration.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto border-t border-white/10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-orange-950/40 via-zinc-900/90 to-zinc-950 border border-orange-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase">
              Need A Logo For Your Brand?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300">
              {BRAND.ctaSubheadline}
            </p>
          </div>
          <a
            href="mailto:ravin@theoutline.in"
            className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 shrink-0 shadow-xl shadow-orange-600/30"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
