import HowWeWork from "@/components/sections/HowWeWork";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
// import BuildTogether from "@/components/sections/BuildTogether";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowWeWork />
      <Projects />
      <Footer />
    </div>
  );
}
