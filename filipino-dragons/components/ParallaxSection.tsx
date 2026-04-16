"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  type Variants,
} from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ParallaxSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  const bgTextY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);
  const logoOpacity = useTransform(
    smoothProgress,
    [0, 0.3, 0.5],
    [0.4, 0.4, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] bg-white text-(--brand-black) overflow-hidden flex flex-col justify-center py-24"
    >
      <motion.div
        style={{ y: bgTextY }}
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none"
      >
        <span className="font-moderniz text-[45vw] font-black text-black/[0.03] uppercase tracking-tighter leading-none">
          FDS
        </span>
      </motion.div>

      <motion.div
        style={{ opacity: logoOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-6xl z-10 pointer-events-none"
      >
        <img
          src="/fds_logo_faded.png"
          alt=""
          className="w-full h-auto object-contain filter grayscale opacity-20"
        />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 relative z-20 w-full"
      >
        <div className="flex flex-col gap-10">
          <motion.h2
            variants={itemVariants}
            className="font-moderniz text-[7.5vw] mt-8 sm:text-5xl md:text-7xl lg:text-7xl font-black uppercase tracking-tight leading-[0.85] flex flex-col"
          >
            <span>UNDAUNTED.</span>
            <span className="text-(--brand-blue)">UNWAVERED.</span>
            <span>UNSTOPPABLE.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-montserrat text-xl md:text-3xl font-light uppercase tracking-tight text-neutral-800 leading-snug max-w-xl"
          >
            We like our training like we like our weekends: <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-(--brand-gold) px-3 py-1 text-black font-semibold">
                fun, slightly unhinged,
              </span>
            </span>{" "}
            and strangely addictive.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-28 pt-10 border-t border-neutral-200"
        >
          <blockquote className="font-moderniz text-xl md:text-3xl font-black uppercase tracking-tighter italic leading-tight max-w-4xl">
            "Come for the paddling. Stay because the people beside you become the friends you keep."
          </blockquote>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-2 bg-(--brand-gold) mt-6"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}