import React from "react";
import "./styles.scss";

const Separator2 = ({ text }) => {
  return (
    <div className="separator2">
      <div className="child is-flex is-justify-content-center is-align-items-center">
        <span className="is-uppercase"> {text} </span>
        <hr />
      </div>
    </div>
  );
};

export default Separator2;
