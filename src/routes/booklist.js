const express = require('express');

const api = express.Router();

const booklistController = require('../controllers/booklist');

api.get('/booklist', booklistController.get);
api.post('/booklist', booklistController.store);
api.delete('/booklist/:id', booklistController.delete);

module.exports = api;
