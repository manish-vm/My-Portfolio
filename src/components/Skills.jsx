import React from "react";
import "./Skills.css";
import {
  Code,
  Globe,
  Database,
  Wrench
} from "lucide-react";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        Technical Skills
        <span className="skills-underline"></span>
      </h2>
      <p className="skills-subtitle">
        My technical toolkit and areas of expertise
      </p>

      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skill-card">
          <div className="skill-header">
            <div className="skill-icon">
              <Code size={24} />
            </div>
            <h3>Programming Languages</h3>
          </div>
          <div className="skill-tags">
            <span>Core Java</span>
            <span>JDBC</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* Web Technologies */}
        <div className="skill-card">
          <div className="skill-header">
            <div className="skill-icon">
              <Globe size={24} />
            </div>
            <h3>Web Technologies</h3>
          </div>
          <div className="skill-tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
            <span>Tailwind CSS</span>
            <span>MERN Stack</span>
            <span>APIs</span>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-card">
          <div className="skill-header">
            <div className="skill-icon">
              <Database size={24} />
            </div>
            <h3>Databases</h3>
          </div>
          <div className="skill-tags">
            <span>MySQL</span>
            <span>SQL</span>
            <span>Oracle</span>
            <span>MongoDB</span>
            <span >MongoDB Atlas Cloud</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <div className="skill-header">
            <div className="skill-icon">
              <Wrench size={24} />
            </div>
            <h3>Tools & Platforms</h3>
          </div>
          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>Postman</span>
            <span>Figma</span>
            <span>Firebase</span>
            <span>Render</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
