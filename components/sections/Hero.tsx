"use client";

import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "../shared/MagneticButton";
import TextReveal from "../shared/TextReveal";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="z-10 max-w-4xl pt-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-emerald-sig" />
          <span className="font-mono text-xs tracking-[0.4em] text-muted-foreground dark:text-slate-300 uppercase">
            Software Engineer
          </span>
        </motion.div>

        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-display text-foreground dark:text-white font-light leading-[0.9] mb-8">
          <TextReveal delay={3.5}>NEHA</TextReveal>
        </h1>
        
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 4, duration: 1 }}
          className="text-xl md:text-3xl font-display italic text-muted-foreground dark:text-slate-300 max-w-2xl mb-12"
        >
         Transforming complex problems into elegant software solutions.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 4.5, duration: 0.8 }}
           className="flex flex-wrap gap-6"
        >
          <MagneticButton>
            <a
              href="#work"
              className="px-10 py-5 bg-emerald-sig text-bg font-semibold rounded-full hover:scale-105 transition-transform"
            >
              View My Work
            </a>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="#contact"
              className="px-10 py-5 border border-border-hover text-foreground dark:text-white font-semibold rounded-full hover:bg-black/10 dark:hover:bg-white/5 transition-colors"
            >
              Let's Connect
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 5.2, duration: 1 }}
        className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 p-4 border border-border rounded-full bg-bg/40 backdrop-blur-md"
      >
        <div className="relative w-3 h-3">
          <div className="absolute inset-0 bg-emerald-sig rounded-full animate-ping opacity-75" />
          <div className="relative w-3 h-3 bg-emerald-sig rounded-full" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground dark:text-slate-300 uppercase">
          Available for new projects
        </span>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-20 bg-gradient-to-bottom from-transparent via-border to-transparent relative overflow-hidden">
             <motion.div 
               animate={{ y: [0, 80] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 left-0 w-full h-1/2 bg-emerald-sig"
             />
        </div>
      </motion.div>

    </section>
  );
}

