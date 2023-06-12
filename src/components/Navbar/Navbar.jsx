import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Logo } from "../../assets";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { connect } from "react-redux";
import { setMode } from "../../redux/mode/mode.actions";

const Navbar = ({ darkMode, setMode }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  console.log(darkMode);
  const handleToggle = () => {
    setMode(!darkMode);

    localStorage.setItem("darkMode", darkMode);
  };


  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      setMode(darkMode);
    }
  }, []);

  return (
    <>
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
            <button className={darkMode ? "signUpDark" : "signUpLight"} >Sign Up</button>
            <div className="toggleButton">
              {darkMode ? (
                <div className="darkMode">
                  <BsToggle2Off size={35} onClick={handleToggle} />
                </div>
              ) : (
                <div className="lightMode">
                  <BsToggle2On size={35} onClick={handleToggle} />
                </div>  
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.mode.darkMode,
});

const mapDispatchToProps = (dispatch) => ({
  setMode: (mode) => dispatch(setMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
