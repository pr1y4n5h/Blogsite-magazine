import React from "react";
import FacebookIcon from "../../../images/icons/facebook";
import PinterestIcon from "../../../images/icons/pinterest";
import TwitterIcon from "../../../images/icons/twitter";
import WhatsappIcon from "../../../images/icons/whatsapp";
import "./style.scss";

const Social2 = () => {
  return (
    <div className="social-box2 is-flex is-justify-content-center is-align-items-center">
      <div>
        <div className="social-icons">
          <span className="fb-icon"><FacebookIcon /></span>
          <span className="twitter-icon"><TwitterIcon /></span>
          <span className="whatsapp-icon"><WhatsappIcon /></span>
          <span className="pinterest-icon"><PinterestIcon /></span>
        </div>
      </div>
    </div>
  );
};

export default Social2;
