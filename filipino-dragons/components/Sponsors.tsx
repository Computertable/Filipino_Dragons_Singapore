"use client";
import { motion } from "framer-motion";

export default function SponsorSection() {
  const sponsors = [
    { name: "Hazonas", logo: "/logos/hazonas.png" },
    { name: "Al Capone's", logo: "/logos/alcapones.jpg" },
    { name: "Dot", logo: "/logos/dot.png" },
  ];

  return (
    <section className="py-32 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <h3 className="font-moderniz text-xs font-black tracking-[0.5em] uppercase text-neutral-400 mb-20">
            Proudly Fuelled By
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  filter: "grayscale(0%)", // Pops into color on scroll for mobile
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut" 
                }}
                className="filter grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-700 cursor-pointer"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  // Increased sizes: h-20 on mobile, h-32 to h-40 on desktop
                  className="h-20 md:h-32 lg:h-40 w-auto object-contain transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}