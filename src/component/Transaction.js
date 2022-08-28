import React, { Component } from "react";
import "../Styles/transaction.css";

class Transaction extends Component {
  delete = () => {
    this.props.deleteButton(this.props.tran.category, this.props.tran.vendor);
  };
  render() {
    return (
      <div>
        <div className="data">
          <h2>{this.props.tran.category}</h2>
          <h2>{this.props.tran.vendor}</h2>
          <h2>{this.props.tran.amount}$</h2>
          <button onClick={this.delete} className="deleteButton">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Transaction;
