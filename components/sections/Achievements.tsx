'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTrophy, FaCertificate, FaStar, FaAward } from 'react-icons/fa';

const achievements = [
  {
    icon: FaTrophy,
    title: 'Mission Blackout - 1st Runner Up',
    issuer: 'Cyber Protectors',
    date: '2024',
    description: 'Capture The Flag - Mission Blackout Cyber Treasure Hunt.',
    color: 'from-yellow-500 to-orange-500',
    image: '/achivements/certificate/Mission_Blackout_1st_RunnerUp.jpeg'
  },
  {
    icon: FaStar,
    title: 'BCA - 1st Rank',
    issuer: 'My Caste',
    date: '2023',
    description: 'Achieved 1st Rank in Bachelor of Computer Applications.',
    color: 'from-purple-500 to-pink-500',
    image: '/achivements/certificate/BCA_1st_Rank.jpeg'
  },
  {
    icon: FaCertificate,
    title: 'Code Carnival Hackathon Certificate',
    issuer: 'Atmiya University',
    date: '2025',
    description: 'National Level Hackathon Code Carnival Season 2 - 36 hours hackathon.',
    color: 'from-blue-500 to-cyan-500',
    image: '/achivements/certificate/Hackathon_Certificate.jpeg'
  },
  {
    icon: FaCertificate,
    title: 'Docker Certificate',
    issuer: 'Atmiya University',
    date: '2024',
    description: 'Certified in Docker containerization and deployment.',
    color: 'from-blue-500 to-cyan-500',
    image: '/achivements/certificate/Docker_certificate.jpeg'
  },
  {
    icon: FaAward,
    title: 'Entrepreneur Certificate',
    issuer: 'Government of Gujarat',
    date: '2024',
    description: 'Completed entrepreneurship and business development program.',
    color: 'from-green-500 to-emerald-500',
    image: '/achivements/certificate/entrepreneur_certificate.jpeg'
  },
  {
    icon: FaCertificate,
    title: 'Python Programming Certificate',
    issuer: 'Python Institute',
    date: '2022',
    description: 'Certified in Python programming fundamentals and advanced concepts.',
    color: 'from-indigo-500 to-purple-500',
    image: '/achivements/certificate/python_programming_certificate.jpeg'
  },
];

export default function Achievements() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and certifications that showcase my expertise and dedication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="glass-effect rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow h-full flex flex-col">
                  {/* Certificate Image */}
                  {achievement.image && (
                    <div className="relative w-full h-64 overflow-hidden bg-gray-800">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-glow`}
                    >
                      <IconComponent className="text-3xl text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {achievement.title}
                    </h3>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400 text-sm">{achievement.issuer}</span>
                      <span className="text-purple-400 text-sm font-semibold">{achievement.date}</span>
                    </div>

                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>

                    {/* Glow Effect on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity pointer-events-none`}></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
