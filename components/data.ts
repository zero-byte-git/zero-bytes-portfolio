import { Monitor, Users, Zap, Rocket, LucideIcon } from "lucide-react";

interface ProjectPhase {
  title: string;
  description: string;
  phase: string;
  duration: string;
  deliverables: string[];
  image: string;
  color: string;
  icon: LucideIcon;
}

export const workflowSteps:ProjectPhase[] = [
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


interface ProjectsInfo {
        title: string;
        description: string;
}


export const projects:ProjectsInfo[] = [
  {
    title: "Bishwasto",
    description:
      "A comprehensive e-commerce POS system providing businesses with efficient inventory management and sales processing.",
  },
  {
    title: "Tutoria",
    description:
      "Educational platform where institutions can manage departments, students, teachers, and courses with powerful analytics.",
  },
  {
    title: "ARKTF",
    description:
      "NGO platform focused on charity and relief for vulnerable communities affected by social and natural disasters in Bangladesh.",
  },
  {
    title: "CSIRL",
    description:
      "Computer Science and Information Research Laboratory platform for Jashore University of Science and Technology.",
  },
  {
    title: "LocoGuide",
    description:
      "Location-based API service that provides accurate geolocation data for applications requiring precise positioning.",
  },
  {
    title: "EasyAuth",
    description:
      "Ready-to-implement authentication system that can be integrated into enterprise applications for secure user management.",
  },
];



type CardType = {
  url: string;
  title: string;
  id: number;
};

export const cards: CardType[] = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
