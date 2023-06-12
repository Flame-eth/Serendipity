import React from "react";
import "./Cta.scss";
import CtaCard from "../CtaCard/CtaCard";
import { cardLight } from "../../constants";
import { connect } from "react-redux";

const Cta = ({ darkMode }) => {
  console.log(darkMode);
  return (
    <div>
      {darkMode ? (
        <div className="ctaDark">
          <div className="ctaContainerDark">
            {cardLight.map((cardItem, index) => (
              <CtaCard key={index} cardItem={cardItem} />
            ))}
          </div>
        </div>
      ) : (
        <div className="cta">
          <div className="ctaContainer">
            {cardLight.map((cardItem, index) => (
              <CtaCard key={index} cardItem={cardItem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.mode.darkMode,
});

export default connect(mapStateToProps)(Cta);
