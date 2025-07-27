import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code,
  Rocket,
  Users,
  Award,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript"],
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b377?w=300&h=300&fit=crop&crop=face",
      skills: ["Figma", "Design Systems", "User Research"],
    },
    {
      name: "Mike Rodriguez",
      role: "Full Stack Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      skills: ["Python", "React", "AWS"],
    },
  ];

  const stats = [
    { icon: Code, label: "Projects Completed", value: "150+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Rocket, label: "Technologies", value: "25+" },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We stay ahead of the curve, adopting cutting-edge technologies to deliver future-ready solutions.",
    },
    {
      title: "Client-Centric",
      description:
        "Your success is our success. We build long-term partnerships based on trust and exceptional results.",
    },
    {
      title: "Quality Driven",
      description:
        "Every line of code is crafted with precision. We don&apos;t just build software, we engineer excellence.",
    },
    {
      title: "Agile Approach",
      description:
        "Fast iterations, continuous feedback, and adaptive planning ensure your project stays on track.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Stats Section */}
      <section className="py-16 text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-200">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-200">
                <p>
                  Founded in 2016, DevCraft began as a small team of passionate
                  developers who believed that exceptional software could change
                  the world. What started as a garage startup has evolved into a
                  leading web development agency.
                </p>
                <p>
                  Our journey has been marked by countless late nights,
                  breakthrough moments, and the satisfaction of seeing our
                  clients&apos; visions come to life. We&apos;ve grown not just
                  in size, but in expertise, always staying at the forefront of
                  technology trends.
                </p>
                <p>
                  Today, we&apos;re proud to have helped over 50 businesses
                  transform their digital presence, from startups to Fortune 500
                  companies.
                </p>
              </div>
              <Button className="mt-8 group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <Card className="p-8 bg-card border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      2016 - Founded
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      2018 - First Major Client
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      2020 - Team Expansion
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      2022 - 100th Project
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-sm font-medium">
                      2024 - Industry Leaders
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-200">Our Values</h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-200">Meet Our Team</h2>
            <p className="text-xl text-gray-400">
              The talented individuals behind our success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border group hover:border-primary/50 transition-colors"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-200">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let&apos;s discuss how we can bring your vision to life with
            cutting-edge web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
