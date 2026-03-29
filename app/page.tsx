import ScrollManager from "@/components/shared/ScrollManager";

// Sections
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStrip from "@/components/sections/TechStrip";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <ScrollManager />
      
      <div id="hero">
        <Hero />
      </div>
      
      <CurrentlyBuilding />
      
      <div id="about">
        <About />
      </div>
      
      <TechStrip />
      
      <div id="work">
        <FeaturedProjects />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <Testimonials />
      
      <div id="experience">
        <Timeline />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
