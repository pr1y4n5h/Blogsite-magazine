import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Btwo from "../../blocks/btwo/btwo";

const Sthree = ({ category }) => {
  return (
    <div className="section-three">
      <div className="container is-max-widescreen mt-2">
        <div class="columns is-tablet mr-0 ml-0">
          <div class="column">
            <Btwo />
          </div>
          <div class="column">
            <Btwo />
          </div>
          <div class="column">
            <Btwo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sthree;
