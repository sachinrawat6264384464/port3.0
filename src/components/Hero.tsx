'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[750px] pt-28 sm:pt-36 pb-0 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] text-white flex flex-col justify-between z-10">
      <div className="max-w-[1750px] w-full mx-auto relative z-10 flex flex-col justify-between h-full flex-1">

        {/* Top Grid Layout matching REDOX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start pt-2">

          {/* Left Column: Rotating Circular Text Badge + Vertical Line */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-start gap-8 pt-2">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full text-zinc-400 font-mono text-[10px] uppercase tracking-widest fill-current"
                viewBox="0 0 100 100"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9px] font-bold fill-zinc-300">
                  <textPath href="#circlePath">
                    SINCE - 2010 • AWARD WINNING AGENCY •
                  </textPath>
                </text>
              </motion.svg>
              <span className="absolute font-black text-xl text-white font-mono">w.</span>
            </div>
            <div className="w-[1px] h-32 bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent" />
          </div>

          {/* Middle Column: Main Big Headline */}
          <div className="lg:col-span-6 space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black tracking-tight leading-[1.02] text-white font-sans uppercase"
            >
              Let’s sharpen <br />
              your brand with <br />
              <span className="font-editorial italic font-normal text-zinc-400 lowercase">quality work</span>
            </motion.h1>
          </div>

          {/* Right Column: Stats & Narrative Paragraph */}
          <div className="lg:col-span-4 space-y-8 pt-2">

            <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-6">
              <div>
                <div className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                  98%
                </div>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed pt-2">
                  Average clients satisfied and repeating
                </p>
              </div>

              <div>
                <div className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                  120+
                </div>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed pt-2">
                  Successfully projects done in 24 countries
                </p>
              </div>
            </div>


          </div>

        </div>

        {/* MASSIVE GIANT SILVERY GREY OUTLINE BANNER */}
        <div className="w-full relative z-20 pointer-events-none select-none translate-y-[16%] sm:translate-y-[18%] mt-auto flex items-center justify-center py-4 sm:py-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full flex items-center justify-center"
          >
            <h2 className="text-[27.5vw] sm:text-[25.5vw] lg:text-[23.5vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 uppercase text-center font-sans scale-y-[1.3] whitespace-nowrap drop-shadow-2xl [text-stroke:1px_rgba(255,255,255,0.15)] [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] py-4">
              OUTLINE
            </h2>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
