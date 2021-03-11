const Products = require('../models/products');

exports.getAll = (req, res, next) => {
    res.send(Products.fetchAll());
}