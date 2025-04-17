import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
    if (!navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close menu when clicking on a link
  const closeMenu = () => {
    setNavOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`navbb ${scrolled ? 'scrolled' : ''}`}>
      <div className="brand">MyPortfolio</div>

      <ul className={`navbar-links ${navOpen ? 'active' : ''}`}>
        <li className='li1'><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li className='li1'><Link to="/About" onClick={closeMenu}>About</Link></li>
        <li className='li1'><Link to="/Projects" onClick={closeMenu}>Projects</Link></li>
        <li className='li1'><Link to="/Skills" onClick={closeMenu}>Skills</Link></li>
        <li className='li1'><Link to="#contact" onClick={closeMenu}>Contact</Link></li>
        <li className='li2'>
          <a href="/public/Kaushal Resume.pdf" download className="resume-btn" onClick={closeMenu}>
            Download Resume
          </a>
        </li>
      </ul>

      <div 
        className="hamburger" 
        onClick={toggleMenu}
        aria-label={navOpen ? "Close menu" : "Open menu"}
      >
        {navOpen ? '✕' : '☰'}
      </div>
    </nav>
  );
};

export default Navbar;