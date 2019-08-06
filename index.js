const express = require('express');
var path = require('path');
var Sequelize = require('sequelize');
const router = require('./routes/router.js');

// import models, { sequelize } from './models';

const app = express();

app.use(router);



module.exports = app;