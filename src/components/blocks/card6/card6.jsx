import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Card6 = ({ category }) => {
  return (
    <div className="card card6">
      <div className="card-top">
        <img
          src="https://cloud.tagdiv.com/wp-content/uploads/2017/06/shutterstock_736862905-696x696.jpg"
          alt="Placeholder image"
          className="image"
        />
        <span> MAKE UP </span>
      </div>
      <div className="bottom">
        <div className="post-meta">
          <p className="title is-3 mt-4 has-text-centered">
            Celebrity Fashion Week Trends You Need Now
          </p>
          <p className="subtitle is-5 mt-1 has-text-centered">
            The model is talking about booking her latest gig...
          </p>
          <p className="author mt-0 is-uppercase has-text-centered"> Chloe Bohmer </p>
        </div>
      </div>
    </div>
  );
};

export default Card6;
