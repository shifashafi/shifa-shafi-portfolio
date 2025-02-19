import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ background: navBackground }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center hover:bg-purple-500 transition-colors">
              <Mail className="w-5 h-5 text-white hover:text-purple-300" />
            </div>
            <a 
              href="mailto:shifashafi898@gmail.com" 
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              shifashafi898@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="flex items-center space-x-6">
              <a 
                href="https://linkedin.com/in/shifa-shafi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-5 h-5 hover:text-purple-300" />
              </a>
              <div className="h-4 w-px bg-gray-700" />
              <a 
                href="https://www.instagram.com/__sh_ifa__/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Instagram className="w-5 h-5 hover:text-purple-300" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-4"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;