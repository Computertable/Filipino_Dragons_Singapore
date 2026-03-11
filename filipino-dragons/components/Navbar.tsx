"use client";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
       <div className="flex-1 flex justify-start">
           <motion.img 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="/FDSLogo.png" 
              alt="FDS Logo"
              className="h-12 md:h-16 w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform"
            />
        </div>

        <div className="hidden md:flex items-center space-x-8 px-8 py-3 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 text-sm font-medium text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <a href="#home" className="hover:text-(--brand-gold) transition-colors duration-200">
            Home
          </a>
          <a href="#ibm" className="hover:text-(--brand-gold) transition-colors duration-200">
            Events
          </a>
          <a href="#about" className="hover:text-(--brand-gold) transition-colors duration-200">
            About
          </a>
          <a href="#contact" className="hover:text-(--brand-gold) transition-colors duration-200">
            Contact
          </a>
        </div>

        <div className="flex-1 flex justify-end">
          <a 
            href="#join" 
            className="px-6 py-2.5 rounded-full bg-white text-gray-900 font-bold text-sm hover:bg-(--brand-gold) hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Join the Team
          </a>
        </div>

      </div>
    </nav>
  );
}