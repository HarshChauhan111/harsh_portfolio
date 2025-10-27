'use client';

import { useState, useEffect } from 'react';
import Home from '@/components/sections/Home';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'home', component: Home },
  { id: 'skills', component: Skills },
  { id: 'projects', component: Projects },
  { id: 'experience', component: Experience },
  { id: 'achievements', component: Achievements },
  { id: 'contact', component: Contact },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleNavigation = (event: CustomEvent) => {
      const sectionIndex = sections.findIndex(s => s.id === event.detail.section);
      if (sectionIndex !== -1) {
        setActiveSection(sectionIndex);
      }
    };

    window.addEventListener('navigateToSection' as any, handleNavigation);
    return () => window.removeEventListener('navigateToSection' as any, handleNavigation);
  }, []);

  const CurrentSection = sections[activeSection].component;

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="min-h-screen"
        >
          <CurrentSection />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
