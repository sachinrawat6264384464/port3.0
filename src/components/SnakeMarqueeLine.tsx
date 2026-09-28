'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SnakeMarqueeLineProps {
  reverse?: boolean;
  speed?: number;
  text?: string;
}

export const SnakeMarqueeLine: React.FC<SnakeMarqueeLineProps> = ({
  reverse = false,
  speed = 25,
  text = 'STUDIO RS ✦ DESIGN DIRECTION ✦ PERCEPTION & POSITIONING ✦ OUTLINE CREATIVE ✦ IDEAS WITH INTENT',
}) => {
  // Sine wave SVG path repeating across 1200px width
  const snakeWavePath =
    'M 0 20 Q 30 5, 60 20 T 120 20 Q 150 5, 180 20 T 240 20 Q 270 5, 300 20 T 360 20 Q 390 5, 420 20 T 480 20 Q 510 5, 540 20 T 600 20 Q 630 5, 660 20 T 720 20 Q 750 5, 780 20 T 840 20 Q 870 5, 900 20 T 960 20 Q 990 5, 1020 20 T 1080 20 Q 1110 5, 1140 20 T 1200 20';

  const reverseWavePath =
    'M 0 20 Q 30 35, 60 20 T 120 20 Q 150 35, 180 20 T 240 20 Q 270 35, 300 20 T 360 20 Q 390 35, 420 20 T 480 20 Q 510 35, 540 20 T 600 20 Q 630 35, 660 20 T 720 20 Q 750 35, 780 20 T 840 20 Q 870 35, 900 20 T 960 20 Q 990 35, 1020 20 T 1080 20 Q 1110 35, 1140 20 T 1200 20';

  return (
    <div className="relative w-full overflow-hidden py-3 bg-[#0e0e11] border-y border-white/10 select-none my-2 z-20">
      {/* Side Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#0e0e11] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0e0e11] to-transparent z-20 pointer-events-none" />

      {/* Infinite Snake Marquee Track */}
      <motion.div
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
        className="flex items-center w-max min-w-full gap-8"
      >
        {[0, 1, 2, 3].map((batchIdx) => (
          <div key={batchIdx} className="flex items-center gap-8 shrink-0">
            {/* Snake Wave SVG Block */}
            <div className="relative flex items-center">
              <svg
                width="1200"
                height="40"
                viewBox="0 0 1200 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block"
              >
                <defs>
                  <linearGradient id={`snakeGrad-${batchIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="25%" stopColor="rgba(255,255,255,0.9)" />
                    <stop offset="50%" stopColor="rgba(200,200,225,1)" />
                    <stop offset="75%" stopColor="rgba(255,255,255,0.9)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                  </linearGradient>

                  <filter id={`snakeGlowFilter-${batchIdx}`} x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Secondary Offset Wavy Snake Line */}
                <path
                  d={reverseWavePath}
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  fill="none"
                />

                {/* Primary Ambient Glow Snake Wave */}
                <path
                  d={snakeWavePath}
                  stroke={`url(#snakeGrad-${batchIdx})`}
                  strokeWidth="4"
                  strokeOpacity="0.35"
                  fill="none"
                  filter={`url(#snakeGlowFilter-${batchIdx})`}
                />

                {/* Primary Crisp Dashed Snake Wave Line */}
                <path
                  d={snakeWavePath}
                  stroke={`url(#snakeGrad-${batchIdx})`}
                  strokeWidth="2.5"
                  strokeDasharray="16 10 4 10"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Glowing Snake Eye / Dot Nodes */}
                {[60, 300, 540, 780, 1020].map((cx, i) => (
                  <g key={i}>
                    <circle cx={cx} cy="20" r="5" fill="rgba(255,255,255,0.3)" />
                    <circle cx={cx} cy="20" r="2.5" fill="#ffffff" />
                  </g>
                ))}
              </svg>
            </div>

            {/* Marquee Badge Text in between snake segments */}
            <div className="flex items-center gap-4 px-4 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-mono tracking-widest text-zinc-300 uppercase whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>{text}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
