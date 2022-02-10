import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Card10 = ({ category }) => {
  return (
    <div className="card card10">
      <div
        style={{
          backgroundImage:
            "url(https://demo.tagdiv.com/newspaper_magazine_pro/wp-content/uploads/2020/06/38-768x512.jpg)",
        }}
        className="bg-image is-flex is-align-items-center is-justify-content-center"
      >
        <div className="content">
          <div className="post-meta">
            <p className="subtitle is-5 mt-4 has-text-centered">Fashion</p>
            <p className="title is-3 mt-1 has-text-centered">
            Victoria’s Secret Afterparty Goes Off with a Bang This Year
            </p>
            <p className="author mt-0 has-text-centered"> David Lee - June 3, 2020 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card10;
