import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import Card8 from "../../../../components/blocks/card8/card8";
import Card11 from "../../../../components/blocks/card11";
import Social1 from "../../../../components/socials/social1";
import Social2 from "../../../../components/socials/social2";
import Card5 from "../../../../components/blocks/card5/card5";
import Card6 from "../../../../components/blocks/card6/card6";
import Card7 from "../../../../components/blocks/card7/card7";
import Card9 from "../../../../components/blocks/card9/card9";

const Sec1 = ({ category }) => {
  return (
    <div className="section-one">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
          <div className="column is-8">
            <h3> A new Polarn O. Pyret and Disney Collection launches – and it’s the cutest! </h3>
            <div className="columns">
              <div className=" column is-8"></div>
              <div className=" column is-4">
                <Social2 />
              </div>
            </div>
            <div>
              <img
                src="https://demo.tagdiv.com/newspaper_shop_kids_store/wp-content/uploads/2021/04/art1.jpg"
                alt="Image"
              />
            </div>
            <p>
              The average human brain and body will do better with six months of leave. However, is
              your human brain and body being paid for that time away? And, even if so, is your
              employer (and are your colleagues) supportive of six months in a culture that, by law,
              has normalized 12 unpaid weeks as “enough?” These are big questions to consider, and
              I’d be irresponsible to share the basic research without also telling you to think
              about how these other bias-driven factors may make things hard all the same.
            </p>
            <div className="columns">
              <div className="top-sidebar column is-4">
                <Card11 />
                <Card11 />
                <Card11 />
                <Card11 />
                <Card11 />
              </div>
              <div className=" column">
                <div>
                  <img
                    src="https://demo.tagdiv.com/newspaper_shop_kids_store/wp-content/uploads/2021/04/art7.jpg"
                    alt="Image"
                  />
                </div>

                <p>
                  So, if the financial piece of the puzzle is okay for you, but you’re in a
                  workplace where the thought of six months makes people do a weird thing with their
                  face when you say it, I encourage you to do three things:
                </p>
                <p>
                  1) Read up and internalize all of the good data and research that backs up 6+
                  months so you can broadcast that message to any doubters and see it as a strength
                  to push things toward what’s right and fair for all (this report from Brigid
                  Schulte and team at New America is loaded with compelling evidence).{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="top-sidebar column is-4">
            <Card11 />
            <Card11 />
            <Card11 />
            <Card11 />
            <Card11 />
            <Card9 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec1;
