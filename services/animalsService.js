class animalsService {
    // consultar nombre de los animales
    static filterAnimals(animals, name) {
        const animalsNames = animals.filter((animal) => animal.name === name);
        return animalsNames;
    }

    // consultar nombre de los animales por su tipo
    static filterAnimalsByType(animals, type) {
        const animalSpecie = animals.filter((animal) => animal.type == type);
        return animalSpecie;
    }

    // consultar el nombre de los animales por su status
    static filterByStatus(animals, status) {
        const animalsVulnerable = animals.filter(
            (animal) => animal.status == status
        );

        return animalsVulnerable;
    }
}

module.exports = animalsService;
