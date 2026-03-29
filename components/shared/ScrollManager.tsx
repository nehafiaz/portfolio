"use client";

import { useEffect } from "react";
import { useScrollStore } from "@/lib/store";

export default function ScrollManager() {
  const setProgress = useScrollStore((state) => state.setProgress);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = scrollY / totalHeight;
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setProgress]);

  return null;
}
