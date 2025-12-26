const Navbar = () => {
    return(
        <>
        <nav className="navbar">
            {/* <h3 className="logo"><img src="/portfolio-logo.png" height="100px" width="100px" alt="logo" /><span>Manish's Portfolio</span></h3> */}
            <img src="/portfolio-logo.png" height="150px" width="200px" alt="logo" className="logo1"/>
            <ul className="nav-ul">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </>
    );
};
export default Navbar;
