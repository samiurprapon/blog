/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a
          href="https://samiurprapon.github.io"
          className={isDark ? "dark-menu logo" : "logo"}
        >
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{"SamiurPrapon"}</span>
          <span className="grey-color">/&gt;</span>
        </a>
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
            <a href="/blog/">Home</a>
          </li>
          {
            <li>
              <Link to="/philosophy">Philosophy</Link>
            </li>
          }
          {
            <li>
              <Link to="/learning">Programmings</Link>
            </li>
          }
          {
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          }
          {
            <li>
              <Link to="/tools">Tools</Link>
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
