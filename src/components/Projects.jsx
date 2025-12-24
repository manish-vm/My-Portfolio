const projects = [
  {
    title: "E-commerce Checkout UI",
    desc: "Designed and developed an E-commerce platform with secure authentication, role-based access, and core shopping features with MERN Stack and Rest APIs ",
    image: "/e-commerce-site.png",
    repo: "https://github.com/manish-vm/",
    demo: "https://metromens-ecommerce-frontend.vercel.app/",
  },
  {
    title: "StartupConnect application",
    desc: "Built a MERN stack web platform connecting startups with investors, mentors, and service providers, featuring user authentication, profile management, and interactive dashboards to enable efficient networking and collaboration.",
    image: "/startup-connect.png",
    repo: "https://github.com/manish-vm/",
    demo: "#",
  },
  {
    title: "Online Course Enrollment",
    desc: "A full-stack course enrollment platform with user authentication, role-based access, admin course management, and secure enrollments, built using React, Node.js, Express, MongoDB, and JWT.",
    image: "/course.png",
    repo: "https://github.com/manish-vm/",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Real-time Projects</h2>

      {/* FILTER BUTTONS */}
      <div className="project-tabs">
        <button className="active">Web Application</button>
        <button>Mobile Application</button>
      </div>

      {/* PROJECT CARDS */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <p className="project-desc">{project.desc}</p>

              <div className="project-actions">
                <a href={project.repo} className="btn-outline">
                  Repository
                </a>
                <a href={project.demo} className="btn-gradient">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
