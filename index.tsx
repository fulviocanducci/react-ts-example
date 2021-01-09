import React, { Component } from "react";
import { render } from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home";
import Help from "./Components/Help";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Index = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<Index />, document.getElementById("root"));
