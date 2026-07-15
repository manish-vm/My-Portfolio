import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = ["about", "skills", "experience", "projects", "github", "contact"];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <>
        <nav className="navbar">
            <a href="#home" className="brand" aria-label="Manish Kumar V home">
                <img src="/header-logo.png" alt="" aria-hidden="true" />
                <span>
                    <span>Manish</span>
                    <strong>Full Stack Developer</strong>
                </span>
            </a>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`nav-ul ${menuOpen ? 'active' : ''}`}>
                {links.map((link) => (
                    <li key={link}>
                        <a href={`#${link}`} onClick={() => setMenuOpen(false)}>
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    );
};
export default Navbar;
