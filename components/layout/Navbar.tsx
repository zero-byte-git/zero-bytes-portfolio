"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";
import { motion, Variants, TargetAndTransition } from "framer-motion";

// Define type for navLinks
interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  // Animation variants for the Drawer
  const drawerVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  // Animation variants for nav links
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number): TargetAndTransition => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <div className="max-w-[1440] mx-auto flex items-center justify-between rounded-lg px-4 md:px-8 py-1 md:py-4 backdrop-blur">
      {/* Logo */}
      <Link href="/" className="md:text-xl text-gray-300 font-bold tracking">
        Zero Bytes
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.href}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            whileHover="hover"
          >
            <Link
              href={link.href}
              className="text-sm font-medium hover:text-white transition text-gray-300 tracking-wider"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Mobile Drawer Trigger */}
      <div className="md:hidden">
        <Drawer open={open} onOpenChange={setOpen} direction="right">
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </DrawerTrigger>

          <DrawerContent className="w-64">
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <DrawerTitle></DrawerTitle>
              <div className="p-6 flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <DrawerClose asChild>
                      <Link
                        href={link.href}
                        className="text-lg font-medium hover:text-primary transition"
                      >
                        {link.label}
                      </Link>
                    </DrawerClose>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
