import React, { Component } from "react";
import { Link } from "react-router-dom";
import Transaction from "./Transaction";
import "../Styles/transactions.css";

class Transactions extends Component {
  render() {
    return (
      <div className="transactions">
        <h1 className="tHeader">Transactions</h1>
        {this.props.allTransactions.map((t) => (
          <Transaction tran={t} />
        ))}
        <button class="mainButton">categories</button>
        <Link to="/operations">
          <button class="mainButton">operation</button>
        </Link>
      </div>
    );
  }
}

export default Transactions;
