"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <section
      ref={ref}
      className="h-[120vh] flex items-center justify-center overflow-hidden"
    >
      <motion.img
        src="/dragon.jpg" // put your image in public folder
        alt="Dragon"
        style={{ scale }}
        className="w-full max-w-5xl rounded-xl shadow-2xl"
      />
    </section>
  );
}