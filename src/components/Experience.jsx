import { motion } from "framer-motion";

const experiences = [
  {
    role: "FinTech Engineer Intern",
    company: "Intellect Design Arena",
    duration: "Jan-2025 to Jul-2025 ",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jJdoSxp3M8YI0M-C6faL3FGZMoI7oA4WjA&s",
    description:
      "Worked on enterprise-grade fintech platforms, contributing to frontend modules and collaborating with backend teams on scalable financial solutions.",
    tech: ["React", "Java", "API Design", "MySQL"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Kairaa Tech Serve",
    duration: "June-2024 to Dec-2024",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHxzVCeOLr31w/company-logo_200_200/company-logo_200_200/0/1693814470227/kairaa_chain_logo?e=2147483647&v=beta&t=9KNmpsSL7zuXEBJ0qpWX-sNLM43SpuM7cbAMltWz2SM",
    description:
      "Built and maintained full-stack applications using MERN stack, developed REST APIs, and improved UI performance and usability.",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="timeline-dot" />

            <div className="experience-card">
              <div className="exp-header">
                <div className="exp-title">
                  <img src={exp.logo} alt={exp.company} />
                  <div>
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                </div>
                <span className="exp-duration">{exp.duration}</span>
              </div>

              <p className="exp-desc">{exp.description}</p>

              <div className="tech-stack">
                {exp.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
