import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

import web1 from "../../assets/images/web1.png";
import web2 from "../../assets/images/web2.png";
import web3 from "../../assets/images/web3.png";
import web4 from "../../assets/images/web4.png";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-red-glow"></div>
      <div className="footer-blue-glow"></div>

      <img src={web1} className="web web1" alt="" />
      <img src={web2} className="web web2" alt="" />
      <img src={web3} className="web web3" alt="" />
      <img src={web4} className="web web4" alt="" />

      <div className="footer-content">

        <h2>SPIDERVERSE</h2>

        <p className="footer-quote">
          "With Great Power Comes Great Responsibility"
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#origin">Origin</a>

          <a href="#powers">Powers</a>

          <a href="#allies">Allies</a>

          <a href="#villains">Villains</a>

          <a href="#spiderverse">Spider-Verse</a>

          <a href="#suits">Suits</a>

        </div>

        <div className="footer-social">

          <a
            href="https://github.com/Siva-jerry"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/siva-m-823698357"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/example_of_innocent__/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:sivajerry1433@gmail.com"
          >
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-credit">

          <h3>
            Made with ❤️ by Siva M
          </h3>

          <p>
            © 2026 SpiderVerse Project
          </p>

        </div>

      </div>

    </footer>

  );

}

export default Footer;