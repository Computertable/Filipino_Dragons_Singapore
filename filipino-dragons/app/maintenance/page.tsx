"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MaintenancePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 pt-32 pb-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black -z-10" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl relative z-10"
        >
          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1.5 bg-[#F4C430] mx-auto mb-8"
          />

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-moderniz text-5xl md:text-7xl uppercase leading-tight tracking-tighter text-white mb-4"
          >
            We are <br />
            <span className="text-transparent drop-shadow-md [-webkit-text-stroke:1px_#F4C430]">
              Upgrading
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-400 mt-6 leading-relaxed"
          >
            This page is currently under maintenance while we improve performance and design for our community.
          </motion.h2>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 inline-block px-6 py-3 border border-white/20 rounded-sm text-sm text-white/70"
          >
            Status:{" "}
            <span className="text-[#F4C430] font-bold uppercase">
              Under Maintenance
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-[#F4C430] text-black font-montserrat font-black uppercase tracking-wider hover:bg-white transition-all active:scale-95 border-2 border-[#F4C430] hover:border-white"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}