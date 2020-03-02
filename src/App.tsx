import React, { Fragment } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header title="derivative" />
      <Router>
        <Nav />
        <div className="app">
          <Switch>
            <Route path="/shop">
              <div>Shop</div>
            </Route>
            <Route path="/about">
              <div>About</div>
            </Route>
            <Route path="/">
              <div>Frog</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
