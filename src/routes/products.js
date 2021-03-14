const express = require('express');
const jwt = require('../../config/jwt')
const api = express.Router();

const { validate } = require('express-validation');
const validations = require('../validations/products');

const productsController = require('../controllers/products');

api.get('/', jwt, productsController.get);
api.post('/',  validate(validations, {}, {}), productsController.store);
api.get('/:id', productsController.show);
api.put('/:id', productsController.update);
api.delete('/:id', productsController.delete);

module.exports = api;
