"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 px-6 bg-bg overflow-hidden border-t border-border/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
         <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex items-center justify-center">
            <h2 className="text-[12vw] font-display font-light text-text-1 pointer-events-none select-none">NEHA</h2>
         </div>

         <div className="z-10 flex flex-col items-center gap-6">
            <span className="text-3xl font-display text-emerald-sig font-bold">N.</span>
            <div className="flex gap-8 text-sm font-mono tracking-widest text-text-2 uppercase">
               <a href="#about" className="hover:text-text-1 transition-colors">About</a>
               <a href="#work" className="hover:text-text-1 transition-colors">Work</a>
               <a href="#skills" className="hover:text-text-1 transition-colors">Skills</a>
               <a href="#contact" className="hover:text-text-1 transition-colors">Contact</a>
            </div>
         </div>

         <div className="z-10 pt-12 border-t border-border w-full flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm font-mono text-text-3 tracking-widest uppercase">
              © {currentYear} NEHA. ALL RIGHTS RESERVED.
            </p>
            <p className="text-sm font-display italic text-text-3">
              Designed & built with intention by <span className="text-text-2">Neha</span> <span className="text-emerald-sig/50 hover:text-emerald-sig transition-colors cursor-default">✦</span>
            </p>
         </div>
      </div>
    </footer>
  );
}
