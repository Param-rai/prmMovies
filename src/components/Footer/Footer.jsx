import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url('/assets/footer.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mt-4">
        <Logo />
        <nav className="footer__nav">
          <ul>
            <li>
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={""}>Contact Us</Link>
            </li>
            <li>
              <Link to={""}>Terms of Use</Link>
            </li>
            <li>
              <Link to={""}>About Us</Link>
            </li>
            <li>
              <Link to={""}>Live</Link>
            </li>
            <li>
              <Link to={""}>FAQ</Link>
            </li>
            <li>
              <Link to={""}>Try premium</Link>
            </li>
            <li>
              <Link to={""}>Privacy policy</Link>
            </li>
            <li>
              <Link to={""}>You must Watch</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
