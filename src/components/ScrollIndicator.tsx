import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const ScrollIndicator = () => {
  return (
    <Link to="education" spy={true} smooth={true} offset={-70} duration={500}>
      <motion.div
        className="w-16 h-24 border-2 border-white/30 rounded-full mx-auto mt-12 relative cursor-pointer flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full absolute"
          animate={{
            x: [-12, 12, -12], // Moves side to side
            y: [8, 20, 8], // Moves up and down, touching edges
          }}
          transition={{
            duration: 3.5, // Slower movement
            repeat: Infinity,
            repeatType: "reverse", // Makes it bounce smoothly
            ease: "easeInOut", // Smooth motion at edges
          }}
        />
      </motion.div>
    </Link>
  );
};

export default ScrollIndicator;
