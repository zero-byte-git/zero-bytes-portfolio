"use client";

import { useDimensions } from "@/hooks/useDimensions";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { AvatarFallback } from "../ui/avatar";
import { Quote } from "lucide-react";

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
        className="max-w-[1536px] mx-auto relative grid grid-cols-5 h-[175vh] gap-5 overflow-hidden"
      >
        <motion.div
          className="col-span-1 max-w-[300px] bg-white rounded-xl p-3 max-h-[500px]"
          style={{ y: y1 }}
        >
          <div className="flex flex-col h-full justify-between">
            <p className="text-gray-600 italic items-center text-justify hyphens-auto p-2">
              <Quote className="rotate-180 inline-block text-teal-600 skew-x-[-10deg]" />{" "}
              <span>
                Their team transformed our outdated website into a modern,
                user-friendly platform that boosted our conversions by 40%.
              </span>{" "}
              <Quote className="inline-block text-teal-600 skew-x-[-10deg]" />
            </p>
            <Avatar>
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
                className="rounded-full w-10/12 mx-auto"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <p className="text-xl font-bold italic">Sarah Thompson</p>
              <p className="text-sm text-gray-500 italic">
                Marketing Director, TechTrend Innovations
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 max-w-[300px] bg-white rounded-xl p-3 max-h-[500px]"
          style={{ y: y2 }}
        >
          <div className="flex flex-col h-full justify-between">
            <p className="text-gray-600 italic items-center text-justify hyphens-auto p-2">
              <Quote className="rotate-180 inline-block text-teal-600 skew-x-[-10deg]" />{" "}
              <span>
                The developers delivered a custom e-commerce solution on time
                and within budget, exceeding our expectations.
              </span>{" "}
              <Quote className="inline-block text-teal-600 skew-x-[-10deg]" />
            </p>
            <Avatar>
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png"
                className="rounded-full w-10/12 mx-auto"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <p className="text-xl font-bold italic">Michael Chen</p>
              <p className="text-sm text-gray-500 italic">
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
            <p className="text-gray-600 italic items-center text-justify hyphens-auto p-2">
              <Quote className="rotate-180 inline-block text-teal-600 skew-x-[-10deg]" />{" "}
              <span>
                Their expertise in responsive design made our site seamless
                across devices, earning rave reviews from our users.
              </span>{" "}
              <Quote className="inline-block text-teal-600 skew-x-[-10deg]" />
            </p>
            <Avatar>
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png"
                className="rounded-full w-10/12 mx-auto"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <p className="text-xl font-bold italic">Emily Rivera</p>
              <p className="text-sm text-gray-500 italic">
                Product Manager, Global Retail Co.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 max-w-[300px] bg-white rounded-xl p-3 max-h-[500px]"
          style={{ y: y4 }}
        >
          <div className="flex flex-col h-full justify-between">
            <div></div>
            <p className="text-gray-600 italic items-center text-justify hyphens-auto p-2">
              <Quote className="rotate-180 inline-block text-teal-600 skew-x-[-10deg]" />{" "}
              <span>
                Working with them felt like having an in-house team. Their
                communication and technical skills are top-notch.
              </span>{" "}
              <Quote className="inline-block text-teal-600 skew-x-[-10deg]" />
            </p>
            <Avatar>
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png"
                className="rounded-full w-10/12 mx-auto"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <p className="text-xl font-bold italic">David Patel</p>
              <p className="text-sm text-gray-500 italic">
                CEO, StartUp Dynamics
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 flex flex-col gap-5"
          style={{ y: y5 }}
        >
          <div className="flex flex-col h-full justify-between bg-white p-3 max-w-[300px] rounded-xl max-h-[300px]">
            <p className="text-gray-600 italic items-center text-justify hyphens-auto p-2 pt-5">
              <Quote className="rotate-180 inline-block text-teal-600 skew-x-[-10deg]" />{" "}
              <span className="text-xl font-semibold">
                Their innovative approach to web development gave us a
                competitive edge in our industry.
              </span>{" "}
              <Quote className="inline-block text-teal-600 skew-x-[-10deg]" />
            </p>
            <div className="flex gap-5 items-center">
              <Avatar>
                <AvatarImage
                  src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png"
                  className="rounded-full w-16 mx-auto"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mt-4">
                <p className="font-bold text-xl italic">Laura Bennett</p>
                <p className="text-sm text-gray-500 italic">
                  COO, NextGen Enterprises
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full justify-between bg-white p-3 max-w-[300px] rounded-xl max-h-[300px]">
            <p className="text-gray-600 italic items-center text-justify hyphens-auto p-2 pt-5">
              <Quote className="rotate-180 inline-block text-teal-600 skew-x-[-10deg]" />{" "}
              <span className="text-xl font-semibold">
                Their innovative approach to web development gave us a
                competitive edge in our industry.
              </span>{" "}
              <Quote className="inline-block text-teal-600 skew-x-[-10deg]" />
            </p>
            <div className="flex gap-5 items-center">
              <Avatar>
                <AvatarImage
                  src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png"
                  className="rounded-full w-16 mx-auto"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mt-4">
                <p className="font-bold text-xl italic">Laura Bennett</p>
                <p className="text-sm text-gray-500 italic">
                  COO, NextGen Enterprises
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
