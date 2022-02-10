import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card1 from "../../blocks/card1/card1";
import Card2 from "../../blocks/card2/card2";
import Card4 from "../../blocks/card4/card4";
import Card7 from "../../blocks/card7/card7";
import Card8 from "../../blocks/card8/card8";
import Card9 from "../../blocks/card9/card9";

const Sec1 = ({ category }) => {
  return (
    <div className="section-one">
      <div className="container is-max-widescreen mt-2">
        <div classname="columns is-tablet mr-0 ml-0">
          {/* <div classname="columns is-mobile mt-2"> */}
          <div classname="column">
            <Card9 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec1;
