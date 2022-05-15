const animalsControllers = require("./../../controllers/animalsControllers");
const animals = require("./../../animals");

describe("pruebas de animals controllers", () => {
    test("prueba 1) consultar nombres de los animales", () => {
        const animales = animals.map((animal) => animal.name);
        const animalsList = animalsControllers.getAnimalsName();
        expect(animales).toStrictEqual(animalsList);
    });

    test("prueba 2) consultar nombres de los animales por su tipo ", () => {
        const animales = animals
            .filter((animal) => animal.type == "Mammal")
            .map((animal) => animal.name);
        const animalsListType = animalsControllers.getAnimalsByType("Mammal");
        expect(animales).toStrictEqual(animalsListType);
    });

    test("prueba 3) consultar el nombre de los animales por su status", () => {
        const animales = animals
            .filter((animal) => animal.status == "Vulnerable")
            .map((animal) => animal.name);
        const animalStatus = animalsControllers.getAnimalsByStatus("Vulnerable");
        expect(animales).toStrictEqual(animalStatus);
    });
});
