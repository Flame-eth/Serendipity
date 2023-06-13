import React from "react";
import "./Updates.scss";
import Navbar from "../../components/Navbar/Navbar";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

const Updates = () => {
  return (
    <div className="notification">
      <div className="notificationContainer">
        {/* <Navbar /> */}
        <div className="Menu"></div>
        <div className="navbar">
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
              <button className="signUpDark">Sign Up</button>
            </div>
          </div>
        </div>
        <div className="sidebar"></div>

        <div className="bottomMenu"></div>
      </div>
    </div>
  );
};

export default Updates;
