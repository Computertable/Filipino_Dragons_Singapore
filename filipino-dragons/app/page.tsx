import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParallaxSection from "@/components/ParallaxSection";
import SponsorSection from "@/components/Sponsors"
import EventsSection from "@/components/EventsSection";
import VideoSection from "@/components/Video";
import Footer from "@/components/Footer";
import TrainingSection from "@/components/WhyJoinUs";
import JoinBreaker from "@/components/JoinBreaker";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VideoSection/>
      <ParallaxSection />
      <TrainingSection />
      <EventsSection/>
     
      <JoinBreaker/>
      <SponsorSection/>
      <Footer/>
    </main>
  );
}