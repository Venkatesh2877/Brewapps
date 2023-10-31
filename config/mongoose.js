const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://reachoutvenky:Athreya@blackcoffer.tzchyqh.mongodb.net/book"
);

const db = mongoose.connection;

db.on("error", console.log.bind(console, "error in connecting db"));

db.once("open", function () {
  console.log("connected to db");
});

module.exports = db;
