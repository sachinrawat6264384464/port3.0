'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Filter } from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = ['All', 'Packaging', 'Presentations', 'Annual Reports', 'Logos', 'Outdoor & Print', 'Brochures'];

export const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1700px] w-full mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Selected Portfolio
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
              Project <span className="text-orange-500 italic">Showcase</span>
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

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 pr-4 text-xs font-mono text-zinc-500 uppercase">
            <Filter className="w-3.5 h-3.5 text-orange-500" />
            <span>Filter:</span>
          </div>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Alternate Left/Right Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, x: isEven ? -80 : 80, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: (idx % 2) * 0.15 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-orange-500/50 p-6 sm:p-8 space-y-6 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-950/20 overflow-hidden relative"
                >
                  {/* Glowing Top Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500 transition-all duration-500" />

                  {/* Project Image Container */}
                  <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden bg-black border border-white/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-700 p-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-orange-400 uppercase tracking-wider">
                      {project.category}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>
                      <Link
                        href={`/projects/${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-full bg-white/5 hover:bg-orange-600 text-zinc-400 hover:text-white transition-colors shrink-0 flex items-center gap-1"
                        title="View Full Case Study Page"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-xs sm:text-sm text-orange-400 font-semibold italic">
                      &ldquo;{project.subtitle}&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-2 flex items-center gap-4 text-xs font-mono">
                      <span className="text-orange-500 font-bold hover:underline">
                        Open Full Case Study Page →
                      </span>
                    </div>
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
