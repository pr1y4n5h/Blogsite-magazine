import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card2 from "../../blocks/card2/card2";

const Sec3 = ({ category }) => {
  return (
    <div className="section-three">
      <div className="container is-max-widescreen mt-2">
        <div class="columns is-tablet mr-0 ml-0">
          <div class="column">
            <Card2 />
          </div>
          <div class="column">
            <Card2 />
          </div>
          <div class="column">
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec3;
