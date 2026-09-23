'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Filter, Eye, Layers } from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = ['All', 'Packaging', 'Presentations', 'Annual Reports', 'Logos', 'Outdoor & Print', 'Brochures'];

interface ProjectShowcaseProps {
  showHeader?: boolean;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ showHeader = true }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return PROJECTS.length;
    return PROJECTS.filter((p) => p.category === cat).length;
  };

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] relative overflow-hidden">
      
      {/* Background Subtle Ambient Light */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#ff5528]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        {showHeader && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5528] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                  (03) // PORTFOLIO ARCHIVE & SELECTED WORK
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-sans">
                PROJECT <span className="text-[#ff5528]">SHOWCASE</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-zinc-400 max-w-lg text-sm sm:text-base leading-relaxed"
            >
              Diverse brand collaborations across packaging, presentations, annual reports, logos, billboards, and brochure design.
            </motion.p>
          </div>
        )}

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center gap-3 p-2 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2 px-4 text-xs font-mono text-zinc-400 uppercase tracking-widest border-r border-white/10 shrink-0 py-2">
            <Filter className="w-3.5 h-3.5 text-[#ff5528]" />
            <span>CATEGORIES:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count = getCategoryCount(cat);

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#ff5528] text-black shadow-lg shadow-[#ff5528]/25 font-black'
                      : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-zinc-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-[#ff5528]/60 p-6 sm:p-8 space-y-6 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff5528]/10 overflow-hidden relative"
                >
                  {/* Framing Corner Indicators */}
                  <div className="absolute top-4 left-4 text-zinc-700 font-mono text-xs pointer-events-none select-none">┌</div>
                  <div className="absolute top-4 right-4 text-zinc-700 font-mono text-xs pointer-events-none select-none">┐</div>
                  <div className="absolute bottom-4 left-4 text-zinc-700 font-mono text-xs pointer-events-none select-none">└</div>
                  <div className="absolute bottom-4 right-4 text-zinc-700 font-mono text-xs pointer-events-none select-none">┘</div>

                  {/* Glowing Top Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff5528] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Project Image Container */}
                  <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden bg-black/60 border border-white/10 group-hover:border-white/20 transition-colors">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-700 p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category Overlay Tag */}
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#ff5528] uppercase tracking-wider font-bold">
                      {project.category}
                    </div>

                    {/* Quick Preview Hover Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="px-5 py-2.5 rounded-full bg-[#ff5528] text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#ff5528]/30">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Project</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content Info */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide group-hover:text-[#ff5528] transition-colors font-sans">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#ff5528] font-mono font-semibold italic mt-1">
                          &ldquo;{project.subtitle}&rdquo;
                        </p>
                      </div>

                      <Link
                        href={`/projects/${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#ff5528] hover:text-black text-white transition-all shrink-0 flex items-center justify-center group/btn"
                        title="View Full Case Study Page"
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags List */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
