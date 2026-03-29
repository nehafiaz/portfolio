"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Database, 
  Search, 
  Terminal, 
  Layout, 
  Layers, 
  Server, 
  Globe, 
  Zap 
} from "lucide-react";

const tech = [
  { name: "React", icon: Layout },
  { name: "TypeScript", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Three.js", icon: Cpu },
  { name: "Tailwind CSS", icon: Zap },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "Terminal", icon: Terminal },
  { name: "Search", icon: Search },
  { name: "Framer Motion", icon: Layers },
];


export default function TechStrip() {
  return (
    <div className="relative py-12 border-y border-border overflow-hidden bg-bg/50 backdrop-blur-sm">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-right from-bg to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-left from-bg to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...tech, ...tech].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-10 group"
          >
            <item.icon className="w-5 h-5 text-text-3 group-hover:text-emerald-sig transition-colors" />
            <span className="text-sm font-mono tracking-widest text-text-3 group-hover:text-text-1 transition-colors uppercase">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
