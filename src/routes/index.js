const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());

const searchBooks = require('./googleBooksApi');
const booklist = require('./booklist');

app.use('/', booklist);
app.use('/books', searchBooks);

module.exports = app;
