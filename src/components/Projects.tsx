import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Seq2SMILES: Molecular Generation from SMILES Using Transformers',
      description: 'Developed a neural network that generates new chemical structures from existing molecules and their SMILES values, advancing research in bioinformatics.',
      tags: ['Python', 'RDKit', 'TensorFlow'],
      link: '#'
    },
    {
      title: 'Object-centric Supervised Image Captioning',
      description: 'Used shared objects for image-text descriptions. Utilized CNN for feature extraction and LSTM for caption generation.',
      tags: ['Python', 'NumPy', 'Pandas', 'TensorFlow', 'Matplotlib', 'Seaborn'],
      link: '#'
    },
    {
      title: 'Culprit Identification and Lie Detection System',
      description: 'Used Arduino UNO for lie detection and Raspberry Pi for facial recognition using OpenCV.',
      tags: ['Arduino', 'C/C++', 'Python', 'OpenCV'],
      link: '#'
    },
    {
      title: 'Reinforcing License Plate Detection Against Adversarial Attacks',
      description: 'Used YOLOv8 for license plate detection and developed defenses against adversarial attacks.',
      tags: ['Python', 'OCR', 'YOLOv8'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
        >
          <FolderGit2 className="w-8 h-8 text-purple-400" />
          Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
