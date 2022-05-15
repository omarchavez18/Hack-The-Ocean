const animalsService = require("./../services/animalsService");
const animals = require("./../animals");

class animalsControllers {
    static getAnimalsName() {
        const animales = animals;
        return animalsService.filterAnimals(animales);
    }

    static getAnimalsByType(type) {
        const animales = animals;
        return animalsService.filterAnimalsByType(animales, type);
    }

    static getAnimalsByStatus(status) {
        const animales = animals;
        return animalsService.filterByStatus(animales, status);
    }
}

module.exports = animalsControllers;
