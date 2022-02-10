import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Card2 = ({ category }) => {
  return (
    <div
      className="card card2"
      style={{
        backgroundImage: `url(https://demo.tagdiv.com/newspaper_london_news_pro/wp-content/uploads/2020/04/26-1068x712.jpg)`,
      }}
    >
      <div className="bottom">
        <div className="post-meta">
          <span className="category">Sports</span>
          <h3 className="title mb-1">
            PHOTO: Coutinho all smiles with £50 million superstar after Brazil
            win
          </h3>
          <span className="author">Kaylee Garcia - </span>
          <span className="date">April 21, 2020</span>
        </div>
      </div>
    </div>
  );
};
export default Card2;
