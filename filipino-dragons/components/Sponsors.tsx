"use client";
import { motion } from "framer-motion";

export default function SponsorSection() {
  const sponsors = [
    { name: "Hazonas", logo: "/logos/hazonas.png", link: "https://www.hazonas.com/" },
    { name: "Al Capone's", logo: "/logos/alcapones.jpg", link: "https://alcaponesg.com/pages/locations" },
    { name: "Dot", logo: "/logos/dot.png", link: "https://www.facebook.com/dalaine.ong" },
  ];

  const affiliations = [
    { name: "SDBA", logo: "/logos/SDBA.jpeg", link: "https://www.hazonas.com/" },
    { name: "IDBF", logo: "/logos/IDBC.jpg", link: "https://alcaponesg.com/pages/locations" }
  ];

  const LogoGrid = ({ items, title }: { items: any[], title: string }) => (
    <div className="flex flex-col items-center">
      <h3 className="font-moderniz text-lg font-black tracking-[0.5em] uppercase text-neutral-400 mb-16 md:mb-20 text-center">
        {title}
      </h3>
      
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              filter: "grayscale(0%)",
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
            className="filter grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-700 cursor-pointer"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="h-16 md:h-28 lg:h-32 w-auto object-contain transition-transform duration-500 hover:scale-110"
              />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 md:py-32 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
        
        <LogoGrid items={sponsors} title="Proudly Fuelled By" />
        <LogoGrid items={affiliations} title="Affiliations" />

      </div>
    </section>
  );
}