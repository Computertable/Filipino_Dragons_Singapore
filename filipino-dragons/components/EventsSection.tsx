"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react"; // Added useMemo
import { X, Plus } from "lucide-react";

interface Race {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  photos: string[];
}

const MANUAL_EVENTS: Race[] = [
  {
    id: "tampines-race",
    title: "Tampines Race",
    date: "January 10, 2026",
    coverImage: "/images/events/tampines-race-1.webp",
    photos: [
      "/images/events/tampines-race-1.webp",
      "/images/events/tampines-race-2.webp",
      "/images/events/tampines-race-3.webp",
    ],
  },
  {
    id: "unang-sagwan",
    title: "Unang Sagwan",
    date: "January 18, 2026",
    coverImage: "/images/events/unang-sagwan-1.webp",
    photos: [
      "/images/events/unang-sagwan-1.webp",
      "/images/events/unang-sagwan-2.webp",
      "/images/events/unang-sagwan-3.webp",
      "/images/events/unang-sagwan-4.webp"
    ],
  },
  {
    id: "newbie",
    title: "Newbie",
    date: "January 25, 2026",
    coverImage: "/images/events/newbie-1.webp",
    photos: [
      "/images/events/newbie-1.webp",
      "/images/events/newbie-2.webp",
      "/images/events/newbie-3.webp",
    ],
  },
  {
    id: "century-race",
    title: "Century Race",
    date: "March 7, 2026",
    coverImage: "/images/events/century-race-1.webp",
    photos: [
      "/images/events/century-race-1.webp",
      "/images/events/century-race-2.webp",
      "/images/events/century-race-3.webp",
      "/images/events/century-race-4.webp",
    ],
  },
  {
    id: "cleanup",
    title: "Cleanup",
    date: "March 29, 2026",
    coverImage: "/images/events/cleanup-1.webp",
    photos: [
      "/images/events/cleanup-1.webp",
      "/images/events/cleanup-2.webp",
    ],
  },
  {
    id: "awakening",
    title: "Awakening",
    date: "April 5, 2026",
    coverImage: "/images/events/awakening-1.webp",
    photos: [
      "/images/events/awakening-1.webp",
      "/images/events/awakening-2.webp",
      "/images/events/awakening-3.webp",
    ],
  },
];

export default function EventsSection() {
  const [events] = useState<Race[]>(MANUAL_EVENTS); // Removed setEvents as it's not used now
  const [activeGallery, setActiveGallery] = useState<Race | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useRef(0);

  const sortedEvents = useMemo(() => {
  return [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}, [events]);

 /* 
  // COMMENTED OUT OLD WP FETCH CODE
  // Fetch WP Data
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://filipinodragons.org.sg/wp-json/wp/v2/events"
        );
        const eventsData = await res.json();

        const parser = new DOMParser();

        const eventsWithImages: Race[] = await Promise.all(
          eventsData.map(async (event: any) => {
            const mediaRes = await fetch(
              `https://filipinodragons.org.sg/wp-json/wp/v2/media?parent=${event.id}`
            );
            const media = await mediaRes.json();

            // Parse HTML content
            const doc = parser.parseFromString(
              event.content.rendered,
              "text/html"
            );

            // Extract date
            const dateline = doc.querySelector("body > p")?.textContent?.trim() || "";

            // Extract only gallery images (cleaner than media API)
            const galleryImages = Array.from(
              doc.querySelectorAll(".wp-block-gallery img")
            ).map((img) => img.getAttribute("src") || "");

            return {
              id: event.slug,
              title: event.title.rendered,
              date: dateline,
              coverImage:
                media?.[0]?.source_url ||
                galleryImages[0],
              photos: galleryImages.length ? galleryImages : media.map((m: any) => m.source_url),
            };
          })
        );

        setEvents(eventsWithImages);
      } catch (error) {
        console.error("Failed to fetch WP events:", error);
      }
    }

    fetchData();
  }, []);
  */


  useEffect(() => {
    if (activeGallery) {
      scrollPosition.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition.current);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [activeGallery]);

  return (
    <section id="events" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-moderniz text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
            Events &{" "}
            <span className="text-[var(--brand-blue)]">Challenges.</span>
          </h2>
          <p className="font-montserrat text-neutral-500 font-medium uppercase tracking-widest text-md mt-4">
            Our history written in salt and sweat.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-[5vw] pb-12 no-scrollbar snap-x snap-proximity"
      >
        {sortedEvents.map((race) => (
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            <div className="relative h-full p-8 flex flex-col justify-between text-white">
              <div>
                <h3 className="font-moderniz text-2xl font-black uppercase leading-none tracking-tighter">
                  {race.title}
                </h3>
                <p className="font-montserrat text-xs font-black uppercase tracking-[0.2em] mb-2 text-white/70">
                  {race.date}
                </p>
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
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
          >
            <button
              onClick={() => setActiveGallery(null)}
              className="absolute top-8 right-8 text-white p-4 z-10 hover:text-gray-300 transition-colors"
            >
              <X size={40} />
            </button>
            <div className="flex-1 overflow-y-auto overscroll-contain p-12">
              <div className="max-w-6xl mx-auto mt-8">
                <h2 className="font-moderniz text-white text-3xl md:text-5xl font-black uppercase mb-12 text-center">
                  {activeGallery.title}
                </h2>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                  {activeGallery.photos.map((url, i) => (
                    <motion.img
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      src={url}
                      alt={`${activeGallery.title} photo ${i + 1}`}
                      className="w-full h-auto rounded-xl object-cover"
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