import React from "react";
import "./About.css";

const About = () => {
  const highlights = [
    { value: "3+", label: "Professional roles", detail: "Startup and enterprise delivery experience" },
    { value: "2025", label: "MCA Graduate", detail: "VIT postgraduate with strong CS fundamentals" },
    { value: "AI", label: "Current focus", detail: "LLMs, RAG, vector databases, and product AI" },
  ];

  const capabilities = ["React systems", "REST APIs", "MongoDB workflows", "Role-based access", "Analytics", "Automation", "System design", "AI integrations"];

  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <p className="eyebrow">About Me</p>
        <h2 className="about-title">
          Building dependable products from frontend polish to backend logic
          <span className="about-underline"></span>
        </h2>
      </div>

      <div className="about-layout">
        <article className="about-main-card">
          <span className="about-kicker">Full Stack Developer</span>
          <p>
            I build production-ready business applications at Focus Engineering, working across clean frontend
            systems, dependable APIs, database-backed workflows, and practical AI integrations.
          </p>
          <p>
            My earlier work at Intellect Design Arena and Kairaa Tech Serve shaped how I move quickly while keeping
            maintainability, security, and user experience in view.
          </p>
          <p>
            I enjoy turning ambiguous business problems into reliable software, especially systems involving
            role-based access, analytics, workflow automation, and scalable data models.
          </p>
        </article>

        <aside className="about-side-panel">
          {highlights.map((item) => (
            <div className="about-highlight" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </div>
          ))}
        </aside>

        <div className="about-capabilities" aria-label="Core capabilities">
          {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
        </div>
      </div>
    </section>
  );
};

export default About;
