import React, { useState } from "react";
import "./style.scss";

const Footer1 = ({ category }) => {
  return (
    <footer className="mt-5">
      <div className="container is-max-widescreen">
        <div className="footer-box columns is-tablet mr-0 ml-0 my-6">
          <div className="footer-left column is-3">
            <h3 className="is-size-5 mb-4"> CryptoNews </h3>
            <p>
              Nulla vehicula massa eget aliquet sagittis. Nulla ac nisi mi. Proin mollis tortor non
              elit aliquet convallis.
            </p>
          </div>
          <ul className="footer-left-mid column is-3">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
          <ul className="footer-right-mid column is-3">
            <li>Blockchain</li>
            <li>NFT</li>
            <li>Opinions</li>
            <li>Videos</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
          <div className="footer-right column is-3">
            <h3> Tags </h3>
            <ul className="my-4">
              <li>Bitcoin</li>
              <li>Blockchain</li>
              <li>Crypto</li>
              <li>Dogecoin</li>
              <li>Etherium</li>
              <li>Market</li>
              <li>Newspaper</li>
              <li>NFT</li>
              <li>Wallet</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
