"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-(--brand-black) overflow-hidden flex items-end md:items-center">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }} 
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-0">
        
        <div className="max-w-3xl">
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-2 bg-(--brand-gold) mb-6"
          />

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Filipino <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #F4C430" }}>Dragons</span> <br />
            Singapore
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 inline-block bg-(--brand-red) text-white px-6 py-3 text-lg md:text-xl font-bold uppercase tracking-widest"
          >
            Brave, not reckless. Bold, not arrogant.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#join" className="px-8 py-4 bg-(--brand-gold) text-black font-black uppercase tracking-wider hover:bg-white transition-colors text-center border-2 border-(--brand-gold) hover:border-white">
              Get in the Boat
            </a>
            <a href="#about" className="px-8 py-4 bg-transparent text-white font-black uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black transition-colors text-center">
              Our Story
            </a>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-12 md:h-24" style={{ transform: "rotate(180deg)" }}>
          <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white" />
        </svg>
      </div>

    </section>
  );
}