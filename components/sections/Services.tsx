// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { services } from "../data";

// export default function Services() {
//   return (
//     <div className="min-h-screen mt-32">
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{
//           duration: 0.8,
//           ease: "easeOut",
//           delay: 0.2,
//         }}
//         viewport={{ once: true, amount: 0.5 }}
//         className="flex items-center justify-center px-4 relative overflow-hidden"
//       >
//         <div className="absolute inset-0"></div>
//         <div className="text-center z-10 max-w-4xl mx-auto">
//           <h1 className="text-6xl font-semibold text-white mb-6">
//             Our Services
//           </h1>
//           <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
//             We specialize in creating digital solutions that drive results. From
//             custom websites to e-commerce platforms, we bring your vision to
//             life with cutting-edge technology and creative design.
//           </p>
//         </div>
//       </motion.div>

//       {/* Service Cards */}
//       {services.map((service, i) => (
//         <div
//           key={i}
//           className="flex items-center justify-center sticky top-0 lg:top-36 px-4 py-8"
//         >
//           <div
//             style={{
//               background: `linear-gradient(135deg, ${service.color}15, ${service.color}25)`,
//               borderColor: service.color + "30",
//             }}
//             className="min-h-[600px] max-w-7xl w-full rounded-3xl shadow-2xl border backdrop-blur-sm overflow-hidden mb-48"
//           >
//             <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
//               {/* Left Side - Image and Info */}
//               <div
//                 className="relative overflow-hidden bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md"
//                 style={{ borderRight: `2px solid ${service.color}20` }}
//               >
//                 <div className="absolute inset-0">
//                   <div className="relative w-full h-full">
//                     <Image
//                       src={`https://images.unsplash.com/${service.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
//                       alt={service.title}
//                       fill
//                       className="object-cover opacity-20"
//                     />
//                   </div>
//                   <div
//                     className="absolute inset-0 opacity-10"
//                     style={{
//                       background: `linear-gradient(45deg, ${service.color}, transparent)`,
//                     }}
//                   ></div>
//                 </div>

//                 <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center">
//                   <div className="mb-8">
//                     <div
//                       className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
//                       style={{ backgroundColor: service.color }}
//                     >
//                       <service.icon className="w-8 h-8 text-white" />
//                     </div>
//                     <div
//                       className="text-sm font-bold uppercase tracking-wider mb-2"
//                       style={{ color: service.color }}
//                     >
//                       {service.phase}
//                     </div>
//                   </div>

//                   <div className="space-y-6">
//                     {service.categories.map((category, idx) => (
//                       <div key={idx}>
//                         <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
//                           <category.icon className="h-4 w-4 text-gray-500" />
//                           {category.name}
//                         </h4>
//                         <div className="grid grid-cols-2 gap-2">
//                           {category.items.map((item, itemIdx) => (
//                             <div
//                               key={itemIdx}
//                               className="text-sm bg-white backdrop-blur-sm rounded-lg px-3 py-2 border text-slate-700 font-semibold"
//                             >
//                               {item}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side - Content */}
//               <div className="p-8 lg:p-12 flex flex-col justify-center bg-white/60 backdrop-blur-sm">
//                 <div>
//                   <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800 leading-tight">
//                     {service.title}
//                   </h2>
//                   <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
//                     {service.description}
//                   </p>

//                   <div className="mt-8 pt-6 border-t border-slate-200">
//                     <a
//                       href="/contact"
//                       className="inline-flex items-center gap-2 text-lg font-semibold hover:gap-4 transition-all duration-300"
//                       style={{ color: service.color }}
//                     >
//                       Let&apos;s discuss your project
//                       <span className="text-xl">→</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="relative min-h-screen flex items-center justify-center px-4 mb-12 bg-gray-100">
//         <div className="text-center z-10 mx-auto static top-0">
//           <h2 className="absolute top-20 left-8 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
//             KICK <span className="text-teal-600">OFF</span>
//           </h2>
//           <h2 className="absolute top-20 sm:top-28 md:top-32 lg:top-[260px] left-8 sm:left-16 md:left-50 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
//             YOUR JOURNEY
//           </h2>
//           <h2 className="absolute top-40 sm:top-48 md:top-56 lg:top-[460px] left-8 sm:left-20 md:left-70 lg:left-120 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
//             LET&apos;S BUILD
//           </h2>
//           <h2 className="absolute top-56 sm:top-64 md:top-80 lg:top-[660px] left-8 sm:left-20 md:left-24 lg:left-200 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-teal-600 tracking-tighter">
//             TOGETHER
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// gpt
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "../data";

export default function Services() {
  return (
    <div className="min-h-screen mt-32">
      {/* Header Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center justify-center px-4 relative overflow-hidden mb-12"
      >
        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="sm:text-xs text-base lg:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating digital solutions that drive results. From
            custom websites to e-commerce platforms, we bring your vision to
            life with cutting-edge technology and creative design.
          </p>
        </div>
      </motion.div>

      {/* Service Cards */}
      {services.map((service, i) => (
        <div
          key={i}
          className="flex items-center justify-center sticky top-0 lg:top-36 md:px-4 md:py-8"
        >
          <div className="grid lg:grid-cols-2 sm:min-h-[500px] max-w-7xl w-full rounded-2xl transition-transform hover:scale-[1.05] duration-300">
            {/* Content Side */}
            <div className="pt-8 px-8 lg:p-12 flex flex-col justify-center bg-white/70 backdrop-blur-sm">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-slate-800 leading-tight">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div
              className="relative bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl border-r"
              style={{ borderRight: `1px dashed ${service.color}30` }}
            >
              <div className="absolute inset-0">
                <Image
                  src={`https://images.unsplash.com/${service.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={service.title}
                  fill
                  className="object-cover opacity-20"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at top left, ${service.color}22, transparent)`,
                  }}
                ></div>
              </div>

              <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center">
                <div className="mb-10">
                  <div
                    className="hidden w-16 h-16 rounded-xl md:flex items-center justify-center mb-4 shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: service.color }}
                  >
                    {service.phase}
                  </div>
                </div>

                <div className="space-y-6">
                  {service.categories.map((category, idx) => (
                    <div key={idx}>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        <category.icon className="h-4 w-4 text-gray-500" />
                        {category.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="text-sm bg-white rounded-xl px-4 py-2 border border-gray-200 text-slate-700 font-medium hover:shadow-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 mb-12 bg-gray-100">
        <div className="text-center z-10 mx-auto static top-0">
          <h2 className="absolute top-50 sm:top-20 left-8 text-6xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
            KICK <span className="text-teal-600">OFF</span>
          </h2>

          <h2 className="absolute top-70 sm:top-60 md:top-32 lg:top-[260px] -right-2 sm:left-16 md:left-50 text-6xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
            YOUR JOURNEY
          </h2>

          <h2 className="absolute top-90 sm:top-48 md:top-56 lg:top-[460px] left-8 sm:left-20 md:left-70 lg:left-120 text-6xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
            LET&apos;S BUILD
          </h2>

          <h2 className="absolute top-110 sm:top-64 md:top-80 lg:top-[660px] left-8 sm:left-20 md:left-24 lg:left-200 text-6xl md:text-9xl lg:text-[180px] font-bold mb-4 text-teal-600 tracking-tighter">
            TOGETHER
          </h2>
        </div>
      </div>
    </div>
  );
}
