const express = require('express');
const json = require('body-parser').json();

const petsService = require('./pets.service');
const peopleService = require('../people/people.service');

const petsrouter = express.Router();

petsrouter
  .route('/dogs')
  .get((req, res) => {
    // Return all dogs currently up for adoption.
    const dogsForAdoption = petsService.getAllDogs();
    res.status(200).json(dogsForAdoption);
  })
  .delete((req, res) => {
    //Remove a dog from adoption.
    const dogAdopted = petsService.dequeueDog();
    peopleService.dequeuePeople();
    res.status(200).json(dogAdopted);
  });
petsrouter
  .route('/cats')
  .get((req, res) => {
    // Return all cats currently up for adoption.
    const catsForAdoption = petsService.getAllCats();
    res.status(200).json(catsForAdoption);
  })
  .delete((req, res) => {
    //Remove a cat from adoption.
    const catAdopted = petsService.dequeueCat();
    peopleService.dequeuePeople();
    res.status(200).json(catAdopted);
  });

module.exports = petsrouter;
