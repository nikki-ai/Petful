const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { CLIENT_ORIGIN, PORT, NODE_ENV } = require('../config');
const petsRouter = require('../pets/pets.router');
const peopleRouter = require('../people/people.router');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors({ origin: CLIENT_ORIGIN }));

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));

module.exports = app;
