
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);   // open 
    };

    const closeMenu = () => {
        setNavActive(false);  // close
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                {/* <img src="./img/logo.svg" alt="Logoipsum" /> */}
                <p style={{fontFamily:"sans-serif",fontSize:"25px",cursor:"pointer"}}  onClick={(e)=>{
                    document.getElementById("heroSection").scrollIntoView({behavior: "smooth"})
                }}>#SHIVA</p>
            </div>

            
            {/* {eslint-disable-next-line} */}
            <button
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </button>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            className="navbar--content"
                        >
                            O & N Family
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="mySkillss"
                            className="navbar--content"
                        >
                            Home Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="mySkills"
                            className="navbar--content"
                        >
                            SGN Gardens Events
                        </Link>
                    </li>

                    <li>
                        <Link
                            onClick={()=>window.open("https://drive.google.com/file/d/1KknAuIybCPICsOElC0BiHCAiLocan3E_/view?usp=sharing")}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="navbar--content"
                        >
                            E card
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="testimonial"
                            className="navbar--content"
                        >
                            Testimonials
                        </Link>
                    </li> */}
                </ul>
            </div>
            <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="footer"
                className="btn btn-outline-primary"
                
            >
                Contact 
            </Link>
        </nav>
    );
}

export default Navbar;
