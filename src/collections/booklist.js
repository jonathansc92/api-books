const Bookshelf = require('../../config/bookshelf');

const BooklistModel = require('../models/booklist');

const Booklist = Bookshelf.Collection.extend({
	model : BooklistModel
});
module.exports = Booklist;