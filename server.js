const animals = require("./animals");
const express = require("express");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

//endpoint prueba de bienvenida
app.get("/", (req, res) => {
  res.json({ message: animals });
});

app.listen(port, () => {
  console.log("Code Challenge Server Ready!!");
});
