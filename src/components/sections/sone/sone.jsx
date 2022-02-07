import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Bone from "../../blocks/bone/bone";
import Btwo from "../../blocks/btwo/btwo";

const Sone = ({ category }) => {
  return (
    <div className="section-one">
      <div className="container is-max-widescreen mt-2">
        <div class="columns is-tablet mr-0 ml-0">
          <div class="column">
            <Bone />
            <div class="columns is-mobile mt-2">
              <div class="column">
                <Bone />
              </div>
              <div class="column">
                <Bone />
              </div>
            </div>
          </div>
          <div class="column">
            <Btwo />
          </div>
          <div class="column">
            <Bone />
            <div class="columns is-mobile mt-2">
              <div class="column">
                <Bone />
              </div>
              <div class="column">
                <Bone />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sone;
