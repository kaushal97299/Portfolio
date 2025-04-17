import React from 'react';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  // Personal Information
  const personalInfo = [
    { icon: <FaUser />, label: "Name", value: "Kaushal" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Narnaund (Hisar) Haryana" },
    { icon: <FaPhone />, label: "Phone", value: "+91 9729958926" },
    { icon: <FaEnvelope />, label: "Email", value: "kaushalsharma97299@gmail.com" }
  ];

  // Education
  const education = [
    {
      year: "2019-2022",
      degree: "Bachelor of Arts",
      institution: "Guru Jambheshwar University of Science and Technology",
      description: "Specialized in Web Technologies and AI"
    },
    {
      year: "2024-2025",
      degree: "Mern Stack Certification",
      institution: "Excelexcellence technology chandigarh",
      description: "MERN Stack Specialization"
    }
  ];

  // Skills
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "UI/UX Design", level: 65 }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">01.</span> About Me
          </h2>
          <p className="section-subtitle">
            Get to know me better
          </p>
        </div>

        <div className="about-content">
          {/* Self Introduction */}
          <div className="intro-card">
            <h3 className="card-title">
              <FaUser className="title-icon" />
              Who Am I?
            </h3>
            <div className="intro-content">
              <p>
              Hi, I'm Kaushal, a passionate MERN Stack Developer with a strong foundation in computer science. I specialize in building responsive, user-friendly web applications using MongoDB, Express.js, React, and Node.js. As a fresher, I’m eager to contribute, learn continuously, and deliver efficient and scalable solutions.
              </p>
             
            </div>
          </div>

          {/* Personal Information */}
          <div className="personal-card">
            <h3 className="card-title">
              <FaUser className="title-icon" />
              Personal Information
            </h3>
            <div className="info-grid">
              {personalInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <div className="info-label">{item.label}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="education-card">
            <h3 className="card-title">
              <FaGraduationCap className="title-icon" />
              Education
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{edu.year}</div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <div className="timeline-institution">{edu.institution}</div>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="skills-card">
            <h3 className="card-title">
              <FaLaptopCode className="title-icon" />
              Skills
            </h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;