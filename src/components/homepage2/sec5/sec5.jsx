import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card2 from "../../blocks/card2/card2";
import Card3 from "../../blocks/card3/card3";
import Card5 from "../../blocks/card5/card5";
import Card4 from "../../blocks/card4/card4";
import Card1 from "../../blocks/card1/card1";

const Sec5 = ({ category }) => {
  return (
    <div className="section-five">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
          <div className="column is-one-fifths">
            <Card2 />
          </div>
          <div className="column">
            <Card3 />
            <hr />
            <Card3 />
          </div>
          <div className="column">
            <Card3 />
            <hr />
            <Card3 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec5;
