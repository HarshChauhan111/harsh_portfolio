'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/HarshChauhan111', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://in.linkedin.com/in/harsh-chauhan-a335a0229', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/harsh', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:harshchauhan1246@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Contact', id: 'contact' },
];

export default function Footer() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'harshchauhan1246@gmail.com';
    // Open Gmail compose in new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  const navigateToSection = (sectionId: string) => {
    const event = new CustomEvent('navigateToSection', { detail: { section: sectionId } });
    window.dispatchEvent(event);
  };

  return (
    <footer className="relative glass-effect border-t border-purple-500/20 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold glow-text mb-4">Harsh Chauhan</h3>
            <p className="text-gray-400 text-sm">
              Passionate Mobile Application Developer specializing in creating beautiful, 
              performant, and user-friendly mobile applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateToSection(link.id)}
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const isExternalLink = social.href.startsWith('http');
                const isEmail = social.href.startsWith('mailto:');
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={isExternalLink ? "_blank" : undefined}
                    rel={isExternalLink ? "noopener noreferrer" : undefined}
                    onClick={isEmail ? handleEmailClick : undefined}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl text-gray-400 hover:text-purple-400 transition-colors glow-box p-2 rounded-lg"
                    title={social.label}
                  >
                    <social.icon />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-500/20 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by Harsh © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
