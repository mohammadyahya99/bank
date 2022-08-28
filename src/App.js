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
  totalMony = () => {
    let x = 0;
    this.state.allTransactions.map((t) => {
      x += t.amount;
    });
    return x;
  };
  delete = (category, vendor) => {
    let x = [...this.state.allTransactions];
    let y = 0;
    for (let i in x) {
      if (x[i].category === category && x[i].vendor === vendor) {
        y = i;
        break;
      }
    }
    x.splice(y, 1);
    this.setState({ allTransactions: x });
  };
  add = (e) => {
    let x = [...this.state.allTransactions];
    x.push(e);
    this.setState({ allTransactions: x });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <span>
              <h2>Mohammad yahya</h2>
            </span>
            <span>
              <span className="balance">
                <h2 className="balance">Total Balance :{this.totalMony()}$</h2>
              </span>
            </span>
          </div>
          <Route
            path="/"
            exact
            render={() => (
              <Transactions
                deleteButton={this.delete}
                allTransactions={this.state.allTransactions}
              />
            )}
          />
          <div className="buttons"></div>
          <Route
            path="/operations"
            exact
            render={() => <Operations add={this.add} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
