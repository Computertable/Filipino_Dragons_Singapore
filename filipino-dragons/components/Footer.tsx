"use client";
import { div } from "framer-motion/client";
import { Instagram, Facebook, Mail, MapPin, Youtube, ArrowUpRight } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      <div className="absolute -bottom-10 right-[-5%] opacity-[0.02] select-none pointer-events-none hidden lg:block">
        <h2 className="font-moderniz text-[25vw] leading-none uppercase text-white">
          FDS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-moderniz text-4xl md:text-5xl uppercase leading-[0.85] tracking-tighter text-white mb-6">
              Filipino <br />
              <span className="text-transparent drop-shadow-md [-webkit-text-stroke:1px_#F4C430] md:[-webkit-text-stroke:1px_#F4C430]">
                Dragons
              </span> <br />
              (Singapore)
            </h2>
            <p className="font-montserrat text-neutral-500 text-sm max-w-sm leading-relaxed mb-8">
              Based in the heart of Singapore, we are a community-driven dragon boat team 
              forged in passion and pushed by the pursuit of excellence.
            </p>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/filipinodragons.sg/" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-(--brand-red) hover:border-(--brand-red) transition-all duration-300 group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.facebook.com/filipinodragons.sg" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-(--brand-red) hover:border-(--brand-red) transition-all duration-300 group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.youtube.com/@FilipinoDragonsSingapore" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-(--brand-red) hover:border-(--brand-red) transition-all duration-300 group">
                <Youtube size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-montserrat font-black text-(--brand-gold) uppercase tracking-[0.2em] text-[10px] mb-8">
                Navigate
              </h4>
              <ul className="font-montserrat text-xs space-y-5 text-neutral-400 uppercase font-bold tracking-widest">
                <li><a href="/" className="hover:text-white transition-colors flex items-center gap-2 group">Home <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
                <li><a href="/about" className="hover:text-white transition-colors flex items-center gap-2 group">Our Story <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
                <li><Link href="/#events" className="hover:text-white transition-colors flex items-center gap-2 group">The Arena <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-black text-(--brand-gold) uppercase tracking-[0.2em] text-[10px] mb-8">
                Get Involved
              </h4>
              <ul className="font-montserrat text-xs space-y-5 text-neutral-400 uppercase font-bold tracking-widest">
                <li><a href="/contact" className="hover:text-white transition-colors">Join Trials</a></li>
                <li><a href="/contact?type=sponsor" className="hover:text-white transition-colors">Sponsorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Merchandise</a></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-montserrat font-black text-(--brand-gold) uppercase tracking-[0.2em] text-[10px] mb-8">
              Base Camp
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 text-(--brand-red)">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="font-montserrat text-[11px] font-bold text-white uppercase tracking-wider">Kallang Riverside</p>
                  <p className="font-montserrat text-[10px] text-neutral-500 uppercase mt-1 leading-relaxed">
                    Singapore 338988
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 text-(--brand-red)">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-montserrat text-[11px] font-bold text-white uppercase tracking-wider">Email Us</p>
                  <p className="font-montserrat text-[10px] text-neutral-500 uppercase mt-1">
                    hellomembers@filipinodragons.org.sg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-montserrat text-[9px] text-neutral-600 uppercase tracking-[0.3em] text-center md:text-left">
            © 2026 Filipino Dragons Singapore. Built with grit and salt water.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-white/10" />
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-(--brand-red)" />
              <div className="w-1.5 h-1.5 rounded-full bg-(--brand-gold)" />
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <div className="h-[1px] w-12 bg-white/10" />
          </div>
        </div>
      </div>
    </footer>
  );
}