require('dotenv').config({path: __dirname + '/.env'})
const express = require('express');
const app = express();

const routeProducts = require('./src/routes/products');

app.use('/products', routeProducts);

module.exports = app;