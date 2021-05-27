import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="http://samiurprapon.github.io" className="logo">
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
            <a href="/">Home</a>
          </li>
          {(
            <li>
              <a href="#philosophy">Philosophy</a>
            </li>
          )}
          {(
            <li>
              <a href="#learning">Programmings</a>
            </li>
          )}
          {(
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {(
            <li>
              <a href="#tools">Tools</a>
            </li>
          )}
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