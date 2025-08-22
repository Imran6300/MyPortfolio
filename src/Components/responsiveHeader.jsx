import React, { useState, useEffect } from "react";
import Css from "./responsiveHeader.module.css";

const ResponsiveHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${Css.navbar} ${scrolled ? Css.scrolled : ""}`}>
      <div className={Css.navcontainer}>
        <a href="#home" className={Css.logo}>
          Syed Imran
        </a>

        <div
          className={`${Css.hamburger} ${isOpen ? Css.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${Css.navlinks} ${isOpen ? Css.active : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" onClick={() => setIsOpen(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveHeader;
