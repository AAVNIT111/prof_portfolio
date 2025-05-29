import React from 'react';
import { motion } from 'framer-motion';

const Awards = ({ awards }) => {
  if (!awards || awards.length === 0) return null;

  return (
    <section id="awards" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Awards & Honors</h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div 
              key={index} 
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-text">{award.title}</h3>
                  <p className="text-secondary-text mb-2">{award.organization}</p>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                    {award.category && (
                      <span className="text-sm bg-primary-bg px-3 py-1 rounded-full">
                        {award.category}
                      </span>
                    )}
                  </div>
                  {award.description && (
                    <p className="text-secondary-text">{award.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;