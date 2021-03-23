const Booklist = require('../models/booklist');
const Booklists = require('../collections/booklist');

const dateNow = new Date();

exports.getAll = function (req, res) {
  Booklists.forge()
    .fetch()
    .then((collection) => {
      res.json({
        error: false,
        data: collection.toJSON(),
      });
    })
    .catch((err) => {
      res.status(500)
        .json({
          error: true,
          data: { message: err.message },
        });
    });
};

exports.addToFavorite = function (req, res) {
  Booklist.forge()
    .save(
      {
        name: req.body.name,
        image: req.body.image,
        author: req.body.author,
        volume_id: req.body.volume_id,
        created_at: dateNow,
        updated_at: dateNow,
      },
    )
    .then(() => {
      res.json({
        error: false,
        data: { message: 'Book is keep in your favorite list' },
      });
    })
    .catch((err) => {
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(500)
          .json({
            error: true,
            data: { message: 'The book is already in your list. Choose another book.' },
          });
      } else {
        res.status(500)
          .json({
            error: true,
            data: { message: err.message },
          });
      }
    });
};

exports.removeFavorite = function (req, res) {
  Booklist.forge({ id: req.params.id })
    .fetch({ require: true })
    .then((booklist) => {
      booklist.destroy()
        .then(() => {
          res.json({
            error: false,
            data: { message: 'The book was removed' },
          });
        })
        .catch((err) => {
          res.status(500)
            .json({
              error: true,
              data: { message: err.message },
            });
        });
    })
    .catch((err) => {
      res.status(500)
        .json({
          error: true,
          data: { message: err.message },
        });
    });
};
