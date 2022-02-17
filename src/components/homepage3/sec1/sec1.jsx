import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card1 from "../../blocks/card1/card1";
import Card2 from "../../blocks/card2/card2";
import Card4 from "../../blocks/card4/card4";
import Card6 from "../../blocks/card6/card6";
import Card10 from "../../blocks/card10/card10";

const Sec1 = ({ category }) => {
  return (
    <div className="section-one">
      <div className="container is-max-widescreen mt-2">
        <div class="columns is-tablet mr-0 ml-0">
            <div class="column">
              <Card10 />
            </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default Sec1;
