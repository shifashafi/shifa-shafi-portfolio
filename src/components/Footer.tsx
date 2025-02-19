import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";

const sections = ["home", "experience", "skills", "projects"];

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full py-12 bg-black text-white text-center flex flex-col items-center justify-center overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -40, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute left-1/3 top-1/4 w-32 h-32 bg-purple-400/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute right-1/3 bottom-1/4 w-40 h-40 bg-purple-400/40 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation Indicator */}
      <div className="flex gap-6 mb-6 z-10">
        {sections.map((section) => (
          <a key={section} href={`#${section}`} className="text-gray-400 hover:text-white transition">
            <BsCircle size={12} />
          </a>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex gap-6 text-xl z-10">
        <a href="https://linkedin.com/in/shifa-shafi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/shifa_shafi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaInstagram />
        </a>
        <a href="mailto:shifashafi898@gmail.com" className="text-gray-400 hover:text-white transition">
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-gray-500 text-sm mt-8 z-10"
      >
        &copy; {new Date().getFullYear()} Shifa Shafi. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;