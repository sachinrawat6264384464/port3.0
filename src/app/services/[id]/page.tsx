import React from 'react';
import { SERVICES, BRAND } from '@/data/content';
import { PROJECTS } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Layers, HelpCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  // Find related projects for this service
  const relatedProjects = PROJECTS.filter(
    (p) => p.category.toLowerCase().includes(service.title.toLowerCase().split(' ')[0]) || p.featured
  ).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-8">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-orange-500 hover:text-orange-500 text-xs font-mono uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back To Capabilities</span>
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase">
            <span>Service {service.number} // Core Capability</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none">
            {service.title}
          </h1>

          <p className="text-xl sm:text-3xl text-orange-400 font-semibold italic max-w-4xl">
            &ldquo;{service.statement}&rdquo;
          </p>

          <p className="text-base sm:text-xl text-zinc-300 max-w-4xl font-light leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Single High-Impact Showcase Image */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto py-6">
        <div className="relative w-full h-[400px] sm:h-[600px] rounded-3xl overflow-hidden border border-orange-500/30 bg-black shadow-2xl group">
          <Image
            src={service.previewImage}
            alt={service.title}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Deliverables & Strategic Scope Breakdown */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10">
        
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>CAPABILITY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Deliverables & Scope
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Every {service.title.toLowerCase()} strategy executed by The Outline is tailored to communicate value, project market authority, and strengthen visual recall across all touchpoints.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white uppercase flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              What We Deliver
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                  <span className="text-sm font-semibold text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Process & Execution */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-10 border-t border-white/10">
        <div className="space-y-2">
          <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
            OUR METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase">
            How We Execute {service.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
            <span className="text-2xl font-black text-orange-500 font-mono">01</span>
            <h3 className="text-lg font-bold text-white uppercase">Discovery & Strategy</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We analyze founder intent, competitive positioning, and target perception before creating any visual concept.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
            <span className="text-2xl font-black text-orange-500 font-mono">02</span>
            <h3 className="text-lg font-bold text-white uppercase">Concept & Precision</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We craft high-precision visual systems, dielines, layouts, and typography grids engineered for impact.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
            <span className="text-2xl font-black text-orange-500 font-mono">03</span>
            <h3 className="text-lg font-bold text-white uppercase">Production & Delivery</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Flawless print specs, digital master assets, and production oversight to guarantee premium final execution.
            </p>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-10 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                SELECTED WORK
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase">
                Featured Case Studies
              </h2>
            </div>
            <Link
              href="/#work"
              className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <span>View All</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((proj) => (
              <Link
                key={proj.id}
                href={`/projects/${proj.id}`}
                className="group rounded-3xl bg-zinc-900 border border-white/10 hover:border-orange-500 overflow-hidden transition-all duration-500 p-6 flex flex-col justify-between"
              >
                <div className="relative w-full h-[280px] rounded-2xl overflow-hidden bg-black mb-6">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono text-orange-400 uppercase">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Direct Contact CTA */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto border-t border-white/10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-orange-950/40 via-zinc-900/90 to-zinc-950 border border-orange-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase">
              Need {service.title}?
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
