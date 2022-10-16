import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-center bg-secondary p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} by Algatt
      </div>
    </footer>
  );
};

export default Footer;
