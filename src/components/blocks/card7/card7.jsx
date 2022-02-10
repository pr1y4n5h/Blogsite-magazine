import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Card7 = ({ category }) => {
  return (
    <div className="card card7 is-flex ">
      <div className="card-left">
        <img
          src="https://demo.tagdiv.com/newspaper_pulses_pro/wp-content/uploads/2019/12/43-1-696x1043.jpg"
          alt="Placeholder image"
        />
        <span is-uppercase className="tag"> Magazine </span>
      </div>
      <div className="content ml-5">
        <div className="post-meta">
          <p className="title is-3 as-text-left">
          Using Instagram to promote your YouTube videos
          </p>
          <p className="author as-text-left is-italic"> Emilio Montes - December 10, 2019 </p>
          <p className="subtitle is-5 mt-4 as-text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card7;
