"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const childVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mql.matches);
    const onChange = () => setReduceMotion(mql.matches);
    if (typeof mql.addEventListener === "function") mql.addEventListener("change", onChange);
    else if (typeof (mql as any).addListener === "function") (mql as any).addListener(onChange);
    return () => {
      if (typeof mql.removeEventListener === "function") mql.removeEventListener("change", onChange);
      else if (typeof (mql as any).removeListener === "function") (mql as any).removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    // Flip after first commit so subsequent route changes animate
    setFirstRender(false);
  }, []);

  if (reduceMotion) {
    // Respect reduced motion: render without animations
    return <div className="min-h-screen">{children}</div>;
  }

  if (firstRender) {
    // Initial page load: render statically, keep route-change animations later
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="min-h-screen"
      >
        <motion.div variants={childVariants}>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
