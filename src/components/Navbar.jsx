import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ sections }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMenuOpen(false);
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || menuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <a 
            href="#hero" 
            className="text-xl font-bold text-primary-text relative z-50"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav-link ${activeSection === section.id ? 'text-accent-blue' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-primary-text transform transition-all duration-300 origin-left ${
                  menuOpen ? 'rotate-45 translate-y-px' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-primary-text transition-all duration-300 ${
                  menuOpen ? 'opacity-0 translate-x-3' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-primary-text transform transition-all duration-300 origin-left ${
                  menuOpen ? '-rotate-45 -translate-y-px' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-40 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="container mx-auto px-4 pt-24">
              <motion.ul 
                className="space-y-6"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                  closed: {},
                }}
              >
                {sections.map((section, index) => (
                  <motion.li 
                    key={section.id}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                  ><br/>
                    <a
                      href={`#${section.id}`}
                      className={`block text-2xl font-semibold transition-colors duration-300 text-center ${
                        activeSection === section.id ? 'text-accent-blue' : 'text-primary-text'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section.id);
                      }}
                    >
                      {section.title}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;