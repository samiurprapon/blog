/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="#" className={isDark ? "dark-menu logo" : "logo"}>
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{"SamiurPrapon"}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="/blog">Home</a>
          </li>
          {
            <li>
              <Link to="/blog/philosophy">Philosophy</Link>
            </li>
          }
          {
            <li>
              <Link to="/blog/learning">Programmings</Link>
            </li>
          }
          {
            <li>
              <Link to="/blog/projects">Projects</Link>
            </li>
          }
          {
            <li>
              <Link to="/blog/tools">Tools</Link>
            </li>
          }
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
