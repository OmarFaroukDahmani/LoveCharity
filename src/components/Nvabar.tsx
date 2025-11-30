"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Twitter,
  MapPin,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

type LinkType = {
  src: string;
  title?: string;
  icon?: React.ReactNode;
};

const socialLinks: LinkType[] = [
  { src: "https://maps.google.com", title: "Tunis, Tunisia", icon: <MapPin size={18} /> },
  { src: "mailto:mail@mail.com", title: "mail@mail.com", icon: <Mail size={18} /> },
  { src: "https://x.com", icon: <Twitter size={18} /> },
  { src: "https://facebook.com", icon: <Facebook size={18} /> },
  { src: "https://instagram.com", icon: <Instagram size={18} /> },
];

const navLinks: LinkType[] = [
  { src: "/", title: "Home" },
  { src: "/about", title: "About" },
  { src: "/causes", title: "Causes" },
  { src: "/volunteer", title: "Volunteer" },
  { src: "/news", title: "News" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 }},
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 }},
  };
  const mobileLinkVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 }},
  };

  return (
    <>

      <div className="hidden md:flex justify-center items-center gap-6 bg-primary text-primary-foreground p-2 transition-colors duration-300">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.src}
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            {link.icon}
            {link.title}
          </a>
        ))}
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
        className="sticky top-0 z-50 w-full flex justify-between items-center p-5 shadow-lg
                   bg-background/60 backdrop-blur-lg border-b border-border"
      >
        <a href="/" className="text-lg font-bold text-foreground">
          Love <span className="text-primary">Charity</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.src}
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground
                         hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              {link.title}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg bg-accent/20 text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <Menu />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[98]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[calc(100vw-40px)] 
                         bg-card text-card-foreground shadow-2xl z-[99] p-6 border-l border-border"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Menu</span>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9, rotate: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
                >
                  <X />
                </motion.button>
              </div>

              <motion.ul
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-4"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.title} variants={mobileLinkVariants}>
                    <a
                      href={link.src}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-lg text-lg font-semibold text-foreground
                                 hover:bg-accent hover:text-accent-foreground transition-colors w-full"
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
                <motion.li variants={mobileLinkVariants} className="mt-4 border-t border-border pt-4">
                    <div className="flex items-center justify-between px-4">
                        <span className="text-muted-foreground">Switch Theme</span>
                        <ThemeToggle />
                    </div>
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}