import React from 'react';
import { motion } from 'framer-motion';

const CourseMaterials = ({ courseMaterials }) => {
  if (!courseMaterials || courseMaterials.length === 0) return null;

  return (
    <section id="courses" className="section bg-primary-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Course Materials</h2>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {courseMaterials.map((course, index) => (
            <motion.div 
              key={index} 
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-primary-text">{course.title}</h3>
                  <p className="text-secondary-text mb-3">{course.description}</p>
                  <div className="space-y-2">
                    {course.materials.map((material, mIndex) => (
                      <div key={mIndex} className="flex items-center space-x-2">
                        <span className="text-accent-blue">•</span>
                        <a 
                          href={material.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-blue hover:underline"
                        >
                          {material.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                {course.thumbnail && (
                  <div className="flex-shrink-0 w-48">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseMaterials;