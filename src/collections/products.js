const Bookshelf = require('../../config/bookshelf');

const Product = require('../models/products');

const Products = Bookshelf.Collection.extend({
	model : Product
});
module.exports = Products;