import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card8 from "../../../../components/blocks/card8/card8";
import Social1 from "../../../../components/socials/social1";
import Card10 from "../../../../components/blocks/card10/card10";
import Card5 from "../../../../components/blocks/card5/card5";
import Card9 from "../../../../components/blocks/card9/card9";
import Card11 from "../../../../components/blocks/card11";
import Separator1 from "../../../../components/separators/separator1";
import Card7 from "../../../../components/blocks/card7/card7";
import Card6 from "../../../../components/blocks/card6/card6";

const Sec2 = ({ category }) => {
  return (
    <div className="content-section">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
          <div className="column is-6">
          <div>
          <img src="https://demo.tagdiv.com/newspaper_shop_kids_store/wp-content/uploads/2021/04/art7.jpg" alt="Image" />
          </div>
          <p>
          So, if the financial piece of the puzzle is okay for you, but you’re in a workplace where the thought of six months makes people do a weird thing with their face when you say it, I encourage you to do three things:
          </p>
<p>1) Read up and internalize all of the good data and research that backs up 6+ months so you can broadcast that message to any doubters and see it as a strength to push things toward what’s right and fair for all (this report from Brigid Schulte and team at New America is loaded with compelling evidence). </p>
          </div>
          <div className="column is-3">
          <Card5 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec2;
