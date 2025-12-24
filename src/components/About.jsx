const About = () => {
  return (
    <section className="about" id="about">
      <h1>About Me</h1>
      <div className="aboutme-content">
        <img src="/aboutme-thumbnail.png" alt="about" className="aboutme-thumbnail" />
        <p className="about-me-para">
          AI-Powered Full-Stack Developer I am a results-driven developer specializing in building scalable web applications and secure APIs. With a background in both fast-paced startups and enterprise environments like Intellect Design Arena, I bridge the gap between robust backend architecture and intuitive frontend experiences.

          Currently, I am integrating Prompt Engineering and AI-driven workflows to build next-generation applications that are efficient and future-ready. I thrive on solving complex problems with the MERN stack, Java, and intelligent automation.
        </p>
      </div>
      <div className="about-tags">
        <span>Web Development</span>
        <span>UI Design</span>
        <span>Problem Solving</span>
        <span>Freelancer</span>
      </div>
    </section>
  );
};

export default About;
