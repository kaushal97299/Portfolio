import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaArrowDown, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Animated Background Elements */}
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        
        <div className="home-content">
          <h4 className="intro-text">Hi, my name is</h4>
          <h1 className="name-heading">Kaushal</h1>
          <h2 className="title-heading">I build things for the web.</h2>
          
          <p className="description">
            I'm a Mern stack developer specializing in building exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products.
          </p>
          
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <Link
                to="mailto:kaushalsharma97299@gmail.com" 
                className="contact-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                kaushalsharma97299@gmail.com
              </Link>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <Link
                to="tel:+919729958926" 
                className="contact-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                +91 9729958926
              </Link>
            </div>
          </div>

          <div className="social-links">
            <Link
              to="https://github.com/kaushal97299" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>
            <Link 
              to="https://www.linkedin.com/in/kaushal-gauttam-839963275" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
          
          <Link to="#about" className="cta-button">
            Learn More <FaArrowDown className="arrow-icon" />
          </Link>
        </div>
        
        <div className="hero-image">
          <div className="image-container"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;