'use client'
import HowWeWork from "@/components/sections/HowWeWork";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
// import { useEffect } from "react";
// import Lenis from "lenis";

export default function Home() {

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <div>
      <Hero />
      <HowWeWork />
      <Footer />
    </div>
  );
}
