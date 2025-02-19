import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center py-20 text-center overflow-hidden">
      {/* Background Floating Animations */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -80, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/3 w-48 h-48 bg-purple-400/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 80, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute right-1/2 bottom-1/3 w-60 h-60 bg-purple-400/40 rounded-full blur-3xl"
        />
      </div>

      <div className="z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6"
        >
          Hi, I am <span className="text-purple-400">Shifa Shafi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 mb-8"
        >
          an AI/ML researcher and developer
        </motion.p>

        <motion.a
          href="mailto:shifashafi898@gmail.com"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="px-6 py-3 text-lg font-semibold text-white border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-600"
        >
          Let's Talk
        </motion.a>

        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
