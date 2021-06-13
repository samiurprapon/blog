import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./utils/Apollo";
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

import BlogPost from "./containers/BlogPost/BlogPost";

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
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Header />

              <Switch>
                <Route exact path="/blog/" component={Home} />
                <Route exact path="/blog/philosophy" component={Philosophy} />
                <Route exact path="/blog/learning" component={Programming} />
                <Route exact path="/blog/projects" component={Project} />
                <Route exact path="/blog/tools" component={Tools} />
                <Route
                  exact
                  path="/blog/:title/:issueNumber"
                  component={BlogPost}
                />
              </Switch>
            </BrowserRouter>
            <Footer />
            <Top />
          </ApolloProvider>
        </StyleProvider>
      </div>
    );
  }
}

export default App;
