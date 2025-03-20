const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel.js");
const bookingController = require("../controllers/bookingController.js");
const { isLoggedIn } = require("../middlewares/middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.post("/", wrapAsync(bookingController.createBooking));

router.get("/:id", wrapAsync(bookingController.showBooking));

module.exports = router;
