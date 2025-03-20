const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    address: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.object({
      // Ensure image structure matches Mongoose
      url: Joi.string().allow("", null),
      filename: Joi.string().allow("", null),
    }).allow(null),
    category: Joi.string().allow(""),
    maxGuests: Joi.number().required().min(1),
    perks: Joi.array().items(Joi.string()).default([]),
    extraInfo: Joi.string().allow(""),
  }).required(),
});
