const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Books");

const db = mongoose.connection;

db.on("error", console.log.bind(console, "error in connecting db"));

db.once("open", function () {
  console.log("connected to db");
});

module.exports = db;
