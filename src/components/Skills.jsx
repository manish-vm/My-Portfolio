import React from "react";
import "./Skills.css";
import {
  Code,
  Globe,
  Database,
  Wrench,
  Server,
  Cloud,
  Brain,
  Users
} from "lucide-react";

const skillGroups = [
  { icon: Globe, title: "Frontend", items: ["React", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS", "Material UI", "Axios"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT", "Socket.IO", "WebSockets"] },
  { icon: Database, title: "Databases", items: ["MongoDB", "MySQL", "Schema Design", "Indexes", "Aggregation"] },
  { icon: Code, title: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL", "Java"] },
  { icon: Cloud, title: "DevOps & Cloud", items: ["Git", "GitHub", "Docker", "CI/CD", "Cloud Fundamentals", "Deployments"] },
  { icon: Brain, title: "AI", items: ["LLMs", "RAG", "Vector Databases", "Prompt Engineering", "AI Integrations"] },
  { icon: Wrench, title: "Tools", items: ["Postman", "VS Code", "Figma", "npm", "Vercel", "Render"] },
  { icon: Users, title: "Soft Skills", items: ["Problem Solving", "Ownership", "Fast Learning", "Communication", "Business Thinking"] },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        Technical Skills
        <span className="skills-underline"></span>
      </h2>
      <p className="skills-subtitle">A practical toolkit for shipping clean products, APIs, and AI-enabled workflows.</p>

      <div className="skills-grid">
        {skillGroups.map(({ icon: Icon, title, items }) => (
          <div className="skill-card" key={title}>
            <div className="skill-header">
              <div className="skill-icon">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
            </div>
            <div className="skill-tags">
              {items.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="skill-meter" aria-hidden="true"><span></span></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
