'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaStar, FaAward } from 'react-icons/fa';

const achievements = [
  {
    icon: FaTrophy,
    title: 'Google Associate Android Developer',
    issuer: 'Google Developers',
    date: '2022',
    description: 'Certified Android developer demonstrating proficiency in Android app development.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FaCertificate,
    title: 'Flutter Development Bootcamp',
    issuer: 'Udemy',
    date: '2021',
    description: 'Completed comprehensive Flutter development course with high distinction.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FaStar,
    title: 'Hackathon Winner - Mobile Track',
    issuer: 'TechFest 2023',
    date: '2023',
    description: 'First place in mobile app development category for innovative health tracking app.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: FaAward,
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2022',
    description: 'Certified in developing and maintaining AWS-based applications.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: FaTrophy,
    title: 'Best App Design Award',
    issuer: 'Mobile Dev Summit',
    date: '2023',
    description: 'Recognized for exceptional UI/UX design in mobile application development.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FaCertificate,
    title: 'React Native Specialization',
    issuer: 'Coursera',
    date: '2021',
    description: 'Successfully completed React Native specialization with honors.',
    color: 'from-indigo-500 to-purple-500'
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
                <div className="glass-effect rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow h-full">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
