"use client";

import { ArrowRight, Code, Terminal, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  motion,
  AnimatePresence,
  Variants,
  Transition,
  useScroll,
  useTransform,
} from "framer-motion";
import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

// Define TypeScript interface for code snippets
interface CodeSnippet {
  code: string;
  delay: number;
  position: string;
}

const Hero: FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [1000, 0]);
  const codeSnippets: CodeSnippet[] = [
    // JavaScript/React
    { code: "const magic = () => {}", delay: 0, position: "top-20 left-10" },
    { code: "<Component />", delay: 0.2, position: "top-32 right-20" },

    // TypeScript
    {
      code: "type User = { name: string }",
      delay: 0.3,
      position: "top-16 right-1/4",
    },

    // Node.js/CLI
    { code: "npm create app", delay: 0.4, position: "top-60 left-1/4" },
    { code: "git push origin main", delay: 0.5, position: "top-72 right-14" },

    // React Hook
    { code: "useState([])", delay: 0.6, position: "bottom-60 left-20" },

    // HTML
    {
      code: "<section class='hero'></section>",
      delay: 0.7,
      position: "top-40 right-1/3",
    },

    // CSS
    {
      code: "body { font-family: 'Fira Code'; }",
      delay: 0.8,
      position: "bottom-44 right-16",
    },

    // Tailwind
    {
      code: "class='bg-gradient-to-r from-sky-500 to-indigo-500'",
      delay: 0.9,
      position: "bottom-36 left-16",
    },

    // Python (Backend API)
    { code: "@app.route('/api')", delay: 1, position: "top-20 right-8" },

    // SQL
    {
      code: "SELECT * FROM users;",
      delay: 1.1,
      position: "bottom-40 left-1/3",
    },

    // Prisma/NestJS
    {
      code: "@Injectable() export class UserService {}",
      delay: 1.2,
      position: "bottom-20 right-1/4",
    },

    // Modern Arrow
    { code: "=> { return ✨ }", delay: 1.3, position: "top-40 left-1/2" },
  ];

  // Animation variants for code snippets
  const snippetVariants: Variants = {
    hidden: { opacity: 0, y: 20, rotate: 3 },
    visible: {
      opacity: 0.3,
      y: 0,
      rotate: 3,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  // Animation variants for headline and description
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  // Animation variants for buttons
  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } as Transition,
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-white rounded-2xl">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      {/* Floating code snippets */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {codeSnippets.map((snippet, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={snippetVariants}
              transition={
                {
                  delay: snippet.delay,
                  duration: 0.8,
                  ease: "easeOut",
                } as Transition
              }
              className={`absolute ${snippet.position} opacity-30 hidden md:block`}
            >
              <div className="bg-card border border-border text-foreground px-3 py-2 rounded-lg text-sm font-mono shadow-lg transform hover:rotate-0 transition-transform duration-300">
                {snippet.code}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={
            { duration: 3, repeat: Infinity, ease: "easeInOut" } as Transition
          }
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full opacity-30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={
            {
              duration: 3,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            } as Transition
          }
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-muted/40 to-accent/30 rounded-full opacity-25"
          animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0.35, 0.25] }}
          transition={
            {
              duration: 3,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut",
            } as Transition
          }
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 } as Transition}
      >
        <div className="text-center space-y-8">
          {/* Terminal-style badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 } as Transition}
            className="inline-flex items-center px-4 py-2 bg-card border border-border rounded-full text-sm font-medium mb-4"
          >
            <Terminal className="w-4 h-4 mr-2 text-primary" />
            <span className="text-muted-foreground">~/</span>
            <span className="text-foreground ml-1">
              transforming-ideas-into-code
            </span>
          </motion.div>

          {/* Main headline with code brackets */}
          <div className="space-y-4">
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
            >
              <span className="text-muted-foreground font-mono text-3xl md:text-5xl block mb-2">
                {"function"}
              </span>
              Build Your
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Digital Future
              </span>
              <span className="text-muted-foreground font-mono text-3xl md:text-5xl block mt-2">
                {"() { }"}
              </span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 } as Transition}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              We are a passionate team of developers crafting cutting-edge web
              solutions that drive growth, enhance user experience, and bring
              your vision to life.
            </motion.p>
          </div>

          {/* Terminal-style code block */}
          <motion.div
            style={{ y }} // Bind y position to scroll
            className="bg-black absolute top-10 -right-150 w-96 mx-auto border border-border rounded-xl p-6 text-left text-sm shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-muted-foreground">terminal</span>
            </div>

            <div className="space-y-2 font-mono">
              {/* Typing Animation */}
              <TypeAnimation
                sequence={["$ npm install success", 1000]} // text + delay
                speed={1}
                wrapper="div"
                cursor={true}
                className="text-gray-200"
              />

              {/* Other Lines Appear One by One */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="text-gray-200"
              >
                ✓ Installing dependencies...
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.5 }}
                className="text-gray-200"
              >
                ✓ Building your dream project...
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 0.5 }}
                className="text-green-500"
              >
                ✓ Ready to launch! 🚀
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              custom={0}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Code className="mr-2 w-5 h-5" />
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              custom={1}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-md bg-background"
              >
                <Braces className="mr-2 w-5 h-5" />
                View Our Work
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-background"
        >
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
