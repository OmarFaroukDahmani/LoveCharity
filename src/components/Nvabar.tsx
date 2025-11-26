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

type Link = {
  src: string;
  title?: string;
  icon?: React.ReactNode;
};

const socialLinks: Link[] = [
  { src: "https://maps.google.com", title: "Tunis, Tunisia", icon: <MapPin size={18} /> },
  { src: "mailto:mail@mail.com", title: "mail@mail.com", icon: <Mail size={18} /> },
  { src: "https://x.com", icon: <Twitter size={18} /> },
  { src: "https://facebook.com", icon: <Facebook size={18} /> },
  { src: "https://instagram.com", icon: <Instagram size={18} /> },
];

const navLinks: Link[] = [
  { src: "/", title: "Home" },
  { src: "/about", title: "About" },
  { src: "/causes", title: "Causes" },
  { src: "/volunteer", title: "Volunteer" },
  { src: "/news", title: "News" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      {/* Social bar - hidden on mobile */}
      <div className="hidden md:flex justify-center items-center gap-6 bg-cyan-500 p-2">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.src}
            className="flex items-center gap-2 text-black hover:text-white transition-colors"
          >
            {link.icon}
            {link.title}
          </a>
        ))}
      </div>

      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
        className="sticky top-0 z-50 w-full flex justify-between items-center p-5 shadow-lg
                   bg-white/30 backdrop-blur-lg border border-white/20"
      >
        <a href="/" className="text-lg font-bold text-gray-700">
          Love <span className="text-gray-900">Charity</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.src}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700
                         hover:bg-white/50 hover:text-black transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Burger Button */}
        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg bg-white/30 hover:bg-white/50"
          >
            <Menu className="text-gray-900" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[98]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[calc(100vw-40px)] bg-white shadow-2xl z-[99] p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Menu</span>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9, rotate: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X className="text-gray-700" />
                </motion.button>
              </div>

              {/* Mobile Nav Links */}
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
                      className="flex items-center gap-4 p-4 rounded-lg text-lg font-semibold text-gray-700
                                 hover:bg-gray-100 transition-colors w-full"
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
