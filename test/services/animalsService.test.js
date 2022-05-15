const animalsService = require("../../services/animalsService");
const animals = require("../../animals");

//consultar nombres de los animales

describe("obtener lista de los animals.js", () => {
    test("lista de names", () => {
        const names = animals.filter((animal) => animal.name === "Rorcual común");
        const animales = animalsService.filterAnimals(animals, "Rorcual común");
        expect(animales).toStrictEqual(names);
    });

    // lista de los animales segun su type
    test("lista de animales segun su tipo", () => {
        const animalType = animals.filter((animal) => animal.type == "Mammal");

        const animalesEspecie = animalsService.filterAnimalsByType(
            animals,
            "Mammal"
        );
        expect(animalType).toStrictEqual(animalesEspecie);
    });

    test("lista de animales que tengan status vulnerable", () => {
        const statusVulnerable = animals.filter(
            (animal) => animal.status == "Vulnerable"
        );

        const animalesVulnerables = animalsService.filterByStatus(
            animals,
            "Vulnerable"
        );
        expect(statusVulnerable).toStrictEqual(animalesVulnerables);
    });
});
