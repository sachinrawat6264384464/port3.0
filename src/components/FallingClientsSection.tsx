'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Matter from 'matter-js';
import { RotateCcw, ArrowUp } from 'lucide-react';

interface LogoPill {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  width: number;
  height: number;
}

const PILL_CLIENTS: LogoPill[] = [
  // Color 1: Signature Orange (#ff5528)
  { id: 'jotform', name: 'Jotform', bgColor: '#ff5528', textColor: '#ffffff', width: 140, height: 56 },
  { id: 'bubble', name: '.bubble', bgColor: '#ff5528', textColor: '#ffffff', width: 130, height: 56 },
  { id: 'hubspot', name: 'HubSpot', bgColor: '#ff5528', textColor: '#ffffff', width: 145, height: 56 },
  { id: 'zendesk1', name: 'zendesk', bgColor: '#ff5528', textColor: '#ffffff', width: 145, height: 56 },
  { id: 'canva2', name: 'Canva', bgColor: '#ff5528', textColor: '#ffffff', width: 130, height: 56 },
  { id: 'iloveimg', name: 'i❤IMG', bgColor: '#ff5528', textColor: '#ffffff', width: 135, height: 56 },
  { id: 'voiceflow2', name: 'Voiceflow', bgColor: '#ff5528', textColor: '#ffffff', width: 150, height: 56 },
  { id: 'trinaas', name: 'TRINAAS', bgColor: '#ff5528', textColor: '#ffffff', width: 140, height: 56 },
  { id: 'figma', name: 'Figma', bgColor: '#ff5528', textColor: '#ffffff', width: 130, height: 56 },
  { id: 'stripe', name: 'Stripe', bgColor: '#ff5528', textColor: '#ffffff', width: 135, height: 56 },

  // Color 2: Crisp White (#ffffff)
  { id: 'voiceflow1', name: 'Voiceflow', bgColor: '#ffffff', textColor: '#0e0e11', width: 150, height: 56 },
  { id: 'clickup', name: 'ClickUp', bgColor: '#ffffff', textColor: '#0e0e11', width: 140, height: 56 },
  { id: 'zendesk2', name: 'zendesk', bgColor: '#ffffff', textColor: '#0e0e11', width: 145, height: 56 },
  { id: 'canva1', name: 'Canva', bgColor: '#ffffff', textColor: '#0e0e11', width: 130, height: 56 },
  { id: 'zoom', name: 'zoom', bgColor: '#ffffff', textColor: '#0e0e11', width: 140, height: 56 },
  { id: 'trello', name: 'Trello', bgColor: '#ffffff', textColor: '#0e0e11', width: 140, height: 56 },
  { id: 'pendo', name: 'pendo', bgColor: '#ffffff', textColor: '#0e0e11', width: 135, height: 56 },
  { id: 'saveria', name: 'SAVERIA', bgColor: '#ffffff', textColor: '#0e0e11', width: 145, height: 56 },
  { id: 'notion', name: 'Notion', bgColor: '#ffffff', textColor: '#0e0e11', width: 135, height: 56 },
  { id: 'slack', name: 'Slack', bgColor: '#ffffff', textColor: '#0e0e11', width: 130, height: 56 },
  { id: 'miro', name: 'Miro', bgColor: '#ffffff', textColor: '#0e0e11', width: 125, height: 56 },

  // Color 3: Warm Biscuit Gold (#e8be90)
  { id: 'ameerji', name: 'AMEERJI', bgColor: '#e8be90', textColor: '#0e0e11', width: 145, height: 56 },
  { id: 'reyug', name: 'REYUG', bgColor: '#e8be90', textColor: '#0e0e11', width: 135, height: 56 },
  { id: 'malpani', name: 'MALPANI', bgColor: '#e8be90', textColor: '#0e0e11', width: 145, height: 56 },
  { id: 'terex', name: 'TEREX', bgColor: '#e8be90', textColor: '#0e0e11', width: 135, height: 56 },
  { id: 'lemount', name: 'LEMOUNT', bgColor: '#e8be90', textColor: '#0e0e11', width: 145, height: 56 },
  { id: 'raasvalley', name: 'RAAS VALLEY', bgColor: '#e8be90', textColor: '#0e0e11', width: 160, height: 56 },
  { id: 'bhaskar', name: 'BHASKAR', bgColor: '#e8be90', textColor: '#0e0e11', width: 145, height: 56 },
  { id: 'abushan', name: 'ABUSHAN', bgColor: '#e8be90', textColor: '#0e0e11', width: 145, height: 56 },
  { id: 'valencia', name: 'VALENCIA', bgColor: '#e8be90', textColor: '#0e0e11', width: 145, height: 56 },
  { id: 'anvith', name: 'ANVITH', bgColor: '#e8be90', textColor: '#0e0e11', width: 135, height: 56 },
  { id: 'ekienergy', name: 'EKI ENERGY', bgColor: '#e8be90', textColor: '#0e0e11', width: 155, height: 56 },
];

