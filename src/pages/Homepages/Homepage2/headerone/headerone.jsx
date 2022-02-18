import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import logo from "../../../../images/thenerdseries.png";

const Header = ({ category }) => {
  return (
    <header className="header">
      <div className="container is-max-widescreen">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src={logo} alt="logo" className="nav-logo" />
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <Link to={`/`} className="navbar-item">
                Home
              </Link>
              {category?.map((categoryData) => {
                return (
                  <Link to={`/${categoryData.slug}`} className="navbar-item">
                    {categoryData?.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
