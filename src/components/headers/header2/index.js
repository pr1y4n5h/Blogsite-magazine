import React, { useState } from "react";
import "./style.scss";
import SearchIcon from "../../../images/icons/search";
import icon2 from "../../../images/icon2.png";
import BarsIcon from "../../../images/icons/bars";
import XBarsIcon from "../../../images/icons/xbars";

const Header2 = ({ category }) => {

  const [isResponsive, setResponsive] = useState(false);
  
  return (
    <header>
      <div className="container is-max-widescreen">
        <nav>
          <div className="nav-left">
          <div className="navbar-logo" href="https://bulma.io">
              <img src={icon2} alt="logo" />
            </div>
          </div>
          <ul className={isResponsive ? "nav-links-mobile" : "nav-menu has-text-weight-bold"}
          onClick={() => setResponsive(false)} >
            <li>Home</li>
            <li>Coronavirus</li>
            <li>Vaccine</li>
            <li>Treatment</li>
            <li>Research</li>
            <span className="mx-2 has-text-weight-bold is-flex is-align-items-center"> Search <SearchIcon /> </span>
          </ul>
          <button
          onClick={() => setResponsive((responsive) => !responsive)}
          className="mobile-menu-icon"
        >
          {isResponsive ? (
            <XBarsIcon />
          ) : (
            <BarsIcon />
          )}
        </button>
        </nav>
      </div>
    </header>
  );
};

export default Header2;
