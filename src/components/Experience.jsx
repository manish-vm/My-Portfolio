import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Focus Engineering",
    duration: "Current",
    logo: "/focus-engineering-logo.png",
    description:
      "Building manufacturing and operations software with role-based workflows, analytics dashboards, Excel data pipelines, QR processing, and multi-stage production tracking.",
    impact: "Improves visibility across production teams and reduces manual coordination for enterprise manufacturing workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "ExcelJS", "JWT"],
  },
  {
    role: "Software Engineering Intern",
    company: "Intellect Design Arena",
    duration: "Jan 2025 - Jul 2025",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jJdoSxp3M8YI0M-C6faL3FGZMoI7oA4WjA&s",
    description:
      "Contributed to enterprise fintech engineering across frontend modules, API collaboration, quality checks, and maintainable delivery practices.",
    impact: "Gained enterprise exposure to reliability, compliance-aware development, and team-based software delivery.",
    tech: ["React", "JavaScript", "REST APIs", "MySQL", "Git"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Kairaa Tech Serve",
    duration: "Jun 2024 - Dec 2024",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHxzVCeOLr31w/company-logo_200_200/company-logo_200_200/0/1693814470227/kairaa_chain_logo?e=2147483647&v=beta&t=9KNmpsSL7zuXEBJ0qpWX-sNLM43SpuM7cbAMltWz2SM",
    description:
      "Built and maintained MERN applications, authentication flows, admin dashboards, REST APIs, and responsive interfaces for client-facing products.",
    impact: "Delivered startup-paced features while strengthening API design, UI polish, debugging, and deployment discipline.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience
        <span className="experience-underline"></span>
      </h2>

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
              <p className="exp-impact">{exp.impact}</p>

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

