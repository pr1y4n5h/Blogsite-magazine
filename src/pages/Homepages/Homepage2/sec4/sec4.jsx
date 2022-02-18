import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card1 from "../../../../components/blocks/card1/card1";
import Card2 from "../../../../components/blocks/card2/card2";
import Card4 from "../../../../components/blocks/card4/card4";
import Card7 from "../../../../components/blocks/card7/card7";
import Separator2 from "../../../../components/separators/separator2";
import Card3 from "../../../../components/blocks/card3/card3";
import Card5 from "../../../../components/blocks/card5/card5";
import Card6 from "../../../../components/blocks/card6/card6";
import Card8 from "../../../../components/blocks/card8/card8";
import Card9 from "../../../../components/blocks/card9/card9";
import Card10 from "../../../../components/blocks/card10/card10";

const Sec4 = ({ category }) => {
  return (
    <div className="section-four">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
          {/* <div className="columns is-mobile mt-2"> */}
            <div className="column is-8">
              <Card4 />
              <hr />
              <Card4 />
              <hr />
              <Card4 />
              <hr />
              <Card4 />
              
            </div>
            <div className="column is-4">
              <Card9 />
              <hr />
              <Card5 />
              <hr />
            </div>
          {/* </div> */}
        </div>
        <Separator2 text="News" />
      </div>
    </div>
  );
};
export default Sec4;
