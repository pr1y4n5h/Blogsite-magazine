import React from "react";
import FacebookIcon from "../../../images/icons/facebook";
import PinterestIcon from "../../../images/icons/pinterest";
import TwitterIcon from "../../../images/icons/twitter";
import WhatsappIcon from "../../../images/icons/whatsapp";
import "./style.scss";

const Social1 = () => {
  return (
    <div className="social-box1 is-flex is-justify-content-center is-align-items-center">
      <div>
        <h4 className="is-uppercase has-text-weight-semibold has-text-centered"> Share Post</h4>
        <div className="social-icons">
          <span><FacebookIcon /></span>
          <span><TwitterIcon /></span>
          <span><WhatsappIcon /></span>
          <span><PinterestIcon /></span>
        </div>
      </div>
    </div>
  );
};

export default Social1;
