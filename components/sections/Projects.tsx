"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Example() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.5%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="text-center z-10 max-w-4xl mx-auto mt-12 sm:mt-24 lg:mt-40 xl:mt-56 sm:mb-12 lg:mb-16 xl:-mb-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-4 sm:mb-5 lg:mb-6">
          Our Featured Projects
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
          Explore our portfolio of successful projects across various
          industries, showcasing our expertise and innovative approach.
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
              className="w-screen flex justify-center items-center px-6"
            >
              <div className="w-full md:w-[90%] lg:w-[70%] bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col lg:flex-row overflow-hidden">
                {/* Image Container */}
                <div className="relative flex-1 min-h-[250px] lg:min-h-[400px]">
                  <Image
                    src={
                      [
                        "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
                      ][index % 6]
                    }
                    alt={`${project.title} demo`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

                {/* Text Content */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Additional Text */}
                  <p className="mb-6 text-md text-gray-600">
                    <strong>Tech Stack:</strong> React, Next.js, TypeScript,
                    Tailwind CSS, Node.js, Express, MongoDB
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Button className="relative bg-teal-600 hover:bg-teal-600 text-white font-bold px-6 flex items-center justify-center shadow-[4px_4px_0px_0px_#000] tracking-widest hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-200 rounded-none">
                      View Demo
                    </Button>
                    <Button className="relative bg-neutral-900 hover:bg-neutral-900 text-white font-bold px-6 flex items-center justify-center shadow-[4px_4px_0px_0px_#00897B] hover:shadow-[8px_8px_0px_0px_#00897B] transition-all duration-200 rounded-none tracking-widest">
                      Souce Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
