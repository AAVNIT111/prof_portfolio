import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="card p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-primary-text">{project.title}</h3>
                <span className="text-sm bg-primary-bg px-2 py-1 rounded-full">
                  {project.year}
                </span>
              </div>
              
              <p className="text-secondary-text mb-4 flex-grow">{project.description}</p>
              
              
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">{project.role}
                    
                  </div>
                </div>
                
                <p className="text-secondary-text mb-4 flex-grow">{project.funding}</p>
              
              
              
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;