const express = require('express');
const app = express();

const products = require('./products');
app.use('/products', products);

module.exports = app
