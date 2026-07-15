const achievements = [
  { title: "Best Worker Award", detail: "Recognized for ownership, consistency, and contribution quality." },
  { title: "Enterprise Internship", detail: "Software Engineering Intern at Intellect Design Arena." },
  { title: "Startup Delivery", detail: "Built full stack features in fast-moving startup environments." },
  { title: "Production Projects", detail: "Shipped manufacturing, HRMS, e-commerce, and platform workflows." },
  { title: "Coding Growth", detail: "Actively strengthening DSA, system design, and AI engineering foundations." },
  { title: "Open Source Footprint", detail: "Maintaining public GitHub projects and portfolio-ready repositories." },
];

const Achievements = () => (
  <section className="achievements-section" id="achievements">
    <h2 className="section-title">Achievements<span></span></h2>
    <div className="compact-grid">
      {achievements.map((achievement) => (
        <article className="compact-card" key={achievement.title}>
          <h3>{achievement.title}</h3>
          <p>{achievement.detail}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Achievements;
