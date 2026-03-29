"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("preloader-shown", "true");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
           className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-bg"
           exit={{ y: "-100vh" }}
           transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex items-center gap-2">
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M20 80V20L80 20V80"
                stroke="var(--emerald)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M20 80L80 20"
                stroke="var(--emerald)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
            <motion.h1
              className="text-4xl font-display text-text-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Neha
            </motion.h1>
          </div>
          <motion.p
            className="mt-4 font-mono text-xs tracking-[0.4em] text-text-2 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            Software Engineer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