export const FallingClientsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const [hasStarted, setHasStarted] = useState(false);

  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodiesMapRef = useRef<{ id: string; body: Matter.Body; width: number; height: number }[]>([]);

  const startPhysics = () => {
    if (!sceneRef.current) return;

    // Cleanup previous engine if re-running
    if (engineRef.current) {
      Matter.Engine.clear(engineRef.current);
    }
    if (runnerRef.current) {
      Matter.Runner.stop(runnerRef.current);
    }

    const width = sceneRef.current.clientWidth || 1200;
    const height = sceneRef.current.clientHeight || 400;

    // Create Matter Engine with high precision & sleeping enabled
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1.2, scale: 0.001 },
      enableSleeping: true,
      positionIterations: 10,
      velocityIterations: 10,
    });
    engineRef.current = engine;

    // Create Floor & Side Walls
    const floor = Matter.Bodies.rectangle(width / 2, height - 10, width * 2, 40, {
      isStatic: true,
      friction: 0.9,
      restitution: 0.1,
    });

    const leftWall = Matter.Bodies.rectangle(-20, height / 2, 40, height * 2, {
      isStatic: true,
      friction: 0.8,
    });

    const rightWall = Matter.Bodies.rectangle(width + 20, height / 2, 40, height * 2, {
      isStatic: true,
      friction: 0.8,
    });

    Matter.Composite.add(engine.world, [floor, leftWall, rightWall]);

    // Create Pill Rigid Bodies
    const bodies: { id: string; body: Matter.Body; width: number; height: number }[] = [];

    PILL_CLIENTS.forEach((pill, idx) => {
      const spawnX = Math.random() * (width - 240) + 120;
      const spawnY = -80 - idx * 60 - Math.random() * 30;
      const initialAngle = (Math.random() - 0.5) * 0.6;

      const body = Matter.Bodies.rectangle(spawnX, spawnY, pill.width, pill.height, {
        chamfer: { radius: pill.height / 2 },
        restitution: 0.2,
        friction: 0.8,
        frictionStatic: 1.0,
        frictionAir: 0.015,
        slop: 0.05,
        density: 0.003,
        angle: initialAngle,
      });

      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      bodies.push({ id: pill.id, body, width: pill.width, height: pill.height });
      Matter.Composite.add(engine.world, body);
    });

    bodiesMapRef.current = bodies;

    // Create Mouse & Mouse Constraint
    const mouse = Matter.Mouse.create(sceneRef.current);

    // CRITICAL FIX FOR SCROLL TRAPPING:
    // Remove wheel event listeners from Matter.Mouse so mouse wheel scrolling works 100% naturally across the section!
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

    // Run Physics Engine
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    // DIRECT DOM TRANSFORM UPDATES (Bypasses React State 60FPS re-render for silky smooth 0-vibration performance)
    let animId: number;
    const updateLoop = () => {
      bodies.forEach((b, idx) => {
        const domEl = pillRefs.current[idx];
        if (domEl) {
          const posX = b.body.position.x - b.width / 2;
          const posY = b.body.position.y - b.height / 2;
          const rot = b.body.angle;
          domEl.style.transform = `translate3d(${posX}px, ${posY}px, 0px) rotate(${rot}rad)`;
        }
      });
      animId = requestAnimationFrame(updateLoop);
    };

    updateLoop();
    setHasStarted(true);

    return () => {
      cancelAnimationFrame(animId);
      Matter.Engine.clear(engine);
      Matter.Runner.stop(runner);
    };
  };

  useEffect(() => {
    if (isInView && !hasStarted) {
      startPhysics();
    }
  }, [isInView, hasStarted]);

  const handleReset = () => {
    startPhysics();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="clients"
      ref={containerRef}
      className="py-8 sm:py-12 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] text-white relative overflow-hidden border-t border-b border-white/10"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff5528]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-8 relative z-10">

        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] font-sans text-white"
            >
              <span className="text-[#ff5528]">Client:</span> Helping brands to grow and say their success stories to the world.
            </motion.h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6 space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed"
            >
              We&apos;re a great team of creatives with strongest capabilities to help progressive fields achieve their goals. With the best talent on every project done successfully.
            </motion.p>

            <div className="flex items-center gap-4 pt-1">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#ff5528] hover:text-black border border-white/10 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-Drop Badges</span>
              </button>

              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <span>Interactive Physics</span>
              </span>
            </div>
          </div>
        </div>

        {/* 2D Interactive Physics Stage (Slightly smaller height) */}
        <div
          ref={sceneRef}
          className="relative w-full h-[380px] sm:h-[440px] rounded-3xl bg-zinc-950/60 border border-white/10 overflow-hidden select-none"
        >
          {/* Stage Grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Render Logo Pills with Direct Ref DOM sync */}
          {PILL_CLIENTS.map((pill, idx) => (
            <div
              key={pill.id}
              ref={(el) => {
                pillRefs.current[idx] = el;
              }}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: `${pill.width}px`,
                height: `${pill.height}px`,
                backgroundColor: pill.bgColor,
                color: pill.textColor,
                willChange: 'transform',
                transform: 'translate3d(0px, -200px, 0px)',
              }}
              className="rounded-full flex items-center justify-center font-bold text-sm sm:text-base tracking-wide shadow-xl border border-black/10 cursor-grab active:cursor-grabbing pointer-events-auto transition-shadow hover:brightness-110 select-none"
            >
              <span className="px-4 truncate font-sans font-black italic uppercase pointer-events-none">
                {pill.name}
              </span>
            </div>
          ))}

          {/* Multi-Line Parallel Floor Marker */}
          <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none flex flex-col justify-end space-y-1 pb-2 px-6">
            <div className="w-full h-[1px] bg-white/20" />
            <div className="w-full h-[1px] bg-white/15" />
            <div className="w-full h-[1px] bg-white/10" />
            <div className="w-full h-[1px] bg-white/5" />
          </div>

          {/* Floating Back to Top Button on Bottom-Right */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-black hover:bg-[#ff5528] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xl z-20"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};
