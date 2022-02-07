import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Bone = ({ category }) => {
  return (
    <div className="card bone">
      <div class="card-image">
        <img
          src="https://demo.tagdiv.com/newspaper_london_news_pro/wp-content/uploads/2020/04/28-696x464.jpg"
          alt="Placeholder image"
        />
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="subtitle is-6 category">Sport</p>
            <p class="title is-4">
              Man United skipper again boosted for first England goal after win
            </p>
          </div>
        </div>
        <div class="post-meta">
          <span className="author">Kaylee Garcia - </span>
          <span className="date">April 21, 2020</span>
        </div>
      </div>
    </div>
  );
};
export default Bone;
