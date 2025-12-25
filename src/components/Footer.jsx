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
          {/* <div>
            <h4>Contact</h4>
            <ul>
              <li>manishvm310@gmail.com</li>
              <li>+91 - 6385329793</li>
            </ul>
          </div> */}


          {/* <div>
            <h4>GENERAL</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div> */}
        </div>
      </div>

      <p className="copyright">
        © 2025–Manish. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
