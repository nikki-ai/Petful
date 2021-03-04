const express = require('express');
const json = require('body-parser').json();

const petsService = require('./pets.service');
const peopleService = require('../people/people.service');

const petsrouter = express.Router();

petsrouter.route('/').get((req, res) => {
  // Return all pets currently up for adoption.
  const petsForAdoption = petsService.getAllPets();
  res.status(200).json(petsForAdoption);
}).delete((req, res) => {
  //Remove a pet from adoption.
  const petAdopted = petsService.dequeuePet();
  peopleService.dequeuePeople();
  res.status(200).json(petAdopted);
});

module.exports = petsrouter;
