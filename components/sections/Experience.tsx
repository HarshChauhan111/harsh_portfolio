'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const experiences = [
  {
    company: 'TechCorp Solutions',
    role: 'Senior Mobile Developer',
    duration: 'Jan 2022 - Present',
    location: 'Remote',
    responsibilities: [
      'Led development of 5+ mobile applications using Flutter and React Native',
      'Implemented clean architecture and MVVM patterns',
      'Mentored junior developers and conducted code reviews',
      'Optimized app performance reducing load time by 40%',
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    company: 'Digital Innovations Inc',
    role: 'Mobile Application Developer',
    duration: 'Jun 2020 - Dec 2021',
    location: 'New York, NY',
    responsibilities: [
      'Developed and maintained native Android applications',
      'Integrated RESTful APIs and real-time databases',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Improved app ratings from 3.5 to 4.7 stars',
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    company: 'StartUp Labs',
    role: 'Junior Flutter Developer',
    duration: 'Jan 2019 - May 2020',
    location: 'San Francisco, CA',
    responsibilities: [
      'Built cross-platform mobile apps with Flutter',
      'Implemented state management using Bloc and Provider',
      'Worked on Firebase integration for authentication and storage',
      'Participated in agile development sprints',
    ],
    color: 'from-green-500 to-emerald-500'
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in mobile application development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 shadow-glow z-10">
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex items-center gap-2 mb-2 text-purple-400">
                    <FaCalendar />
                    <span className="text-sm">{exp.duration}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <FaBriefcase className="text-sm" />
                    <span>{exp.company} • {exp.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
