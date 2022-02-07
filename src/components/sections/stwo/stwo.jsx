import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Btwo from "../../blocks/btwo/btwo";
import Bthree from "../../blocks/Bthree/Bthree";

const Stwo = ({ category }) => {
  return (
    <div className="section-two">
      <div className="container is-max-widescreen mt-2">
        <div class="columns is-tablet mr-0 ml-0">
          <div class="column is-two-fifths">
            <Btwo />
          </div>
          <div class="column">
            <Bthree />
            <hr />
            <Bthree />
          </div>
          <div class="column">
            <Bthree />
            <hr />
            <Bthree />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stwo;
