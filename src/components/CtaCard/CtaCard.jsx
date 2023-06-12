import React from "react";
import "./CtaCard.scss";
import { heroLight, linkedLight } from "../../assets";
import { Logger } from "sass";

const CtaCard = (card) => {
  const cardItem = card.cardItem;

  return (
    <div className="ctaCard">
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
    </div>
  );
};

export default CtaCard;
