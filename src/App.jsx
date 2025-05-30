import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Contact from './components/Contact';
import Research from './components/Research';
import Patents from './components/Patents';
import Projects from './components/Projects';
import Publications from './components/Publications';
import CourseMaterials from './components/CourseMaterials';
import Footer from './components/Footer';

// Data
import personalData from './data/personalData';

function App() {
  const controls = useAnimation();

  useEffect(() => {
    // Animate sections when they come into view
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        
        if (isInView) {
          el.classList.add('visible');
        }
      });
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define sections for navigation
  const sections = [
    { id: 'hero', title: 'Home' },
    { id: 'education', title: 'Education', data: personalData.education },
    { id: 'publications', title: 'Publications', data: personalData.publications },
    { id: 'research', title: 'Research', data: personalData.researchInterests },
    { id: 'patents', title: 'Patents', data: personalData.patents },
    { id: 'projects', title: 'Projects', data: personalData.projects },
    { id: 'courses', title: 'Courses', data: personalData.courseMaterials },
    { id: 'contact', title: 'Contact', data: personalData.contact }
  ].filter(section => section.id === 'hero' || (section.data && (Array.isArray(section.data) ? section.data.length > 0 : true)));

  return (
    <div className="min-h-screen relative">
      <Navbar sections={sections} />
      
      <main>
        <Hero data={personalData} />
        
        <Education education={personalData.education} />
        
        <Publications publications={personalData.publications} />
        
        <Research researchInterests={personalData.researchInterests} />
        
        <Patents patents={personalData.patents} />
        
        <Projects projects={personalData.projects} />
        
        <CourseMaterials courseMaterials={personalData.courseMaterials} />
        
        <Contact contact={personalData.contact} />
      </main>
      
      <Footer name={personalData.name} />
    </div>
  );
}

export default App;