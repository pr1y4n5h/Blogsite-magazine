import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Card9 = ({ category }) => {
  return (
    <div className="card card9">
      <div
        style={{
          backgroundImage:
            "url(https://demo.tagdiv.com/newspaper_magazine_pro/wp-content/uploads/2020/06/72-1-e1591282978892.jpg.webp)",
        }}
        className="bg-image is-flex is-align-items-end"
      >
        <div className="content">
          <div className="post-meta">
            <p className="subtitle is-5 mt-4 is-uppercase">Style</p>
            <p className="title is-3 mt-1">
            What Makeup to Wear Daily, No Matter What You’ve Got Planned
            </p>
            <p className="author mt-0 "> David Lee - June 3, 2020 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card9;
