import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">
        About Me
        <span className="about-underline"></span>
      </h2>

      <p className="about-text">
        I am a results-driven Full-Stack Developer with experience in building
        scalable web applications and secure, high-performance APIs across
        startup and enterprise environments, including Intellect Design Arena.
        I specialize in developing robust backend architectures and delivering
        clean, intuitive frontend experiences using the MERN stack, Java, and
        RESTful APIs. Currently, I am focused on integrating Prompt Engineering
        and AI-driven workflows to build intelligent, efficient, and
        future-ready applications, while actively exploring system design
        concepts to strengthen my understanding of scalability, performance,
        and reliability. I am passionate about solving complex technical
        problems and delivering reliable, high-quality solutions through modern
        full-stack development and intelligent automation.
      </p>
    </section>
  );
};

export default About;
