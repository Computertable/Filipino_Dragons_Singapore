"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative bg-white">

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold bg-linear-to-r 
        from-(--brand-red) 
        via-(--brand-gold) 
        to-(--brand-blue) 
        bg-clip-text text-transparent"
      >
        Filipino Dragons (Singapore)
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 text-lg md:text-2xl text-gray-600 max-w-2xl"
      >
        Power. Unity. Excellence on the Water.
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 px-8 py-4 rounded-full 
        bg-(--brand-red) 
        hover:bg-(--brand-blue) 
        transition duration-300 
        text-white font-semibold shadow-lg"
      >
        Join the Team
      </motion.button>

    </section>
  );
}