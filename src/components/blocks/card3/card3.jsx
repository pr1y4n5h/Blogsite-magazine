import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Card3 = ({ category }) => {
  return (
    <div className="card card3">
      <div className="card-image">
        <img
          src="https://demo.tagdiv.com/newspaper_publication_pro/wp-content/uploads/2021/11/41-1068x743.jpg"
          alt="Placeholder image"
        />
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="subtitle is-6 category">Food</p>
            <p className="title is-4">
              The Best Pork Kebabs With Grilled Plums and Couscous is Found in
              Poland
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card3;
