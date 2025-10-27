'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFlutter, SiReact, SiAndroid, SiFirebase } from 'react-icons/si';

const projects = [
  {
    title: 'E-Commerce Mobile App',
    description: 'A full-featured e-commerce application with product browsing, cart management, and secure checkout.',
    image: '/projects/ecommerce.jpg',
    tech: ['Flutter', 'Firebase', 'Stripe', 'Bloc'],
    icons: [SiFlutter, SiFirebase],
    github: 'https://github.com/harsh/ecommerce-app',
    live: 'https://play.google.com/store',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Social Media Platform',
    description: 'Real-time social networking app with messaging, posts, stories, and live notifications.',
    image: '/projects/social.jpg',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    icons: [SiReact, SiFirebase],
    github: 'https://github.com/harsh/social-app',
    live: null,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness tracker with workout plans, calorie tracking, and progress analytics.',
    image: '/projects/fitness.jpg',
    tech: ['Flutter', 'SQLite', 'Provider', 'Charts'],
    icons: [SiFlutter, SiAndroid],
    github: 'https://github.com/harsh/fitness-app',
    live: 'https://apps.apple.com/app',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Food Delivery App',
    description: 'On-demand food delivery platform with real-time tracking and multiple payment options.',
    image: '/projects/food.jpg',
    tech: ['Flutter', 'Google Maps', 'Firebase', 'Razorpay'],
    icons: [SiFlutter, SiFirebase],
    github: 'https://github.com/harsh/food-delivery',
    live: 'https://play.google.com/store',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Task Management Tool',
    description: 'Productivity app with task organization, team collaboration, and deadline reminders.',
    image: '/projects/tasks.jpg',
    tech: ['React Native', 'Redux', 'Firebase', 'Push Notifications'],
    icons: [SiReact, SiFirebase],
    github: 'https://github.com/harsh/task-manager',
    live: null,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with detailed forecasts, maps, and location-based alerts.',
    image: '/projects/weather.jpg',
    tech: ['Flutter', 'OpenWeather API', 'Riverpod', 'Animations'],
    icons: [SiFlutter, SiAndroid],
    github: 'https://github.com/harsh/weather-app',
    live: 'https://apps.apple.com/app',
    color: 'from-sky-500 to-blue-500'
  },
];

export default function Projects() {
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
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and mobile applications I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative glass-effect rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex gap-4">
                  {project.icons.map((Icon, i) => (
                    <Icon key={i} className="text-6xl text-white opacity-80" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
