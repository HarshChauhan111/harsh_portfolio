'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const navigateToSection = (sectionId: string) => {
    const event = new CustomEvent('navigateToSection', { detail: { section: sectionId } });
    window.dispatchEvent(event);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400 text-lg mb-4"
            >
              Hello, I&apos;m
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold glow-text mb-4"
            >
              Harsh
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6"
            >
              Mobile Application Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 max-w-lg"
            >
              Crafting beautiful, performant, and user-friendly mobile applications 
              with modern technologies. Specialized in Flutter, React Native, and 
              native Android development.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateToSection('projects')}
                className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center gap-2"
              >
                View Projects
              </motion.button>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass-effect border border-purple-500/50 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateToSection('contact')}
                className="px-8 py-3 glass-effect border border-purple-500/50 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <FaEnvelope /> Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-glow-xl">
                <Image 
                  src="/profile.jpg"
                  alt="Harsh - Mobile Application Developer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
