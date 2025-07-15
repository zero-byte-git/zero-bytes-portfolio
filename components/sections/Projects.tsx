"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data";

export default function Example() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.5%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="text-center z-10 max-w-4xl mx-auto xl:mt-56 xl:-mb-24">
        <h1 className="text-6xl font-semibold text-white mb-6">Our Featured Projects</h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
        Explore our portfolio of successful projects across various industries,
        showcasing our expertise and innovative approach.
        </p>
      </div>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4"
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-screen flex justify-center items-center"
            >
              <div className="w-[90%] lg:w-[70%] bg-white xl:h-[600px] rounded-2xl p-5 shadow-xl">
                <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                <p className="text-lg text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
