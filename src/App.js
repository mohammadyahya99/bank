import logo from "./logo.svg";
import "./App.css";
import Operations from "./component/Operations";
import Transactions from "./component/Transactions";

import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allTransactions: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" },
      ],
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <h2>500</h2>
          </div>
          <Route
            path="/"
            exact
            render={() => (
              <Transactions allTransactions={this.state.allTransactions} />
            )}
          />
          <div className="buttons"></div>
          <Route path="/operations" exact render={() => <Operations />} />
        </div>
      </Router>
    );
  }
}

export default App;
