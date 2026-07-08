import { useMemo, useState } from "react";

// eslint-disable-next-line no-unused-vars
const projects = [
  {
    title: "E-commerce Checkout UI",
    desc: "Designed and developed an E-commerce platform with secure authentication, role-based access, and core shopping features with MERN Stack and Rest APIs ",
    image: "/e-commerce-site.png",
    repo: "https://github.com/manish-vm/",
    demo: "https://metromens-ecommerce-frontend.vercel.app/",
  },
  {
    title: "Online Course Enrollment",
    desc: "A full-stack course enrollment platform with user authentication, role-based access, admin course management, and secure enrollments, built using React, Node.js, Express, MongoDB, and JWT.",
    image: "/course.png",
    repo: "https://github.com/manish-vm/",
    demo: "https://online-course-enrollment-system-fro.vercel.app/",
  },
  {
    title: "KTech Digital Solutions – Agency Platform",
    desc: "A high-converting, professional website for a regional digital marketing agency. Built with React 19 and Tailwind CSS, it features 15+ SEO-optimized service pages, a responsive UI with glassmorphic elements, and a custom-built Admin Dashboard for managing portfolio projects and blog content.",
    image: "https://github.com/manish-vm/My-Portfolio/blob/main/public/ktech.png?raw=true",
    repo: "https://github.com/manish-vm/",
    demo: "https://k-tech-site.vercel.app/",
  },
   {
    title: "StartupConnect application",
    desc: "Built a MERN stack web platform connecting startups with investors, mentors, and service providers, featuring user authentication, profile management, and interactive dashboards to enable efficient networking and collaboration.",
    image: "/startup-connect.png",
    repo: "https://github.com/manish-vm/",
    demo: "https://startupconnectz.com/home",
  },
];

const featuredProjects = [
  {
    title: "Inventory Pro",
    category: "Enterprise",
    desc: "Enterprise manufacturing management system for production visibility, review workflows, access control, and operational analytics.",
    image: "/startup-connect.png",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "ExcelJS", "QR"],
    architecture: ["Role-based access", "Multi-stage production tracking", "Excel import/export", "Analytics dashboard"],
    challenge: "Converted manual manufacturing coordination into structured digital workflows with traceable product reviews.",
    repo: "https://github.com/manish-vm/",
    demo: "https://github.com/manish-vm/",
  },
  {
    title: "HRMS",
    category: "Enterprise",
    desc: "Human resource management platform covering attendance, employee records, leave flows, shifts, permissions, and payroll-ready data.",
    image: "/course.png",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    architecture: ["Attendance modules", "Shift management", "Role permissions", "Payroll-ready structure"],
    challenge: "Designed admin-friendly workflows for recurring HR operations and permission-sensitive employee data.",
    repo: "https://github.com/manish-vm/",
    demo: "https://github.com/manish-vm/",
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    desc: "Responsive commerce platform with authentication, payments, product management, inventory, and an admin dashboard.",
    image: "/e-commerce-site.png",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Payments"],
    architecture: ["Auth flows", "Admin dashboard", "Inventory control", "Responsive storefront"],
    challenge: "Balanced customer-facing UI speed with secure admin and payment workflows.",
    repo: "https://github.com/manish-vm/",
    demo: "https://metromens-ecommerce-frontend.vercel.app/",
  },
  {
    title: "AI-ready StartupConnect",
    category: "AI / Platform",
    desc: "MERN platform connecting startups with investors, mentors, and service providers through profiles, dashboards, and collaboration flows.",
    image: "/startup-connect.png",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Dashboards"],
    architecture: ["Profile matching", "Interactive dashboards", "Networking workflows", "API-first backend"],
    challenge: "Built a scalable foundation suitable for future AI-assisted matching and recommendation features.",
    repo: "https://github.com/manish-vm/",
    demo: "https://startupconnectz.com/home",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", ...new Set(featuredProjects.map((project) => project.category))];
  const filteredProjects = useMemo(() => {
    return featuredProjects.filter((project) => {
      const searchable = `${project.title} ${project.category} ${project.desc} ${project.stack.join(" ")}`.toLowerCase();
      return (activeCategory === "All" || project.category === activeCategory) && searchable.includes(query.toLowerCase());
    });
  }, [activeCategory, query]);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured Engineering Projects
         <span className="projects-underline"></span>
      </h2>

      <div className="project-toolbar">
        <div className="project-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
        <input
          aria-label="Search projects"
          className="project-search"
          placeholder="Search projects or stack"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="mini-stack">
                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <h4>Architecture Highlights</h4>
              <ul>
                {project.architecture.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <h4>Challenge Solved</h4>
              <p className="project-desc">{project.challenge}</p>

              <div className="project-actions">
                <a href={project.repo} className="btn-outline" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} className="btn-gradient" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

