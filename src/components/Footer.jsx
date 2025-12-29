const Footer = () => {
  return (
    <footer className="footer">
      {/* WAVE SHAPE */}
      <div className="footer-wave"></div>

      {/* AVATAR */}
      <div className="footer-avatar">
        <img
          src="https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-programmer-it-developer-png-image_10439723.png"
          alt="avatar"
          className="Footer-Avatar"
        />
      </div>

      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <h2>
            Manish<span className="footer-span">VM</span>
          </h2>
          <p>Thanks for reading.</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h3 className="social-link-list-footer-contact">Contact</h3>
            <ul>
              <li className="li1"><img src="/email_logo.png" height="30px" width="30px" alt="email"/><a href="mailto:manishvm310@gmail.com" target="_blank">manishvm310@gmail.com</a></li>
              <li className="li1"><img src="/phone-logo.png" height="30px" width="30px" alt="phone"/><a href="tel:+91-6385329793">+91 - 6385329793</a></li>
            </ul>
          </div>


          <div>
            <h3 className="social-link-list-footer-h3">Social Links</h3>
            <ul className="social-link-list-footer">
              <li className="li1"><a href="https://www.linkedin.com/in/manish310a/"><img src="/Gemini_Generated_Image_jd7f9fjd7f9fjd7f-removebg-preview.png" alt="linkedin" height="50px" width="50px" /></a></li>
              <li className="li1"><a href="https://github.com/manish-vm?tab=repositories"><img src="/github_logo.png" alt="github" height="50px" width="50px" /></a></li>
              <li className="li1"><a href="https://www.instagram.com/manish_vmk_/"><img src="/insta_logo.png" alt="linkedin" height="50px" width="50px" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      <p className="copyright">
        © 2025–Manish. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
