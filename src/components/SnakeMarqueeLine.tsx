'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SnakeMarqueeLineProps {
  reverse?: boolean;
  speed?: number;
}

export const SnakeMarqueeLine: React.FC<SnakeMarqueeLineProps> = ({
  reverse = false,
  speed = 25,
}) => {
  // Bold single sine wave snake path repeating across 1200px width
  const snakeWavePath =
    'M 0 25 Q 30 5, 60 25 T 120 25 Q 150 5, 180 25 T 240 25 Q 270 5, 300 25 T 360 25 Q 390 5, 420 25 T 480 25 Q 510 5, 540 25 T 600 25 Q 630 5, 660 25 T 720 25 Q 750 5, 780 25 T 840 25 Q 870 5, 900 25 T 960 25 Q 990 5, 1020 25 T 1080 25 Q 1110 5, 1140 25 T 1200 25';

  return (
    <div className="relative w-full overflow-hidden py-4 bg-[#0e0e11] select-none my-3 z-20">
      {/* Side Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#0e0e11] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0e0e11] to-transparent z-20 pointer-events-none" />

      {/* Infinite Snake Marquee Track (Seamless Continuous Wave) */}
      <motion.div
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
        className="flex items-center w-max min-w-full"
      >
        {[0, 1, 2, 3].map((batchIdx) => (
          <div key={batchIdx} className="relative flex items-center shrink-0">
            <svg
              width="1200"
              height="50"
              viewBox="0 0 1200 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <defs>
                <linearGradient id={`thickSnakeGrad-${batchIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                  <stop offset="25%" stopColor="rgba(255,255,255,0.95)" />
                  <stop offset="50%" stopColor="rgba(220,220,240,1)" />
                  <stop offset="75%" stopColor="rgba(255,255,255,0.95)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                </linearGradient>

                <filter id={`thickSnakeGlow-${batchIdx}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Ambient Thick Glow Aura */}
              <path
                d={snakeWavePath}
                stroke={`url(#thickSnakeGrad-${batchIdx})`}
                strokeWidth="10"
                strokeOpacity="0.4"
                fill="none"
                filter={`url(#thickSnakeGlow-${batchIdx})`}
              />

              {/* Main Bold & Thick Single Snake Line */}
              <path
                d={snakeWavePath}
                stroke={`url(#thickSnakeGrad-${batchIdx})`}
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Glowing Dot Nodes along the single thick snake wave */}
              {[60, 300, 540, 780, 1020].map((cx, i) => (
                <g key={i}>
                  <circle cx={cx} cy="25" r="7" fill="rgba(255,255,255,0.3)" />
                  <circle cx={cx} cy="25" r="4" fill="#ffffff" />
                </g>
              ))}
            </svg>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
