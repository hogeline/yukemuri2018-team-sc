import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Top from "./Top";
import Search from "./Search";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/questions" component={Search} />
    </Switch>
  </Router>
);

export default App;
