import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/EducationV2";
import Experience from "./components/Experience"
import Footer from "./components/Footer";
import GitHub from "./components/GitHub";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import { createPortfolioTheme } from "./theme";
import "./styles.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function App() {
  const theme = createPortfolioTheme();

  return (
    <div className="app" style={theme}>
      <Navbar />
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Hero />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <About />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Skills />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Experience />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Projects />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <GitHub />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Education />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Certifications />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Achievements />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Contact />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
