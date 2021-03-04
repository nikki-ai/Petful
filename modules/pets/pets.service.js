const Queue = require('../queue/Queue');
const store = require('../../store');
const { cats, dogs } = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------
const petsService = {
  getAllPets() {
    //Return all pets
    return [...pets.cats.all(), ...pets.dogs.all()];
  },
  getPet() {
    // Return the pets next in line to be adopted.
    return pets.show();
  },
  dequeue(type) {
    // Remove a pet from the queue.
    const adoptedPet = pets.dequeue();
    return pets.all(); //return list of pets
  },
};
module.exports = petsService;
