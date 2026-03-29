"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code, ExternalLink, ArrowRight } from "lucide-react";
import MagneticButton from "../shared/MagneticButton";

const projects = [
  {
    id: "01",
    title: "NeuroSphere",
    impact: "AI-driven neural visualization",
    description: "A real-time 3D dashboard visualizing large-scale neural networks with over 50,000 active nodes. Built for cognitive research teams.",
    tech: ["Next.js", "Three.js", "WebWorker", "GLSL"],
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2000&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
  {
    id: "02",
    title: "Vortex Pay",
    impact: "Web3 liquidity protocol",
    description: "A decentralized finance hub focusing on cross-chain liquidity and automated market making with zero-knowledge proof verification.",
    tech: ["TypeScript", "Rust", "Solidity", "Tailwind"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="relative py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
           <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-12 h-px bg-emerald-sig" />
                <span className="font-mono text-xs tracking-[0.4em] text-text-2 uppercase">
                  Featured Case Studies
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-display text-text-1">
                Selected Work
              </h2>
           </div>
           
        </div>

        <div className="space-y-32">
           {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
           ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const isEven = index % 2 === 0;

  return (
    <div 
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        isEven ? "" : "lg:direction-rtl"
      }`}
    >
       <div className={`space-y-8 order-2 lg:order-1 ${isEven ? "text-left" : "lg:text-right"}`}>
          <div className="space-y-2">
            <span className="text-sm font-mono text-emerald-sig">{project.id} / 02</span>
            <h3 className="text-4xl md:text-5xl font-display text-text-1">{project.title}</h3>
            <p className="text-lg italic text-gold-sig">{project.impact}</p>
          </div>
          
          <p className="text-text-2 text-lg font-body leading-relaxed max-w-xl ml-auto">
             {project.description}
          </p>

          <div className={`flex flex-wrap gap-2 ${isEven ? "justify-start" : "lg:justify-end"}`}>
             {project.tech.map((t: string) => (
                <span key={t} className="px-4 py-1 text-xs font-mono bg-bg-surface border border-border text-text-3 rounded-full">
                  {t}
                </span>
             ))}
          </div>

          <div className={`flex gap-6 ${isEven ? "justify-start" : "lg:justify-end"}`}>
             <MagneticButton>
                <a href={project.link} className="flex items-center gap-2 text-text-1 font-medium hover:text-emerald-sig transition-colors">
                  Live View <ExternalLink size={16} />
                </a>
             </MagneticButton>
             <MagneticButton>
                <a href={project.github} className="flex items-center gap-2 text-text-2 hover:text-text-1 transition-colors">
                  Code Source <Code size={16} />
                </a>
             </MagneticButton>

          </div>
       </div>

       <motion.div 
         className="relative group order-1 lg:order-2"
         onMouseMove={handleMouse}
         onMouseLeave={handleMouseLeave}
         style={{ perspective: 1000, rotateX, rotateY }}
       >
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.1] group-hover:scale-100"
             />
             <div className="absolute inset-0 bg-emerald-sig/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-emerald-sig/30 rounded-tl-3xl -z-10 group-hover:-top-6 group-hover:-left-6 transition-all" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-sig/30 rounded-br-3xl -z-10 group-hover:-bottom-6 group-hover:-right-6 transition-all" />
       </motion.div>
    </div>
  );
}
