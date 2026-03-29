"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "CTO",
    company: "Luxe Media",
    text: "Neha's ability to translate complex 3D concepts into performant web interfaces is unparalleled. She is a visionary developer.",
    image: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Founding Engineer",
    company: "Vertex Protocol",
    text: "The web3 dashboard Neha built for us has become our product's signature. Pure pixel-perfection and high performance.",
    image: "https://i.pravatar.cc/150?u=2",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-bg-surface/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-center">
         <div className="z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-[1px] h-12 bg-emerald-sig" />
              <span className="font-mono text-xs tracking-[0.4em] text-text-2 uppercase">
                What They Say
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display text-text-1">Kind Words</h2>
         </div>

         <div className="grid gap-12">
            {testimonials.map((t, i) => (
               <motion.div
                 key={t.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="relative p-10 border border-border bg-bg backdrop-blur-md rounded-[2.5rem] hover:border-emerald-sig/30 transition-all group lg:last:ml-24"
               >
                  <Quote className="absolute top-8 right-8 text-emerald-sig/10 w-24 h-24 -z-10 group-hover:text-emerald-sig/20 transition-colors" />
                  
                  <p className="text-xl md:text-2xl font-body text-text-2 leading-relaxed italic mb-8">
                     "{t.text}"
                  </p>

                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                     </div>
                     <div>
                        <h4 className="text-text-1 font-display font-medium">{t.name}</h4>
                        <p className="text-xs font-mono text-text-3 uppercase">{t.role} @ {t.company}</p>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
