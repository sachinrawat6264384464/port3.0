'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { ProjectModal } from './ProjectModal';
import { ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';

// Data structure for Exterior and Interior image sets with HD Ultra High-Res assets
const galleryData: Record<'exterior' | 'interior', Project[]> = {
  exterior: [
    { ...PROJECTS[0], image: '/assets/projects/hero_showcase_hd.png' },
    { ...PROJECTS[4], image: '/assets/projects/logo_raas_valley.png' },
    { ...PROJECTS[5], image: '/assets/projects/billboard_lemount.png' },
  ],
  interior: [
    { ...PROJECTS[3], image: '/assets/projects/annual_report_spreads.png' },
    { ...PROJECTS[1], image: '/assets/projects/packaging_luwwa.png' },
    { ...PROJECTS[4], image: '/assets/projects/logos_showcase_grid.png' },
  ],
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

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
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
      className="pt-16 sm:pt-20 pb-12 bg-[#0e0e11] relative overflow-hidden select-none"
    >
      {/* SVG ClipPath Definitions for 3D Panoramic Viewport Top & Bottom Concave Arc */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="panoramic-viewport-arc" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.06 Q 0.5,0.16 1,0.06 L 1,0.94 Q 0.5,0.84 0,0.94 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* SECTION HEADING WITH STUDIO RS TYPOGRAPHY */}
      <div className="max-w-[1700px] w-full mx-auto px-4 sm:px-10 lg:px-16 mb-8 text-center relative z-20">
        <h2 className="text-2xl sm:text-6xl lg:text-7xl font-sans font-black text-white uppercase tracking-tight leading-tight">
          AN IMMERSIVE WORLD OF <span className="font-editorial italic font-normal text-zinc-400 uppercase">CREATIVE CRAFT</span>
        </h2>
      </div>

      {/* 5. TOP CONTROLS: TABS (Exterior / Interior) */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 relative z-30">
        <button
          onClick={() => {
            setActiveTab('exterior');
            setCurrentIndex(1);
          }}
          className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono uppercase font-bold tracking-widest transition-all duration-300 cursor-pointer ${
            activeTab === 'exterior'
              ? 'bg-white/20 border border-white/40 text-white shadow-lg shadow-white/5 scale-105 backdrop-blur-md'
              : 'bg-white/5 backdrop-blur-md text-zinc-400 border border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          Exterior
        </button>
        <button
          onClick={() => {
            setActiveTab('interior');
            setCurrentIndex(1);
          }}
          className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono uppercase font-bold tracking-widest transition-all duration-300 cursor-pointer ${
            activeTab === 'interior'
              ? 'bg-white/20 border border-white/40 text-white shadow-lg shadow-white/5 scale-105 backdrop-blur-md'
              : 'bg-white/5 backdrop-blur-md text-zinc-400 border border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          Interior
        </button>
      </div>

      {/* 1. CONTINUOUS 3D CURVED PANORAMIC SCREEN VIEWPORT WITH DRAG SWIPE & CLICK SWITCH */}
      <div
        className="relative max-w-[1850px] w-full mx-auto overflow-hidden py-4 sm:py-8 min-h-[280px] sm:min-h-[500px] flex items-center justify-center bg-[#0e0e11] [perspective:1600px]"
      >
        {/* Left Arrow Navigation Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Project"
          className="absolute left-3 sm:left-10 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-white hover:text-black border border-white/30 text-white flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Right Arrow Navigation Button */}
        <button
          onClick={handleNext}
          aria-label="Next Project"
          className="absolute right-3 sm:right-10 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-white hover:text-black border border-white/30 text-white flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* ROW CONTAINER - 3D DRAGGABLE / SWIPEABLE SURFACE */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;
            if (swipe < -40 || velocity.x < -200) {
              handleNext();
            } else if (swipe > 40 || velocity.x > 200) {
              handlePrev();
            }
          }}
          style={{ x: xScroll }}
          className="w-full max-w-[1800px] px-4 sm:px-6 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 [transform-style:preserve-3d] cursor-grab active:cursor-grabbing"
        >
          {/* CARD 1: LEFT PANEL (Click to bring to center) */}
          <div
            onClick={handlePrev}
            style={{
              transform: 'perspective(1600px) rotateY(14deg) translateZ(-25px) scale(0.96)',
              transition: 'transform 0.4s ease-out',
            }}
            className="relative hidden md:block w-[360px] sm:w-[480px] lg:w-[540px] h-[320px] sm:h-[380px] lg:h-[440px] bg-[#141418] transition-all duration-300 group shadow-[0_20px_60px_rgba(255,255,255,0.12)] shrink-0 overflow-hidden rounded-2xl border border-white/20 brightness-100 opacity-100 select-none cursor-pointer hover:border-white/50"
          >
            {/* Ambient Background Glow Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/15 to-transparent blur-xl opacity-60 pointer-events-none" />

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
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CARD 2: CENTER PANEL (Front-Facing Hero Focal Point - Click to open modal view) */}
          <div
            onClick={() => setSelectedProject(centerProject)}
            style={{
              transform: 'perspective(1600px) rotateY(0deg) translateZ(10px) scale(1)',
              transition: 'transform 0.4s ease-out',
            }}
            className="relative w-[300px] sm:w-[500px] lg:w-[580px] h-[230px] sm:h-[380px] lg:h-[440px] bg-[#141418] transition-all duration-300 group shadow-[0_0_80px_rgba(255,255,255,0.22),0_25px_60px_rgba(0,0,0,0.9)] shrink-0 z-30 overflow-hidden rounded-2xl border-2 border-white/35 opacity-100 select-none cursor-pointer hover:border-white"
          >
            {/* Ambient Background Glow Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-white/20 via-zinc-300/10 to-white/20 blur-2xl opacity-75 pointer-events-none" />

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
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>

            {/* Click to expand hint overlay */}
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase font-bold text-white tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Click to View
            </div>
          </div>

          {/* CARD 3: RIGHT PANEL (Click to bring to center) */}
          <div
            onClick={handleNext}
            style={{
              transform: 'perspective(1600px) rotateY(-14deg) translateZ(-25px) scale(0.96)',
              transition: 'transform 0.4s ease-out',
            }}
            className="relative hidden md:block w-[360px] sm:w-[480px] lg:w-[540px] h-[320px] sm:h-[380px] lg:h-[440px] bg-[#141418] transition-all duration-300 group shadow-[0_20px_60px_rgba(255,255,255,0.12)] shrink-0 overflow-hidden rounded-2xl border border-white/20 brightness-100 opacity-100 select-none cursor-pointer hover:border-white/50"
          >
            {/* Ambient Background Glow Aura */}
            <div className="absolute -inset-1 bg-gradient-to-l from-white/15 to-transparent blur-xl opacity-60 pointer-events-none" />

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
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* PAGINATION DOTS (1, 2, 3) */}
      <div className="flex items-center justify-center gap-2 mt-6 relative z-30">
        {currentSet.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx ? 'w-8 bg-white' : 'w-2.5 bg-white/20 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* FLOATING ARROW BUTTON (Scroll to Top) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#141418]/90 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Scroll to top of section"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* CONNECTED PROJECT MODAL */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};






