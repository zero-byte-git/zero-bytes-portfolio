"use client";

import { useDimensions } from "@/hooks/useDimensions";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AvatarFallback } from "../ui/avatar";
import { Quote } from "lucide-react";

export default function Testimonial() {
  const { height } = useDimensions();
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const testimonials = [
    {
      quote:
        "Their team transformed our outdated website into a modern, user-friendly platform that boosted our conversions by 40%.",
      name: "Sarah Thompson",
      role: "MD, TechTrend Innovations",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png",
    },
    {
      quote:
        "Our internal processes are faster than ever thanks to their automation expertise.",
      name: "Jamal Edwards",
      role: "Operations Lead, ProcessFlow",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png",
    },
    {
      quote:
        "The developers delivered a custom e-commerce solution on time and within budget, exceeding our expectations.",
      name: "Michael Chen",
      role: "Founder, ShopEasy Solutions",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png",
    },
    {
      quote:
        "A creative and skilled team — we were impressed with their design-to-code precision.",
      name: "Sophia Gomez",
      role: "UX Lead, AppNest",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png",
    },
    {
      quote:
        "Their expertise in responsive design made our site seamless across devices, earning rave reviews from our users.",
      name: "Emily Rivera",
      role: "PM, Global Retail Co.",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png",
    },
    {
      quote:
        "Incredible experience — from onboarding to delivery, they nailed every detail.",
      name: "Leonardo Frey",
      role: "CTO, PixelPros",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png",
    },
    {
      quote:
        "Working with them felt like having an in-house team. Their communication and technical skills are top-notch.",
      name: "David Patel",
      role: "CEO, StartUp Dynamics",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png",
    },
    {
      quote:
        "From sketch to launch, they brought our product vision to life effortlessly.",
      name: "Nina Malik",
      role: "Founder, IdeaLab",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png",
    },
  ];

  return (
    <div>
      <div className="text-center z-10 max-w-4xl mx-auto mt-24 xl:mt-56 xl:-mb-24">
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
          What people say about us
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
          Explore our portfolio of successful projects across various
          industries, showcasing our expertise and innovative approach.
        </p>
      </div>

      <div
        ref={container}
        className={`${
          isMobile
            ? "flex flex-col items-center gap-5 my-10"
            : "max-w-[1280px] mx-auto relative grid grid-cols-4 h-[175vh] gap-5 overflow-hidden"
        }`}
      >
        {isMobile ? (
          testimonials.map((t, i) => (
            <div key={i}>{testimonialCard(t.quote, t.name, t.role, t.avatar)}</div>
          ))
        ) : (
          <>
            <motion.div className="col-span-1 flex flex-col gap-5" style={{ y: y1 }}>
              {testimonialCard(
                testimonials[0].quote,
                testimonials[0].name,
                testimonials[0].role,
                testimonials[0].avatar
              )}
              {testimonialCard(
                testimonials[1].quote,
                testimonials[1].name,
                testimonials[1].role,
                testimonials[1].avatar
              )}
            </motion.div>
            <motion.div className="col-span-1 flex flex-col gap-5" style={{ y: y2 }}>
              {testimonialCard(
                testimonials[2].quote,
                testimonials[2].name,
                testimonials[2].role,
                testimonials[2].avatar
              )}
              {testimonialCard(
                testimonials[3].quote,
                testimonials[3].name,
                testimonials[3].role,
                testimonials[3].avatar
              )}
            </motion.div>
            <motion.div className="col-span-1 flex flex-col gap-5" style={{ y: y3 }}>
              {testimonialCard(
                testimonials[4].quote,
                testimonials[4].name,
                testimonials[4].role,
                testimonials[4].avatar
              )}
              {testimonialCard(
                testimonials[5].quote,
                testimonials[5].name,
                testimonials[5].role,
                testimonials[5].avatar
              )}
            </motion.div>
            <motion.div className="col-span-1 flex flex-col gap-5" style={{ y: y4 }}>
              {testimonialCard(
                testimonials[6].quote,
                testimonials[6].name,
                testimonials[6].role,
                testimonials[6].avatar
              )}
              {testimonialCard(
                testimonials[7].quote,
                testimonials[7].name,
                testimonials[7].role,
                testimonials[7].avatar
              )}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
