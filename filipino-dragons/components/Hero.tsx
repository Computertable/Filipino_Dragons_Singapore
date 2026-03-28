"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-(--brand-black) overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />


      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 md:pb-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1.5 bg-(--brand-gold) mb-4"
          />

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white uppercase leading-[1] tracking-tighter font-moderniz"
          >
            Filipino <br />
            <span 
              className="text-transparent drop-shadow-md [-webkit-text-stroke:1px_#F4C430] md:[-webkit-text-stroke:2px_#F4C430]"
            >
              Dragons
            </span> <br />
            Singapore
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 inline-block bg-(--brand-red) text-white px-5 py-3 text-xs md:text-lg font-montserrat font-medium uppercase tracking-widest shadow-2xl"
          >
            Undaunted. Unwavered. Unstoppable.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#join" 
              className="font-montserrat font-bold px-8 py-4 bg-(--brand-gold) text-black font-black uppercase tracking-wider hover:bg-white transition-all text-center border-2 border-(--brand-gold) hover:border-white active:scale-95"
            >
              Get in the Boat
            </a>
            <a 
              href="#about" 
              className="font-montserrat font-bold px-8 py-4 bg-transparent text-white font-black uppercase tracking-wider border-2 border-white/50 hover:border-white hover:bg-white hover:text-black transition-all text-center active:scale-95"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="block w-full h-10 md:h-20" 
          style={{ transform: "rotate(180deg)" }}
        >
          <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white" />
        </svg>
      </div>
    </section>
  );
}