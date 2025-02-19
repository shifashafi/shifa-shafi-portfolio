import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'AI/ML Agritech Intern',
    company: 'HaaS.Farm BV',
    location: 'Netherlands',
    type: 'Remote',
    period: 'November 2023 - Present',
    description: 'Currently working on designing and maintaining hydroponic systems to optimize plant growth.'
  },
  {
    title: 'AI Research Intern',
    company: 'UL Research (ULCCS Group)',
    location: 'Kozhikode, Kerala',
    type: 'Onsite',
    period: 'June 2024 - October 2024',
    description: 'Using transformer models for drug discovery. Implemented visualization techniques to interpret drug discovery results.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
        >
          <Briefcase className="w-8 h-8 text-purple-400" />
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-purple-400/30 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 md:top-6 left-0 md:left-auto md:right-0 w-4 h-4 bg-purple-400 rounded-full transform md:translate-x-1/2 -translate-x-1/2" />
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400 transition-all hover:scale-105 hover:shadow-purple-500/20">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-white mb-1">{exp.company}</p>
                <p className="text-gray-400 mb-3">{exp.location} | {exp.type}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Floating Animations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="absolute left-10 top-20 w-16 h-16 bg-purple-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute right-16 bottom-16 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"
        />
      </div>
    </section>
  );
};

export default Experience;
