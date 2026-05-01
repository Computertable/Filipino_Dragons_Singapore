"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Send, Handshake, Users, Loader2, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("recruit");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [loadTime, setLoadTime] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    extraField: "Total Beginner",
    company: "",
  });

  useEffect(() => {
    setLoadTime(Date.now());
  }, []);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      extraField: inquiryType === "recruit" ? "Total Beginner" : "Corporate Sponsorship"
    }));
  }, [inquiryType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/inquiry", { // Ensure this matches your route path
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          inquiryType,
          timestamp: loadTime,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", extraField: "", company: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      
      <section className="relative min-h-screen pt-32 pb-12 md:pt-40 md:pb-20 flex items-start md:items-center">
        {/* Background text decoration */}
        <div className="absolute top-10 right-0 opacity-[0.03] select-none pointer-events-none hidden lg:block">
          <h2 className="font-moderniz text-[20vw] leading-none uppercase text-black">
            {inquiryType === "sponsor" ? "PARTNER" : "CONNECT"}
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.h1 
                key={inquiryType}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-moderniz text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.85] tracking-[-0.05em] text-black mb-6"
              >
                {inquiryType === "sponsor" ? "Sponsor" : "Join"} <br />
                <span className="text-(--brand-blue)">The Crew</span>
              </motion.h1>

              <p className="font-montserrat text-neutral-600 text-sm md:text-lg mb-8 max-w-sm lg:max-w-md">
                {inquiryType === "sponsor" 
                  ? "Partner with Singapore's fiercest dragon boat community. Let's build a legacy together."
                  : "Ready to feel the burn? Drop us a message to join our next trial session."}
              </p>

              {/* Toggle Switch */}
              <div className="flex bg-neutral-100 p-1 rounded-2xl border border-neutral-200 mb-10 w-full sm:w-fit">
                <button 
                  type="button"
                  onClick={() => setInquiryType("recruit")}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 sm:py-3 rounded-xl font-montserrat text-[10px] font-black tracking-widest transition-all ${inquiryType === "recruit" ? "bg-(--brand-blue) text-white shadow-md" : "text-neutral-500"}`}
                >
                  <Users size={14} /> RECRUIT
                </button>
                <button 
                  type="button"
                  onClick={() => setInquiryType("sponsor")}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 sm:py-3 rounded-xl font-montserrat text-[10px] font-black tracking-widest transition-all ${inquiryType === "sponsor" ? "bg-(--brand-blue) text-white shadow-md" : "text-neutral-500"}`}
                >
                  <Handshake size={14} /> SPONSOR
                </button>
              </div>

              <div className="hidden lg:flex flex-col gap-6">
                <div className="flex items-center gap-4 text-neutral-600 hover:text-black transition-colors">
                  <Mail size={20} className="text-red-600" />
                  <span className="font-montserrat text-sm font-medium">hellomembers@filipinodragons.org.sg</span>
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
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <CheckCircle2 size={64} className="text-green-500 mb-4" />
                      <h2 className="font-moderniz text-2xl uppercase mb-2">Message Sent!</h2>
                      <p className="font-montserrat text-neutral-500 mb-8">We'll get back to you faster than a race sprint.</p>
                      <button 
                        onClick={() => setStatus("idle")}
                        className="text-(--brand-blue) font-montserrat font-bold uppercase text-xs tracking-widest"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      {/* Honeypot Field (Hidden from users) */}
                      <input 
                        type="text" 
                        name="company" 
                        className="hidden" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label className="font-montserrat text-[10px] font-black uppercase text-neutral-400 ml-1 tracking-[0.2em]">Name / Org</label>
                          <input 
                            required
                            type="text" 
                            className="font-montserrat w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-black focus:border-yellow-500 focus:bg-white outline-none transition-all text-sm" 
                            placeholder="Who are you?" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-montserrat text-[10px] font-black uppercase text-neutral-400 ml-1 tracking-[0.2em]">Email Address</label>
                          <input 
                            required
                            type="email" 
                            className="font-montserrat w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-black focus:border-yellow-500 focus:bg-white outline-none transition-all text-sm" 
                            placeholder="email@example.com" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
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
                          <select 
                            className="w-full font-montserrat bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-black appearance-none outline-none focus:border-yellow-500 focus:bg-white cursor-pointer transition-all text-sm"
                            value={formData.extraField}
                            onChange={(e) => setFormData({...formData, extraField: e.target.value})}
                          >
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
                        <textarea 
                          required
                          rows={4} 
                          className="font-montserrat w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-black focus:border-yellow-500 focus:bg-white outline-none resize-none transition-all text-sm" 
                          placeholder="Tell us more..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                      </div>

                      <button 
                        disabled={status === "loading"}
                        className="w-full md:w-auto px-10 py-4 bg-(--brand-gold) text-black font-montserrat font-black uppercase tracking-widest rounded-xl hover:bg-black hover:text-white active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 mt-4"
                      >
                        {status === "loading" ? (
                          <>Sending... <Loader2 size={18} className="animate-spin" /></>
                        ) : (
                          <>Send Inquiry <Send size={18} /></>
                        )}
                      </button>
                      
                      {status === "error" && (
                        <p className="text-red-500 font-montserrat text-xs mt-2 text-center md:text-left">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}