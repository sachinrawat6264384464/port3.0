'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Sparkles, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl rounded-3xl bg-zinc-950 border border-orange-500/30 p-6 md:p-10 space-y-8 shadow-2xl overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 border border-white/10 text-white hover:text-orange-500 hover:border-orange-500 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-4 pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category} Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-lg text-orange-400 font-semibold italic">
              &ldquo;{project.subtitle}&rdquo;
            </p>
            <p className="text-sm text-zinc-300 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Main High-Res Image */}
          <div className="relative w-full h-[350px] sm:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Additional Images Grid */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-orange-500" />
                Additional Campaign Visuals & Touchpoints
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.additionalImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 bg-black"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-500">
              THE OUTLINE BRAND ARCHITECTURE // {project.category.toUpperCase()}
            </span>
            <div className="flex items-center gap-3">
              <Link
                href={`/projects/${project.id}`}
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-orange-600/30"
              >
                <span>View Full Case Study Page</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="#contact"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Discuss Project</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
