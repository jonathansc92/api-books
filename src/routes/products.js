const express = require('express');

const productsController = require('../controllers/products');

const api = express.Router();

api.get('/', productsController.getAll);
api.post('/', productsController.store);
api.get('/:id', productsController.show);
api.put('/:id', productsController.update);
api.delete('/:id', productsController.delete);

module.exports = api;
