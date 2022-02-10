import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card5 from "../../blocks/card5/card5";
import Card6 from "../../blocks/card6/card6";
import Card7 from "../../blocks/card7/card7";
import Card8 from "../../blocks/card8/card8";
import Card1 from "../../blocks/card1/card1";
import Card2 from "../../blocks/card2/card2";
import Card3 from "../../blocks/card3/card3";
import Card4 from "../../blocks/card4/card4";

const Sec4 = ({ category }) => {
  return (
    <div className="section-four">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
            <div className="column">
            <Card5 />
          </div>
            <div className="column">
              <Card5 />
            </div>
            <div className="column">
              <Card5 />
            </div>
        </div>
      </div>
    </div>
  );
};
export default Sec4;
