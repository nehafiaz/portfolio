"use client";

import React from "react";
import { motion } from "framer-motion";
import TextReveal from "../shared/TextReveal";

const rings = [
  {
    radius: 140,
    speed: 20,
    direction: 1,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    radius: 240,
    speed: 25,
    direction: -1,
    items: ["Node.js", "PostgreSQL", "Prisma", "Python", "GraphQL"],
  },
  {
    radius: 340,
    speed: 35,
    direction: 1,
    items: ["Three.js", "Framer Motion", "Figma", "Docker", "AWS", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-bg overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="z-10 text-center mb-24 pointer-events-none px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-12 h-[1px] bg-emerald-sig" />
          <span className="font-mono text-xs tracking-[0.4em] text-text-2 uppercase">
            Technical Ecosystem
          </span>
          <div className="w-12 h-[1px] bg-emerald-sig" />
        </motion.div>

        <TextReveal as="h2" className="text-5xl md:text-7xl font-display text-text-1">
          The Gravity of Code
        </TextReveal>
      </div>

      <div className="relative w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center select-none overflow-hidden sm:overflow-visible">
        {/* Central Core */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="absolute w-32 h-32 rounded-full border border-emerald-sig/50 bg-bg-surface/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_60px_-15px_var(--emerald)] z-20"
        >
            <span className="font-display text-2xl text-text-1 tracking-wider">NEHA</span>
        </motion.div>

        {/* Orbit Rings */}
        {rings.map((ring, ringIdx) => (
          <motion.div
            key={ringIdx}
            className="absolute rounded-full border border-border/40 pointer-events-none"
            style={{ 
               width: ring.radius * 2, 
               height: ring.radius * 2 
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: ringIdx * 0.2, duration: 1 }}
          >
             {/* Rotating Container */}
             <motion.div
                className="w-full h-full relative"
                animate={{ rotate: 360 * ring.direction }}
                transition={{ 
                   repeat: Infinity, 
                   duration: ring.speed, 
                   ease: "linear" 
                }}
             >
                {ring.items.map((item, i) => {
                  const angle = (i / ring.items.length) * Math.PI * 2;
                  const x = Math.cos(angle) * ring.radius;
                  const y = Math.sin(angle) * ring.radius;
                  
                  return (
                    <div
                      key={item}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      {/* Counter-rotate to keep text upright */}
                      <motion.div
                        animate={{ rotate: -360 * ring.direction }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: ring.speed, 
                          ease: "linear" 
                        }}
                        className="px-4 py-2 bg-bg-surface/90 border border-border/50 rounded-full backdrop-blur-sm hover:border-emerald-sig hover:text-emerald-sig transition-colors cursor-pointer text-text-2 hover:bg-emerald-sig/10 whitespace-nowrap shadow-xl"
                      >
                         <span className="font-mono text-sm tracking-wide">{item}</span>
                      </motion.div>
                    </div>
                  );
                })}
             </motion.div>
          </motion.div>
        ))}

        {/* Background glow logic */}
        <div className="absolute w-[800px] h-[800px] bg-emerald-sig/20 dark:bg-emerald-sig/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      </div>
    </section>
  );
}
