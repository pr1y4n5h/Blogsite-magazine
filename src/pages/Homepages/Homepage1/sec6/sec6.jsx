import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card5 from "../../../../components/blocks/card5/card5";
import Card6 from "../../../../components/blocks/card6/card6";
import Card7 from "../../../../components/blocks/card7/card7";
import Card8 from "../../../../components/blocks/card8/card8";
import Card1 from "../../../../components/blocks/card1/card1";
import Card2 from "../../../../components/blocks/card2/card2";
import Card3 from "../../../../components/blocks/card3/card3";
import Card4 from "../../../../components/blocks/card4/card4";
import Card9 from "../../../../components/blocks/card9/card9";

const Sec6 = ({ category }) => {
  return (
    <div className="section-six">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
            <div className="column is-6">
            <Card7 />
            <hr />
            <Card7 />
          </div>
          <div className="column is-6">
            <Card7 />
            <hr />
            <Card7 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec6;
