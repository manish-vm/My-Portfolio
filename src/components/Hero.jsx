const Hero = () => {
    return (
        <>
            <section className="hero">
                
                <div className="hero-text">
                    <h1>Hi, I'm <span>Manish</span></h1>
                    <h4 className="Hero-para">AI Full Stack Developer</h4>
                    <button className="download-btn"><a href="/Manish Kumar V - Resume.pdf">Download CV</a></button><br></br>
                    <a href="https://www.linkedin.com/in/manish310a/" ><img src="/Gemini_Generated_Image_jd7f9fjd7f9fjd7f-removebg-preview.png" alt="linkedin" className="social-links" /></a>
                    <a href="https://github.com/manish-vm?tab=repositories" ><img src="/github_logo.png" alt="github" className="social-links" /></a>
                    <a href="https://www.instagram.com/manish_vmk_/" ><img src="/insta_logo.png" alt="instagra," className="social-links" /></a>
                </div>
                <div className="hero-img">
                    <img src="IMG_20251223_183200.jpg" alt="profile" className="hero-img" />

                    <img
                        src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-png-download-7578010.png?f=webp"
                        className="tech-icon top-left"
                        alt="React"
                    />
                    <img
                        src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-3d-icon-png-download-7578002.png"
                        className="tech-icon top-right"
                        alt="JavaScript"
                    />
                    {/* <img
          src="https://static.vecteezy.com/system/resources/thumbnails/047/247/466/small/3d-code-icon-programming-code-symbols-software-and-web-development-icon-png.png"
          className="tech-icon bottom-left"
          alt="Node.js"
        /> */}
                    <img
                        src="https://cdn3d.iconscout.com/3d/free/thumb/free-mongo-db-3d-icon-png-download-7577996.png"
                        className="tech-icon bottom-right"
                        alt="MySQL"
                    />
                </div>

            </section>
        </>
    );
};
export default Hero;