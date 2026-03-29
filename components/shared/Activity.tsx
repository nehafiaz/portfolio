"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface ActivityProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function Activity({ children, fallback = null }: ActivityProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "200px" });
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    if (isInView) setHasRendered(true);
  }, [isInView]);

  return (
    <div ref={ref} className="contents">
      {isInView || hasRendered ? children : fallback}
    </div>
  );
}
