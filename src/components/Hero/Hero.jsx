import React from "react";
import {
  arrow,
  generateIcon,
  heroLight,
  union,
  uploadIcon,
} from "../../assets";
import Navbar from "../Navbar/Navbar";
import "./Hero.scss";
import { navLinks, updatesListLight } from "../../constants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="heroContainer">
        <div className="image">
          <Navbar />
          <div className="heroSections">
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
                    Connect with thousands of like-minded individuals on Discord
                    or the web and unleash your imagination through
                    collaborative storytelling. From vivid worlds to
                    unforgettable characters, bring your short text descriptions
                    to life in new and exciting ways. Join OptimusAI today and
                    embark on a journey of endless creativity!
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
            <div className="updates">
              <div className="updateTitle">Updates</div>
              <div className="boxes">
                {updatesListLight.map((item, index) => (
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
              <div className="updateButton">
                <img src={arrow} alt="" />
                View more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
