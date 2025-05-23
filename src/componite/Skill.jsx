import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaPaintBrush, FaServer, FaMobile } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiGraphql, SiTypescript } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  // Skill data
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="category-icon" />,
      color: "#61DAFB",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90, icon: <SiJavascript /> },
        { name: "HTML/CSS", level: 85 },
        
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="category-icon" />,
      color: "#68A063",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "REST APIs", level: 88 },
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="category-icon" />,
      color: "#4DB33D",
      skills: [
        { name: "MongoDB", level: 85, icon: <SiMongodb /> },
      
      ]
    },
    
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">02.</span> My Toolkit
          </h2>
          <p className="section-subtitle">
            Technologies I've mastered and regularly work with
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category"
              style={{ '--category-color': category.color }}
            >
              <div className="category-header">
                <div className="icon-wrapper" style={{ backgroundColor: `${category.color}20` }}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">
                        {skill.icon || <div className="default-icon" style={{ backgroundColor: category.color }} />}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-meter">
                      <div 
                        className="skill-level" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: category.color
                        }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Also Proficient In:</h3>
          <div className="other-skills">
            <span>Git</span>
            <span>GitHub</span>
            <span>Netlify</span>
            <span>Render</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;