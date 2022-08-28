import React, { Component } from "react";
import "../Styles/transaction.css";

class Transaction extends Component {
  render() {
    return (
      <div>
        <div className="data">
          <h2>{this.props.tran.category}</h2>
          <h2>{this.props.tran.vendor}</h2>
          <h2>{this.props.tran.amount}</h2>
          <button className="deleteButton">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Transaction;
