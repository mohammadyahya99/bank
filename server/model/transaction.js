const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaTran = new Schema({
  amount: Number,
  category: String,
  vendor: String,
});
const Transaction = mongoose.model("Transaction", schemaTran);
module.exports = Transaction;
