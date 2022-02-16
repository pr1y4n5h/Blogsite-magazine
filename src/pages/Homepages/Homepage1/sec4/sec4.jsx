import React from "react";
import "./style.scss";
import Card5 from "../../../../components/blocks/card5/card5";
import Separator1 from "../../../../components/separators/separator1";

const Sec4 = ({ category }) => {
  return (
    <div className="section-four">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
            <div className="column">
            <Card5 />
          </div>
            <div className="column">
              <Card5 />
            </div>
            <div className="column">
              <Card5 />
            </div>
            <div className="column">
              <Card5 />
            </div>
        </div>
        <Separator1 text="Walk of Fame" />
      </div>
    </div>
  );
};
export default Sec4;
