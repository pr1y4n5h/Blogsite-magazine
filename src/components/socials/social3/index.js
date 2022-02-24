import React from "react";
import FacebookIcon from "../../../images/icons/facebook";
import InstagramIcon from "../../../images/icons/instagram";
import TwitterIcon from "../../../images/icons/twitter";
import YoutubeIcon from "../../../images/icons/youtube";

import "./style.scss";

const Social3 = () => {
  return (
    <div className="social-box3 is-flex is-align-items-center">
      <div>
        <div className="social-icons">
          <span><FacebookIcon /></span>
          <span><TwitterIcon /></span>
          <span><InstagramIcon /></span>
          <span><YoutubeIcon /></span>
        </div>
      </div>
    </div>
  );
};

export default Social3;
