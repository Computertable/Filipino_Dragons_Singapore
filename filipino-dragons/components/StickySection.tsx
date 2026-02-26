"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StickySection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={ref} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.h2
          style={{ opacity }}
          className="text-6xl font-bold text-(--brand-gold)"
        >
          Strength in Unity
        </motion.h2>
      </div>
    </section>
  );
}