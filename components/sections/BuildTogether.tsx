import React from "react";

export default function BuildTogether() {
  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center px-4 mb-12 bg-gray-100 rounded-2xl mx-4">
        <div className="font-roboto text-center z-10 mx-auto static top-0">
          <h2 className="absolute top-20 left-8 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
            KICK <span className="text-red-600">OFF</span>
          </h2>

          <h2 className="absolute top-20 sm:top-28 md:top-32 lg:top-[260px] left-8 sm:left-16 md:left-50 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
            YOUR JOURNEY
          </h2>

          <h2 className="absolute top-40 sm:top-48 md:top-56 lg:top-[460px] left-8 sm:left-20 md:left-70 lg:left-120 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
            LET&apos;S BUILD
          </h2>

          <h2 className="absolute top-56 sm:top-64 md:top-80 lg:top-[660px] left-8 sm:left-20 md:left-24 lg:left-200 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-red-600 tracking-tighter">
            TOGETHER
          </h2>
        </div>
      </div>
    </div>
  );
}
