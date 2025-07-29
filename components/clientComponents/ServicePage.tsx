"use client";

import { services } from "@/components/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen text-white py-20 px-4">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-700 mb-6 tracking-tight">
          Our Services
        </h1>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          We create impactful web solutions through design, code, and strategy.
        </p>
      </motion.div>

      <div className="space-y-24 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10 items-center group"
          >
            {/* Text Block */}
            <div className="space-y-6 px-4 md:px-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {service.title}
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                {service.description}
              </p>

              <div className="space-y-6 mt-8">
                {service.categories.map((category, idx) => (
                  <div key={idx}>
                    <h4 className="text-teal-700 font-semibold text-lg mb-2 flex items-center gap-2">
                      <category.icon className="h-5 w-5" />
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="bg-white/10 text-white px-3 py-1 text-sm rounded-full border border-teal-700 hover:bg-teal-700 hover:text-black transition"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Block */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src={`https://images.unsplash.com/${service.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt={service.title}
                width={800}
                height={500}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20" />
              <div className="absolute bottom-6 left-6 flex flex-col">
                <div className="text-white font-bold text-sm uppercase tracking-wider">
                  {service.phase}
                </div>
                <div
                  className="w-12 h-12 mt-3 rounded-xl flex items-center justify-center shadow-xl"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
