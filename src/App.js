import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Editor from "./Components/editor/editor";
import Join from "./Components/join/join";

require("dotenv").config();
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/editor" component={Editor} />
    </Router>
  );
};

export default App;
