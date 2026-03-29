"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}

export default function TextReveal({
  children,
  as: Component = "span",
  className,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const words = children.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as any,
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as any,
    },

  };

  return (
    <Component ref={ref} className={cn("inline-block", className)}>
      <motion.span
        className="inline-flex flex-wrap gap-x-2"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={childVariants} className="inline-block origin-bottom">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
