import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card2 from "../../../../components/blocks/card2/card2";
import Card3 from "../../../../components/blocks/card3/card3";
import Card8 from "../../../../components/blocks/card8/card8";
import Separator1 from "../../../../components/separators/separator1";

const Sec5 = ({ category }) => {
  return (
    <div className="section-five">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
          <div className="column is-4">
            <Card2 />
          </div>
          <div className="column is-4">
            <Card3 />
            <hr />
            <Card3 />
          </div>
          <div className="column">
            <Card8 />
          </div>
        </div>
        <Separator1 text="More News" />
      </div>
    </div>
  );
};
export default Sec5;
