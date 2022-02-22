import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card8 from "../../../../components/blocks/card8/card8";

const Sec1 = ({ category }) => {
  return (
    <div className="section-seven">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
            <div className="column">
            <Card8 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec1;
