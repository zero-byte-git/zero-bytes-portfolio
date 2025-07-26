import {
  Code,
  Workflow as Wordpress,
  ShoppingBag,
  Search,
  Palette,
  Layers,
  FileText,
  Smartphone,
  Layout,
  Globe,
  Server,
  Users,
  LucideIcon,
  Zap,
  Gauge,
  BarChart,
  Settings,
  PieChart,
} from "lucide-react";

type Service = {
  title: string;
  phase: string;
  duration: string;
  description: React.ReactNode;
  deliverables: React.ReactNode[];
  image: string;
  color: string;
  icon: LucideIcon;
  categories: {
    name: string;
    icon: LucideIcon;
    items: React.ReactNode[];
  }[];
};

export const services: Service[] = [
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
        items: [
          "Mobile Optimization",
          "Fast Loading",
          "Payment Integration",
        ],
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
  {
    title: "Headless CMS Development",
    phase: "Modern Web Architecture",
    duration: "5-9 Weeks",
    description:
      "Scalable headless CMS solutions using platforms like Strapi, Sanity, or Contentful, paired with modern frontends for flexible, high-performance websites.",
    deliverables: [
      "API-Driven Architecture",
      "Custom Frontend Integration",
      "Content Modeling",
      "Scalability Optimization",
      "SEO Configuration",
      "Third-Party API Integration",
      "Performance Enhancements",
    ],
    image: "photo-1516321318423-f06f85e504b3",
    color: "#6B7280",
    icon: Server,
    categories: [
      {
        name: "Content Architecture",
        icon: FileText,
        items: [
          "API-Driven Architecture",
          "Content Modeling",
          "SEO Configuration",
        ],
      },
      {
        name: "Frontend Integration",
        icon: Code,
        items: [
          "Custom Frontend Integration",
          "Scalability Optimization",
          "Third-Party API Integration",
          "Performance Enhancements",
        ],
      },
    ],
  },
  {
    title: "Website Analytics",
    phase: "Performance Tracking",
    duration: "2-4 Weeks",
    description:
      "Comprehensive analytics setup to track user behavior, monitor performance, and drive data-informed decisions for your website.",
    deliverables: [
      "Analytics Platform Setup",
      "Custom Dashboards",
      "Event Tracking",
      "Conversion Tracking",
      "User Behavior Analysis",
      "A/B Testing Setup",
      "Data Visualization",
    ],
    image: "photo-1516321318423-f06f85e504b3",
    color: "#6366F1",
    icon: BarChart,
    categories: [
      {
        name: "Analytics Configuration",
        icon: Settings,
        items: [
          "Analytics Platform Setup",
          "Custom Dashboards",
          "Event Tracking",
          "Conversion Tracking",
        ],
      },
      {
        name: "Data Insights",
        icon: PieChart,
        items: [
          "User Behavior Analysis",
          "A/B Testing Setup",
          "Data Visualization",
        ],
      },
    ],
  },
  {
    title: "Website Optimization",
    phase: "Performance Enhancement",
    duration: "3-6 Weeks",
    description:
      "Targeted optimization strategies to improve website speed, user experience, and search engine rankings for maximum impact.",
    deliverables: [
      "Site Speed Optimization",
      "SEO Enhancements",
      "Image Compression",
      "Code Minification",
      "Accessibility Improvements",
      "Mobile Responsiveness",
      "Caching Strategies",
    ],
    image: "photo-1516321318423-f06f85e504b3",
    color: "#F97316",
    icon: Zap,
    categories: [
      {
        name: "Performance Tuning",
        icon: Gauge,
        items: [
          "Site Speed Optimization",
          "Image Compression",
          "Code Minification",
          "Caching Strategies",
        ],
      },
      {
        name: "User Experience",
        icon: Users,
        items: [
          "SEO Enhancements",
          "Accessibility Improvements",
          "Mobile Responsiveness",
        ],
      },
    ],
  },
];

interface ProjectsInfo {
  title: string;
  description: string;
}

export const projects: ProjectsInfo[] = [
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
