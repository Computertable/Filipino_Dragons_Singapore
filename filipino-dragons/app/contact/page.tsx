"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Send, Handshake, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("recruit");

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Reduced padding-top on mobile for faster access to the form */}
      <section className="relative min-h-screen pt-32 pb-12 md:pt-40 md:pb-20 flex items-start md:items-center">
        
        {/* Background Decorative Text - Hidden on mobile to reduce visual noise */}
        <div className="absolute top-10 right-0 opacity-[0.03] select-none pointer-events-none hidden lg:block">
          <h2 className="font-moderniz text-[20vw] leading-none uppercase text-black">
            {inquiryType === "sponsor" ? "PARTNER" : "CONNECT"}
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Content & Info */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.h1 
                key={inquiryType}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                // Adjusted mobile text size for better fit
                className="font-moderniz text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.85] tracking-[ -0.05em] text-black mb-6"
              >
                {inquiryType === "sponsor" ? "Sponsor" : "Join"} <br />
                <span className="text-(--brand-blue)">
                  The Crew
                </span>
              </motion.h1>

              <p className="font-montserrat text-neutral-600 text-sm md:text-lg mb-8 max-w-sm lg:max-w-md">
                {inquiryType === "sponsor" 
                  ? "Partner with Singapore's fiercest dragon boat community. Let's build a legacy together."
                  : "Ready to feel the burn? Drop us a message to join our next trial session."}
              </p>

              {/* Toggle Switch - Optimized for Mobile Thumb Reach */}
              <div className="flex bg-neutral-100 p-1 rounded-2xl border border-neutral-200 mb-10 w-full sm:w-fit">
                <button 
                  onClick={() => setInquiryType("recruit")}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 sm:py-3 rounded-xl font-montserrat text-[10px] font-black tracking-widest transition-all ${inquiryType === "recruit" ? "bg-(--brand-blue) text-white shadow-md" : "text-neutral-500"}`}
                >
                  <Users size={14} /> RECRUIT
                </button>
                <button 
                  onClick={() => setInquiryType("sponsor")}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 sm:py-3 rounded-xl font-montserrat text-[10px] font-black tracking-widest transition-all ${inquiryType === "sponsor" ? "bg-(--brand-blue) text-white shadow-md" : "text-neutral-500"}`}
                >
                  <Handshake size={14} /> SPONSOR
                </button>
              </div>

              {/* Contact Details Labels - Desktop Only */}
              <div className="hidden lg:flex flex-col gap-6">
                <div className="flex items-center gap-4 text-neutral-600 hover:text-black transition-colors">
                  <Mail size={20} className="text-red-600" />
                  <span className="font-montserrat text-sm font-medium">hello@filipinodragons.sg</span>
                </div>
                <div className="flex items-center gap-4 text-neutral-600 hover:text-black transition-colors">
                  <MapPin size={20} className="text-yellow-500" />
                  <span className="font-montserrat text-sm font-medium text-left">Kallang Riverside Park, Singapore</span>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7 w-full"
            >
              <div className="bg-white p-6 md:p-12 rounded-[2.5rem] border border-neutral-100 shadow-xl shadow-black/5">
                <form className="space-y-4 md:space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="font-montserrat text-[10px] font-black uppercase text-neutral-400 ml-1 tracking-[0.2em]">Name / Org</label>
                      <input type="text" className="font-montserrat w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-black focus:border-yellow-500 focus:bg-white outline-none transition-all text-sm" placeholder="Who are you?" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-montserrat text-[10px] font-black uppercase text-neutral-400 ml-1 tracking-[0.2em]">Email Address</label>
                      <input type="email" className="font-montserrat w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-black focus:border-yellow-500 focus:bg-white outline-none transition-all text-sm" placeholder="email@example.com" />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={inquiryType}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 5 }}
                      className="space-y-2"
                    >
                      <label className="font-montserrat text-[10px] font-black uppercase text-neutral-400 ml-1 tracking-[0.2em]">
                        {inquiryType === "recruit" ? "Experience Level" : "Partnership Interest"}
                      </label>
                      <select className="w-full font-montserrat bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-black appearance-none outline-none focus:border-yellow-500 focus:bg-white cursor-pointer transition-all text-sm">
                        {inquiryType === "recruit" ? (
                          <>
                            <option>Total Beginner</option>
                            <option>Intermediate</option>
                            <option>Competitive Athlete</option>
                          </>
                        ) : (
                          <>
                            <option>Corporate Sponsorship</option>
                            <option>Equipment Supply</option>
                            <option>Media/Event Partner</option>
                          </>
                        )}
                      </select>
                    </motion.div>
                  </AnimatePresence>

                  <div className="space-y-2">
                    <label className="font-montserrat text-[10px] font-black uppercase text-neutral-400 ml-1 tracking-[0.2em]">How can we help?</label>
                    <textarea rows={4} className="font-montserrat w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-black focus:border-yellow-500 focus:bg-white outline-none resize-none transition-all text-sm" placeholder="Tell us more..."></textarea>
                  </div>

                  <button className="w-full md:w-auto px-10 py-4 bg-(--brand-gold) text-black font-montserrat font-black uppercase tracking-widest rounded-xl hover:bg-black hover:text-white active:scale-95 transition-all flex items-center justify-center gap-3 mt-4">
                    Send Inquiry <Send size={18} />
                  </button>
                </form>
              </div>

              {/* Enhanced Mobile Footer Contacts */}
              <div className="mt-12 lg:hidden flex flex-col items-center gap-6 py-6 border-t border-neutral-100">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-red-50 rounded-full">
                    <Mail size={18} className="text-red-600" />
                  </div>
                  <span className="text-[10px] text-neutral-900 uppercase font-black tracking-widest">hello@filipinodragons.sg</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-yellow-50 rounded-full">
                    <MapPin size={18} className="text-yellow-600" />
                  </div>
                  <span className="text-[10px] text-neutral-900 uppercase font-black tracking-widest text-center">Kallang Riverside Park, SG</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}