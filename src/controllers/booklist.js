const BooklistService = require('../services/booklist');

exports.get = async function (req, res, next) {
  await BooklistService.getAll(req, res, next);
};

exports.store = async function (req, res, next) {
  await BooklistService.addToFavorite(req, res, next);
};

exports.delete = async function (req, res, next) {
  await BooklistService.removeFavorite(req, res, next);
};
