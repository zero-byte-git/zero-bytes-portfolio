"use client";

import { useDimensions } from "@/hooks/useDimensions";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { AvatarFallback } from "../ui/avatar";
import { Quote } from "lucide-react";

export default function Testimonial() {
  const { height } = useDimensions();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.1]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.9]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);

  const testimonialCard = (
    quote: string,
    name: string,
    role: string,
    avatar: string
  ) => (
    <div className="flex flex-col h-full justify-between bg-white p-3 max-w-[300px] rounded-xl max-h-[400px]">
      <p className="text-gray-600 italic text-justify hyphens-auto p-2 pt-5">
        <Quote className="rotate-180 inline-block text-teal-600 skew-x-[-10deg]" />{" "}
        <span className="text-xl font-semibold">{quote}</span>{" "}
        <Quote className="inline-block text-teal-600 skew-x-[-10deg]" />
      </p>
      <div className="flex gap-5 items-center">
        <Avatar>
          <AvatarImage
            src={avatar}
            className="rounded-full w-16 mx-auto"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="mt-4">
          <p className="font-bold text-xl italic">{name}</p>
          <p className="text-sm text-gray-500 italic">{role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="text-center z-10 max-w-4xl mx-auto xl:mt-56 xl:-mb-24">
        <h1 className="text-6xl font-semibold text-white mb-6">
          What people say about us
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
          Explore our portfolio of successful projects across various
          industries, showcasing our expertise and innovative approach.
        </p>
      </div>

      <div
        ref={container}
        className="max-w-[1280px] mx-auto relative grid grid-cols-4 h-[175vh] gap-5 overflow-hidden"
      >
        {/* Column 1 */}
        <motion.div className="col-span-1 flex flex-col gap-5" style={{ y: y1 }}>
          {testimonialCard(
            "Their team transformed our outdated website into a modern, user-friendly platform that boosted our conversions by 40%.",
            "Sarah Thompson",
            "MD, TechTrend Innovations",
            "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
          )}
          {testimonialCard(
            "Our internal processes are faster than ever thanks to their automation expertise.",
            "Jamal Edwards",
            "Operations Lead, ProcessFlow",
            "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png"
          )}
        </motion.div>

        {/* Column 2 */}
        <motion.div className="col-span-1 flex flex-col gap-5" style={{ y: y2 }}>
          {testimonialCard(
            "The developers delivered a custom e-commerce solution on time and within budget, exceeding our expectations.",
            "Michael Chen",
            "Founder, ShopEasy Solutions",
            "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png"
          )}
          {testimonialCard(
            "A creative and skilled team — we were impressed with their design-to-code precision.",
            "Sophia Gomez",
            "UX Lead, AppNest",
            "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png"
          )}
        </motion.div>

        {/* Column 3 */}
        <motion.div className="col-span-1 flex flex-col gap-5" style={{ y: y3 }}>
          {testimonialCard(
            "Their expertise in responsive design made our site seamless across devices, earning rave reviews from our users.",
            "Emily Rivera",
            "PM, Global Retail Co.",
            "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png"
          )}
          {testimonialCard(
            "Incredible experience — from onboarding to delivery, they nailed every detail.",
            "Leonardo Frey",
            "CTO, PixelPros",
            "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png"
          )}
        </motion.div>

        {/* Column 4 */}
        <motion.div className="col-span-1 flex flex-col gap-5" style={{ y: y4 }}>
          {testimonialCard(
            "Working with them felt like having an in-house team. Their communication and technical skills are top-notch.",
            "David Patel",
            "CEO, StartUp Dynamics",
            "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png"
          )}
          {testimonialCard(
            "From sketch to launch, they brought our product vision to life effortlessly.",
            "Nina Malik",
            "Founder, IdeaLab",
            "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png"
          )}
        </motion.div>

        {/* Column 5 */}
        {/* <motion.div className="col-span-1 flex flex-col gap-5" style={{ y: y5 }}>
          {testimonialCard(
            "Their innovative approach to web development gave us a competitive edge in our industry.",
            "Laura Bennett",
            "COO, NextGen Enterprises",
            "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png"
          )}
          {testimonialCard(
            "We saw a 3x boost in user engagement after launching our new platform with them.",
            "James Nolan",
            "VP, GrowthMinds",
            "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png"
          )}
        </motion.div> */}
      </div>
    </div>
  );
}
