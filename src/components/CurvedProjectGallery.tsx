'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { ProjectModal } from './ProjectModal';
import { ArrowUp } from 'lucide-react';

// Data structure for Exterior and Interior image sets
const galleryData: Record<'exterior' | 'interior', Project[]> = {
  exterior: [PROJECTS[0], PROJECTS[1], PROJECTS[2]],
  interior: [PROJECTS[3], PROJECTS[4], PROJECTS[5]],
};

export const CurvedProjectGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'exterior' | 'interior'>('exterior');
  const [currentIndex, setCurrentIndex] = useState<number>(1); // start with middle project centered
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentSet = galleryData[activeTab];
  const total = currentSet.length; // 3

  const getProject = (offset: number) => {
    return currentSet[(currentIndex + offset + total) % total];
  };

  const leftProject = getProject(-1);
  const centerProject = getProject(0);
  const rightProject = getProject(1);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const scrollToTop = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll-driven flat horizontal track movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // Scroll DOWN: moves track horizontally ('-10%' -> '+10%')
  const xScroll = useTransform(smoothProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={containerRef}
      className="py-10 sm:py-12 bg-[#080604] border-y border-[#3a2618]/30 relative overflow-hidden select-none"
    >
      {/* SVG ClipPath Definitions for 3D Panoramic Viewport Top & Bottom Concave Arc */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="panoramic-viewport-arc" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.06 Q 0.5,0.16 1,0.06 L 1,0.94 Q 0.5,0.84 0,0.94 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* PURE WHITE HEADING */}
      <div className="max-w-[1700px] w-full mx-auto px-6 sm:px-10 lg:px-16 mb-8 text-center space-y-4 relative z-20">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold uppercase tracking-widest text-white drop-shadow-lg">
          AN IMMERSIVE WORLD OF CREATIVE CRAFT
        </h2>
      </div>

      {/* 5. TOP CONTROLS: TABS (Exterior / Interior) */}
      <div className="flex items-center justify-center gap-4 mb-8 relative z-30">
        <button
          onClick={() => {
            setActiveTab('exterior');
            setCurrentIndex(1);
          }}
          className={`px-7 py-2.5 rounded-lg text-xs font-mono uppercase font-extrabold tracking-widest transition-all duration-300 ${
            activeTab === 'exterior'
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/25 scale-105'
              : 'bg-black/60 backdrop-blur-md text-zinc-300 border border-white/15 hover:bg-white/10 hover:text-white'
          }`}
        >
          Exterior
        </button>
        <button
          onClick={() => {
            setActiveTab('interior');
            setCurrentIndex(1);
          }}
          className={`px-7 py-2.5 rounded-lg text-xs font-mono uppercase font-extrabold tracking-widest transition-all duration-300 ${
            activeTab === 'interior'
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/25 scale-105'
              : 'bg-black/60 backdrop-blur-md text-zinc-300 border border-white/15 hover:bg-white/10 hover:text-white'
          }`}
        >
          Interior
        </button>
      </div>

      {/* 1. CONTINUOUS 3D CURVED PANORAMIC SCREEN VIEWPORT */}
      <div
        className="relative max-w-[1850px] w-full mx-auto overflow-hidden py-8 min-h-[500px] flex items-center justify-center bg-[#060403] [perspective:1600px]"
        style={{ clipPath: 'url(#panoramic-viewport-arc)' }}
      >
        {/* ROW CONTAINER - 3D SURFACE */}
        <motion.div
          style={{ x: xScroll }}
          className="w-full max-w-[1800px] px-6 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 [transform-style:preserve-3d]"
        >
          {/* CARD 1: LEFT PANEL (Angles Inward, HD Sharp 3D Side Wall) */}
          <div
            style={{
              transform: 'perspective(1600px) rotateY(14deg) translateZ(-25px) scale(0.96)',
              transition: 'transform 0.4s ease-out',
            }}
            className="relative hidden md:block w-[360px] sm:w-[480px] lg:w-[540px] h-[320px] sm:h-[380px] lg:h-[440px] bg-[#100b07] transition-all duration-300 group shadow-2xl shrink-0 overflow-hidden rounded-2xl border border-white/10 brightness-100 opacity-100 select-none pointer-events-none"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={leftProject.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={leftProject.image}
                  alt={leftProject.title}
                  fill
                  className="object-cover object-center transition-transform duration-500"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CARD 2: CENTER PANEL (Front-Facing Hero Focal Point - Unzoomed & Non-Clickable) */}
          <div
            style={{
              transform: 'perspective(1600px) rotateY(0deg) translateZ(35px) scale(1.02)',
              transition: 'transform 0.4s ease-out',
            }}
            className="relative w-[360px] sm:w-[500px] lg:w-[580px] h-[320px] sm:h-[380px] lg:h-[440px] bg-[#140c08] transition-all duration-300 group shadow-[0_25px_60px_rgba(0,0,0,0.95)] shrink-0 z-30 overflow-hidden rounded-2xl border border-amber-500/40 opacity-100 select-none pointer-events-none"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={centerProject.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={centerProject.image}
                  alt={centerProject.title}
                  fill
                  priority
                  className="object-contain object-center p-2 transition-transform duration-500"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CARD 3: RIGHT PANEL (Angles Inward, HD Sharp 3D Side Wall) */}
          <div
            style={{
              transform: 'perspective(1600px) rotateY(-14deg) translateZ(-25px) scale(0.96)',
              transition: 'transform 0.4s ease-out',
            }}
            className="relative hidden md:block w-[360px] sm:w-[480px] lg:w-[540px] h-[320px] sm:h-[380px] lg:h-[440px] bg-[#100b07] transition-all duration-300 group shadow-2xl shrink-0 overflow-hidden rounded-2xl border border-white/10 brightness-100 opacity-100 select-none pointer-events-none"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={rightProject.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={rightProject.image}
                  alt={rightProject.title}
                  fill
                  className="object-cover object-center transition-transform duration-500"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>



      {/* 7. FLOATING ARROW BUTTON (Scroll to Top) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Scroll to top of section"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* CONNECTED PROJECT MODAL */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};






