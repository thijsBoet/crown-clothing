import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";

import "./App.css";

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push('/hats')}>Topics</button>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/hats" component={ HatsPage } />
      </Switch>
    </div>
  );
}

export default App;
