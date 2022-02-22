import React from "react";
import "./style.scss";
import { Link } from "gatsby";
// import logo from "../../../../images/thenerdseries.png";
import WeatherIcon from "../../../images/icons/weather";
import FacebookIcon from "../../../images/icons/facebook";
import TwitterIcon from "../../../images/icons/twitter";
import YoutubeIcon from "../../../images/icons/youtube";
import SearchIcon from "../../../images/icons/search";

const Header1 = ({ category }) => {
  return (
    <header>
      <div className="container is-max-widescreen">
        {/* <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src={logo} alt="logo" className="nav-logo" />
            </a>
          </div>
        </nav> */}

        <nav className="top-nav is-flex is-justify-content-space-between">
          <ul className="top-nav-ul">
            <li>Advertise</li>
            <li>About</li>
            <li>Events</li>
            <li>Write for us</li>
          </ul>
          <span> Sign in/Join </span>
        </nav>

        <div className="mid-nav is-flex">
          <div className="mid-left-nav">
            <WeatherIcon />
            <b>3.8 </b>
            <sup>C</sup>
            <span className="ml-1"> Munich </span>
          </div>

          <div className="mid-mid-nav has-text-centered">
            <p className="header-heading has-text-centered is-uppercase"> The Daily Bugle</p>
            <p className="header-date has-text-centered"> Saturday, February 19, 2022</p>
          </div>

          <div className="mid-right-nav">
            <ul>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
              <li>
                <YoutubeIcon />
              </li>
              <li>
                <SearchIcon />
              </li>
            </ul>
          </div>
        </div>

        <nav className="bottom-nav">
        <hr />
          <ul className="bottom-nav-ul is-flex is-flex-wrap-wrap is-justify-content-space-around has-text-weight-bold is-uppercase">
            <li>Home</li>
            <li>News</li>
            <li>Magazine</li>
            <li>Sports</li>
            <li>Style</li>
            <li>Arts</li>
            <li>Culture</li>
            <li>Politics</li>
          </ul>
        <hr />
        </nav>
      </div>
    </header>
  );
};
export default Header1;
