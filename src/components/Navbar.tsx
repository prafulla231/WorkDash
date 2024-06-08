import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Employee Monitoring Dashboard</a>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
        <a href="/" className="navbar-item">Day-wise</a>
        <a href="/about" className="navbar-item">Week-wise</a>
        <a href="/services" className="navbar-item">Month-wise</a>
        <a href="/contact" className="navbar-item">Employee-wise</a>
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
