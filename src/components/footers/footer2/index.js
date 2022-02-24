import React, { useState } from "react";
import Social2 from "../../socials/social2";
import Social3 from "../../socials/social3";
import "./style.scss";

const Footer2 = () => {
  return (
    <footer className="mt-5">
      <div className="container is-max-widescreen">
        <div className="footer-box columns is-tablet mr-0 ml-0 my-6">
          <div className="footer-left column is-4">
            <h3 className="is-size-5"> About Us</h3>
            <hr />
            <p>
              Nulla vehicula massa eget aliquet sagittis. Nulla ac nisi mi. Proin mollis tortor non
              elit aliquet convallis.
            </p>
          </div>
          <ul className="footer-mid column is-3">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
          <div className="footer-socials column is-4">
            <h3 className="is-size-5"> Follow us </h3>
            <hr />
            Each template in our ever growing studio library can be added and moved around within any page effortlessly with one click.
            <Social3 baseColor="red" />
          </div>
        </div>
        <hr />
        <p className="has-text-centered">© 2022 All rights reserved</p>
        <hr />
      </div>
    </footer>
  );
};

export default Footer2;
