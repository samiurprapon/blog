import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/blog/" exact component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
