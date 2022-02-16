import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card2 from "../../../../components/blocks/card2/card2";
import Card3 from "../../../../components/blocks/card3/card3";
import Card9 from "../../../../components/blocks/card9/card9";
import Separator1 from "../../../../components/separators/separator1";

const Sec2 = ({ category }) => {
  return (
    <div className="section-two">
      <div className="container is-max-widescreen mt-2">
        <div class="columns is-tablet mr-0 ml-0">
          <div class="column is-one-fifths">
            <Card9 />
          </div>
          <div class="column">
            <Card3 />
            <hr />
            <Card3 />
            <hr />
          </div>
          <div class="column">
            <Card3 />
            <hr />
            <Card3 />
          <hr />
          </div>
        </div>
        <Separator1 text="The Drill Down" />
      </div>
    </div>
  );
};
export default Sec2;
