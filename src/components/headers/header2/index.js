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
        <nav className="is-flex is-justify-content-space-between">
          <div className="nav-left is-flex is-align-items-center">
          <a className="navbar-logo" href="https://bulma.io">
              <img src={icon2} alt="logo" className="nav-logo" />
            </a>
          </div>
          <ul className={isResponsive ? "nav-links-mobile" : "nav-menu is-flex is-align-items-center has-text-weight-bold"}
          onClick={() => setResponsive(false)} >
            <li>Home</li>
            <li>Coronavirus</li>
            <li>Vaccine</li>
            <li>Treatment</li>
            <li>Research</li>         
          </ul>
          <div className="nav-right is-flex is-align-items-center">
            <span className="mx-2 has-text-weight-bold"> Search </span>
            <SearchIcon />
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header2;
