const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
  click: { type: Number, default: 0 },
});

const LinkModel = mongoose.model("LinkModel", linkSchema);

//adicionando documento

let link = new LinkModel({
  title: "progbr",
  description: "link para o twitter",
  url: "https://programadorbr.com/?src=adgogbst&gclid=Cj0KCQjw4eaJBhDMARIsANhrQACuABtx_MHnURnmNoU5ZU9qbNNc3__ar4Qvq9OB4ZbgMXN2qIJErX0aAmcNEALw_wcB",
});

////metodo para adicionar no banco de dados

link
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

let person = new Person({
  name: "José",
  age: 23,
});

person
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connect("mongodb://localhost/newlinks", (error, db) => {
  console.log(error);
  console.log(db);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log("Server running port 3000"));
