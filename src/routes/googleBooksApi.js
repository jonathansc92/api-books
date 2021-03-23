const express = require('express');

const api = express.Router();
const request = require('request');

api.get('/search', (req, res, next) => {
  request({
    uri: `https://www.googleapis.com/books/v1/volumes?q=${req.query.q}`,
  }).pipe(res);
});

module.exports = api;
