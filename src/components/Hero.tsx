'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import Matter from 'matter-js';
import { RotateCcw } from 'lucide-react';

interface HeroPill {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  width: number;
  height: number;
}

const HERO_PILLS: HeroPill[] = [
  { id: 'hp-1', name: 'Voiceflow', bgColor: '#ffffff', textColor: '#000000', width: 135, height: 48 },
  { id: 'hp-2', name: 'ClickUp', bgColor: '#ffffff', textColor: '#000000', width: 125, height: 48 },
  { id: 'hp-3', name: 'Zendesk', bgColor: '#272732', textColor: '#ffffff', width: 130, height: 48 },
  { id: 'hp-4', name: 'Canva', bgColor: '#ffffff', textColor: '#000000', width: 115, height: 48 },
  { id: 'hp-5', name: 'Zoom', bgColor: '#181822', textColor: '#ffffff', width: 120, height: 48 },
  { id: 'hp-6', name: 'Trello', bgColor: '#ffffff', textColor: '#000000', width: 120, height: 48 },
  { id: 'hp-7', name: 'Pendo', bgColor: '#ffffff', textColor: '#000000', width: 115, height: 48 },
  { id: 'hp-8', name: 'SAVERIA', bgColor: '#272732', textColor: '#ffffff', width: 130, height: 48 },
  { id: 'hp-9', name: 'Notion', bgColor: '#ffffff', textColor: '#000000', width: 120, height: 48 },
  { id: 'hp-10', name: 'Slack', bgColor: '#ffffff', textColor: '#000000', width: 115, height: 48 },
  { id: 'hp-11', name: 'Miro', bgColor: '#181822', textColor: '#ffffff', width: 110, height: 48 },
  { id: 'hp-12', name: 'Figma', bgColor: '#ffffff', textColor: '#000000', width: 115, height: 48 },
  { id: 'hp-13', name: 'Stripe', bgColor: '#ffffff', textColor: '#000000', width: 120, height: 48 },
  { id: 'hp-14', name: 'REYUG', bgColor: '#272732', textColor: '#ffffff', width: 125, height: 48 },
  { id: 'hp-15', name: 'MALPANI', bgColor: '#ffffff', textColor: '#000000', width: 135, height: 48 },
  { id: 'hp-16', name: 'VALENCIA', bgColor: '#ffffff', textColor: '#000000', width: 135, height: 48 },
  { id: 'hp-17', name: 'LEMOUNT', bgColor: '#181822', textColor: '#ffffff', width: 130, height: 48 },
  { id: 'hp-18', name: 'HubSpot', bgColor: '#ffffff', textColor: '#000000', width: 130, height: 48 },
  { id: 'hp-19', name: 'EKI ENERGY', bgColor: '#272732', textColor: '#ffffff', width: 145, height: 48 },
  { id: 'hp-20', name: 'BHASKAR', bgColor: '#ffffff', textColor: '#000000', width: 130, height: 48 },
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const spawnTimersRef = useRef<NodeJS.Timeout[]>([]);

  const [isMobile, setIsMobile] = useState(false);
  const [stageHeight, setStageHeight] = useState<number>(1000);

  const currentFloorYRef = useRef<number>(700);
  const targetFloorYRef = useRef<number>(700);
  const bodiesRef = useRef<{ id: string; body: Matter.Body; width: number; height: number }[]>([]);

  const clearSpawnTimers = useCallback(() => {
    spawnTimersRef.current.forEach((t) => clearTimeout(t));
    spawnTimersRef.current = [];
  }, []);

  const updateStageDimensions = useCallback(() => {
    const docH = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight * 3
    );
    setStageHeight(docH);
  }, []);

  const startPhysics = useCallback(() => {
    if (!sceneRef.current) return;

    clearSpawnTimers();

    // Cleanup previous engine if re-running
    if (engineRef.current) {
      Matter.Engine.clear(engineRef.current);
    }
    if (runnerRef.current) {
      Matter.Runner.stop(runnerRef.current);
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    // Reset all DOM pill elements offscreen immediately
    pillRefs.current.forEach((el) => {
      if (el) {
        el.style.transform = 'translate3d(-9999px, -9999px, 0px)';
      }
    });

    const width = document.documentElement.clientWidth || window.innerWidth || 1200;
    const heroH = containerRef.current?.offsetHeight || window.innerHeight || 750;
    const docH = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight * 3
    );
    setStageHeight(docH);

    const isMob = width < 640;
    setIsMobile(isMob);

    // Initial floor Y starts at bottom of Hero section
    const initialFloorY = heroH - 40;
    currentFloorYRef.current = initialFloorY;
    targetFloorYRef.current = initialFloorY;

    // Create Matter Engine with smooth gravity
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: isMob ? 0.7 : 0.9, scale: 0.001 },
      enableSleeping: false,
      positionIterations: 10,
      velocityIterations: 10,
    });
    engineRef.current = engine;

    // Dynamic Floor & Side Walls spanning entire document
    const floor = Matter.Bodies.rectangle(width / 2, initialFloorY, width * 3, 60, {
      isStatic: true,
      friction: 0.85,
      restitution: 0.15,
    });

    const leftWall = Matter.Bodies.rectangle(-30, docH / 2, 60, docH * 3, {
      isStatic: true,
      friction: 0.8,
    });

    const rightWall = Matter.Bodies.rectangle(width + 30, docH / 2, 60, docH * 3, {
      isStatic: true,
      friction: 0.8,
    });

    Matter.Composite.add(engine.world, [floor, leftWall, rightWall]);

    // Active pills list
    const activeHeroPills = isMob ? HERO_PILLS.slice(0, 10) : HERO_PILLS;
    const bodies: { id: string; body: Matter.Body; width: number; height: number }[] = [];
    bodiesRef.current = bodies;

    // STAGGERED SEQUENTIAL DROPPING: Spawn capsules one by one with 160ms gap
    const spawnDelayMs = isMob ? 130 : 160;

    activeHeroPills.forEach((pill, idx) => {
      const timer = setTimeout(() => {
        if (!engineRef.current) return;

        const currentDocW = document.documentElement.clientWidth || window.innerWidth || 1200;
        const pScale = isMob ? 0.55 : 1.0;
        const pHeight = isMob ? 30 : 48;
        const pWidth = Math.round(pill.width * pScale);

        // Random X position spread across center 75% of screen width
        const spawnX = Math.random() * (currentDocW * 0.75) + currentDocW * 0.12;
        const currentScrollY = window.scrollY || 0;
        const spawnY = currentScrollY - 90; // Just above top screen viewport
        const initialAngle = (Math.random() - 0.5) * 0.5;

        // Distinct air friction & bounciness for varied falling cascade
        const frictionAir = 0.015 + (idx % 4) * 0.007;
        const restitution = 0.12 + (idx % 3) * 0.08;

        const body = Matter.Bodies.rectangle(spawnX, spawnY, pWidth, pHeight, {
          chamfer: { radius: pHeight / 2 },
          restitution: restitution,
          friction: 0.85,
          frictionStatic: 1.0,
          frictionAir: frictionAir,
          density: 0.002 + (idx % 3) * 0.0005,
          angle: initialAngle,
        });

        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.04);

        bodies.push({ id: pill.id, body, width: pWidth, height: pHeight });
        Matter.Composite.add(engineRef.current.world, body);
      }, idx * spawnDelayMs);

      spawnTimersRef.current.push(timer);
    });

    // Create Mouse Constraint for dragging pills on page
    const mouse = Matter.Mouse.create(sceneRef.current);

    // Prevent wheel scroll locking
    if (sceneRef.current) {
      const mouseObj = mouse as unknown as { mousewheel?: EventListener };
      if (mouseObj.mousewheel) {
        sceneRef.current.removeEventListener('mousewheel', mouseObj.mousewheel);
        sceneRef.current.removeEventListener('DOMMouseScroll', mouseObj.mousewheel);
        sceneRef.current.removeEventListener('wheel', mouseObj.mousewheel);
      }
    }

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.Composite.add(engine.world, mouseConstraint);

    // Run Physics Runner
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    // 60FPS DOM sync loop + smooth scroll lerp
    const updateLoop = () => {
      // Lerp dynamic physics floor towards target scroll Y position
      const targetY = targetFloorYRef.current;
      const currentY = currentFloorYRef.current;
      const diff = targetY - currentY;

      if (Math.abs(diff) > 0.2) {
        const newY = currentY + diff * 0.14;
        currentFloorYRef.current = newY;
        Matter.Body.setPosition(floor, { x: width / 2, y: newY });
        Matter.Body.setVelocity(floor, { x: 0, y: 0 });

        // Wake up sleeping bodies so they drop instantly with moving floor
        bodiesRef.current.forEach((b) => {
          if (b.body.isSleeping) {
            Matter.Sleeping.set(b.body, false);
          }
        });
      }

      // Sync DOM Pill Transforms for active spawned bodies
      const activePillList = isMob ? HERO_PILLS.slice(0, 10) : HERO_PILLS;
      bodiesRef.current.forEach((b) => {
        const idx = activePillList.findIndex((p) => p.id === b.id);
        if (idx !== -1) {
          const domEl = pillRefs.current[idx];
          if (domEl) {
            const posX = b.body.position.x - b.width / 2;
            const posY = b.body.position.y - b.height / 2;
            const rot = b.body.angle;
            domEl.style.transform = `translate3d(${posX}px, ${posY}px, 0px) rotate(${rot}rad)`;
          }
        }
      });

      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    updateLoop();
  }, [clearSpawnTimers]);

  useEffect(() => {
    updateStageDimensions();

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const viewportH = window.innerHeight;
      const heroH = containerRef.current?.offsetHeight || viewportH;
      const docH = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight * 3
      );

      const minFloor = heroH - 40;
      const dynamicFloor = scrollY + viewportH - 70;
      const maxFloor = docH - 50;

      targetFloorYRef.current = Math.min(maxFloor, Math.max(minFloor, dynamicFloor));
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      updateStageDimensions();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    handleScroll();
    startPhysics();

    const timer = setTimeout(() => {
      updateStageDimensions();
      handleScroll();
    }, 800);

    return () => {
      clearTimeout(timer);
      clearSpawnTimers();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (engineRef.current) Matter.Engine.clear(engineRef.current);
      if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
    };
  }, [startPhysics, updateStageDimensions, clearSpawnTimers]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-28 sm:pt-36 pb-16 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] text-white flex flex-col justify-between z-10 overflow-visible"
    >
      {/* 2D Physics Interactive Stage Overlay (Spans entire document height across all sections to Footer) */}
      <div
        ref={sceneRef}
        style={{ height: `${stageHeight}px` }}
        className="absolute top-0 left-0 w-full pointer-events-none z-30 select-none overflow-hidden"
      >
        {(isMobile ? HERO_PILLS.slice(0, 10) : HERO_PILLS).map((pill, idx) => {
          const pWidth = isMobile ? Math.round(pill.width * 0.55) : pill.width;
          const pHeight = isMobile ? 30 : 48;

          return (
            <div
              key={pill.id}
              ref={(el) => {
                pillRefs.current[idx] = el;
              }}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: `${pWidth}px`,
                height: `${pHeight}px`,
                backgroundColor: pill.bgColor,
                color: pill.textColor,
                willChange: 'transform',
                transform: 'translate3d(-9999px, -9999px, 0px)', // Offscreen initial state
              }}
              className="rounded-full flex items-center justify-center font-bold text-[10px] sm:text-sm tracking-wide shadow-2xl border border-white/30 cursor-grab active:cursor-grabbing pointer-events-auto transition-shadow hover:brightness-110 select-none z-30"
            >
              <span className="px-2 sm:px-3 truncate font-sans font-black uppercase italic pointer-events-none">
                {pill.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="max-w-[1750px] w-full mx-auto relative z-10 flex flex-col justify-between h-full flex-1 pointer-events-none">

        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start pt-2 pointer-events-auto">

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
            {/* TOP RE-DROP CAPSULES BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 pb-1"
            >
              <button
                onClick={startPhysics}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer pointer-events-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-Drop Capsules</span>
              </button>
            </motion.div>

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

        {/* Bottom spacer padding for fallen capsules */}
        <div className="h-44 sm:h-52 w-full mt-auto pointer-events-none" />

      </div>
    </section>
  );
};




