import React from "react";

import Editor from "./Components/editor/editor";
import Join from "./Components/join/join";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/editor" component={Editor} />
    </Router>
  );
};

export default App;
