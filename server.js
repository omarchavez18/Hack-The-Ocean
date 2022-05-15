const animals = require("./animals");
const express = require("express");
const animalsService = require("./services/animalsService");
const cors = require("cors");

const app = express();
app.use(express.json());

//cors
app.use(cors({ origin: "*" }));
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

//endpoint prueba de bienvenida
app.get("/", (req, res) => {
    res.json({ animals });
});

//endpoint nombre de los animales
app.get("/animals/name/:name", (req, res) => {
    const parseName = req.params.name.split("_").join(" ");
    const animales = animalsService.filterAnimals(animals, parseName);
    res.json(animales);
});

//endpoint nombre de los animales por su tipo
app.get("/animals/type/:type", (req, res) => {
    const animales = animalsService.filterAnimalsByType(animals, req.params.type);
    res.json(animales);
});

//endpoint nombre de los animales por su status
app.get("/animals/status/:status", (req, res) => {
    const parseStatus = req.params.name.split("_").join(" ");
    const animales = animalsService.filterByStatus(animals, parseStatus);
    res.json(animales);
});

app.listen(port, () => {
    console.log("Code Challenge Server Ready!!");
});
