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
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[180px] pointer-events-none" />

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
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                  (03) // PORTFOLIO ARCHIVE &amp; SELECTED WORK
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-sans">
                PROJECT <span className="font-editorial italic font-normal text-zinc-400 lowercase">showcase</span>
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

        {/* Filter Categories Bar - Borderless Glassmorphic */}
        <div className="flex flex-wrap items-center gap-3 p-2 rounded-3xl bg-white/[0.02] border-0 backdrop-blur-md">
          <div className="flex items-center gap-2 px-4 text-xs font-mono text-zinc-400 uppercase tracking-widest shrink-0 py-2">
            <Filter className="w-3.5 h-3.5 text-white" />
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
                  className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border-0 ${
                    isActive
                      ? 'bg-white text-black font-black shadow-xl shadow-white/10 scale-105'
                      : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
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

        {/* Projects Grid with Borderless Edge-to-Edge HD Formatting & Smooth Motion Transitions */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.08, ease: 'easeOut' }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-transparent border-0 hover:bg-white/[0.02] p-3 sm:p-8 space-y-3 sm:space-y-6 transition-all duration-500 overflow-hidden relative flex flex-col justify-between"
                >
                  {/* Project Image Container - Edge to Edge HD Borderless */}
                  <div className="relative w-full h-[150px] sm:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950 border-0 transition-all duration-500 shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[1.05] contrast-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Category Overlay Tag */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border-0 text-[8px] sm:text-[11px] font-mono text-zinc-200 uppercase tracking-wider font-bold truncate max-w-[85%]">
                      {project.category}
                    </div>

                    {/* Quick Preview Hover Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:flex">
                      <span className="px-5 py-2.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl group-hover:scale-105 transition-transform">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Project</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content Info */}
                  <div className="space-y-2 sm:space-y-4 pt-1 sm:pt-2 flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xs sm:text-3xl font-black text-white uppercase tracking-wide group-hover:text-zinc-200 transition-colors font-sans line-clamp-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-[10px] sm:text-sm text-zinc-400 font-mono font-semibold italic mt-0.5 sm:mt-1 truncate">
                          &ldquo;{project.subtitle}&rdquo;
                        </p>
                      </div>

                      <Link
                        href={`/projects/${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border-0 hover:bg-white hover:text-black text-white transition-all shrink-0 flex items-center justify-center group/btn"
                        title="View Full Case Study Page"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>

                    <p className="text-[10px] sm:text-sm text-zinc-300 line-clamp-2 leading-snug sm:leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags List */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 pt-1 sm:pt-2 border-t border-white/5">
                        {project.tags.slice(0, 2).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border-0 text-[8px] sm:text-[11px] font-mono text-zinc-400 uppercase truncate max-w-full"
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
