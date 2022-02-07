import React from "react";
import "./style.scss";
import { Link } from "gatsby";

const Bthree = ({ category }) => {
  return (
    <div className="card bthree">
      <div class="card-image">
        <img
          src="https://demo.tagdiv.com/newspaper_publication_pro/wp-content/uploads/2021/11/41-1068x743.jpg"
          alt="Placeholder image"
        />
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="subtitle is-6 category">Food</p>
            <p class="title is-4">
              The Best Pork Kebabs With Grilled Plums and Couscous is Found in
              Poland
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bthree;
