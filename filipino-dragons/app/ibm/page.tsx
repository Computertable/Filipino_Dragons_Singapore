"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy, Users, FileText, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IBMPage() {
    return (
        <main className="bg-black min-h-screen overflow-x-hidden text-white">
            <Navbar />

            <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('/ibm/hero-bg.png')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-12">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        src="/ibm/whiteLogo.png"
                        alt="Isang Bangkang Malaya 2026 Logo"
                        className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl mb-8 object-contain"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col md:flex-row items-center gap-6 justify-center font-montserrat text-sm md:text-lg uppercase tracking-widest font-black text-(--brand-gold) bg-black/40 backdrop-blur-md border border-white/10 py-4 px-8 rounded-full"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar size={20} />
                            <span>Sunday, 7 June 2026</span>
                        </div>
                        <span className="hidden md:block text-white/30">|</span>
                        <div className="flex items-center gap-2">
                            <MapPin size={20} />
                            <span>PAssion WaVe @ Bedok Reservoir</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- CORE INTRODUCTION --- */}
            <section className="py-24 px-6 relative overflow-hidden bg-(--brand-black)">
                {/* Large Background Branding */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
                    <h2 className="font-moderniz text-[20vw] leading-none uppercase text-white">EST. 2008</h2>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">

                    {/* 1. OFFICIAL POSTER */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full flex justify-center mb-16"
                    >
                        <div className="relative w-full max-w-4xl aspect-[1.2/1]">
                            <Image
                                src="/ibm/poster.png"
                                alt="Isang Bangkang Malaya 2026 Poster"
                                fill
                                priority
                                className="object-contain rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                            />
                        </div>
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full flex justify-center mb-16"
                    >
                        <div className="relative w-full max-w-2xl aspect-[3/1]">
                            <Image
                                src="/ibm/slogan.png"
                                alt="Strength in Unity, Bloom in Harmony"
                                fill
                                className="object-contain drop-shadow-[0_0_25px_rgba(200,16,46,0.3)]"
                            />
                        </div>
                    </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative p-8 md:p-16 bg-neutral-900/40 backdrop-blur-md rounded-[3rem] border border-white/5 shadow-2xl"
                    >
                        <div className="font-montserrat text-neutral-200 text-lg md:text-xl leading-relaxed space-y-10 font-light text-justify md:text-center max-w-4xl mx-auto">
                            <p>
                                Welcome to <strong className="text-(--brand-gold) font-black">Isang Bangkang Malaya (“IBM”)</strong>, the flagship event of the Filipino Dragons (Singapore) that commemorates the Philippines’ declaration of independence through the exciting sport of dragon boating.
                            </p>

                            <p>
                                IBM’s legacy is to bring together Filipinos of all backgrounds and paddling experiences to the excitement of dragon boat racing. We aim to promote a culture of <span className="text-(--brand-blue) font-bold">camaraderie</span>, <span className="text-(--brand-red) font-bold">inclusivity</span>, and <span className="text-(--brand-gold) font-bold">solidarity</span>.
                            </p>

                            <p className="text-neutral-400 text-base md:text-lg">
                                Over the years, IBM has become a highly anticipated event attended by hundreds, including ex-pats and locals in Singapore. It has become a platform for showcasing the Filipino spirit and culture while promoting the sport of dragon boating. It is FDS’s pride that this IBM tradition has made a positive impact and we look forward to sharing our passion for the sport and culture with everyone.
                            </p>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 p-8 opacity-20 hidden md:block">
                            <div className="w-16 h-[1px] bg-(--brand-gold) rotate-45 transform translate-x-4 -translate-y-4" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="font-montserrat text-xs font-black text-(--brand-gold) tracking-[0.3em] uppercase mb-2 block">
                                2026 Official Theme
                            </span>
                            <h3 className="font-moderniz text-4xl md:text-6xl uppercase text-white tracking-tighter">
                                Panagbenga
                            </h3>
                        </div>
                        <p className="font-montserrat text-neutral-300 leading-relaxed text-sm md:text-base">
                            Panagbenga is an annual flower festival celebrated every February which takes place in Baguio City, Philippines. The term
                            "Panagbenga" comes from a Kankanaey term meaning "season of blooming". This festival reflects the history, traditions and values of Baguio and the Cordilleras. 
                            It lasts over a month long and flourishes through community spirit involvement.
                        </p>

                        <div className="relative group p-10 rounded-[2.5rem] bg-neutral-900/40 border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-(--brand-gold)/30">
                            {/* Decorative background accent */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 font-moderniz text-9xl text-white group-hover:scale-110 transition-transform duration-700 select-none">
                                "
                            </div>

                            <div className="relative z-10 flex flex-col items-center md:items-start">
                                {/* THE SLOGAN IMAGE - Removed 'fill' to allow natural spacing */}
                                <div className="relative w-full max-w-[380px] mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
                                    <img
                                        src="/ibm/slogan.png"
                                        alt="Strength in Unity, Bloom in Harmony"
                                        className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                                    />
                                </div>

                                {/* REVISED DESCRIPTION */}
                                <div className="space-y-4">
                                    <h4 className="font-moderniz text-lg text-(--brand-gold) uppercase tracking-tight">
                                        A Season of Flourishing
                                    </h4>
                                    <p className="font-montserrat text-neutral-300 text-sm leading-relaxed max-w-md">
                                        Inspired by the floral floats of Baguio, this year's IBM spirit celebrates
                                        how our diverse community comes together to create something beautiful.
                                        When we row as one, we don't just reach the finish line—we flourish together.
                                    </p>
                                </div>

                                {/* Decorative Bottom Line */}
                                <div className="mt-8 w-12 h-[2px] bg-(--brand-red) group-hover:w-24 transition-all duration-500" />
                            </div>
                        </div>
                    </motion.div>

                    {/* T-SHIRT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col items-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-red-600/20 blur-[100px] rounded-full -z-10" />
                        <img
                            src="/ibm/shirt.png"
                            alt="IBM 2026 Official Shirt"
                            className="w-full max-w-md drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                        />
                        <div className="text-center mt-8 space-y-2">
                            <h4 className="font-moderniz text-xl uppercase tracking-tighter">The Official Tee</h4>
                            <p className="font-montserrat text-sm text-neutral-400 max-w-sm">
                                Our IBM t-shirt has become an iconic symbol of our annual celebrations, embodying the spirit of unity, innovation, and camaraderie. Included with your race fee.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* --- RACE INFO & REGISTRATION --- */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="font-moderniz text-4xl md:text-6xl uppercase tracking-tighter">
                            Race <span className="text-transparent [-webkit-text-stroke:1px_#F4C430]">Categories</span>
                        </h2>
                        <p className="font-montserrat mt-4 text-neutral-400">
                            In partnership with <strong className="text-white">PAssion WaVe</strong> for a safe, fair, and unforgettable event.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32 items-start">
                        {[
                            {
                                title: "Fiesta Cup",
                                def: "DB22 200m Open",
                                desc: "A fun race for the Filipino community.",
                                tag: "Community",
                                color: "var(--brand-blue)",
                                num: "01"
                            },
                            {
                                title: "Captain’s Cup",
                                def: "DB12 200m Mixed",
                                desc: "Caters to experienced and competitive paddlers.",
                                tag: "Competitive",
                                color: "var(--brand-gold)",
                                num: "02",
                                featured: true
                            },
                            {
                                title: "Barak Cup",
                                def: "DB12 200m Open",
                                desc: "The ultimate test for our senior paddlers. A high-stakes race for the most experienced warriors on the water.",
                                tag: "Masters",
                                color: "var(--brand-red)",
                                num: "03"
                            }
                        ].map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative group p-10 rounded-[1.5rem] bg-neutral-900/40 border-l-2 backdrop-blur-sm transition-all duration-500 hover:bg-neutral-900/60 ${cat.featured ? 'lg:mt-12 border-(--brand-gold)' : 'border-white/10'}`}
                            >
                                <span className="absolute top-4 right-6 font-moderniz text-8xl text-white/[0.03] select-none group-hover:text-white/[0.07] transition-colors">
                                    {cat.num}
                                </span>

                                <div className="relative z-10">
                                    <div
                                        className="inline-block px-3 py-1 rounded-sm font-montserrat text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                                        style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                                    >
                                        {cat.tag}
                                    </div>

                                    <h3 className="font-moderniz text-3xl md:text-4xl uppercase tracking-tighter leading-none mb-4 group-hover:text-(--brand-gold) transition-colors">
                                        {cat.title.split(' ')[0]} <br />
                                        <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">
                                            {cat.title.split(' ')[1]}
                                        </span>
                                    </h3>

                                    <p className="font-montserrat text-sm uppercase font-semibold tracking-[0.25em] text-white/70 mb-4">
                                        {cat.def}
                                    </p>
                                    <p className="font-montserrat text-sm text-neutral-400 leading-relaxed max-w-[240px]">
                                        {cat.desc}
                                    </p>

                                    <div className="mt-8 flex items-center gap-2">
                                        <div className="h-[1px] w-12 bg-white/20 group-hover:w-20 group-hover:bg-(--brand-gold) transition-all duration-500" />
                                        <div className="h-1 w-1 rounded-full bg-white/20 group-hover:bg-(--brand-gold)" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-(--brand-gold) rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-black">
                        <div>
                            <h3 className="font-moderniz text-2xl md:text-4xl uppercase tracking-tighter mb-2">
                                Secure Your Boat
                            </h3>
                            <p className="font-montserrat font-bold">
                                Deadline for submission of entries: <span className="text-red-700 underline">April 18, 2026</span>
                            </p>
                            <p className="font-montserrat text-sm mt-2 opacity-80">
                                Race fee includes IBM souvenir shirt and a chance to win exciting prizes!
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <a
                                href="/IBM-2026-Rules.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-(--brand-black) text-white px-8 py-4 rounded-full font-montserrat font-black uppercase tracking-widest text-xs hover:bg-neutral-800 transition-colors border border-white/10"
                            >
                                <FileText size={16} /> Rules & Regs
                            </a>

                            <a
                                href="https://form.jotform.com/260247324845458"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-montserrat font-black uppercase tracking-widest text-xs hover:bg-neutral-100 transition-colors shadow-lg shadow-black/10"
                            >
                                Register Now <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}