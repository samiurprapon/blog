import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./containers/Home/Home";
import Philosophy from "./containers/Philosophy/Philosophy";
import Programming from "./containers/Programming/Programming";
import Project from "./containers/Project/Project";
import Tools from "./containers/Tools/Tools";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/blog/" exact component={Home} />
          <Route path="/blog/philosophy" exact component={Philosophy} />
          <Route path="/blog/learning" exact component={Programming} />
          <Route path="/blog/projects" exact component={Project} />
          <Route path="/blog/tools" exact component={Tools} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
