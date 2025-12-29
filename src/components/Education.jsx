import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Vellore Institute Of Technology",
    duration: "2023 – 2025",
    cgpa: "8.31/10",
    logo: "https://assets.kollegeapply.com/new-thumbnail/VITREE%202026%20January%20Application%20Form%20Released%20at%20vit.ac.in.%20-920-logo.png",
    description:
      "Focused on software engineering, data structures, database systems, and full-stack web development. Completed multiple academic and practical projects along with the Internship using modern technologies.",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Vellore Institute Of Technology",
    duration: "2020 - 2023",
    cgpa: "7.53/10",
    logo: "https://assets.kollegeapply.com/new-thumbnail/VITREE%202026%20January%20Application%20Form%20Released%20at%20vit.ac.in.%20-920-logo.png",
    description:
      "Built a strong foundation in programming, algorithms, operating systems, and web technologies with hands-on lab and project experience.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>

      <div className="education-grid">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="edu-header">
              <img src={edu.logo} alt={edu.institution} />
              <span className="edu-duration">{edu.duration}<br></br>CGPA - {edu.cgpa}</span>
            </div>

            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>

            <p>{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
