"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const isContactPage = pathName === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const logoSrc =
    isContactPage && !isScrolled
      ? "/logos/fds_logo_blacktext.png"
      : isScrolled
      ? "/logos/FDSLogo.png"
      : "/logos/fds_logo_whiteText.png";

  const isLightMode = isContactPage;

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
        <div className="mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <a href="/">
              <motion.img
                key={logoSrc}
                src={logoSrc}
                alt="FDS Logo"
                animate={{
                  scale: isScrolled ? 1 : 1.2,
                  opacity: 1,
                }}
                transition={{ duration: 0.3 }}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 px-8 py-3 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 text-sm font-medium text-white">
            <a href="#ibm" className="hover:text-(--brand-gold)">Events</a>
            <a href="/about" className="hover:text-(--brand-gold)">About</a>
            <a href="/contact" className="hover:text-(--brand-gold)">Contact</a>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">

            <a
              href="#join"
              className="hidden md:block px-6 py-2.5 rounded-full bg-white text-gray-900 font-bold text-sm hover:bg-(--brand-gold) transition"
            >
              Join the Team
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden"
            >
              <Menu
                size={28}
                className={`transition-colors duration-300 ${
                  isLightMode ? "text-black" : "text-white"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] backdrop-blur-xl bg-black/30 flex flex-col"
          >
            {/* Sliding panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="flex flex-col h-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white"
              >
                <X size={32} />
              </button>

              {/* Menu Items */}
              <div className="flex flex-col items-center justify-center flex-1 gap-10 text-2xl font-bold uppercase text-white">
                <a href="#ibm" onClick={() => setIsOpen(false)}>Events</a>
                <a href="/about" onClick={() => setIsOpen(false)}>About</a>
                <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>

                {/* CTA */}
                <a
                  href="#join"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 px-6 py-3 bg-white text-black rounded-full text-lg"
                >
                  Join the Team
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}