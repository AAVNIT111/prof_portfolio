import React from 'react';
import { motion } from 'framer-motion';

const Patents = ({ patents }) => {
  if (!patents || patents.length === 0) return null;

  return (
    <section id="patents" className="section bg-primary-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Patents</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {patents.map((patent, index) => (
            <motion.div 
              key={index} 
              className="card p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div 
                className="absolute top-0 right-0 w-16 h-16 bg-accent-blue flex items-center justify-center"
                style={{
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                }}
              ></div>
              <div className="mb-3">
                <span className="inline-block bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full text-sm font-medium mb-2">
                  Patent No: {patent.number}
                </span>
                <span className="inline-block bg-primary-bg px-3 py-1 rounded-full text-sm font-medium ml-2">
                  {patent.year}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-text">{patent.title}</h3>
              <p className="text-secondary-text">{patent.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;