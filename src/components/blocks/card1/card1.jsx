import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Card1 = ({ category }) => {
  return (
    <div className="card card1">
      <div className="card-image">
        <img
          src="https://demo.tagdiv.com/newspaper_london_news_pro/wp-content/uploads/2020/04/28-696x464.jpg"
          alt="Placeholder image"
        />
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="subtitle is-6 category">Sport</p>
            <p className="title is-4">
              Man United skipper again boosted for first England goal after win
            </p>
          </div>
        </div>
        <div className="post-meta">
          <span className="author">Kaylee Garcia - </span>
          <span className="date">April 21, 2020</span>
        </div>
      </div>
    </div>
  );
};
export default Card1;
