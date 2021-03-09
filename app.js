const express = require('express');
const app = express();

const routeProducts = require('./routes/products');

app.use('/products', routeProducts);

module.exports = app;