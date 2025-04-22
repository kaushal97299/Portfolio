import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
    document.body.style.overflow = navOpen ? 'auto' : 'hidden';
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000); // Reset after 3 seconds
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
          <a 
            href="/Kaushal Resume.pdf" 
            download 
            className="resume-btn" 
            onClick={() => {
              closeMenu();
              handleDownload();
            }}
          >
            {downloaded ? '✅ Downloaded' : 'Download Resume'}
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
