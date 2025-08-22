import Css from "./Header.module.css";

const Header = () => {
  return (
    <header className={`p-3 hero-nav ${Css.navHead}`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="text-end Name">
            <h4>Mubashir</h4>
          </div>
          <ul className="nav mb-2 mb-lg-0">
            <li>
              <a
                href="#hero"
                className={`nav-link ${Css.anchor} px-2 nav-text`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className={`nav-link ${Css.anchor} px-2 nav-text`}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${Css.anchor} px-2 nav-text`}
              >
                My Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${Css.anchor} px-2 nav-text`}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
