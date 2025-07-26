import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonial from "@/components/sections/Testimonial";
// import BuildTogether from "@/components/sections/BuildTogether";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
}
