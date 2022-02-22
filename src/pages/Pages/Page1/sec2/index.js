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

const Sec2 = ({ category }) => {
  return (
    <div className="content-section">
      <div className="container is-max-widescreen mt-2">
        <div className="columns is-tablet mr-0 ml-0">
          <div className="column is-8">
            <p className="my-2 ">
              Find people with high expectations and a low tolerance for excuses. They’ll have
              higher expectations for you than you have for yourself. Don’t flatter yourself that
              this has much to do with you – this is just who they are. Don’t look for “nice” in
              these relationships. Look for trust.
            </p>
            <h3 className="my-2 has-text-centered">
              
              Be fearless in front of them with your ideas as many times as they’ll let you
            </h3>
            <p className="my-2 ">
              Beauty Dust is very pretty to look at and it tastes like nothing, which is great. Here
              is what it’s supposed to do: This ancient empiric formula expands beauty through
              alchemizing elements legendary for their youth preserving, fortifying and tonifying
              qualities. Glowing supple skin, lustrous shiny hair and twinkling bright eyes are
              holistically bestowed from the inside out.
            </p>
            <div className="my-5">
              <img
                src="https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/p1.jpg"
                alt="First Image"
              />
            </div>
            <p>
              I actually first read this as alkalizing meaning effecting pH level, and I was like,
              OK I guess I understand how that could positively effect your body, but alchemizing
              means turning elements to gold basically through magic. That lead me to research each
              ingredient because I know alchemy is not actually happening in my body when I eat
              this, since alchemy is not real.
            </p>
            <br />
            <p>
              In addition to loving beauty and taking care of myself, I also love opening people
              minds to other paths of self-care, and good marketing and I can honestly say that I
              use and personally love this product but I’m not sure for which reason.
            </p>
            <h3 className="my-2 has-text-centered">
              I think it made me think about it more and really consider why I was choosing to add
              this to my routine
            </h3>
            <p>
              It poses an interesting question for me on the wellness category – will people be
              willing to buy in, or does eating something change your “sniff” test on the
              believe-ability of the claims?
            </p>
            <br />
            <p>
              The color is very long lasting and they have an interesting texture that’s like a
              powder and a cream but neither really. They’re made with pure pigments and oils and
              will never melt with the warmth of your skin because they don’t contain any waxes. You
              can literally use them for anything – obviously as eye shadow and liner, but the light
              shade is a great highlighter, and the red can be used for lip or blush with a little
              balm.
            </p>
            <div className="my-5">
              <img
                src="https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/p2.jpg"
                alt="Second Image"
              />
            </div>
            <p>
              There’s also a little pouch to store the rollerballs, and a card with different
              inspirations as to how to blend them on your skin – but it’s foolproof. You can’t make
              a mess if you mix them all up.
            </p>
            <br />
            <p>
              Badger Beard Balm is perfect for the bearded gents in your life (is this everyone?
              beards are so trending). It is filled with good things such as vitamins A, D, E & F to
              keep his beard healthy, thicker and cleaner, as well as helping to relieve itchiness
              as it soothes the skin under the hair.
            </p>
            <h3 className="my-2 has-text-centered">
              If you’re looking to get rid of this beard, maybe this is not the right angle for your
              gifting
            </h3>
            <p>
              Further, no one wants to cuddle with a dirty beard – who knows, maybe you already are
              and are dying for a nice way to help this problem of yours his. Beard Wash made by
              Beard Buddy. Started in 2011 in California, all Beard Buddy products are hand crafted
              by beards for beards. Both founders have large beards of their own to tame, and wanted
              to do this with organic products – kudos, and cuddles, to them.
            </p>
          </div>
          <div className="column is-4">
          <Social1 />
          <div className="my-4">
          <Card9 />
          </div>
          <Separator1 text="More News" />
          <div className="my-4">
          <Card11 />
          <Card11 />
          <Card11 />
          <Card11 />
          <Card11 />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec2;
