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
    image: "/LandTraining.webp",
    tag: "Power",
  },
  {
    id: 2,
    title: "Endurance Run",
    days: "Wednesday",
    type: "Run Club",
    description: "Building the engine. High-intensity cardio to outlast the competition.",
    image: "/WednesdayRun.webp",
    tag: "Stamina",
  },
  {
    id: 3,
    title: "Water Combat",
    days: "Saturday & Sunday",
    type: "Boat Training",
    description: "The main arena. Technical precision and synchronization on the water.",
    image: "/WaterTraining.webp",
    tag: "Technical",
  }
];

export default function TrainingSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const activeIndex = Math.abs(page % TRAINING_SESSIONS.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // SWIPE DETECTION LOGIC
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    })
  };

  return (
    <section className="bg-[#f4f4f4] py-16 md:py-24 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
          
          {/* TEXT CONTENT */}
          <div className="lg:col-span-4 z-20 w-full">
            <span className="font-montserrat px-4 py-1.5 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
                Training Schedule
            </span>
            <h2 className="text-4xl md:text-5xl font-moderniz uppercase leading-[0.9] tracking-tighter mb-6">
                Why Join <br /><span className="text-(--brand-blue)">The Crew?</span>
            </h2>
            <p className="font-montserrat text-neutral-600 mb-8 leading-relaxed max-w-md">
                Our structured weekly training keeps every paddler in peak condition and race ready.
            </p>
            
            {/* PAGINATION DOTS (Crucial for Mobile CX) */}
            <div className="flex gap-2 mb-8">
              {TRAINING_SESSIONS.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1.5 transition-all duration-300 rounded-full ${i === activeIndex ? "w-8 bg-(--brand-blue)" : "w-2 bg-black/10"}`}
                />
              ))}
            </div>

            {/* BUTTONS: Hidden on small mobile if you prefer pure swipe, or kept for accessibility */}
            <div className="hidden md:flex gap-4">
              <button onClick={() => paginate(-1)} className="p-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all">
                <ArrowLeft size={20} />
              </button>
              <button onClick={() => paginate(1)} className="p-4 bg-black text-white rounded-full hover:bg-(--brand-blue) transition-all shadow-lg">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* SLIDER CONTENT */}
          <div className="lg:col-span-8 relative h-[580px] md:h-[700px] w-full flex items-start md:items-center">
            <div className="relative w-full h-full">
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
                  // ADDING DRAG/SWIPE SUPPORT
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full grid grid-cols-1 md:grid-cols-2 gap-6 cursor-grab active:cursor-grabbing"
                >
                  {/* MAIN CARD */}
                  <div className="bg-white rounded-[32px] md:rounded-[40px] p-3 md:p-4 shadow-xl shadow-black/5 border border-black/5">
                    <div className="relative h-[300px] md:h-[400px] rounded-[24px] md:rounded-[32px] overflow-hidden mb-6">
                      <img 
                        src={TRAINING_SESSIONS[activeIndex].image} 
                        className="w-full h-full object-cover pointer-events-none"
                        alt={TRAINING_SESSIONS[activeIndex].title}
                      />
                      <div className="font-montserrat absolute top-4 left-4 px-4 py-1.5 backdrop-blur-md bg-black/40 border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                        {TRAINING_SESSIONS[activeIndex].days}
                      </div>
                    </div>
                    <div className="px-3 pb-2">
                      <p className="font-montserrat font-bold text-(--brand-blue) uppercase text-[10px] tracking-[0.2em] mb-1">
                        {TRAINING_SESSIONS[activeIndex].type}
                      </p>
                      <h3 className="text-xl md:text-2xl font-moderniz tracking-tighter uppercase mb-2">
                        {TRAINING_SESSIONS[activeIndex].title}
                      </h3>
                      <p className="text-neutral-500 text-xs md:text-sm font-montserrat leading-relaxed">
                        {TRAINING_SESSIONS[activeIndex].description}
                      </p>
                    </div>
                  </div>

                  {/* NEXT PREVIEW (Hidden on Mobile to save space) */}
                  <div className="hidden md:block opacity-30 grayscale scale-95 blur-[1px] bg-white rounded-[40px] p-4">
                     <div className="relative h-[450px] rounded-[32px] overflow-hidden mb-6">
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

          {/* MOBILE ONLY NAVIGATION BUTTONS (Placed bottom for easy reach) */}
          {/* <div className="flex md:hidden gap-6 mt-4 justify-center w-full">
              <button onClick={() => paginate(-1)} className="p-6 bg-white border border-black/5 rounded-full shadow-md active:scale-95 transition-all">
                <ArrowLeft size={24} />
              </button>
              <button onClick={() => paginate(1)} className="p-6 bg-black text-white rounded-full shadow-xl active:scale-95 transition-all">
                <ArrowRight size={24} />
              </button>
          </div> */}

        </div>
      </div>
    </section>
  );
}