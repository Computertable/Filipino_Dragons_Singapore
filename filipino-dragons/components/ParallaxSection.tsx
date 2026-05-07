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

  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);
  const logoOpacity = useTransform(smoothProgress, [0, 0.3, 0.5], [0.4, 0.4, 0]);
  
  const bgScale = useTransform(smoothProgress, [0, 1], [0.95, 1.1]);
  const bgMoveLeft = useTransform(smoothProgress, [0, 1], ["5%", "-15%"]);
  const bgMoveRight = useTransform(smoothProgress, [0, 1], ["-15%", "5%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] md:min-h-[120vh] bg-white text-(--brand-black) overflow-hidden flex flex-col justify-center py-20 md:py-24"
    >
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none overflow-hidden"
      >
        <motion.span 
          style={{ x: bgMoveLeft }}
          className="font-moderniz text-[45vw] md:text-[30vw] font-black text-black/[0.03] uppercase tracking-tighter leading-[0.8] whitespace-nowrap"
        >
          CATCH CATCH CATCH
        </motion.span>
        <motion.span 
          style={{ x: bgMoveRight }}
          // Removed the hardcoded ml-24 for a responsive margin
          className="font-moderniz text-[45vw] md:text-[30vw] font-black text-black/[0.03] uppercase tracking-tighter leading-[0.8] whitespace-nowrap md:ml-24"
        >
          PULL PULL PULL PULL
        </motion.span>
      </motion.div>

      <motion.div
        style={{ opacity: logoOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] md:w-[90vw] max-w-6xl z-10 pointer-events-none"
      >
        <img
          src="/fds_logo_faded.png"
          alt="FDS Logo"
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
        <div className="flex flex-col gap-8 md:gap-10">
          <motion.h2
            variants={itemVariants}
            className="font-moderniz text-[8vw] sm:text-5xl md:text-7xl lg:text-7xl font-black uppercase tracking-tight leading-[0.85] flex flex-col mt-4 md:mt-8"
          >
            <span>UNDAUNTED.</span>
            <span className="text-(--brand-blue)">UNBREAKABLE.</span>
            <span>UNSTOPPABLE.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            // Slightly smaller text on mobile to fit the screen nicely
            className="font-montserrat text-lg md:text-3xl font-light uppercase tracking-tight text-neutral-800 leading-snug max-w-xl"
          >
            We like our training like we like our weekends: <br />
            <span className="relative inline-block mt-2 mb-1">
              <span className="relative z-10 bg-(--brand-gold) px-2 py-1 md:px-3 text-black font-semibold">
                fun, slightly unhinged,
              </span>
            </span>{" "}
            and strangely addictive.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-28 pt-8 md:pt-10 border-t border-neutral-200"
        >
          <blockquote className="font-moderniz text-lg md:text-3xl font-black uppercase tracking-tighter italic leading-tight max-w-4xl">
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