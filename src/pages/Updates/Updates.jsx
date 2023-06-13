import React from "react";
import "./Updates.scss";
import Navbar from "../../components/Navbar/Navbar";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { Logo, linkedDark } from "../../assets";

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
        <div className="sidebar">
          <div className="titleSec">
            <h1>Updates</h1>
            <p>
              Stay up-to-date with the latest features released on Serendipity.
              Our most recent updates are now live, offering you a wide range of
              new features and enhancements that will enhance your experience.
              From sleek design changes to powerful new tools, we are
              continuously working to make our platform even better for you.
              Discover the latest updates today and take your experience to the
              next level!
            </p>
          </div>
          <div className="cardSec">
            <div className="icon">
              <img src={linkedDark} alt="" />
            </div>
            <div className="text">
              <div className="mainText">
                <div className="title">Course</div>
                <div className="subTitle">
                  <p>OPTIMUS WEB</p>
                  <span>FIXED - APRIL 21, 2023</span>
                </div>
              </div>
              <div className="subText">
                <li>
                  <ol>
                    Variations on image prompts without text prompts now work
                    again.
                  </ol>
                  <ol>
                    Variations on image prompts without text prompts now work
                    again.
                  </ol>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="bottomMenu"></div>
      </div>
    </div>
  );
};

export default Updates;
