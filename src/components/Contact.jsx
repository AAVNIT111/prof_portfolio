import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ contact }) => {
  if (!contact) return null;
  
  const { email, phone, location, linkedin, github, twitter } = contact;
  
  if (!email && !phone && !location && !linkedin && !github && !twitter) return null;

  const contactItems = [
    { id: 'email', label: 'Email', value: email, icon: '✉️' },
    { id: 'phone', label: 'Phone', value: phone, icon: '📱' },
    { id: 'location', label: 'Location', value: location, icon: '📍' },
    { id: 'linkedin', label: 'LinkedIn', value: linkedin, icon: '🔗', isLink: true },
    { id: 'github', label: 'GitHub', value: github, icon: '🔗', isLink: true },
    { id: 'twitter', label: 'Twitter', value: twitter, icon: '🔗', isLink: true }
  ].filter(item => item.value);

  return (
    <section id="contact" className="section bg-primary-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <motion.div 
          className="max-w-3xl mx-auto card p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactItems.map(item => (
              <motion.div 
                key={item.id}
                className="flex items-start space-x-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue flex-shrink-0">
                  <span>{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-medium text-primary-text">{item.label}</h3>
                  {item.isLink ? (
                    <a 
                      href={item.value} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:underline"
                    >
                      {item.value.replace(/^https?:\/\/(www\.)?/, '')}
                    </a>
                  ) : (
                    <p className="text-secondary-text">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;