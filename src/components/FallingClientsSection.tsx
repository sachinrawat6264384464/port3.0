'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Matter from 'matter-js';
import { RotateCcw, Sparkles, ArrowUp } from 'lucide-react';

interface LogoPill {
  id: string;
  name: string;
  bgColor: string; // 'orange' | 'white' | 'dark'
  textColor: string;
  icon?: string;
  width: number;
  height: number;
}

const PILL_CLIENTS: LogoPill[] = [
  { id: 'jotform', name: 'Jotform', bgColor: '#ff5528', textColor: '#ffffff', width: 140, height: 56 },
  { id: 'bubble', name: '.bubble', bgColor: '#ff5528', textColor: '#ffffff', width: 130, height: 56 },
  { id: 'voiceflow1', name: 'Voiceflow', bgColor: '#ffffff', textColor: '#0e0e11', width: 150, height: 56 },
  { id: 'clickup', name: 'ClickUp', bgColor: '#ffffff', textColor: '#0e0e11', width: 140, height: 56 },
  { id: 'hubspot', name: 'HubSpot', bgColor: '#ff5528', textColor: '#ffffff', width: 145, height: 56 },
  { id: 'zendesk1', name: 'zendesk', bgColor: '#ff5528', textColor: '#ffffff', width: 145, height: 56 },
  { id: 'zendesk2', name: 'zendesk', bgColor: '#ffffff', textColor: '#0e0e11', width: 145, height: 56 },
  { id: 'canva1', name: 'Canva', bgColor: '#ffffff', textColor: '#0e0e11', width: 130, height: 56 },
  { id: 'canva2', name: 'Canva', bgColor: '#ff5528', textColor: '#ffffff', width: 130, height: 56 },
  { id: 'zoom', name: 'zoom', bgColor: '#ffffff', textColor: '#0e0e11', width: 140, height: 56 },
  { id: 'trello', name: 'Trello', bgColor: '#ffffff', textColor: '#0e0e11', width: 140, height: 56 },
  { id: 'pendo', name: 'pendo', bgColor: '#ffffff', textColor: '#0e0e11', width: 135, height: 56 },
  { id: 'iloveimg', name: 'i❤IMG', bgColor: '#ff5528', textColor: '#ffffff', width: 135, height: 56 },
  { id: 'voiceflow2', name: 'Voiceflow', bgColor: '#ff5528', textColor: '#ffffff', width: 150, height: 56 },
  { id: 'saveria', name: 'SAVERIA', bgColor: '#ffffff', textColor: '#0e0e11', width: 145, height: 56 },
  { id: 'trinaas', name: 'TRINAAS', bgColor: '#ff5528', textColor: '#ffffff', width: 140, height: 56 },
];

export const FallingClientsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const [pillPositions, setPillPositions] = useState<{ id: string; x: number; y: number; angle: number }[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodiesMapRef = useRef<{ id: string; body: Matter.Body; width: number; height: number }[]>([]);

  const startPhysics = () => {
    if (!sceneRef.current) return;

    // Clean up previous engine if any
    if (engineRef.current) {
      Matter.Engine.clear(engineRef.current);
    }
    if (runnerRef.current) {
      Matter.Runner.stop(runnerRef.current);
    }

    const width = sceneRef.current.clientWidth || 1200;
    const height = sceneRef.current.clientHeight || 550;

    // Create Matter Engine
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1.2, scale: 0.001 },
    });
    engineRef.current = engine;

    // Create Floor & Wall Boundaries
    const floor = Matter.Bodies.rectangle(width / 2, height - 10, width * 2, 40, {
      isStatic: true,
      friction: 0.8,
      restitution: 0.3,
    });

    const leftWall = Matter.Bodies.rectangle(-20, height / 2, 40, height * 2, {
      isStatic: true,
      friction: 0.5,
    });

    const rightWall = Matter.Bodies.rectangle(width + 20, height / 2, 40, height * 2, {
      isStatic: true,
      friction: 0.5,
    });

    Matter.Composite.add(engine.world, [floor, leftWall, rightWall]);

    // Create Pill Rigid Bodies
    const bodies: { id: string; body: Matter.Body; width: number; height: number }[] = [];

    PILL_CLIENTS.forEach((pill, idx) => {
      // Spawn at random X spread across top width
      const spawnX = Math.random() * (width - 240) + 120;
      // Stagger Y initial drop heights above screen
      const spawnY = -100 - idx * 65 - Math.random() * 40;
      const initialAngle = (Math.random() - 0.5) * 0.8;

      const body = Matter.Bodies.rectangle(spawnX, spawnY, pill.width, pill.height, {
        chamfer: { radius: pill.height / 2 },
        restitution: 0.45,
        friction: 0.4,
        frictionAir: 0.015,
        density: 0.002,
        angle: initialAngle,
      });

      // Add slight initial rotational torque & force
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.08);

      bodies.push({ id: pill.id, body, width: pill.width, height: pill.height });
      Matter.Composite.add(engine.world, body);
    });

    bodiesMapRef.current = bodies;

    // Add Mouse Constraint for dragging pills
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.Composite.add(engine.world, mouseConstraint);

    // Run Engine
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    // Sync body coordinates to React State on animation frame
    let animId: number;
    const updateLoop = () => {
      const newPos = bodies.map((b) => ({
        id: b.id,
        x: b.body.position.x,
        y: b.body.position.y,
        angle: b.body.angle,
      }));
      setPillPositions(newPos);
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
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#0e0e11] text-white relative overflow-hidden border-t border-b border-white/10"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff5528]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1700px] w-full mx-auto space-y-12 relative z-10">
        
        {/* Top Header Section matching RedOx reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-sans text-white"
            >
              <span className="text-[#ff5528]">Client:</span> Helping brands to grow and say their success stories to the world.
            </motion.h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed"
            >
              We&apos;re a great team of creatives with strongest capabilities to help progressive fields achieve their goals. With the best talent on every project done successfully.
            </motion.p>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#ff5528] hover:text-black border border-white/10 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-Drop Badges</span>
              </button>

              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#ff5528]" />
                <span>Interactive Physics</span>
              </span>
            </div>
          </div>
        </div>

        {/* 2D Interactive Physics Stage */}
        <div
          ref={sceneRef}
          className="relative w-full h-[550px] sm:h-[620px] rounded-3xl bg-zinc-950/60 border border-white/10 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        >
          {/* Subtle Stage Grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Render Falling Logo Pills synced to Matter.js Bodies */}
          {PILL_CLIENTS.map((pill) => {
            const pos = pillPositions.find((p) => p.id === pill.id);
            if (!pos) return null;

            return (
              <div
                key={pill.id}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: `${pill.width}px`,
                  height: `${pill.height}px`,
                  transform: `translate3d(${pos.x - pill.width / 2}px, ${pos.y - pill.height / 2}px, 0px) rotate(${pos.angle}rad)`,
                  backgroundColor: pill.bgColor,
                  color: pill.textColor,
                  willChange: 'transform',
                }}
                className="rounded-full flex items-center justify-center font-bold text-sm sm:text-base tracking-wide shadow-xl border border-black/10 transition-shadow hover:scale-105 active:scale-95 pointer-events-auto cursor-pointer select-none"
              >
                <span className="px-4 truncate font-sans font-black italic uppercase">
                  {pill.name}
                </span>
              </div>
            );
          })}

          {/* Multi-Line Parallel Floor Marker as seen in Screenshot */}
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
