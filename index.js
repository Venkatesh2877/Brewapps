const express = require("express");
const app = express();
const port = 3030;
const db = require("./config/mongoose");

app.use(express.urlencoded());

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in setting the server");
  }
  console.log("Server running in port", port);
});
