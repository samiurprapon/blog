import React, { Component } from "react";
import { StyleProvider } from "../../contexts/StyleContext";
import "./Programming.css";

import Layout from "../../components/layout/Layout";

export default class Programming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Layout title={"Related Post"} label={"programming"} />
        </StyleProvider>
      </div>
    );
  }
}
