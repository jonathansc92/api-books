require('dotenv').config({path: __dirname + '/.env'})
const express = require('express');
const app = express();
const { ValidationError } = require('express-validation')

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

const routeProducts = require('./src/routes/products');

app.use('/products', routeProducts);

app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
  
    return res.status(500).json(err)
})

module.exports = app;