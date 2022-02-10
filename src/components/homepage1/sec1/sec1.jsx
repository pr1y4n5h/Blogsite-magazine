import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card1 from "../../blocks/card1/card1";
import Card2 from "../../blocks/card2/card2";

const Sec1 = ({ category }) => {
  return (
    <div className="section-one">
      <div className="container is-max-widescreen mt-2">
        <div class="columns is-tablet mr-0 ml-0">
          <div class="column">
            <Card1 />
            <div class="columns is-mobile mt-2">
              <div class="column">
                <Card1 />
              </div>
              <div class="column">
                <Card1 />
              </div>
            </div>
          </div>
          <div class="column">
            <Card2 />
          </div>
          <div class="column">
            <Card1 />
            <div class="columns is-mobile mt-2">
              <div class="column">
                <Card1 />
              </div>
              <div class="column">
                <Card1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec1;
