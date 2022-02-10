import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Card5 = ({ category }) => {
  return (
    <div className="card card5">
      <div className="card-top">
        <img
          src="https://demo.tagdiv.com/newspaper_metropolitan_pro/wp-content/uploads/2021/11/24-696x464.jpg"
          alt="Placeholder image"
        />
      </div>
      <div class="bottom">
        <div className="post-meta">
        <span className="tag mb-2">Gadgets</span>
        <p className="title is-4"> Android Gadget Review: Little Improvements Make a Big Difference </p>
        </div>
      </div>
    </div>
  );
};
export default Card5;
