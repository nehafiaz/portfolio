"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const experiences = [
  {
    date: "2023 — Present",
    title: "Senior Software Engineer",
    company: "Laminar Labs",
    description: "Leading the development of a real-time 3D data visualization platform using Next.js and Three.js. Reduced rendering latency by 45%.",
  },
  {
    date: "2021 — 2023",
    title: "Full Stack Developer",
    company: "Aether Systems",
    description: "Designed and implemented scalable microservices with Node.js and PostgreSQL. Improved system uptime to 99.99%.",
  },
  {
    date: "2019 — 2021",
    title: "Frontend Engineer",
    company: "Pixel Perfect UI",
    description: "Collaborated with design teams to build pixel-perfect React components and libraries. Spearheaded the migration to TypeScript.",
  },
  {
    date: "2018 — 2019",
    title: "Junior Developer",
    company: "Startup Co.",
    description: "Developed responsive web interfaces and optimized asset loading for mobile-first user experiences.",
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" ref={containerRef} className="relative py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 mb-4"
          >
            <div className="w-[1px] h-12 bg-emerald-sig" />
            <span className="font-mono text-xs tracking-[0.4em] text-text-2 uppercase">
              The Journey
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display text-text-1">Experience</h2>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Central Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-border transform -translate-x-1/2" />
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-emerald-sig transform -translate-x-1/2 origin-top z-10"
          style={{ scaleY }}
        />

        <div className="space-y-24">
           {experiences.map((exp, i) => (
             <TimelineEntry key={exp.company + i} exp={exp} index={i} />
           ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({ exp, index }: { exp: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between gap-12 group w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
       {/* Circle marker */}
       <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-bg border-4 border-emerald-sig transform -translate-x-1/2 z-20 group-hover:scale-125 transition-transform" />
       
       {/* Spacer/Empty Side */}
       <div className="hidden md:block w-1/2" />
       
       {/* Content Side */}
       <motion.div 
         initial={{ opacity: 0, x: isEven ? 50 : -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true, margin: "-10%" }}
         transition={{ duration: 0.8, delay: 0.2 }}
         className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16 text-right'}`}
       >
          <div className="p-8 border border-border bg-bg-surface/30 backdrop-blur-sm rounded-3xl hover:border-emerald-sig/30 transition-colors">
             <span className="inline-block px-4 py-1 text-[10px] font-mono text-gold-sig border border-gold-sig/30 rounded-full mb-4 uppercase tracking-widest">{exp.date}</span>
             <h3 className="text-xl md:text-2xl font-display text-text-1 mb-2 font-medium">{exp.title}</h3>
             <h4 className="text-sm font-body text-emerald-sig/80 mb-4">{exp.company}</h4>
             <p className="text-text-2 text-sm leading-relaxed font-body">{exp.description}</p>
          </div>
       </motion.div>
    </div>
  );
}
