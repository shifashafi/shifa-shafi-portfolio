import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    school: 'Government Engineering College Thrissur',
    location: 'Thrissur, Kerala',
    degree: 'Master of Technology in Computer Science and Engineering',
    gpa: '8.78 CGPA',
    date: 'May 2025'
  },
  {
    school: 'Government Engineering College Palakkad',
    location: 'Palakkad, Kerala',
    degree: 'Bachelor of Technology in Electronics and Communication Engineering',
    gpa: '7.98 CGPA',
    date: 'June 2023'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-10 flex items-center gap-3"
        >
          <GraduationCap className="w-8 h-8 text-purple-400" />
          Education
        </motion.h2>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, ease: 'easeOut' }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{edu.school}</h3>
              <p className="text-gray-400 mb-1">{edu.location}</p>
              <p className="text-white mb-2">{edu.degree}</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{edu.gpa}</span>
                <span>{edu.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;