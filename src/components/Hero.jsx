import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ data }) => {
  if (!data.name || !data.jobTitle) return null;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary-bg relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hello, I'm <br />
            <span className="text-accent-blue">{data.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-secondary-text mb-6">
            {data.jobTitle}
          </h2>
          {data.bio && (
            <p className="text-lg mb-8 max-w-lg">
              {data.bio}
            </p>
          )}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>
        </motion.div>
        
        {data.photo && (
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={data.photo} 
                alt={data.name} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-accent-blue opacity-5 rounded-full"></div>
      <div className="absolute top-32 -right-16 w-80 h-80 bg-accent-blue opacity-5 rounded-full"></div>
    </section>
  );
};

export default Hero;