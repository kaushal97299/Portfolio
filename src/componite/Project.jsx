import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Projects.css';
import EcommerceImg from '../images/Screenshot 2025-04-16 022323.png';
// import PortfolioImg from '../assets/portfolio.jpg';
// import TaskAppImg from '../assets/taskapp.jpg';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">03.</span> My Projects
          </h2>
          <p className="section-subtitle">
            Here are some of my recent works
          </p>
        </div>

        <div className="projects-grid">
          {/* Project 1 - Directly written */}
          <div className="project-card">
            <div className="project-image-container">
              <img 
                src={EcommerceImg} 
                alt="E-Commerce Platform" 
                className="project-thumbnail"
              />
              <div className="project-hover-content">
                <Link
                  to="https://kaushal-flipzon.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Live Demo
                </Link>
                <Link
                  to="https://github.com/kaushal97299/kaushal-flipzon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Code
                </Link>
              </div>
            </div>
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <p>Full-featured online store with cart and payment integration</p>
              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          {/* Project 2 - Directly written */}
          <div className="project-card">
            <div className="project-image-container">
              <img 
                src="" 
                alt="Task Management App" 
                className="project-thumbnail"
              />
              <div className="project-hover-content">
                <Link
                  to="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Live Demo
                </Link>
                <Link
                  to="https://github.com/yourusername/taskapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Code
                </Link>
              </div>
            </div>
            <div className="project-content">
              <h3>Task Management App</h3>
              <p>Kanban-style task manager with drag-and-drop functionality</p>
              <div className="project-tags">
                <span>React</span>
                {/* <span>Firebase</span>
                <span>Material UI</span> */}
              </div>
            </div>
          </div>

          {/* Project 3 - Directly written */}
          <div className="project-card">
            <div className="project-image-container">
              <img 
                src="" 
                alt="Portfolio Website" 
                className="project-thumbnail"
              />
              <div className="project-hover-content">
                <Link
                  to="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Live Demo
                </Link>
                <Link
                  to="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Code
                </Link>
              </div>
            </div>
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>Modern responsive portfolio with animations</p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS3</span>
                <span>Animations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;