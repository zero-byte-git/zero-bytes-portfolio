"use client";

import { useDimensions } from "@/hooks/useDimensions";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { AvatarFallback } from "../ui/avatar";

export default function Testimonial() {
  const { height } = useDimensions();
  console.log(height);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.1]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.1]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);

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
        className="max-w-[1536px] mx-auto relative grid grid-cols-5 h-[150vh] gap-5 overflow-hidden"
      >
        <motion.div
          className="col-span-1 w-full bg-white rounded-xl p-3 max-h-[500px]"
          style={{ y: y1 }}
        >
          <div className="flex flex-col h-full justify-between">
            <p className="text-gray-600 italic">
              &quot;Their team transformed our outdated website into a modern,
              user-friendly platform that boosted our conversions by 40%.&quot;
            </p>
            <Avatar>
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
                className="rounded-full w-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <p className="font-semibold">Sarah Thompson</p>
              <p className="text-sm text-gray-500">
                Marketing Director, TechTrend Innovations
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 w-full bg-white rounded-xl p-3 max-h-[500px]"
          style={{ y: y2 }}
        >
          <div className="flex flex-col h-full justify-between">
            <p className="text-gray-600 italic">
              &quot;The developers delivered a custom e-commerce solution on
              time and within budget, exceeding our expectations.&quot;
            </p>
            <Avatar>
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png"
                className="rounded-full w-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <p className="font-semibold">Michael Chen</p>
              <p className="text-sm text-gray-500">
                Founder, ShopEasy Solutions
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 w-full bg-white rounded-xl p-3 max-h-[500px]"
          style={{ y: y3 }}
        >
          <div className="flex flex-col h-full justify-between">
            <p className="text-gray-600 italic">
              &quot;Their expertise in responsive design made our site seamless
              across devices, earning rave reviews from our users.&quot;
            </p>
            <Avatar>
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png"
                className="rounded-full w-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <p className="font-semibold">Emily Rivera</p>
              <p className="text-sm text-gray-500">
                Product Manager, Global Retail Co.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 w-full bg-white rounded-xl p-3 max-h-[500px]"
          style={{ y: y4 }}
        >
          <div className="flex flex-col h-full justify-between">
            <p className="text-gray-600 italic">
              &quot;Working with them felt like having an in-house team. Their
              communication and technical skills are top-notch.&quot;
            </p>
            <Avatar>
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png"
                className="rounded-full w-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <p className="font-semibold">David Patel</p>
              <p className="text-sm text-gray-500">CEO, StartUp Dynamics</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 w-full bg-white rounded-xl p-3 max-h-[500px]"
          style={{ y: y5 }}
        >
          <div className="flex flex-col h-full justify-between">
            <p className="text-gray-600 italic">
              &quot;Their innovative approach to web development gave us a
              competitive edge in our industry.&quot;
            </p>
            <Avatar>
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png"
                className="rounded-full w-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <p className="font-semibold">Laura Bennett</p>
              <p className="text-sm text-gray-500">COO, NextGen Enterprises</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
