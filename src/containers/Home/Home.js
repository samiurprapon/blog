import React, { Component } from "react";
import { StyleProvider } from "../../contexts/StyleContext";
import "./Home.css";

import Layout from "../../components/layout/Layout";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
      posts: [],
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");

    // get posts belongs to each labels

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
          {/* rest codes will be here */}
          <Layout title={"Most readed articles"} />
        </StyleProvider>
      </div>
    );
  }
}
