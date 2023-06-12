import React from "react";
import "./Navbar.scss";
import { Logo } from "../../assets";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navContainer">
        <div className="navLogo">
          <img src={Logo} alt="logo" />
          <h1>Serendipity</h1>
        </div>
        <div className="navLinks">
          {navLinks.map((link, index) => (
            <Link to={link.path} key={index} className="navLink">
              {link.name}
            </Link>
          ))}
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
