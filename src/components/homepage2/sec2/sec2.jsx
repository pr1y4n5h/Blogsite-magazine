import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card5 from "../../blocks/card5/card5";

const Sec2 = ({ category }) => {
  return (
    <div className="section-three">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
          {/* <div className="columns is-mobile mt-2"> */}
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
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default Sec2;
