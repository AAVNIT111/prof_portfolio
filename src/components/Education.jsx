import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="mb-8 card p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <h4 className="text-lg text-secondary-text">{edu.institution}</h4>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-primary-bg px-3 py-1 rounded-full text-sm font-medium">
                    {edu.year}
                  </span>
                </div>
              </div>
              
              {edu.description && (
                <p className="text-secondary-text">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;