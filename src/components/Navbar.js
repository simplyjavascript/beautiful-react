import React, { useContext } from "react";
import AppContext from "../context/appContext";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
const Navbar = () => {
  const appCtx = useContext(AppContext);
  const { toggleTheme, theme } = appCtx;
  const classes =
    theme === "light" ? "fa fa-moon-o fa-2x" : "fa fa-sun-o fa-2x";
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            <i className="nav_icons fa fa-home fa-2x"></i>
            <span className="nav_text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" exact activeClassName="active">
            <i className="nav_icons fa fa-instagram fa-2x"></i>
            <span className="nav_text">Instagram</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" exact activeClassName="active">
            <i className="nav_icons fa fa-question-circle-o fa-2x"></i>
            <span className="nav_text">FAQ</span>
          </NavLink>
        </li>
        <li>
          <button onClick={toggleTheme}>
            <i className={classes}></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
