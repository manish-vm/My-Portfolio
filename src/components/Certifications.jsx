const certifications = [
  "Master of Computer Applications, VIT, 2025",
  "Full Stack Development internship experience",
  "Enterprise software engineering internship experience",
  "Currently learning system design, DSA, cloud, LLMs, RAG, and vector databases",
];

const Certifications = () => (
  <section className="certifications-section" id="certifications">
    <h2 className="section-title">Certifications & Learning<span></span></h2>
    <div className="compact-grid">
      {certifications.map((item) => (
        <article className="compact-card" key={item}>
          <h3>{item}</h3>
          <p>Professional development aligned with software engineering, full stack systems, and AI engineering roles.</p>
        </article>
      ))}
    </div>
  </section>
);

export default Certifications;
