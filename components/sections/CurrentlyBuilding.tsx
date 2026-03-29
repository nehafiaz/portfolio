"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer } from "lucide-react";

export default function CurrentlyBuilding() {
  return (
    <div className="py-12 px-6 border-b border-border/10 bg-bg-surface/30 flex items-center justify-center gap-8">
       <div className="flex items-center gap-4">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-sig opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-sig"></span>
          </div>
          <span className="font-mono text-xs text-text-3 uppercase tracking-widest">Currently Building:</span>
       </div>
       
       <motion.div 
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
         className="flex items-center gap-3 px-6 py-2 border border-emerald-sig/20 bg-emerald-sig/5 rounded-full"
       >
          <Hammer className="text-emerald-sig w-4 h-4" />
          <span className="text-sm font-display italic text-text-1">A Multi-Agent AI Orchestration Dashboard for SaaS</span>
       </motion.div>
    </div>
  );
}
