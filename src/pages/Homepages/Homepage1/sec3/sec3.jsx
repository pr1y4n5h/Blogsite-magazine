import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card9 from "../../../../components/blocks/card9/card9";
import Separator1 from "../../../../components/separators/separator1";

const Sec3 = ({ category }) => {
  return (
    <div className="section-three">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
          <div className="column">
            <Card9 />
          </div>
          <div className="column">
            <Card9 />
          </div>
        </div>
        {/* <Separator1 text="Walk of Fame" /> */}
      </div>
    </div>
  );
};
export default Sec3;
