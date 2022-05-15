const animals = require("./animals");
const express = require("express");
const animalsService = require("./services/animalsService");
//const animalsControllers = require("./controllers/animalsControllers");

const app = express();
app.use(express.json());

//cors
// app.use(function (req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
// });
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

//endpoint prueba de bienvenida
app.get("/", (req, res) => {
  res.json({ animals });
});

//endpoint nombre de los animales
app.get("/animals/name/:name", (req, res) => {
  const animales = animalsService.filterAnimals(animals, req.params.name);
  res.json(animales);
});

//endpoint nombre de los animales por su tipo
app.get("/animals/type/:type", (req, res) => {
  const animales = animalsService.filterAnimalsByType(animals, req.params.type);
  res.json(animales);
});

//endpoint nombre de los animales por su status
app.get("/animals/status/:status", (req, res) => {
  const animales = animalsService.filterByStatus(animals, req.params.status);
  res.json(animales);
});

app.listen(port, () => {
  console.log("Code Challenge Server Ready!!");
});
