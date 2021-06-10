import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StyleProvider } from "./contexts/StyleContext";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Top from "./components/topbutton/Top";

import "./App.css";

import Home from "./containers/Home/Home";
import Philosophy from "./containers/Philosophy/Philosophy";
import Programming from "./containers/Programming/Programming";
import Project from "./containers/Project/Project";
import Tools from "./containers/Tools/Tools";

class App extends Component {
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
          <BrowserRouter>
          <Header />

            <Switch>
              <Route path="/blog/" exact component={Home} />
              <Route path="/blog/philosophy" exact component={Philosophy} />
              <Route path="/blog/learning" exact component={Programming} />
              <Route path="/blog/projects" exact component={Project} />
              <Route path="/blog/tools" exact component={Tools} />
            </Switch>
          </BrowserRouter>
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}

export default App;
