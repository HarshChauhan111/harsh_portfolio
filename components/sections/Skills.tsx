'use client';

import { motion } from 'framer-motion';
import { SiDart, SiKotlin, SiJavascript, SiTypescript, SiPython, SiFlutter, SiReact, SiAndroid, SiFirebase, SiGit, SiFigma, SiPostman } from 'react-icons/si';
import { FaJava, FaDatabase, FaCode, FaBrain, FaLightbulb, FaUsers } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Dart', icon: SiDart },
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
    ]
  },
  {
    title: 'Architecture',
    skills: [
      { name: 'MVVM', icon: FaCode },
      { name: 'Clean Architecture', icon: FaCode },
      { name: 'Bloc Pattern', icon: FaCode },
    ]
  },
  {
    title: 'Networking',
    skills: [
      { name: 'REST APIs', icon: FaCode },
      { name: 'GraphQL', icon: FaCode },
      { name: 'WebSockets', icon: FaCode },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'Firebase', icon: SiFirebase },
      { name: 'SQLite', icon: FaDatabase },
      { name: 'Hive', icon: FaDatabase },
      { name: 'MongoDB', icon: FaDatabase },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'React Native', icon: SiReact },
      { name: 'Jetpack Compose', icon: SiAndroid },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Android Studio', icon: SiAndroid },
      { name: 'Figma', icon: SiFigma },
      { name: 'Postman', icon: SiPostman },
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Fast Learner', icon: FaBrain },
      { name: 'Problem Solver', icon: FaLightbulb },
      { name: 'Team Player', icon: FaUsers },
    ]
  },
];

export default function Skills() {
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
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I work with to build amazing mobile applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="glass-effect rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow"
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="text-2xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
