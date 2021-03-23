require('dotenv').config({ path: `${__dirname}/.env` });
const express = require('express');

const app = express();
const { ValidationError } = require('express-validation');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routes = require('./src/routes/index');

app.use(routes);

app.use((err, req, res) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});

const port = process.env.PORT || 3006;

app.listen(port);
