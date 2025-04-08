    import React from 'react';
import './navbar.css';
import profilePic from '../../assets/Profile.jpeg';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">

            {/* Profile Picture */}
            <div className="profile-box">
                <img src={profilePic} alt="Ashwini" className="profile-image" />
            </div>

            {/* Navigation Menu */}
            <div className="desktopMenu">
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">ABOUT</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">EXPERIENCE</Link>
                <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">EDUCATION</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuListItem">SKILLS</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">PROJECTS</Link>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/ashwini-veddamoni02" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon linkedin" />
                </a>
                <a href="https://github.com/AshwiniVeddamoni" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon github" />
                </a>
            </div>
         </nav>
    );
}

export default Navbar;
