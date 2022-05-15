class animalsService {
  // consultar nombre de los animales
  static filterAnimals(animals) {
    const animalsNames = animals.map((animal) => animal.name);
    return animalsNames;
  }

  // consultar nombre de los animales por su tipo
  static filterAnimalsByType(animals, type) {
    const animalSpecie = animals
      .filter((animal) => animal.type == type)
      .map((animal) => animal.name);
    return animalSpecie;
  }

  // consultar el nombre de los animales por su status
  static filterByStatus(animals, status) {
    const animalsVulnerable = animals
      .filter((animal) => animal.status == status)
      .map((animal) => animal.name);
    return animalsVulnerable;
  }
}

module.exports = animalsService;
