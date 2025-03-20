const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  address: String,
  category: {
    type: String,
  },
  perks: {
    type: [String],
    default: [],
  },
  extraInfo: {
    type: String,
  },
  maxGuests: {
    type: Number,
  },
  price: Number,
  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      default: [78.9629, 20.5937],
    },
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
