import { Monitor, Users, Zap, Rocket } from "lucide-react";
import Image from "next/image";

export const workflowSteps = [
  {
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business goals, target audience, and technical requirements. Through collaborative workshops and research, we define the project scope and create a roadmap that aligns with your vision.",
    phase: "Phase 01",
    duration: "1-2 weeks",
    deliverables: [
      "Project Brief",
      "User Personas",
      "Technical Specs",
      "Timeline",
    ],
    image: "photo-1605810230434-7631ac76ec81",
    color: "#667eea",
    icon: Users,
  },
  {
    title: "Design & Prototyping",
    description:
      "Our design team creates intuitive user experiences with modern aesthetics. We develop wireframes, interactive prototypes, and comprehensive design systems that ensure consistency across all touchpoints.",
    phase: "Phase 02",
    duration: "2-3 weeks",
    deliverables: ["Wireframes", "UI/UX Design", "Prototype", "Design System"],
    image: "photo-1461749280684-dccba630e2f6",
    color: "#f093fb",
    icon: Monitor,
  },
  {
    title: "Development & Testing",
    description:
      "Using cutting-edge technologies like React, TypeScript, and modern frameworks, we build scalable, performant applications. Rigorous testing ensures quality and reliability at every stage.",
    phase: "Phase 03",
    duration: "4-8 weeks",
    deliverables: [
      "Clean Code",
      "API Integration",
      "Testing Suite",
      "Documentation",
    ],
    image: "photo-1498050108023-c5249f4df085",
    color: "#20bf6b",
    icon: Zap,
  },
  {
    title: "Launch & Support",
    description:
      "We handle deployment, optimization, and provide ongoing support to ensure your application performs flawlessly. Our partnership continues with maintenance, updates, and feature enhancements.",
    phase: "Phase 04",
    duration: "Ongoing",
    deliverables: [
      "Live Deployment",
      "Performance Optimization",
      "Training",
      "Support",
    ],
    image: "photo-1488590528505-98d2b5aba04b",
    color: "#fa8231",
    icon: Rocket,
  },
];

export default function HowWeWork() {
  return (
    <div className="min-h-screen mt-24">
      <div className="flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold">
            How We Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Our proven methodology combines strategic thinking, creative design,
            and technical excellence to deliver exceptional digital experiences.
          </p>
        </div>
      </div>

      {/* Workflow Steps */}
      {workflowSteps.map((step, i) => {
        return (
          <div
            key={i}
            className="min-h-screen flex items-center justify-center sticky top-0 px-4 py-8"
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${step.color}15, ${step.color}25)`,
                borderColor: step.color + "30",
              }}
              className="max-w-7xl w-full rounded-3xl shadow-2xl border backdrop-blur-sm overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
                {/* Left Side - Image and Info */}
                <div
                  className="relative overflow-hidden bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md"
                  style={{ borderRight: `2px solid ${step.color}20` }}
                >
                  <div className="absolute inset-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={`https://images.unsplash.com/${step.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                        alt={step.title}
                        fill
                        className="object-cover opacity-20"
                      />
                    </div>

                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        background: `linear-gradient(45deg, ${step.color}, transparent)`,
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center">
                    <div className="mb-8">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                        style={{ backgroundColor: step.color }}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div
                        className="text-sm font-bold uppercase tracking-wider mb-2"
                        style={{ color: step.color }}
                      >
                        {step.phase}
                      </div>
                      <div className="text-3xl font-bold text-slate-800 mb-2">
                        {step.duration}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-3">
                          Key Deliverables
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <div
                              key={idx}
                              className="text-sm bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/40 text-slate-700"
                            >
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-white/60 backdrop-blur-sm">
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800 leading-tight">
                      {step.title}
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-lg font-semibold hover:gap-4 transition-all duration-300"
                        style={{ color: step.color }}
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
        );
      })}

      {/* CTA Section */}
      {/* <div className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-700"></div>
        <div className="text-center z-10 max-w-4xl mx-auto text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s transform your vision into a digital reality. Get in
            touch and let&apos;s discuss how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              View Our Work
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
