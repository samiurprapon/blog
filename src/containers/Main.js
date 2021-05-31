import React, { Component } from "react";
import Header from "../components/header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";
import BlogList from "../components/blogCard/BlogCard";
import { Container, Row, Col } from "react-bootstrap";

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
      <Container>
        <div className={this.state.isDark ? "dark-mode" : null}>
          <StyleProvider
            value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
          >
            <Header />
            
          </StyleProvider>
        </div>

        <div className="home">
              <Row>
                <Col sm={7}>
                  <BlogList />
                  <hr />
                  <BlogList />
                </Col>
                <Col sm={5}>
                  {" "}
                  <BlogList />
                </Col>
              </Row>
            </div>
      </Container>
    );
  }
}
