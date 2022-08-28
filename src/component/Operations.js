import React, { Component } from "react";
import "../Styles/operations.css";

class Operations extends Component {
  render() {
    return (
      <div className="operations">
        <div>
          <input className="inputs" type="text" placeholder="vendor"></input>
        </div>
        <div>
          <input className="inputs" type="text" placeholder="category"></input>
        </div>
        <div>
          <input className="inputs" type="text" placeholder="amount"></input>
        </div>
        <button className="operationsButton">Deposit</button>
        <button className="operationsButton">Withdraw</button>
      </div>
    );
  }
}

export default Operations;
