"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import TextReveal from "../shared/TextReveal";

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const rings = [
  {
    radius: 140,
    speed: 22,
    direction: 1,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    color: "var(--emerald)",
  },
  {
    radius: 240,
    speed: 32,
    direction: -1,
    items: ["Node.js", "PostgreSQL", "Prisma", "Python", "GraphQL"],
    color: "var(--emerald-dim)",
  },
  {
    radius: 340,
    speed: 44,
    direction: 1,
    items: ["Three.js", "Framer Motion", "Figma", "Docker", "AWS", "CI/CD"],
    color: "var(--emerald)",
  },
];

/* ─── Floating particle ─────────────────────────────────────────────────────── */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

function useParticles(count = 28): Particle[] {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 6 + 5,
        delay: Math.random() * 4,
      }))
    );
  }, [count]);
  return particles;
}

/* ─── Radar sweep canvas ─────────────────────────────────────────────────────── */
function RadarSweep({ radius }: { radius: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const angleRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = radius * 2 + 20;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;

    // Read CSS var at runtime
    const sweepColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--emerald")
      .trim() || "#f97316";

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      // Sweep arc — radial gradient rotated to current angle
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angleRef.current);
      const arc = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      arc.addColorStop(0, "rgba(249,115,22,0.22)");
      arc.addColorStop(1, "rgba(249,115,22,0)");
      ctx.fillStyle = arc;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, -Math.PI * 0.3, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Glow dot at sweep tip
      const tipX = cx + Math.cos(angleRef.current) * radius;
      const tipY = cy + Math.sin(angleRef.current) * radius;
      const glow = ctx.createRadialGradient(tipX, tipY, 0, tipX, tipY, 12);
      glow.addColorStop(0, "rgba(249,115,22,0.7)");
      glow.addColorStop(1, "rgba(249,115,22,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(tipX, tipY, 12, 0, Math.PI * 2);
      ctx.fill();

      angleRef.current += 0.012;
      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, [radius]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute pointer-events-none -z-10 opacity-40 dark:opacity-60"
      style={{ width: radius * 2 + 20, height: radius * 2 + 20 }}
    />
  );
}

/* ─── Main component ─────────────────────────────────────────────────────────── */
export default function Skills() {
  const particles = useParticles(28);
  const coreControls = useAnimation();

  // Pulse loop for the core
  useEffect(() => {
    coreControls.start({
      boxShadow: [
        "0 0 30px -10px var(--emerald)",
        "0 0 80px -10px var(--emerald)",
        "0 0 30px -10px var(--emerald)",
      ],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    });
  }, [coreControls]);

  return (
    <section
      id="skills"
      className="relative py-32 bg-bg overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      {/* ── Background particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-emerald-sig"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: 0,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Ambient gradient blobs ── */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{ background: "var(--emerald)", opacity: 0 }}
        animate={{ opacity: [0.04, 0.1, 0.04], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none -z-10 translate-x-60 translate-y-20"
        style={{ background: "var(--emerald-dim)", opacity: 0 }}
        animate={{ opacity: [0.03, 0.08, 0.03], scale: [1.1, 1, 1.1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* ── Section label + heading ── */}
      <div className="z-10 text-center pointer-events-none px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <motion.div
            className="h-[1px] bg-emerald-sig"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
          <motion.span
            className="font-mono text-xs tracking-[0.4em] text-text-2 uppercase"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Technical Ecosystem
          </motion.span>
          <motion.div
            className="h-[1px] bg-emerald-sig"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        <TextReveal as="h2" className="text-5xl md:text-7xl font-display text-text-1">
          The Gravity of Code
        </TextReveal>

        {/* Animated underline */}
        <motion.div
          className="mx-auto mt-4 h-[2px] rounded-full bg-gradient-to-r from-transparent via-emerald-sig to-transparent"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "260px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        />
      </div>

      {/* ── Orbital system ── */}
      <div className="relative w-full max-w-4xl mt-52 aspect-square md:aspect-video flex items-center justify-center select-none overflow-hidden sm:overflow-visible">

        {/* Radar sweep (innermost ring radius) */}
        <RadarSweep radius={340} />

        {/* Central Core */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -90 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          animate={coreControls}
          className="absolute w-32 h-32 rounded-full border border-emerald-sig/60 bg-bg-surface/80 backdrop-blur-md flex items-center justify-center z-20 cursor-pointer"
          whileHover={{ scale: 1.08 }}
        >
          {/* Inner glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-emerald-sig/30"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Outer ping */}
          <motion.div
            className="absolute inset-0 rounded-full border border-emerald-sig/20"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <span className="font-display text-2xl text-text-1 tracking-wider z-10">
            NEHA
          </span>
        </motion.div>

        {/* Orbit Rings */}
        {rings.map((ring, ringIdx) => (
          <motion.div
            key={ringIdx}
            className="absolute rounded-full border border-border/30 pointer-events-none"
            style={{ width: ring.radius * 2, height: ring.radius * 2 }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: ringIdx * 0.25 + 0.4,
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {/* Dashed accent ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `1px dashed var(--emerald)`,
                opacity: 0.15,
              }}
              animate={{ rotate: 360 * -ring.direction }}
              transition={{
                duration: ring.speed * 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Rotating pill container */}
            <motion.div
              className="w-full h-full relative"
              animate={{ rotate: 360 * ring.direction }}
              transition={{
                repeat: Infinity,
                duration: ring.speed,
                ease: "linear",
              }}
            >
              {ring.items.map((item, i) => {
                const angle = (i / ring.items.length) * Math.PI * 2;
                const x = Math.cos(angle) * ring.radius;
                const y = Math.sin(angle) * ring.radius;

                return (
                  <div
                    key={item}
                    className="absolute left-1/2 top-1/2 pointer-events-auto"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    {/* Counter-rotate so text stays upright */}
                    <motion.div
                      animate={{ rotate: -360 * ring.direction }}
                      transition={{
                        repeat: Infinity,
                        duration: ring.speed,
                        ease: "linear",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.18,
                        borderColor: "var(--emerald)",
                        color: "var(--emerald)",
                        backgroundColor: "rgba(var(--emerald-rgb),0.1)",
                        boxShadow: "0 0 20px -4px var(--emerald)",
                        transition: { duration: 0.2 },
                      }}
                      className="px-4 py-2 bg-bg-surface/90 border border-border/50 rounded-full backdrop-blur-sm text-text-2 whitespace-nowrap shadow-xl cursor-pointer -translate-x-1/2 -translate-y-1/2 transition-shadow"
                      style={{
                        transformOrigin: "center",
                      }}
                    >
                      <span className="font-mono text-sm tracking-wide">
                        {item}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}

        {/* Background glow */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-[100px] -z-10 pointer-events-none"
          style={{ background: "var(--emerald)", opacity: 0 }}
          animate={{ opacity: [0.06, 0.14, 0.06], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Bottom stat strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 mt-64 flex flex-wrap items-center justify-center gap-12 px-6"
      >
        {[
          { value: "15+", label: "Technologies" },
          { value: "3+", label: "Years Building" },
          { value: "∞", label: "Learning" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col items-center gap-1 group cursor-default"
          >
            <motion.span
              className="font-display text-4xl text-emerald-sig"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeInOut",
              }}
            >
              {stat.value}
            </motion.span>
            <span className="font-mono text-xs tracking-[0.25em] text-text-2 uppercase group-hover:text-text-1 transition-colors">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
