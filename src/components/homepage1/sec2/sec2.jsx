import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card2 from "../../blocks/card2/card2";
import Card3 from "../../blocks/card3/card3";

const Sec2 = ({ category }) => {
  return (
    <div className="section-two">
      <div className="container is-max-widescreen mt-2">
        <div class="columns is-tablet mr-0 ml-0">
          <div class="column is-one-fifths">
            <Card2 />
          </div>
          <div class="column">
            <Card3 />
            <hr />
            <Card3 />
          </div>
          <div class="column">
            <Card3 />
            <hr />
            <Card3 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec2;
