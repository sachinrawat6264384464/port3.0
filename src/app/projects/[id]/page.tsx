import React from 'react';
import { PROJECTS } from '@/data/projects';
import { BRAND, CONTACTS } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Mail, Phone, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Top Banner Spacing & Back Button */}
      <section className="pt-32 pb-12 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-orange-500 hover:text-orange-500 text-xs font-mono uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back To Portfolio</span>
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase">
            <span>{project.category} Case Study</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none">
            {project.title}
          </h1>

          <p className="text-xl sm:text-3xl text-orange-400 font-semibold italic">
            &ldquo;{project.subtitle}&rdquo;
          </p>

          <p className="text-base sm:text-xl text-zinc-300 max-w-4xl font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Meta Tags */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* Full-Bleed Main Project Hero Image */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto py-8">
        <div className="relative w-full h-[400px] sm:h-[650px] rounded-3xl overflow-hidden border border-orange-500/30 bg-black shadow-2xl group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      </section>

      {/* Strategy & Execution Breakdown strictly from PDF */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10">
        
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>BRAND ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Strategy & Execution
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {BRAND.aboutDescription}
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white uppercase flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              Key Project Objectives
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm font-mono text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Strategy-Driven Design: Business goals transformed into structured visual systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Founder-Led Brand Alignment: Ensured brand identity matches growth vision.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>One Brand Voice: Consistent message across retail, outdoor, print, and digital.</span>
              </li>
            </ul>
          </div>
        </div>

      </section>

      {/* Additional Visuals Gallery */}
      {project.additionalImages && project.additionalImages.length > 0 && (
        <section className="py-16 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-10 border-t border-white/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              VISUAL ASSETS & TOUCHPOINTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase">
              Campaign Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.additionalImages.map((img, idx) => (
              <div
                key={idx}
                className="relative w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-black group hover:border-orange-500/50 transition-colors"
              >
                <Image
                  src={img}
                  alt={`${project.title} gallery asset ${idx + 1}`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Direct Contact CTA */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto border-t border-white/10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-orange-950/40 via-zinc-900/90 to-zinc-950 border border-orange-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase">
              Ready To Outline Your Brand?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300">
              Let&apos;s outline a brand that speaks with purpose and stands out with confidence.
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
