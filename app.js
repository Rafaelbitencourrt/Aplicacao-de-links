const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

mongoose.connect("");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log("Server running port 3000"));
