"use client";

import Link from "next/link";
import {
  siInstagram,
  siFacebook,
  siYoutube,
} from "simple-icons/icons";

const Icon = ({ icon }: { icon: any }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-current"
  >
    <path d={icon.path} />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Background watermark */}
      <div className="absolute -bottom-10 right-[-5%] opacity-[0.02] select-none pointer-events-none hidden lg:block">
        <h2 className="font-moderniz text-[25vw] leading-none uppercase text-white">
          FDS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-moderniz text-4xl md:text-5xl uppercase leading-[0.85] tracking-tighter text-white mb-6">
              Filipino <br />
              <span className="text-transparent [-webkit-text-stroke:1px_#F4C430]">
                Dragons
              </span> <br />
              (Singapore)
            </h2>

            <p className="font-montserrat text-neutral-500 text-sm max-w-sm leading-relaxed mb-8">
              Based in the heart of Singapore, we are a community-driven dragon boat team 
              forged in passion and pushed by the pursuit of excellence.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5">

              <a
                href="https://www.instagram.com/filipinodragons.sg/"
                target="_blank"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-(--brand-red) transition group"
              >
                <Icon icon={siInstagram} />
              </a>

              <a
                href="https://www.facebook.com/filipinodragons.sg"
                target="_blank"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-(--brand-red) transition group"
              >
                <Icon icon={siFacebook} />
              </a>

              <a
                href="https://www.youtube.com/@FilipinoDragonsSingapore"
                target="_blank"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-(--brand-red) transition group"
              >
                <Icon icon={siYoutube} />
              </a>

            </div>
          </div>

          {/* NAV LINKS */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-montserrat font-black text-(--brand-gold) uppercase tracking-[0.2em] text-[10px] mb-8">
                Navigate
              </h4>

              <ul className="font-montserrat text-xs space-y-5 text-neutral-400 uppercase font-bold tracking-widest">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/about" className="hover:text-white">Our Story</a></li>
                <li><Link href="/#events" className="hover:text-white">The Arena</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-black text-(--brand-gold) uppercase tracking-[0.2em] text-[10px] mb-8">
                Get Involved
              </h4>

              <ul className="font-montserrat text-xs space-y-5 text-neutral-400 uppercase font-bold tracking-widest">
                <li><a href="/contact" className="hover:text-white">Join Trials</a></li>
                <li><a href="/contact?type=sponsor" className="hover:text-white">Sponsorship</a></li>
                <li><a href="/maintenance" className="hover:text-white">Merchandise</a></li>
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <h4 className="font-montserrat font-black text-(--brand-gold) uppercase tracking-[0.2em] text-[10px] mb-8">
              Base Camp
            </h4>

            <div className="space-y-6">

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 text-(--brand-red)">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 14s4-4 4-7a4 4 0 1 0-8 0c0 3 4 7 4 7z"/>
                    <circle cx="8" cy="7" r="1.5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white uppercase font-montserrat">
                    Kallang Riverside
                  </p>
                  <p className="text-[10px] text-neutral-500 uppercase font-montserrat">
                    Singapore 338988
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 text-(--brand-red)">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="12" height="8" rx="2"/>
                    <path d="M2 5l6 4 6-4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white uppercase font-montserrat">
                    Email Us
                  </p>
                  <p className="text-[10px] text-neutral-500 uppercase font-montserrat">
                    hellomembers@filipinodragons.org.sg
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-neutral-600 uppercase tracking-[0.3em] text-center md:text-left font-montserrat">
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