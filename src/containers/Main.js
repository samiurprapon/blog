import React, { Component } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Layout from "../components/layout/Layout";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";

export default class Main extends Component {
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
          {/* rest codes will be here */}
          <Header />
          <Layout/>
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
