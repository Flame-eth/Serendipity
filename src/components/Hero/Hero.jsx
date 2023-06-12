import React from "react";
import {
  arrow,
  arrowDark,
  generateIcon,
  heroLight,
  union,
  uploadIcon,
} from "../../assets";
import Navbar from "../Navbar/Navbar";
import "./Hero.scss";
import { navLinks, updatesListDark, updatesListLight } from "../../constants";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Hero = ({ darkMode }) => {
  // console.log(darkMode);
  return (
    <div className="Hero">
      <div className="heroContainer">
        <div
          className={darkMode ? "image image-darkBg" : "image image-lightBg"}>
          <Navbar />
          <div className="heroSections">
            {darkMode ? (
              <div className="contentBgDark">
                <div className="contentDark">
                  <div className="imageFeatureDark">
                    <img src={union} alt="" />
                    Introducing Image Feature
                  </div>
                  <div className="titleDark">
                    <h1>Imagine with Serendipity</h1>
                  </div>
                  <div className="descriptionDark">
                    <p>
                      Discover a vibrant community of creators on Serendipity!
                      Connect with thousands of like-minded individuals on
                      Discord or the web and unleash your imagination through
                      collaborative storytelling. From vivid worlds to
                      unforgettable characters, bring your short text
                      descriptions to life in new and exciting ways. Join
                      OptimusAI today and embark on a journey of endless
                      creativity!
                    </p>
                  </div>
                  <div className="buttonDark">
                    <Link to={navLinks.home} className="navLinkDark">
                      <img src={generateIcon} alt="" />
                      Generate Images
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="contentBg">
                <div className="content">
                  <div className="imageFeature">
                    <img src={union} alt="" />
                    Introducing Image Feature
                  </div>
                  <div className="title">
                    <h1>Imagine with Serendipity</h1>
                  </div>
                  <div className="description">
                    <p>
                      Discover a vibrant community of creators on Serendipity!
                      Connect with thousands of like-minded individuals on
                      Discord or the web and unleash your imagination through
                      collaborative storytelling. From vivid worlds to
                      unforgettable characters, bring your short text
                      descriptions to life in new and exciting ways. Join
                      OptimusAI today and embark on a journey of endless
                      creativity!
                    </p>
                  </div>
                  <div className="button">
                    <Link to={navLinks.home} className="navLink">
                      <img src={generateIcon} alt="" />
                      Generate Images
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <div
              className={
                darkMode ? "updates update-darkBg" : " updates update-lightBg"
              }>
              <div className={darkMode ? "updateTitleDark" : "updateTitle"}>
                Updates
              </div>
              <div className="boxes">
                {darkMode
                  ? updatesListDark.map((item, index) => (
                      <div className="boxDark" key={index}>
                        <div className="boxContainerDark">
                          <div className="boxImageDark">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="boxTextDark">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  : updatesListLight.map((item, index) => (
                      <div className="box" key={index}>
                        <div className="boxContainer">
                          <div className="boxImage">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="boxText">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
              {darkMode ? (
                <div className="updateButton updateButtonDark">
                  <img src={arrowDark} alt="" />
                  View more
                </div>
              ) : (
                <div className="updateButton">
                  <img src={arrow} alt="" />
                  View more
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.mode.darkMode,
});

export default connect(mapStateToProps)(Hero);
