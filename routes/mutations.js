const api = require('express').Router();
const mutationsController = require('../controllers/mutations');

api.post('/mutation/', mutationsController.hasMutation);

module.exports = api;
