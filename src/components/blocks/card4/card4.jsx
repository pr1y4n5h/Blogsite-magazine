import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Card4 = ({ category }) => {
  return (
    <div className="card card4 is-flex">
      <div className="card-image">
        <img
          src="https://demo.tagdiv.com/newspaper_metropolitan_pro/wp-content/uploads/2021/11/64-696x932.jpg"
          alt="Placeholder image"
        />
      </div>
      <div className="card-content is-flex is-align-items-center">
        <div className="media-content">
          <span className="tag">Technology</span>
          <p className="title is-3 mt-2">
            New Technology Will Help Keep Your Smart Home from Becoming Obsolete
          </p>
          <p className="subtitle is-5 my-4">
            I actually first read this as alkalizing meaning effecting pH level, and I was like, OK
            I guess I understand how...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card4;
