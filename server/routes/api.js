const express = require("express");
const Transaction = require("../model/transaction");
const router = express.Router();

router.get("/transactions", function (request, response) {
  Transaction.find({}, function (err, data) {
    response.send(data);
  });
});

router.post("/transaction", function (request, response) {
  const newTrans = request.body;
  const transInstanse = new Transaction({
    amount: newTrans.amount,
    category: newTrans.category,
    vendor: newTrans.vendor,
  });
  transInstanse.save();
  response.end();
});

router.delete("/transaction/:transactionID", function (request, response) {
  id = request.params.transactionID;
  Transaction.findOneAndDelete({ _id: id }, function (err, res) {
    response.end();
  });
});
module.exports = router;
