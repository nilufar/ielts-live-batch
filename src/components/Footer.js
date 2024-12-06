import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center p-4 mt-8">
      <p>© 2024 IELTS LIVE Batch. All rights reserved.</p>
      <nav className="mt-2">
        <a href="#privacy" className="hover:text-blue-600 mx-2">Privacy Policy</a> |
        <a href="#terms" className="hover:text-blue-600 mx-2">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
