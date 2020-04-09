import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe"
import Portfolio from "./components/pages/Portfolio"
import Nav from "./components/Nav"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
