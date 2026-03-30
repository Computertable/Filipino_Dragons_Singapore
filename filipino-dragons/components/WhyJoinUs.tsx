"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const TRAINING_SESSIONS = [
  {
    id: 1,
    title: "Ground Protocol",
    days: "Tuesday & Thursday",
    type: "Land Training",
    description: "Strength and conditioning designed for explosive power in the boat.",
    image: "/lightRox.png",
    tag: "Power",
  },
  {
    id: 2,
    title: "Endurance Run",
    days: "Wednesday",
    type: "Run Club",
    description: "Building the engine. High-intensity cardio to outlast the competition.",
    image: "/runClub.png",
    tag: "Stamina",
  },
  {
    id: 3,
    title: "Water Combat",
    days: "Saturday & Sunday",
    type: "Boat Training",
    description: "The main arena. Technical precision and synchronization on the water.",
    image: "/waterTraining.png",
    tag: "Technical",
  }
];

export default function TrainingSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const activeIndex = Math.abs(page % TRAINING_SESSIONS.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    })
  };

  return (
    <section className="bg-[#f4f4f4] py-24 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 z-20 bg-[#f4f4f4]">
            <span className="font-montserrat px-4 py-1.5 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
                Training Schedule
            </span>
            <h2 className="text-5xl font-moderniz uppercase leading-[0.9] tracking-tighter mb-8">
                Why Join <br /><span className="text-(--brand-blue)">The Crew?</span>
            </h2>
            <p className="font-montserrat text-neutral-600 mb-10 leading-relaxed">
                Our structured weekly training keeps every paddler in peak condition and race ready, building strength, discipline, and an unstoppable mindset.
            </p>
            
            <div className="flex gap-4">
              <button onClick={() => paginate(-1)} className="p-5 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all active:scale-90">
                <ArrowLeft size={24} />
              </button>
              <button onClick={() => paginate(1)} className="p-5 bg-black text-white rounded-full hover:bg-(--brand-blue) transition-all active:scale-90 shadow-xl shadow-black/20">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 relative h-[550px] flex items-center">
            <div className="relative w-full h-full overflow-visible">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="bg-white rounded-[40px] p-4 shadow-xl shadow-black/5 border border-black/5">
                    <div className="relative h-[300px] rounded-[32px] overflow-hidden mb-6">
                      <img 
                        src={TRAINING_SESSIONS[activeIndex].image} 
                        className="w-full h-full object-cover"
                        alt="Active Session"
                      />
                      <div className="font-montserrat absolute top-4 left-4 px-4 py-1.5 backdrop-blur-md bg-black/40 border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                        {TRAINING_SESSIONS[activeIndex].days}
                      </div>
                    </div>
                    <div className="px-2">
                      <p className="font-montserrat font-bold text-(--brand-blue) font-black uppercase text-[10px] tracking-[0.2em] mb-1">
                        {TRAINING_SESSIONS[activeIndex].type}
                      </p>
                      <h3 className="text-2xl font-moderniz font-medium tracking-tighter uppercase mb-2">
                        {TRAINING_SESSIONS[activeIndex].title}
                      </h3>
                      <p className="text-neutral-500 text-sm font-montserrat">
                        {TRAINING_SESSIONS[activeIndex].description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block opacity-30 grayscale scale-95 blur-[1px] bg-white rounded-[40px] p-4">
                     <div className="relative h-[300px] rounded-[32px] overflow-hidden mb-6">
                      <img 
                        src={TRAINING_SESSIONS[(activeIndex + 1) % TRAINING_SESSIONS.length].image} 
                        className="w-full h-full object-cover"
                        alt="Next"
                      />
                    </div>
                    <h3 className="text-xl font-moderniz tracking-tighter uppercase text-neutral-400">
                      {TRAINING_SESSIONS[(activeIndex + 1) % TRAINING_SESSIONS.length].title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}