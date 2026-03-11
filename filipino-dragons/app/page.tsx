import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <ParallaxSection />

      <Section
        id="about"
        title="Built for Strength"
        description="Filipino Dragons Singapore is a competitive dragon boat team built on discipline, culture, and unity."
      />

      <Section
        id="team"
        title="Train Like Warriors"
        description="Weekly training sessions across Singapore waters."
      />

      <Section
        id="join"
        title="Join the Movement"
        description="Become part of the Filipino Dragons family."
      />
    </main>
  );
}