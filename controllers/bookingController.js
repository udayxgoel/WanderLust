const Booking = require("../models/bookingModel.js");

module.exports.createBooking = async (req, res) => {
  const {
    listingId,
    checkIn,
    checkOut,
    guests,
    fullName,
    phoneNumber,
    totalPrice,
  } = req.body;

  // Check if listing is already booked in the given date range
  const existingBooking = await Booking.findOne({
    listing: listingId,
    $or: [{ checkIn: { $lt: checkOut }, checkOut: { $gt: checkIn } }],
  });

  if (existingBooking) {
    req.flash("error", "Selected dates are already booked.");
    return res.redirect("/listings/" + listingId);
  }

  // If no conflict, create a new booking
  const booking = new Booking({
    listing: listingId,
    user: req.user._id,
    checkIn,
    checkOut,
    guests,
    fullName,
    phoneNumber,
    totalPrice,
  });

  const newBooking = await booking.save();
  req.flash("success", "Booking confirmed!");
  res.redirect(`bookings/${newBooking._id}`);
};

module.exports.showBooking = async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findById(id)
    .populate("listing")
    .populate("user");

  if (!booking) {
    req.flash("error", "Booking not found!");
    return res.redirect("/listings");
  }

  res.render("user/booking", { booking });
};
