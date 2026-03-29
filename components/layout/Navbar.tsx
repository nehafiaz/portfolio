"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import MagneticButton from "../shared/MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[500] px-6 md:px-12 py-6 transition-all duration-500`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-border shadow-2xl"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-2xl font-display text-emerald-sig font-bold group-hover:scale-110 transition-transform">
            N.
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-text-2 hover:text-text-1 transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-sig transition-all group-hover:w-full" />
            </a>
          ))}
          <div className="flex items-center gap-4 pl-4 border-l border-border">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-text-2 hover:text-emerald-sig transition-colors"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -90 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <MagneticButton>
               <a href="#work" className="px-6 py-2.5 bg-emerald-sig text-bg font-medium text-sm rounded-full hover:bg-emerald-sig/90 transition-colors">
                 View Work
               </a>
            </MagneticButton>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-text-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-bg z-[600] flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
             {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-display text-text-1 hover:text-emerald-sig transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
