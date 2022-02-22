import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card10 from "../../../../components/blocks/card10/card10";
import Card11 from "../../../../components/blocks/card11";

const Sec5 = ({ category }) => {
  return (
    <div className="section-five">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
            <div className="column is-8">
            <Card10 />
            <hr />
            <Card10 />
            <hr />
            <Card10 />
            <hr />
            <Card10 />
            <hr />
          </div>
          <div className="column is-4">
            <Card11 />
            <hr />
            <Card11 />
            <hr />
            <Card11 />
            <hr />
            <Card11 />
            <hr />
            <Card11 />
            <hr />
            <Card11 />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec5;
