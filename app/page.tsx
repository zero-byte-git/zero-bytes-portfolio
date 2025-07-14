'use client'
import HowWeWork from "@/components/sections/HowWeWork";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
// import BuildTogether from "@/components/sections/BuildTogether";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowWeWork />
      {/* <BuildTogether/> */}
      <Footer />
    </div>
  );
}
