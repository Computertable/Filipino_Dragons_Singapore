import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* TO CHECK IF NEEDED OR WE CAN PUT MEDIA??? */}
      <ParallaxSection />

      <Section
        id="about"
        title="Built for Strength"
        description="Filipino Dragons Singapore is a competitive dragon boat team built on discipline, culture, and unity."
      />

      {/* TEAM INFO */}
      <Section
        id="team"
        title="Train Like Warriors"
        description="Weekly training sessions across Singapore waters."
      />

      {/* SPONSORS and AFFILIATES */}
      <Section
        id="join"
        title="Our Team Sponsors"
        description="Support the Filipino Dragons and help us continue our journey."
      />

      {/* SOCIALS and LOCATION */}
    </main>
  );
}