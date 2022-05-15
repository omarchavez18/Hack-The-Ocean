const animalsService = require("../../services/animalsService");
const animals = require("../../animals");

//consultar nombres de los animales

describe("obtener lista de los animals.js", () => {
    test("lista de names", () => {
        const names = animals.map((animal) => animal.name);
        const animales = animalsService.filterAnimals(animals);
        expect(animales).toStrictEqual(names);
    });

    // lista de los animales segun su type
    test("lista de animales segun su tipo", () => {
        const animalType = animals
            .filter((animal) => animal.type == "Mammal")
            .map((animal) => animal.name);

        const animalesEspecie = animalsService.filterAnimalsByType(
            animals,
            "Mammal"
        );
        expect(animalType).toStrictEqual(animalesEspecie);
    });

    //
    test("lista de animales que tengan status vulnerable", () => {
        const statusVulnerable = animals
            .filter((animal) => animal.status == "Vulnerable")
            .map((animal) => animal.name);

        const animalesVulnerables = animalsService.filterByStatus(
            animals,
            "Vulnerable"
        );
        expect(statusVulnerable).toStrictEqual(animalesVulnerables);
    });

    // test("lista de animales y sus zonas", () => {
    //   const animalZone = animals
    //     .filter((animal) => animal)
    //     .map((animal) => animal.name && animal.zone);

    //   const animalesVulnerables = animalsService.filterByStatus(animals);
    //   expect(animalZone).toStrictEqual("");
    // });
});
