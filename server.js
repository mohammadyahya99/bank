const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
mongoose.connect("mongodb://localhost/bank");
const api = require("./server/routes/api.js");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});
app.use("/", api);

app.listen(8888, function () {
  console.log("port 8888");
});
