"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function JoinBreaker() {
  return (
    <section className="relative py-16 md:py-20 bg-(--brand-blue) overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-10">
        <h2 className="font-moderniz text-[12vw] text-white whitespace-nowrap leading-none uppercase">
          Paddles Up
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="font-moderniz text-3xl md:text-5xl text-white uppercase leading-none tracking-tighter">
              The Boat is <span className="text-black/30">Never Full</span>
            </h2>
            <p className="mt-2 font-montserrat text-white/80 text-sm md:text-base font-medium uppercase tracking-widest">
              Your seat is waiting. Join the crew today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              className="group flex items-center gap-4 px-8 py-4 bg-white text-(--brand-red) font-montserrat font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-xl active:scale-95"
            >
              Recruit Me
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
    </section>
  );
}