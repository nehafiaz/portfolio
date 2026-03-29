"use client";

import React from "react";
import { motion } from "framer-motion";
import TextReveal from "../shared/TextReveal";
import MagneticButton from "../shared/MagneticButton";

const personalityPills = [
  "Creativity-driven",
  "Performance-obsessed",
  "React Specialist",
  "3D enthusiast",
  "Problem Solver",
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-center">
        {/* Left Column: Content */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-emerald-sig" />
            <span className="font-mono text-xs tracking-[0.4em] text-text-2 uppercase">
              Engineer by logic.
            </span>
          </motion.div>

          <TextReveal as="h2" className="text-4xl md:text-6xl font-display text-text-1 mb-12">
            Designer by instinct. I build things that live and breathe.
          </TextReveal>

          <div className="space-y-6 text-text-2 text-lg md:text-xl font-body leading-relaxed max-w-xl">
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
             >
               With over 6 years of experience, I specialize in crafting ultra-high-performance interfaces
               that combine mathematical precision with artistic flair.
             </motion.p>
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
             >
               I don't just write code; I design systems. Whether it's a 3D data visualization
               or a complex SaaS architecture, my goal is always the same: **unforgettable user experiences.**
             </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {personalityPills.map((pill, i) => (
              <span
                key={pill}
                className="px-4 py-2 text-xs font-mono border border-border rounded-full text-text-2 hover:border-emerald-sig hover:text-emerald-sig transition-colors"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          <MagneticButton className="mt-12">
            <a
              href="/resume.pdf"
              className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-border-hover text-text-1 rounded-full hover:border-emerald-sig transition-all"
            >
              Download Resume
              <motion.span 
                 animate={{ y: [0, 4, 0] }}
                 transition={{ repeat: Infinity, duration: 2 }}
              >
                ↓
              </motion.span>
            </a>
          </MagneticButton>
        </div>

        {/* Right Column: Interactive Card */}
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 2, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 p-8 rounded-3xl bg-bg-surface/70 backdrop-blur-xl border border-border-hover shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden"
          >
             <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-4 font-mono text-xs text-text-3">neha.ts — Visual Studio Code</span>
             </div>

             <div className="font-mono text-sm leading-relaxed text-text-2 whitespace-pre overflow-x-auto">
                <p><span className="text-emerald-sig">class</span> <span className="text-gold-sig">SoftwareEngineer</span> {"{"}</p>
                <p>  <span className="text-emerald-sig">private</span> name: string = <span className="text-gold-sig">"Neha"</span>;</p>
                <p>  <span className="text-emerald-sig">public</span> skills: string[] = [</p>
                <p>    <span className="text-gold-sig">"Next.js"</span>, <span className="text-gold-sig">"TypeScript"</span>, <span className="text-gold-sig">"Three.js"</span></p>
                <p>  ];</p>
                <p>  </p>
                <p>  <span className="text-emerald-sig">public</span> build() {"{"}</p>
                <p>    <span className="text-emerald-sig">return</span> logic + magic;</p>
                <p>  {"}"}</p>
                <p>{"}"}</p>
             </div>
          </motion.div>

          {/* Abstract glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-sig/40 dark:bg-emerald-sig/20 blur-[100px] -z-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-sig/30 dark:bg-gold-sig/10 blur-[100px] -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
