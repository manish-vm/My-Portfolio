const skills = [
  "HTML5", "CSS3", "Bootstrap", "JavaScript", "React",
  "Node.js", "MongoDB", "MongoDB Atlas", "MySQL", "SQL", "Git", "GitHub", "Java",
  "JDBC", "Figma" , "Firebase", "Postman", "Render", "APIs", "AI"
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
