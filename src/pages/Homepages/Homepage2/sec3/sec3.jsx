import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card7 from "../../../../components/blocks/card7/card7";
import Separator2 from "../../../../components/separators/separator2";
import Card2 from "../../../../components/blocks/card2/card2";

const Sec3 = ({ category }) => {
  return (
    <div className="section-three">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
          {/* <div className="columns is-mobile mt-2"> */}
            <div className="column is-7">
              <Card7 />
              <hr />
              <Card7 />
            </div>
            <div className="column is-5">
              <Card2 />
            </div>
          {/* </div> */}
        </div>
        <Separator2 text="Galleries" />
      </div>
    </div>
  );
};
export default Sec3;
