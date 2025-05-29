import React from 'react';
import { motion } from 'framer-motion';

const Research = ({ researchInterests }) => {
  if (!researchInterests || researchInterests.length === 0) return null;

  return (
    <section id="research" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Research Interests</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {researchInterests.map((item, index) => (
            <motion.div 
              key={index} 
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-bold mb-3 text-primary-text">{item.title}</h3>
              <p className="text-secondary-text">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;