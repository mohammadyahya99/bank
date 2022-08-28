import React, { Component } from "react";
import "../Styles/operations.css";

class Operations extends Component {
  constructor() {
    super();
    this.state = { inputvendor: "", inputcategory: "", inputamount: "" };
  }
  add = (e) => {
    let x = 1;
    if (e.currentTarget.className == "operation2Button") {
      x = -1;
    }

    let y = {
      amount: this.state.inputamount * x,
      vendor: this.state.inputvendor,
      category: this.state.inputcategory,
    };
    this.props.add(y);
  };
  vendorChanged = (e) => {
    this.setState({ inputvendor: e.target.value });
  };
  amountChanged = (e) => {
    this.setState({ inputamount: e.target.value });
  };
  categoryChanged = (e) => {
    this.setState({ inputcategory: e.target.value });
  };

  render() {
    return (
      <div className="operations">
        <div>
          <input
            onChange={this.vendorChanged}
            value={this.state.inputvendor}
            className="inputs"
            type="text"
            placeholder="vendor"
          ></input>
        </div>
        <div>
          <input
            onChange={this.categoryChanged}
            value={this.state.inputcategory}
            className="inputs"
            type="text"
            placeholder="category"
          ></input>
        </div>
        <div>
          <input
            onChange={this.amountChanged}
            value={this.state.inputamount}
            className="inputs"
            type="text"
            placeholder="amount"
          ></input>
        </div>
        <button onClick={this.add} className="operation1Button">
          Deposit
        </button>
        <button onClick={this.add} className="operation2Button">
          Withdraw
        </button>
      </div>
    );
  }
}

export default Operations;
