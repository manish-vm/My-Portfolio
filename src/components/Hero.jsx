const Hero = () => {
    return (
        <>
            <section className="hero" id="home">
                <div className="hero-text">
                    <p className="eyebrow">Hi, I'm</p>
                    <h1>Manish Kumar V</h1>
                    <h2 className="Hero-para">Full Stack Developer building scalable web applications and AI-powered solutions.</h2>
                    <p className="hero-summary">
                        React, Node.js, FastAPI, MongoDB, MySQL, and REST APIs. Currently focused on MERN stack depth,
                        AI integrations, system design, cloud fundamentals, and production-ready engineering.
                    </p>
                    <div className="focus-list" aria-label="Current focus areas">
                        <span>MERN Stack</span>
                        <span>AI Integrations</span>
                        <span>System Design</span>
                        <span>Cloud</span>
                    </div>
                    <div className="hero-actions">
                        <a className="btn-primary" href="/Manish Kumar V - Resume.pdf" download>Resume</a>
                        <a className="btn-secondary" href="https://github.com/manish-vm?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
                        <a className="btn-secondary" href="https://www.linkedin.com/in/manish310a/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a className="btn-secondary" href="#contact">Contact</a>
                    </div>
                </div>
                <div className="hero-img">
                    <img src="/IMG_20251223_183200.jpg" alt="Manish Kumar V" className="profile-photo" />

                    <img
                        src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-png-download-7578010.png?f=webp"
                        className="tech-icon top-left"
                        alt="React"
                    />
                    <img
                        src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-3d-icon-png-download-7578002.png"
                        className="tech-icon top-right"
                        alt="Node.js"
                    />
                    {/* <img
          src="https://static.vecteezy.com/system/resources/thumbnails/047/247/466/small/3d-code-icon-programming-code-symbols-software-and-web-development-icon-png.png"
          className="tech-icon bottom-left"
          alt="Node.js"
        /> */}
                    <img
                        src="https://cdn3d.iconscout.com/3d/free/thumb/free-mongo-db-3d-icon-png-download-7577996.png"
                        className="tech-icon bottom-right"
                        alt="MongoDB"
                    />
                </div>

            </section>
        </>
    );
};
export default Hero;
