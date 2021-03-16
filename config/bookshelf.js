'use strict';

const knex = require('knex')({
    client: 'mysql',
    connection: {
    host     : 'localhost',
    user: process.env.DB_USER,
    password : process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    charset  : 'utf8'
  }
});

let bookshelf = require('bookshelf')(knex);

// bookshelf.plugin();

module.exports = bookshelf