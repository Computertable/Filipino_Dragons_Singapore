"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, ChevronRight, ChevronLeft, Plus } from "lucide-react";

interface Race {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  photos: string[];
}

const RACE_DATA = [
  {
    id: "unang-sagwan-2026",
    title: "Unang Sagwan",
    subtitle: "Season Opener",
    coverImage: "/events/unang-sagwan/UnangSagwan_1.jpg",
    photos: [
      "/events/unang-sagwan/UnangSagwan_1.jpg",
      "/events/unang-sagwan/UnangSagwan_2.jpg",
      "/events/unang-sagwan/UnangSagwan_3.jpg"
    ],
  },
  {
    id: "tampines-2026",
    title: "Tampines 2026",
    subtitle: "Regional Sprint",
    coverImage: "/races/tampines/tampines_1.webp",
    photos: [
      "/races/tampines/tampines_1.webp",
      "/races/tampines/tampines_2.webp",
      "/races/tampines/tampines_3.webp",
    ],
  },
  {
    id: "century-2026",
    title: "Century 2026",
    subtitle: "Regional Sprint",
    coverImage: "/races/century_2026/century_1.jpg",
    photos: [
      "/races/century_2026/century_1.jpg",
      "/races/century_2026/century_2.jpg",
      "/races/century_2026/century_3.jpg",
      "/races/century_2026/century_4.jpg",
      "/races/century_2026/century_5.jpg",
    ],
  }
];

export default function EventsSection() {
 const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://filipinodragons.org.sg/wp-json/wp/v2/events");
      const eventsData = await res.json();

      console.log("Events Data:", eventsData);

      const eventsWithImages = await Promise.all(
        eventsData.map(async (event: any) => {
          const mediaRes = await fetch(
            `https://filipinodragons.org.sg/wp-json/wp/v2/media?parent=${event.id}`
          );
          const media = await mediaRes.json();
          
          console.log("Images for event:", media);

          return {
            ...event,
            images: media
          };
        })
      );

      setEvents(eventsWithImages);
    }

    fetchData();
  }, []);

  const [activeGallery, setActiveGallery] = useState<Race | null>(null);
  const scrollRef = useRef(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-moderniz text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
            Events & <span className="text-(--brand-blue)">Challenges.</span>
          </h2>
          <p className="font-montserrat text-neutral-500 font-bold uppercase tracking-widest text-xl mt-4">
            Our history written in salt and sweat.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-[5vw] pb-12 no-scrollbar snap-x snap-proximity"
      >
        {RACE_DATA.map((race) => (
          <motion.div
            key={race.id}
            onClick={() => setActiveGallery(race)}
            whileHover={{ scale: 0.98 }}
            className="relative shrink-0 w-[85vw] md:w-100 aspect-[4/5] bg-neutral-900 rounded-[2.5rem] overflow-hidden cursor-pointer snap-center group"
          >
            <img
              src={race.coverImage}
              alt={race.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />

            <div className="relative h-full p-8 flex flex-col justify-between text-white">
              <div>
                <p className="font-montserrat text-xs font-black uppercase tracking-[0.2em] mb-2 text-white/70">
                  {race.subtitle}
                </p>
                <h3 className="font-moderniz text-2xl font-black uppercase leading-none tracking-tighter">
                  {race.title}
                </h3>
              </div>

              <div className="flex justify-end">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <Plus size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 flex flex-col"
          >
            <button
              onClick={() => setActiveGallery(null)}
              className="absolute top-8 right-8 text-white p-4 z-10"
            >
              <X size={40} />
            </button>

            <div className="flex-1 overflow-y-auto p-12">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-5xl font-black uppercase mb-12 text-center">
                  {activeGallery.title}
                </h2>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                  {activeGallery.photos.map((url, i) => (
                    <motion.img
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      src={url}
                      className="w-full h-auto rounded-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}