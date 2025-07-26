"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code,
  Workflow as Wordpress,
  ShoppingBag,
  Search,
  Palette,
  Users,
  Layers,
  FileText,
  Smartphone,
  Layout,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "Custom Website Development",
    phase: "Web Solutions",
    duration: "4-8 Weeks",
    description:
      "Tailored web solutions built from scratch to meet your unique business requirements and brand identity.",
    deliverables: [
      "Project Brief",
      "Technical Specs",
      "User Research",
      "Timeline",
      "Responsive Design",
      "Modern UI/UX",
      "Performance Optimization",
    ],
    image: "photo-1516321318423-f06f85e504b3",
    color: "#3B82F6",
    icon: Code,
    categories: [
      {
        name: "Discovery & Strategy",
        icon: Search,
        items: [
          "Project Brief",
          "Technical Specs",
          "User Research",
          "Timeline",
        ],
      },
      {
        name: "Design & Development",
        icon: Palette,
        items: [
          "Responsive Design",
          "Modern UI/UX",
          "Performance Optimization",
        ],
      },
    ],
  },
  {
    title: "WordPress Development",
    phase: "CMS Solutions",
    duration: "3-6 Weeks",
    description:
      "Powerful WordPress solutions with custom themes, plugins, and seamless content management systems.",
    deliverables: [
      "Custom Themes",
      "Plugin Development",
      "SEO Optimization",
      "Security",
      "Multi-site Setup",
      "E-commerce Integration",
      "Performance Tuning",
    ],
    image: "photo-1516321318423-f06f85e504b3",
    color: "#10B981",
    icon: Wordpress,
    categories: [
      {
        name: "Content Strategy",
        icon: Users,
        items: [
          "Custom Themes",
          "Plugin Development",
          "SEO Optimization",
          "Security",
        ],
      },
      {
        name: "Advanced Features",
        icon: Layers,
        items: [
          "Multi-site Setup",
          "E-commerce Integration",
          "Performance Tuning",
        ],
      },
    ],
  },
  {
    title: "Shopify Theme Development",
    phase: "E-commerce",
    duration: "4-7 Weeks",
    description:
      "Custom Shopify themes that convert visitors into customers with optimized user experience and functionality.",
    deliverables: [
      "Custom Liquid Code",
      "Conversion Optimization",
      "App Integration",
      "Analytics Setup",
      "Mobile Optimization",
      "Fast Loading",
      "Payment Integration",
    ],
    image: "photo-1516321318423-f06f85e504b3",
    color: "#F59E0B",
    icon: ShoppingBag,
    categories: [
      {
        name: "E-commerce Strategy",
        icon: FileText,
        items: [
          "Custom Liquid Code",
          "Conversion Optimization",
          "App Integration",
          "Analytics Setup",
        ],
      },
      {
        name: "Mobile Commerce",
        icon: Smartphone,
        items: ["Mobile Optimization", "Fast Loading", "Payment Integration"],
      },
    ],
  },
  {
    title: "Wix Development",
    phase: "No-Code Solutions",
    duration: "2-5 Weeks",
    description:
      "Rapidly built, user-friendly websites using Wix’s drag-and-drop platform, enhanced with custom apps and AI-driven design for small businesses and portfolios.",
    deliverables: [
      "Custom Templates",
      "Wix App Market Integration",
      "SEO Tools",
      "Mobile Optimization",
      "E-commerce Features",
      "Booking Systems",
      "AI Design Assistance",
    ],
    image: "photo-1516321318423-f06f85e504b3",
    color: "#8B5CF6",
    icon: Layout,
    categories: [
      {
        name: "Rapid Setup",
        icon: FileText,
        items: [
          "Custom Templates",
          "Wix App Market Integration",
          "AI Design Assistance",
        ],
      },
      {
        name: "Business Features",
        icon: Smartphone,
        items: [
          "SEO Tools",
          "Mobile Optimization",
          "E-commerce Features",
          "Booking Systems",
        ],
      },
    ],
  },
  {
    title: "Webflow Development",
    phase: "Advanced Design",
    duration: "4-8 Weeks",
    description:
      "Highly customized, responsive websites built with Webflow’s visual code editor, offering pixel-perfect design and advanced animations for professional-grade sites.",
    deliverables: [
      "Custom Design Systems",
      "Responsive Layouts",
      "Advanced Animations",
      "CMS Integration",
      "SEO Optimization",
      "Third-Party Integrations",
      "Code Export",
    ],
    image: "photo-1516321318423-f06f85e504b3",
    color: "#EC4899",
    icon: Globe,
    categories: [
      {
        name: "Design Control",
        icon: Palette,
        items: [
          "Custom Design Systems",
          "Responsive Layouts",
          "Advanced Animations",
        ],
      },
      {
        name: "Technical Features",
        icon: Code,
        items: [
          "CMS Integration",
          "SEO Optimization",
          "Third-Party Integrations",
          "Code Export",
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen mt-32">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center justify-center px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0"></div>
        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-semibold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
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
          className="flex items-center justify-center sticky top-0 lg:top-36 px-4 py-8"
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${service.color}15, ${service.color}25)`,
              borderColor: service.color + "30",
            }}
            className="min-h-[600px] max-w-7xl w-full rounded-3xl shadow-2xl border backdrop-blur-sm overflow-hidden mb-48"
          >
            <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
              {/* Left Side - Image and Info */}
              <div
                className="relative overflow-hidden bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md"
                style={{ borderRight: `2px solid ${service.color}20` }}
              >
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={`https://images.unsplash.com/${service.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      fill
                      className="object-cover opacity-20"
                    />
                  </div>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `linear-gradient(45deg, ${service.color}, transparent)`,
                    }}
                  ></div>
                </div>

                <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center">
                  <div className="mb-8">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                      style={{ backgroundColor: service.color }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className="text-sm font-bold uppercase tracking-wider mb-2"
                      style={{ color: service.color }}
                    >
                      {service.phase}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {service.categories.map((category, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <category.icon className="h-4 w-4 text-gray-500" />
                          {category.name}
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {category.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="text-sm bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/40 text-slate-700"
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

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-white/60 backdrop-blur-sm">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-lg font-semibold hover:gap-4 transition-all duration-300"
                      style={{ color: service.color }}
                    >
                      Let&apos;s discuss your project
                      <span className="text-xl">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="relative min-h-screen flex items-center justify-center px-4 mb-12 bg-gray-100">
        <div className="text-center z-10 mx-auto static top-0">
          <h2 className="absolute top-20 left-8 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
            KICK <span className="text-teal-600">OFF</span>
          </h2>
          <h2 className="absolute top-20 sm:top-28 md:top-32 lg:top-[260px] left-8 sm:left-16 md:left-50 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
            YOUR JOURNEY
          </h2>
          <h2 className="absolute top-40 sm:top-48 md:top-56 lg:top-[460px] left-8 sm:left-20 md:left-70 lg:left-120 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-black tracking-tighter">
            LET&apos;S BUILD
          </h2>
          <h2 className="absolute top-56 sm:top-64 md:top-80 lg:top-[660px] left-8 sm:left-20 md:left-24 lg:left-200 text-4xl sm:text-5xl md:text-9xl lg:text-[180px] font-bold mb-4 text-teal-600 tracking-tighter">
            TOGETHER
          </h2>
        </div>
      </div>
    </div>
  );
}
