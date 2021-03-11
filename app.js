require('dotenv').config({path: __dirname + '/.env'})
const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

const routeProducts = require('./src/routes/products');

app.use('/products', routeProducts);

module.exports = app;