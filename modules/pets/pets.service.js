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
  getAllDogs() {
    //Return all dogs
    return [...pets.dogs.all()];
  },
  getAllCats() {
    //Return all cats
    return [...pets.cats.all()];
  },
  getCat() {
    return cats.show();
  },
  getDog() {
    return dogs.show();
  },
  dequeueDog() {
    // Remove a dog from the queue.
    const adoptedDog = dogs.dequeue();
    return dogs.all(); //return list of dogs
  },
  dequeueCat() {
    // Remove a cat from the queue.
    const adoptedCat = cats.dequeue();
    return cats.all(); //return list of cats
  },
};
module.exports = petsService;
