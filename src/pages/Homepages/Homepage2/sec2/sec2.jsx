import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card6 from "../../../../components/blocks/card6/card6";
import Separator2 from "../../../../components/separators/separator2";
import Card1 from "../../../../components/blocks/card1/card1";

const Sec2 = ({ category }) => {
  return (
    <div className="section-two">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
          <div className="column is-two-fifths">
            <Card6 />
          </div>
          <div className="column">
            <Card1 />
            <hr />
            <Card1 />
            <hr />
          </div>
          <div className="column">
            <Card1 />
            <hr />
            <Card1 />
            <hr />
          </div>
        </div>
        <Separator2 text="Curiosities" />
      </div>
    </div>
  );
};

export default Sec2;
