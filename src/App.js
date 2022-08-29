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
      allTransactions: [],
    };
  }
  async getDbTransactions() {
    return axios.get("http://localhost:8888/transactions");
  }
  async postDbTransactions(newTrans) {
    axios.post("http://localhost:8888/transaction", newTrans);
  }
  async deleteDbTransactions(transactionID) {
    await axios.delete(`http://localhost:8888/transaction/${transactionID}`);
  }
  async componentDidMount() {
    const transactionsState = await this.getDbTransactions();
    this.setState({ allTransactions: transactionsState.data });
  }
  async componentDidUpdate() {
    this.componentDidMount();
  }
  totalMony = () => {
    let x = 0;
    this.state.allTransactions.map((t) => {
      x += t.amount;
    });
    return x;
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
                deleteButton={this.deleteDbTransactions}
                allTransactions={this.state.allTransactions}
              />
            )}
          />
          <div className="buttons"></div>
          <Route
            path="/operations"
            exact
            render={() => <Operations add={this.postDbTransactions} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
