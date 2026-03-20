"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.8]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-white text-(--brand-black) overflow-hidden py-24 flex flex-col justify-center"
    >
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden"
      >
        <span className="font-moderniz text-[20vw] font-black text-black/[0.03] leading-none uppercase tracking-tighter whitespace-nowrap">
          Filipino
        </span>
      </motion.div>

      <motion.div
        style={{ 
          scale: logoScale, 
          opacity: logoOpacity,
          x: "-30%", 
          y: "-50%" 
        }}
        className="absolute top-1/2 left-1/2 w-[60vw] md:w-[45vw] z-10 pointer-events-none"
      >
        <img 
          src="/fds_logo_faded.png"
          alt="FDS Logo" 
          className="w-full h-auto object-contain"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            style={{ y: y1 }}
            className="md:col-span-8 flex flex-col gap-6"
          >
            <h2 className="font-moderniz text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              <span className="text-(--brand-red)">Tough,</span> <br />
              Not Scary.
            </h2>
            
            <p className="font-montserrat text-xl md:text-3xl font-thin uppercase tracking-tight text-neutral-800 max-w-2xl mt-4">
              We like our training like we like our weekends: <br />
              <span className="bg-(--brand-gold) px-2 text-black inline-block mt-2">
                fun, slightly unhinged,
              </span> and strangely addictive.
            </p>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="md:col-span-4 border-l-4 border-(--brand-red) pl-6 flex flex-col gap-4"
          >
            <p className="font-moderniz text-lg md:text-xl font-black uppercase leading-tight tracking-tighter">
              Brave, but not reckless. <br />
              Daring, not foolish. <br />
              Bold, not arrogant.
            </p>
            <p className="font-montserrat text-neutral-500 font-medium text-sm md:text-base leading-relaxed">
              Founded in 2008, we’ve grown into one of Singapore’s most spirited dragon boat teams. 
              We race, we sweat, we chase medals — but we also show up for each other.
            </p>
          </motion.div>
        </div>

        <motion.div 
          style={{ y: y1 }}
          className="mt-20 md:mt-40 pt-10"
        >
          <p className="font-moderniz text-xl md:text-2xl font-black uppercase tracking-tighter italic max-w-4xl">
            "Come for the paddling. Stay because the people beside you become the friends you end up keeping."
          </p>
          <div className="h-1.5 w-24 bg-(--brand-gold) mt-6" />
        </motion.div>

      </div>
    </section>
  );
}