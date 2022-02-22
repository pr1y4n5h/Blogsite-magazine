import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Card11 = ({ category }) => {
  return (
    <div className="card card11">  
      <div className="content is-flex is-align-items-center	">
          <div className="post-left">
            <img src="https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/39-696x522.jpg" alt="Image" />
          </div>
          <div className="post-right ml-2">
          <p className="title">
            Here’s What Actually Happens When You Substitute Engine Oil With WD-40
            </p>
          </div>
        </div>
      </div>
  );
};

export default Card11;
