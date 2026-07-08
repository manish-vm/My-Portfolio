import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Vellore Institute of Technology",
    duration: "2023 - 2025",
    cgpa: "8.31/10",
    type: "Postgraduate",
    logo: "https://assets.kollegeapply.com/new-thumbnail/VITREE%202026%20January%20Application%20Form%20Released%20at%20vit.ac.in.%20-920-logo.png",
    description:
      "Focused on software engineering, database systems, full-stack web development, and production-oriented project work. Graduated in 2025.",
    focus: ["Software Engineering", "Database Systems", "Full Stack Development", "System Design"],
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Vellore Institute of Technology",
    duration: "2020 - 2023",
    cgpa: "7.53/10",
    type: "Undergraduate",
    logo: "https://assets.kollegeapply.com/new-thumbnail/VITREE%202026%20January%20Application%20Form%20Released%20at%20vit.ac.in.%20-920-logo.png",
    description:
      "Built a strong foundation in programming, algorithms, operating systems, and web technologies with hands-on lab and project experience.",
    focus: ["Programming", "Algorithms", "Operating Systems", "Web Technologies"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const EducationV2 = () => {
  return (
    <section className="education-section education-showcase-section" id="education">
      <h2 className="education-title">
        Education
        <span className="education-underline"></span>
      </h2>

      <div className="education-showcase">
        <motion.div
          className="education-summary-card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="education-label">Academic Foundation</span>
          <h3>MCA graduate from VIT with a full-stack engineering focus.</h3>
          <p>
            My academic path strengthened software fundamentals, database thinking, and practical project execution,
            which now supports my work across production web applications and AI-ready systems.
          </p>
          <div className="education-stats">
            <span><strong>2025</strong> Graduated</span>
            <span><strong>2</strong> Degrees</span>
            <span><strong>VIT</strong> Institution</span>
          </div>
        </motion.div>

        <div className="education-card-grid">
          {educationData.map((edu, index) => (
            <motion.article
              className="education-card academic-card"
              key={edu.degree}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="edu-header">
                <img src={edu.logo} alt={edu.institution} />
                <div>
                  <span className="education-label">{edu.type}</span>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
              </div>

              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>

              <div className="education-card-footer">
                <span>CGPA {edu.cgpa}</span>
                <div>
                  {edu.focus.map((item) => (
                    <small key={item}>{item}</small>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationV2;
