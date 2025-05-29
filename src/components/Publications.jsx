import React from 'react';
import { motion } from 'framer-motion';

const Publications = ({ publications }) => {
  if (!publications || publications.length === 0) return null;

  return (
    <section id="publications" className="section bg-primary-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Publications</h2>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((publication, index) => (
            <motion.div 
              key={index} 
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-primary-text">{publication.title}</h3>
                  <p className="text-secondary-text mb-3">{publication.authors}</p>
                  <p className="text-sm text-secondary-text mb-3">
                    <span className="font-medium">{publication.journal}</span>
                    {publication.volume && <span> • Volume {publication.volume}</span>}
                    {publication.issue && <span> • Issue {publication.issue}</span>}
                    {publication.year && <span> • {publication.year}</span>}
                  </p>
                  {publication.abstract && (
                    <p className="text-secondary-text">{publication.abstract}</p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  {publication.doi && (
                    <a 
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-accent-blue text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-accent-blue-light transition-colors"
                    >
                      View Publication
                    </a>
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

export default Publications;