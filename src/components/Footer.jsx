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
            Manish<span>VM</span>
          </h2>
          <p>Thanks for reading.</p>

          <div className="newsletter">
            <input type="email" placeholder="you@email.com" />
            <button>➜</button>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>BROWSE BY CATEGORY</h4>
            <ul>
              <li>CSS</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>Animation</li>
            </ul>
          </div>

          <div>
            <h4>INTERACTIVE COURSES</h4>
            <ul>
              <li>CSS for JS Devs</li>
              <li>The Joy of React</li>
              <li>Whimsical Animations</li>
            </ul>
          </div>

          <div>
            <h4>GENERAL</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
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
