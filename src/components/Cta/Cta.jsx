import React from "react";
import "./Cta.scss";
import CtaCard from "../CtaCard/CtaCard";
import { cardLight } from "../../constants";

const Cta = () => {
  return (
    <div className="cta">
      <div className="ctaContainer">
        {cardLight.map((cardItem, index) => (
          <CtaCard key={index} cardItem={cardItem} />
        ))}
      </div>
    </div>
  );
};

export default Cta;
