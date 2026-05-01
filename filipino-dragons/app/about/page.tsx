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
    { name: "Mickee Balagot", role: "Sponsorship", image: "/team/mickee.webp" },
    { name: "Aloha Hermano", role: "Equipment & Safety", image: "/team/aloha_compressed.webp" },
    { name: "Nelson Pomentil", role: "External", image: "/team/iton.webp" },
    { name: "Alan Albania", role: "Events", image: "/team/alan_compressed.webp" },
  ]
};

const testimonials = [
  {
    quote: "I never thought I will be this active living a healthy lifestyle. This Sport changed my life big time. I found a new Family with FDS!",
    author: "Brye",
    joined: "Joined 2015",
  },
  {
    quote: "I consider the team as my second family in Singapore. I never imagined in my life that I will be surrounded by active, competitive and friendly individuals with a common goal of winning a gold in every competition.",
    author: "Alfie",
    joined: "Joined 2016",
  },
  {
    quote: "Being a new joiner, FDS helped in providing that balance I needed and motivation to pursue DB. Thankful to be part of this community!",
    author: "JENSEN",
    joined: "Joined 2023",
  },
];

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
          className="w-full h-auto max-h-full object-contain object-bottom scale-[1] origin-bottom transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <section className="pt-32 pb-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">

            {/* --- REDESIGNED: HISTORY & MISSION SECTION --- */}
            <section className="mb-32">
              {/* 1. Large Hero Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-b border-white/10 pb-12 mb-16"
              >
                <h1 className="font-moderniz text-[15vw] md:text-[120px] text-white uppercase leading-[0.8] tracking-tighter">
                  SINCE <br />
                  <span className="text-(--brand-gold) flex items-center gap-4">
                    2008
                    <span className="h-2 md:h-4 flex-1 bg-(--brand-gold) rounded-full hidden md:block" />
                  </span>
                </h1>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="font-moderniz text-(--brand-gold) text-sm tracking-widest uppercase">The Origin</h3>
                  <p className="font-montserrat text-white text-xl md:text-2xl font-light leading-tight">
                    Founded in 2008, FDS has grown into one of Singapore’s most <span className="font-bold">competitive expat clubs.</span>
                  </p>
                  <p className="font-montserrat text-neutral-400 text-sm leading-relaxed">
                    What started as a small community of passionate paddlers has evolved into a high-performance team competing at the highest levels of dragon boating.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="font-moderniz text-(--brand-gold) text-sm tracking-widest uppercase">The Standard</h3>
                  <p className="font-montserrat text-white text-xl md:text-2xl font-light leading-tight">
                    Official Affiliate of the <span className="font-bold text-white">SDBA.</span>
                  </p>
                  <ul className="font-montserrat text-neutral-400 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-(--brand-gold)">•</span>
                      Registered under the Registry of Society (MHA)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-(--brand-gold)">•</span>
                      Member of the Singapore Dragon Boat Association
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-(--brand-gold) p-8 rounded-3xl text-black"
                >
                  <h3 className="font-moderniz text-sm tracking-widest uppercase mb-4 opacity-70">The Ethos</h3>
                  <p className="font-moderniz text-2xl leading-none uppercase italic mb-4">
                    "One Boat, <br />One Beat."
                  </p>
                  <p className="font-montserrat text-sm font-medium leading-relaxed">
                    We foster a friendly, inclusive environment where camaraderie and sportsmanship aren't just words—they're how we paddle.
                  </p>
                </motion.div>

              </div>
            </section>

            <section className="mb-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="font-moderniz text-sm text-(--brand-gold) tracking-[0.3em] uppercase mb-2">
                  Voices of the Boat
                </h3>
                <h2 className="font-moderniz text-4xl md:text-6xl text-white uppercase tracking-tighter">
                  Why We <span className="text-transparent [-webkit-text-stroke:1px_#fff]">Paddle</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-between group hover:border-(--brand-gold)/50 transition-colors duration-500"
                  >
                    <span className="absolute top-4 right-8 font-moderniz text-8xl text-white/[0.03] pointer-events-none group-hover:text-(--brand-gold)/10 transition-colors">
                      ”
                    </span>

                    <p className="font-montserrat text-lg text-neutral-200 leading-relaxed italic mb-8 relative z-10">
                      "{t.quote}"
                    </p>

                    <div>
                      <h4 className="font-moderniz text-white text-lg tracking-tight uppercase">
                        {t.author}
                      </h4>
                      <p className="font-montserrat text-[10px] font-black text-(--brand-gold) tracking-[0.2em] uppercase">
                        {t.joined}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            {/* --- MANCOMM SECTION --- */}
            <div className="mb-16">
              <h2 className="font-moderniz text-5xl md:text-8xl text-white uppercase tracking-tighter leading-none">
                Meet The <br />
                <span className="text-transparent drop-shadow-md [-webkit-text-stroke:1px_#F4C430] md:[-webkit-text-stroke:2px_#F4C430]">Command</span>
              </h2>
            </div>

            {/* Executive Team */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {teamData.executive.map((m, i) => (
                <MemberCard key={i} member={m} size="lg" />
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-32">
              {[...teamData.steering, ...teamData.leads].map((m, i) => (
                <MemberCard key={i} member={m} size="md" />
              ))}
            </div>

            {/* --- COACH SECTION (Now at bottom) --- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 rounded-[3rem] p-8 md:p-12 border border-white/10"
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
                    Technical Leadership
                  </span>
                  <h3 className="font-moderniz text-4xl md:text-6xl text-white uppercase leading-none">
                    Coach <br /> Raphael
                  </h3>
                </div>

                <div className="space-y-4 font-montserrat text-neutral-300 leading-relaxed text-sm md:text-base">
                  <p className="italic text-white font-medium">
                    "Please join us in giving a warm welcome to our new coach— Coach Raphael! 🎉"
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

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}