import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaTwitter, 
  FaInstagram,
  FaHeart,
  FaCode
} from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const resumeUrl = '/Kaushal Resume.pdf'; // Update with your resume path

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">Kaushal Sharma</h3>
            <p className="footer-description">
              MERN Stack Developer passionate about building exceptional digital experiences.
            </p>
            <a 
              href={resumeUrl} 
              download="Kaushal Resume.pdf"
              className="resume-button"
            >
              Download Resume <FiDownload className="download-icon" />
            </a>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:kaushalsharma97299@gmail.com" className="footer-link">
                  <FaEnvelope className="footer-icon" /> kaushalsharma97299@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919729958926" className="footer-link">
                  <FaPhone className="footer-icon" /> +91 9729958926
                </a>
              </li>
              <li className="footer-link">
                <span>Based in: Your City, Country</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Follow Me</h3>
            <div className="footer-socials">
              <a 
                href="https://github.com/kaushal97299" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://instagram.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="newsletter">
              <p>Subscribe to my newsletter</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Kaushal Sharma. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> and <FaCode className="code-icon" /> by Kaushal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;