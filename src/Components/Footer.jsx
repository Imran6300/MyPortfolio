import Css from "./Footer.module.css";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={`${Css.footer}`}>
      <p className={`${Css.footertext}`}>
        © 2025 Syed Mubashir. All Rights Reserved.
      </p>
      <div className={`${Css.socialicons}`}>
        <a
          href="https://github.com/Imran6300/Local-repo"
          target="_blank"
          rel="noreferrer"
        >
          <LuGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/syed-mubashir-ahmed-475362340/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/syed_imran1493/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
