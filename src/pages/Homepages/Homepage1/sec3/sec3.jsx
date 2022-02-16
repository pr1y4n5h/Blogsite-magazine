import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card2 from "../../../../components/blocks/card2/card2";
import Card9 from "../../../../components/blocks/card9/card9";
import Separator1 from "../../../../components/separators/separator1";

const Sec3 = ({ category }) => {
  return (
    <div className="section-three">
      <div className="container is-max-widescreen mt-2">
        <div class="columns is-tablet mr-0 ml-0">
          <div class="column">
            <Card9 />
          </div>
          <div class="column">
            <Card9 />
          </div>
        </div>
        {/* <Separator1 text="Walk of Fame" /> */}
      </div>
    </div>
  );
};
export default Sec3;
