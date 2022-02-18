import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card9 from "../../../../components/blocks/card9/card9";
import Separator2 from "../../../../components/separators/separator2";

const Sec1 = ({ category }) => {
  
  return (
    <div className="section-seven">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
            <div className="column">
            <Card9 />
          </div>
        </div>
        <Separator2 text="Amusements" />
      </div>
    </div>
  );
};

export default Sec1;
