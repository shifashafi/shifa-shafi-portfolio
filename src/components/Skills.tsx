import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming',
    skills: ['Python', 'C/C++', 'HTML5', 'CSS', 'SQL'],
  },
  {
    category: 'Libraries & Frameworks',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'React', 'Express.js', 'TailwindCSS'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Figma', 'Canva', 'Git', 'LaTeX', 'Microsoft Office', 'Google Workspace'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-start"
        >
          <BrainCircuit className="w-8 h-8 text-purple-400" /> 
          Skills
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg transition-all hover:border-purple-400/50"
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{group.category}</h3>
              <ul className="grid grid-cols-2 gap-4 text-center">
                {group.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                    className="bg-white/10 rounded-lg py-2 px-4 text-white text-sm font-medium"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
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

export default Skills;
