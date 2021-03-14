const { Joi } = require('express-validation');

module.exports = {
    body: Joi.object({
      name: Joi.string()
        .required(),
      active: Joi.boolean(),
      site: Joi.boolean(),
      catalog: Joi.boolean(),
      price: Joi.required(),
      stock: Joi.number().required,
    }),
}