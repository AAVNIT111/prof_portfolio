import React from 'react';

const Footer = ({ name }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-text text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {currentYear} {name || 'Personal Portfolio'}. All rights reserved.</p>
        {/* <p className="mt-2 text-sm text-gray-400">
          
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;