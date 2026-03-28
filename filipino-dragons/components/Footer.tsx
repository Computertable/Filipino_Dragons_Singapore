"use client";
import { Instagram, Facebook, Mail, MapPin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-(--brand-black) pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          <div className="flex flex-col gap-4">
            <h2 className="font-moderniz text-4xl md:text-5xl uppercase leading-none tracking-tighter text-white">
              Filipino <br />
              <span className="text-transparent [-webkit-text-stroke:1px_#F4C430]">
                Dragons
              </span> <br />
            <span className="font-moderniz text-4xl md:text-5xl uppercase leading-none tracking-tighter text-white">
                Singapore
            </span>
            </h2>
            <p className="font-montserrat text-neutral-400 text-sm max-w-xs leading-relaxed mt-2">
              Undaunted. Unwavered. Unstoppable. <br />
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-montserrat font-bold text-(--brand-gold) uppercase tracking-widest text-xs mb-6">
                Navigate
              </h4>
              <ul className="font-montserrat text-sm space-y-4 text-neutral-300 uppercase font-medium">
                <li><a href="#" className="hover:text-(--brand-red) transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-(--brand-red) transition-colors">The Arena</a></li>
                <li><a href="#" className="hover:text-(--brand-red) transition-colors">Our Story</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-(--brand-gold) uppercase tracking-widest text-xs mb-6">
                Action
              </h4>
              <ul className="font-montserrat text-sm space-y-4 text-neutral-300 uppercase font-medium">
                <li><a href="#" className="hover:text-(--brand-red) transition-colors">Join Us</a></li>
                <li><a href="#" className="hover:text-(--brand-red) transition-colors">Sponsors</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-(--brand-gold) uppercase tracking-widest text-xs mb-6">
              Base Camp
            </h4>
            <div className="space-y-4 font-montserrat text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-(--brand-red)" />
                <span>Kallang Riverside Park, Singapore</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-(--brand-red)" />
                <span>hello@filipinodragons.sg</span>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://www.instagram.com/filipinodragons.sg/" target="_blank" className="text-white hover:text-(--brand-gold) transition-all"><Instagram size={22} /></a>
                <a href="#" target="_blank" className="text-white hover:text-(--brand-gold) transition-all"><Facebook size={22} /></a>
                <a href="#" target="_blank" className="text-white hover:text-(--brand-gold) transition-all"><Youtube size={22} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-montserrat text-[10px] text-neutral-500 uppercase tracking-[0.2em]">
            © 2026 Filipino Dragons Singapore. Built for the water.
          </p>
          <div className="h-1 w-20 bg-(--brand-red)" /> {/* Visual tie to Hero's gold line, but in red */}
        </div>
      </div>
    </footer>
  );
}