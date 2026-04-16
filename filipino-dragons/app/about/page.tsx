"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const teamData = {
  executive: [
    { name: "Raimond Babol", role: "President", image: "/team/raim.webp" },
    { name: "James Gonzales", role: "Secretary", image: "/team/james_compressed.webp" },
    { name: "Josef Zuela", role: "Treasurer", image: "/team/josef.webp" },
  ],
  steering: [
    { name: "Orland Glovasa", role: "Team Captain", image: "/team/orland.webp" },
    { name: "Carlo Selabao", role: "Men's Captain", image: "/team/carlo.webp" },
    { name: "Jacyl Bisquera", role: "Women's Captain", image: "/team/jacyl_compressed.webp" },
    { name: "Louisa Andrade", role: "Women's Captain", image: "/team/ice.webp" },
  ],
  leads: [
    { name: "Ariel Macapagal", role: "Membership", image: "/team/ariel.webp" },
    { name: "Clint Maceda", role: "Creative & Comms", image: "/team/clint.webp" },
    { name: "Noel Baldivia", role: "Sponsorship", image: "/team/noel_compressed.webp" },
    { name: "Aloha Hermano", role: "Equipment & Safety", image: "/team/aloha_compressed.webp" },
    { name: "Nelson Pomentil", role: "External", image: "/team/iton.webp" },
    { name: "Alan Albania", role: "Events", image: "/team/alan_compressed.webp" },
  ]
};

const MemberCard = ({ member, size = "md" }: { member: any; size?: "lg" | "md" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className={`relative overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl ${size === "lg" ? "h-[450px]" : "h-[300px] md:h-[400px]"}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('/fds_mancomm_bg.PNG')` }}
      />
      <div className="absolute inset-0 z-10 flex items-end justify-center">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-contain object-bottom scale-[1] origin-bottom transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 z-30">
        <h4 className="font-moderniz text-xl text-white uppercase leading-none mb-1 tracking-tighter">
          {member.name}
        </h4>
        <p className="font-montserrat text-[10px] font-black text-(--brand-gold) tracking-[0.2em] uppercase">
          {member.role}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function ManCommSection() {
  return (
    <>
      <Navbar />
      <main className="bg-black"> 
        <section className="bg-black py-24 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-16 mt-12">
              <h2 className="font-moderniz text-5xl md:text-8xl text-white uppercase tracking-tighter leading-none">
                Meet The <br/>
                <span className="text-transparent drop-shadow-md [-webkit-text-stroke:1px_#F4C430] md:[-webkit-text-stroke:2px_#F4C430]">Command</span>
              </h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 rounded-[3rem] p-8 md:p-12 border border-white/10 mb-20"
            >
              <div className="lg:col-span-5 relative group">
                <div className="relative h-[400px] md:h-[550px] overflow-hidden rounded-[2.5rem] border-2 border-(--brand-gold)/30">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url('/fds_mancomm_bg.PNG')` }}
                  />
                  <img 
                    src="/team/coach_raphael.jpeg" 
                    alt="Coach Raphael"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="font-montserrat text-xs font-black text-(--brand-gold) tracking-[0.3em] uppercase mb-2 block">
                    Head Coach
                  </span>
                  <h3 className="font-moderniz text-4xl md:text-6xl text-white uppercase leading-none">
                    Coach <br /> Raphael
                  </h3>
                </div>
                
                <div className="space-y-4 font-montserrat text-neutral-300 leading-relaxed text-sm md:text-base">
                  <p className="italic text-white font-medium">
                    "Please join us in giving a warm welcome to our new coach— Coach Raphael!🎉"
                  </p>
                  <p>
                    With dragon boating roots dating back to 1996, he paddled with SAFSA, NUS Varsity (Captain), and Team Singapore from 2003–2005. He has been coaching since 2003, working with SCB corporate teams and leading SDBA DOP programmes.
                  </p>
                  <p>
                    He is an SDBA Certified Steersman, SG Coach Level 1 (Dragon Boat), Canoe 1-Star certified, and a Recreational Dragon Boat & Orientation Instructor.
                  </p>
                  <p className="text-(--brand-gold) font-bold uppercase tracking-widest pt-4">
                    Welcome to FDS, Coach Raphael! @raphael_limwx
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {teamData.executive.map((m, i) => (
                <MemberCard key={i} member={m} size="lg" />
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {[...teamData.steering, ...teamData.leads].map((m, i) => (
                <MemberCard key={i} member={m} size="md" />
              ))}
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}