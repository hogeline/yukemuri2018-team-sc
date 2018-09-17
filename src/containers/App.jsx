import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Top from "./Top";
import Search from "./Search";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Top} />
      <Route path="/questions" component={Search} />
    </Switch>
  </Router>
);

export default App;
