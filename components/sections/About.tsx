"use client";

import React from "react";
import { motion } from "framer-motion";
import TextReveal from "../shared/TextReveal";
import MagneticButton from "../shared/MagneticButton";

const personalityPills = [
  "Software Engineer",
  "Web & Mobile Developer",
  "React / Next.js",
  "Problem Solver",
  "Clean Architecture",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden"
    >
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
              Software Engineer
            </span>
          </motion.div>

          <TextReveal
            as="h2"
            className="text-4xl md:text-6xl font-display text-text-1 mb-12"
          >
            Building scalable clean and modern
            user experiences.
          </TextReveal>

          <div className="space-y-6 text-text-2 text-lg md:text-xl font-body leading-relaxed max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm a Software Engineer focused on developing modern web and
              mobile applications. I enjoy transforming ideas into scalable,
              high-performance products using clean code and efficient
              architecture.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              My expertise includes building responsive web apps,
              mobile-friendly interfaces, and full-stack solutions. I aim to
              create seamless user experiences that are fast, reliable, and easy
              to maintain.
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
              <span className="ml-4 font-mono text-xs text-text-3">
                neha.ts — Visual Studio Code
              </span>
            </div>

            <div className="font-mono text-sm leading-relaxed text-text-2 whitespace-pre overflow-x-auto">
              <p>
                <span className="text-emerald-sig">class</span>{" "}
                <span className="text-gold-sig">SoftwareEngineer</span> {"{"}
              </p>
              <p>
                {" "}
                <span className="text-emerald-sig">private</span> name: string ={" "}
                <span className="text-gold-sig">"Neha"</span>;
              </p>
              <p>
                {" "}
                <span className="text-emerald-sig">public</span> skills:
                string[] = [
              </p>
              <p>
                {" "}
                <span className="text-gold-sig">"React"</span>,{" "}
                <span className="text-gold-sig">"Next.js"</span>,{" "}
                <span className="text-gold-sig">"TypeScript"</span>,
              </p>
              <p>
                {" "}
                <span className="text-gold-sig">"Tailwind CSS"</span>,{" "}
                <span className="text-gold-sig">"React Native"</span>
              </p>
              <p> ];</p>
              <p> </p>
              <p>
                {" "}
                <span className="text-emerald-sig">public</span> build() {"{"}
              </p>
              <p>
                {" "}
                <span className="text-emerald-sig">return</span> logic + magic;
              </p>
              <p> {"}"}</p>
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
