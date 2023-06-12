import React from "react";
import "./CtaCard.scss";
import { heroLight, linkedLight } from "../../assets";
import { Logger } from "sass";
import { connect } from "react-redux";

const CtaCard = (card, darkMode) => {
  // console.log(card, darkMode);
  const cardItem = card.cardItem;

  return (
    <div className="ctaCard">
      {darkMode ? (
        <div className="ctaCardContainerDark">
          <div className="ctaCardImageDark">
            <img src={cardItem.bg} alt="" />
          </div>
          <div className="ctaCardContentDark">
            <div className="ctaCardContentConDark">
              <h2 className="ctaCardTitleDark">{cardItem.title}</h2>
              <span className="ctaCardDescriptionDark">
                <p>{cardItem.subtitle} </p>
                <span>{cardItem.description}</span>
              </span>
              <div className="ctaCardButtonDark">
                <img src={cardItem.buttonIcon} alt="" />
                <span>{cardItem.buttonText} </span>
              </div>
            </div>
            <div className="ctaCardIconDark">
              <img src={cardItem.icon} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="ctaCardContainer">
          <div className="ctaCardImage">
            <img src={cardItem.bg} alt="" />
          </div>
          <div className="ctaCardContent">
            <div className="ctaCardContentCon">
              <h2 className="ctaCardTitle">{cardItem.title}</h2>
              <span className="ctaCardDescription">
                <p>{cardItem.subtitle} </p>
                <span>{cardItem.description}</span>
              </span>
              <div className="ctaCardButton">
                <img src={cardItem.buttonIcon} alt="" />
                <span>{cardItem.buttonText} </span>
              </div>
            </div>
            <div className="ctaCardIcon">
              <img src={cardItem.icon} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.mode.darkMode,
});

export default connect(mapStateToProps)(CtaCard);
