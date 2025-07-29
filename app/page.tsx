import Services from "@/components/sections/Services";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <Testimonial />
    </div>
  );
}
