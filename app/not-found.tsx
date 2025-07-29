import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Opps... Page Not Found",
  description: "Building Solution that Shape Tomorrow",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] text-white gap-3 sm:gap-4 lg:gap-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-7xl lg:text-9xl font-bold tracking-wider">
        4{"</>"}4
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-center">
        <span className="text-purple-400">throw</span>{" "}
        <span className="text-blue-400">new</span>{" "}
        <span className="text-yellow-400">Error</span>
        <span className="text-gray-300">(</span>
        <span className="text-green-400">&apos;Page not found&apos;</span>
        <span className="text-gray-300">);</span>
      </p>
    </div>
  );
}