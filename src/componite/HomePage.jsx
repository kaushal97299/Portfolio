import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaArrowDown, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const lines = [
    { tag: 'h4', text: 'Hi, my name is', className: 'intro-text' },
    { tag: 'h1', text: 'Kaushal', className: 'name-heading' },
    { tag: 'h2', text: 'I build things for the web.', className: 'title-heading' },
    {
      tag: 'p',
      text: "I'm a MERN stack developer specializing in building exceptional digital experiences. Currently focused on creating accessible, human-centered products.",
      className: 'description',
    },
  ];

  const [typedLines, setTypedLines] = useState(Array(lines.length).fill(''));

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    function typeNextChar() {
      if (lineIndex >= lines.length) return;

      const currentText = lines[lineIndex].text;
      const updatedLines = [...typedLines];
      updatedLines[lineIndex] += currentText[charIndex];
      setTypedLines(updatedLines);

      charIndex++;

      if (charIndex < currentText.length) {
        setTimeout(typeNextChar, 50);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNextChar, 500); // Delay before next line starts
      }
    }

    typeNextChar();
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Background Circles */}
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>

        <div className="home-content">
          {lines.map((line, index) => {
            const Tag = line.tag;
            return (
              <Tag key={index} className={line.className}>
                {typedLines[index]}
                <span className="cursor">|</span>
              </Tag>
            );
          })}

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:kaushalsharma97299@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                kaushalsharma97299@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href="tel:+919729958926" className="contact-link" target="_blank" rel="noopener noreferrer">
                +91 9729958926
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="social-links">
            <a href="https://github.com/kaushal97299" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kaushal-gauttam-839963275" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

          <a href="#about" className="cta-button">
            Learn More <FaArrowDown className="arrow-icon" />
          </a>
        </div>

        <div className="hero-image">
          <div className="image-container"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
