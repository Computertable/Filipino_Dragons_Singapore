"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const logoSrc = isScrolled ? "/FDSLogo.png" : "/FDS_Logo_Text.png";
  const logoSrc = isScrolled ? "/FDSLogo.png" : "/FDS-horizontal-logo.png";

  const logoClassName = isScrolled
    ? "h-12 md:h-16 w-auto object-contain drop-shadow-md cursor-pointer transition-all duration-300"
    : "h-10 md:h-14 w-auto object-contain drop-shadow-md cursor-pointer transition-all duration-300";

    // const logoClassName = isScrolled
    // ? "h-10 md:h-14 w-auto object-contain drop-shadow-md cursor-pointer transition-all duration-300"
    // : "h-20 md:h-28 w-auto object-contain drop-shadow-md cursor-pointer transition-all duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
      <div className="mx-auto flex items-center justify-between">

        <div className="flex-1 flex justify-start">
          <div className="h-16 md:h-20 flex items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={logoSrc}
                src={logoSrc}
                alt="FDS Logo"
                animate={{
                  scale: isScrolled ? 0.8 : 1.2,
                  opacity: 1
                }}
                transition={{ duration: 0.3 }}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 px-8 py-3 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 text-sm font-medium text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
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